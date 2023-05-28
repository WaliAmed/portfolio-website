const express = require("express");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const app = express();

app.use(express.json());

// SendGrid Setup
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.get("/", (req, res) => {
  res.send("Iman Aniya");
});

app.post("/email", (req, res) => {
  const { to_email, subject, text } = req.body;
  console.log(req.body);
  const msg = {
    to: to_email,
    from: "waliamedvd@gmail.com", // Change to your verified sender
    subject: subject,
    text: text,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});

// Start the server
const port = 3000; // You can use any available port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
