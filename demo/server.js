// server.js (mock CIBIL score route)
const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// ✅ Mock API route
app.post("/get-cibil", (req, res) => {
  const { pan } = req.body;

  // Simple PAN format validation
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  if (!panRegex.test(pan)) {
    return res.status(400).json({ error: "Invalid PAN format" });
  }

  // Generate mock score
  const score = Math.floor(Math.random() * 300) + 500; // Range: 500–800
  const userName = "Mock User";

  return res.json({
    name: userName,
    score,
    message: "Mock CIBIL score generated successfully.",
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
