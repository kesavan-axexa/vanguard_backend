const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Authorization", "Content-Type"],
    exposedHeaders: ["Authorization"],
  })
);

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in",
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_PASSWORD,
  },
});

// Existing Route (Unchanged)
app.post("/send-email", async (req, res) => {
  const { name, phone, city, billRange } = req.body;

  const mailOptions = {
    from: process.env.ZOHO_EMAIL,
    to: process.env.ZOHO_EMAIL,
    subject: "Reducing Electricity Bills Form",
    html: `<h2>Equiry Form</h2>
           <p><strong>Name:</strong> ${name}</p>
           <p><strong>Phone:</strong> ${phone}</p>
           <p><strong>City:</strong> ${city}</p>
           <p><strong>Electricity Bill Range:</strong> ${billRange}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Email failed to send", error });
  }
});

// New Route for Partner Program Email
app.post("/send-partner-email", async (req, res) => {
  const { fullName, mobile, district, email, profession } = req.body;

  const mailOptions = {
    from: process.env.ZOHO_EMAIL,
    to: [email, process.env.ZOHO_EMAIL], // Array of recipients
    subject: "Welcome to Vanguard Solar Partnership",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 500px; margin: auto; border: 1px solid #ddd; padding: 20px; border-radius: 10px;">
        <h3 style="color: #2D89FF; text-align: center;">Vanguard Solar Partnership</h3>
        <p style="font-size: 16px; color: #333;">Dear ${fullName},</p>
        <p style="font-size: 14px; color: #555;">
          Thank you for showing interest in partnering with us. Below are your submitted details:
        </p>
        <div style="background-color: #f9f9f9; padding: 10px; border-radius: 5px;">
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Mobile Number:</strong> ${mobile}</p>
          <p><strong>District:</strong> ${district}</p>
          <p><strong>Profession:</strong> ${profession}</p>
        </div>
        <p style="font-size: 14px; color: #555;">Our team will contact you soon.</p>
        <p style="font-size: 14px; color: #555;">Best regards,</p>
        <p style="font-size: 14px; color: #2D89FF;"><strong>Vanguard Solar Team</strong></p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({
      success: true,
      message: "Email sent successfully to the user!",
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Email failed to send", error });
  }
});

app.post("/send-enquiry-form", async (req, res) => {
  const { name, phone, city, billRange } = req.body;

  const mailOptions = {
    from: process.env.ZOHO_EMAIL,
    to: process.env.ZOHO_EMAIL,
    subject: "Enquiry Form",
    html: `<h2>Customers Enquiry Form</h2>
           <p><strong>Name:</strong> ${name}</p>
           <p><strong>Phone:</strong> ${phone}</p>
           <p><strong>City:</strong> ${city}</p>
           <p><strong>Bill Range:</strong> ${billRange}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({
      success: true,
      message: "Email sent successfully to the user!",
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Email failed to send", error });
  }
});

app.post("/send-commercial-form", async (req, res) => {
  const { name, companyName, city, pincode, number, billRange, district } =
    req.body;

  const mailOptions = {
    from: process.env.ZOHO_EMAIL,
    to: process.env.ZOHO_EMAIL,
    subject: "Customers Consultation Commercial Form",
    html: `<h2>Consultation Commercial Form</h2>
           <p><strong>Name:</strong> ${name}</p>
           <p><strong>Company Name:</strong> ${companyName}</p>
           <p><strong>Mobile Number:</strong> ${number}</p>
           <p><strong>District:</strong> ${district}</p>
           <p><strong>City:</strong> ${city}</p>
           <p><strong>Pincode:</strong> ${pincode}</p>
           <p><strong>Bill Range:</strong> ${billRange}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({
      success: true,
      message: "Email sent successfully to the user!",
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Email failed to send", error });
  }
});

app.post("/send-residential-form", async (req, res) => {
  const { name, phone, pincode, billRange, district } = req.body;

  const mailOptions = {
    from: process.env.ZOHO_EMAIL,
    to: process.env.ZOHO_EMAIL,
    subject: "Customers Consultation Residential Form",
    html: `<h2>Consultation Residential Form</h2>
           <p><strong>Name:</strong> ${name}</p>
           <p><strong>Mobile Number:</strong> ${phone}</p>
           <p><strong>District:</strong> ${district}</p>
           <p><strong>Pincode:</strong> ${pincode}</p>
           <p><strong>Bill Range:</strong> ${billRange}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({
      success: true,
      message: "Email sent successfully to the user!",
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Email failed to send", error });
  }
});

app.post("/send-housing-form", async (req, res) => {
  const {
    name,
    housingName,
    pincode,
    number,
    billRange,
    housingDesignation,
    agmStatus,
    district,
  } = req.body;

  const mailOptions = {
    from: process.env.ZOHO_EMAIL,
    to: process.env.ZOHO_EMAIL,
    subject: "Customers Housing Society Residential Form",
    html: `<h2>Consultation Housing Society Form</h2>
           <p><strong>Name:</strong> ${name}</p>
           <p><strong>Housing Society Name:</strong> ${housingName}</p>
           <p><strong>District:</strong> ${district}</p>
           <p><strong>Pincode:</strong> ${pincode}</p>
           <p><strong>Whatsapp Number:</strong> ${number}</p>
           <p><strong>Bill Range:</strong> ${billRange}</p>
           <p><strong>Designation in Housing Society:</strong> ${housingDesignation}</p>
           <p><strong>AGM Approval Status:</strong> ${agmStatus}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({
      success: true,
      message: "Email sent successfully to the user!",
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Email failed to send", error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
