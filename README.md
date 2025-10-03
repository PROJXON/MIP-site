## MIP Website

### Overview
- **Frontend**: React + TypeScript, Vite, Tailwind CSS. Deployed to Amazon S3 (with optional CloudFront).
- **Backend**: Node.js (TypeScript → tsc), Express API. Deployed on an Ubuntu EC2 instance behind an Elastic IP, managed by PM2.
- **Content**: Blog data sourced from a WordPress Lightsail instance via REST endpoints.
- **Email**: Outbound email uses Gmail via Google OAuth 2.0.

### Repository Structure
- `frontend/` – Vite React app
- `backend/` – Express API written in TypeScript

### Prerequisites
- Node.js 18+ (LTS) and npm
- AWS account (S3, optionally CloudFront; EC2 for backend)
- WordPress Lightsail instance and admin/API credentials
- Google Cloud project with Gmail API enabled (for OAuth 2.0 email)

### Local Development
1) Frontend
   - `cd frontend`
   - `npm ci`
   - `npm run dev`
   - App runs at `http://localhost:5173`

2) Backend
   - `cd backend`
   - `npm ci`
   - Create a `.env` file (see Environment Variables below)
   - Build and run:
     - `npm run build`
     - `npm start` (starts `node dist/index.js`)
   - API defaults to port `5050`

### Environment Variables (Backend)
Create `backend/.env` with the following keys (do not commit secrets):

- Email (Google OAuth 2.0 via Gmail)
  - `EMAIL_USER=<gmail_address_used_for_sending>`
  - `OAUTH_CLIENT_ID=<google_oauth_client_id>`
  - `OAUTH_CLIENT_SECRET=<google_oauth_client_secret>`
  - `OAUTH_REFRESH_TOKEN=<google_oauth_refresh_token>`
  - `OAUTH_REDIRECT_URI=<oauth_redirect_uri>`

  Setup steps (high-level):
  - In Google Cloud Console: enable Gmail API → create OAuth Client (Web/Desktop).
  - Add your sender address as a test user if using “External” consent.
  - Use Google OAuth Playground (or your own flow) to exchange for a long‑lived refresh token.

- WordPress (Lightsail) – used to fetch blog posts
  - `WORDPRESS_API_URL=https://<your-wp-domain>/wp-json/wp/v2`
  - `WORDPRESS_CUSTOM_API_URL=https://<your-wp-domain>/wp-json/<namespace>/v1` (if you have custom routes)
  - `WORDPRESS_JWT_URL=https://<your-wp-domain>/wp-json`
  - `WORDPRESS_API_USERNAME=<wp_username>`
  - `WORDPRESS_API_PASSWORD=<wp_application_password_or_api_key>`

Notes:
- Prefer a WordPress Application Password for API access.
- Keep `.env` on the server; don’t commit secrets to git.

### Frontend Deployment (S3 + optional CloudFront)
1) Build the frontend
   - `cd frontend`
   - `npm run build` (outputs to `dist/`)

2) Sync to S3 (example bucket name)
   - `aws s3 sync dist/ s3://momentuminternshipprogram.com --delete`

3) Optional: better caching
   - Static assets (cache‑bust):
     - `aws s3 sync dist/assets s3://momentuminternshipprogram.com/assets --cache-control "public, max-age=31536000, immutable"`
   - HTML and root files (no‑cache):
     - `aws s3 sync dist s3://momentuminternshipprogram.com --exclude "assets/*" --cache-control "no-cache"`

4) Optional: CloudFront invalidation
   - `aws cloudfront create-invalidation --distribution-id <DIST_ID> --paths "/*"`

Bucket policy tips:
- Allow public `s3:GetObject` for site delivery.
- Restrict `s3:ListBucket` and `s3:Put/DeleteObject` to your AWS account (or an org condition) and grant deploy rights via IAM group/policy (e.g., `WebDevs`).

### Backend Deployment (EC2 + PM2)
Server assumptions: Ubuntu, Node.js installed, PM2 globally installed, Elastic IP attached.

Initial setup (first time):
```
ssh ubuntu@<EC2_PUBLIC_DNS>
sudo mkdir -p /var/www/mip-api && sudo chown -R ubuntu:ubuntu /var/www/mip-api
cd /var/www/mip-api
git clone <REPO_URL> .
cd backend
cp .env.example .env   # or create .env as per above
npm ci
npm run build
pm2 start dist/index.js --name mip-backend
pm2 save
pm2 startup systemd -u ubuntu --hp /home/ubuntu
```

Subsequent deploys:
```
ssh ubuntu@<EC2_PUBLIC_DNS>
cd /var/www/mip-api/MIP-site
git fetch --all
git checkout <branch>
git reset --hard origin/<branch>
cd backend
npm ci
npm run build
pm2 restart mip-backend
pm2 logs mip-backend --lines 100
```

Instance sizing tips:
- Small instances (e.g., `t2.micro`) may OOM during TypeScript builds. Options:
  - Build locally and upload only `backend/dist/` to the server, then `pm2 restart`.
  - Add swap (e.g., 1–2 GB) and set `NODE_OPTIONS=--max-old-space-size=1536` during build.
  - Prefer `t3a.small` (2 GB) or `t3a.medium` (4 GB) after EC2 vCPU quota increase.

### Troubleshooting
- FOUC/Fonts: we preload fonts and apply minimal critical CSS to avoid flashes.
- PostCSS errors: ensure required plugins are installed; common fix is to use `postcss.config.cjs` (CommonJS) with only `tailwindcss` and `autoprefixer` unless you explicitly need others.
- ESLint warnings: use `npm run lint -- --fix`; some warnings (e.g., fast refresh) require moving components to their own file.
- S3 AccessDenied: ensure your CLI identity has `s3:ListBucket` and `s3:Put/DeleteObject` via IAM and the bucket policy allows your account/org.
- EC2 quota errors: request a vCPU increase in the region via Service Quotas.

### Security
- Never commit `.env` or secrets.
- Scope bucket write access to your account, team role/group, or organization (least privilege).
- Rotate Google OAuth credentials and WordPress passwords periodically.

### License
Proprietary – internal project.


