export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.momentuminternshipprogram.com"
    : "http://localhost:5050";