import express from "express";
const router = express.Router();

// Example: Replace with DB call in production
const testimonials = [
  { name: "Client A", text: "Projxon helped us grow!", company: "Acme Inc." },
  { name: "Client B", text: "Great experience!", company: "Beta LLC" },
];

router.get("/", (req, res) => {
  res.json(testimonials);
});

export default router;