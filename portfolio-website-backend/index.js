const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(express.json());

// Mailchimp Setup
const nodemailer = require("nodemailer");
app.use(cors({ origin: "*" }));
app.post("/form-email", async (req, res) => {
  const { from_email, to_email, subject, text } = req.body;

  // Create a transporter using your Gmail account
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "iacreativedesigns11@gmail.com",
      pass: process.env.EMAIL_API_KEY,
    },
  });

  // Define the email options
  const mailOptions = {
    from: from_email,
    to: to_email,
    subject: subject,
    text: text,
  };

  try {
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    res.send("Email sent successfully");
  } catch (error) {
    console.log("Error occurred:", error);
    res.status(500).send("An error occurred while sending the email");
  }
});

// Start the server
const port = 3001; // You can use any available port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
