"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const emailRoute_1 = __importDefault(require("./routes/emailRoute"));
const wpRoute_1 = __importDefault(require("./routes/wpRoute"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5050;
//adds middleware to the express app
app.use((0, cors_1.default)({
    origin: [
        'https://momentuminternshipprogram.com',
        'https://www.momentuminternshipprogram.com'
    ],
    credentials: true
}));
//adds middleware to parse JSON bodies
app.use(express_1.default.json());
app.use('/api/email', emailRoute_1.default);
app.use('/api/blogs', (0, wpRoute_1.default)(process.env.WORDPRESS_API_URL, '/posts?_embed'));
app.use('/api/testimonials', (0, wpRoute_1.default)(process.env.WORDPRESS_CUSTOM_API_URL, '/clients'));
// defines GET route for the root path http://localhost:5000/
app.get('/', (_req, res) => {
    res.send('Backend server is running!');
});
// Starts the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
