// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import morgan from "morgan";
// import bodyParser from "body-parser";
// import path from "path";
// //security  middleware
// import helmet from "helmet";
// import dbConnection from "./dbConfig/index.js";
// import errorMiddleware from "./middleware/errorMiddleware.js";
// import router from "./routes/index.js";

// // const __dirname = path.resolve(path.dirname(""));

// dotenv.config();

// const app = express();

// // app.use(express.static(path.join(__dirname, "views/build")));

// const PORT = process.env.PORT || 8800;

// dbConnection();

// app.use(helmet());
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json({ limit: "10mb" }));
// app.use(express.urlencoded({ extended: true }));

// app.use(morgan("dev"));
// app.use(router);

// //error middleware
// app.use(errorMiddleware);

// app.listen(PORT, () => {
//   console.log(`Server running on port: ${PORT}`);
// });



import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import path from "path";
import nodemailer from 'nodemailer'; // Import nodemailer here
import { v4 as uuidv4 } from 'uuid';
import { hashString } from './utils/index.js'; // Ensure hashString function is accessible
import Verification from './models/emailVerification.js'; // Import Verification model
import PasswordReset from './models/PasswordReset.js'; // Import PasswordReset model
import dbConnection from "./dbConfig/index.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
import router from "./routes/index.js";

const _dirname = path.resolve(path.dirname(""));

dotenv.config();
const APP_URL = process.env.APP_URL;
const AUTH_EMAIL = process.env.AUTH_EMAIL;
const APP_PASSWORD = process.env.APP_PASSWORD;


const app = express();
const PORT = process.env.PORT || 8800;

dbConnection();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(router);
app.use(errorMiddleware);
app.use(express.static(path.join(_dirname, "views/build")));

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: true,
  port: 465,
  auth: {
    user: AUTH_EMAIL,
    pass: APP_PASSWORD,
  },
});

// // Function to send verification email
// export const sendVerificationEmail = async (user, res) => {
//   // Implement the email sending logic here
// };

// // Function to send password reset link
// export const resetPasswordLink = async (user, res) => {
//   // Implement the email sending logic here
// };

export const sendVerificationEmail = async (user, res) => {
  const { _id, email, lastName } = user;

  const token = _id + uuidv4();

  const link = APP_URL + "/users/verify/" + _id + "/" + token;

  //   mail options
  const mailOptions = {
    from: AUTH_EMAIL,
    to: email,
    subject: "Email Verification",
    html: `<div
    style='font-family: Arial, sans-serif; font-size: 20px; color: #333; background-color: #f7f7f7; padding: 20px; border-radius: 5px;'>
    <h3 style="color: rgb(8, 56, 188)">Please verify your email address</h3>
    <hr>
    <h4>Hi ${lastName},</h4>
    <p>
        Please verify your email address so we can know that it's really you.
        <br>
    <p>This link <b>expires in 1 hour</b></p>
    <br>
    <a href=${link}
        style="color: #fff; padding: 14px; text-decoration: none; background-color: #000;  border-radius: 8px; font-size: 18px;">Verify
        Email Address</a>
    </p>
    <div style="margin-top: 20px;">
        <h5>Best Regards</h5>
        <h5>FriendFusion Team</h5>
    </div>
</div>`,
  };

  try {
    const hashedToken = await hashString(token);

    const newVerifiedEmail = await Verification.create({
      userId: _id,
      token: hashedToken,
      createdAt: Date.now(),
      expiresAt: Date.now() + 3600000,
    });

    if (newVerifiedEmail) {
      transporter
        .sendMail(mailOptions)
        .then(() => {
          res.status(201).send({
            success: "PENDING",
            message:
              "Verification email has been sent to your account. Check your email for further instructions.",
          });
        })
        .catch((err) => {
          console.log(err);
          res.status(404).json({ message: "Something went wrong" });
        });
    }
    // else {
    //         res.status(201).send({
    //         success: "failed",
    //         message:
    //           "email already exist",
    //       });
    // }
    
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const resetPasswordLink = async (user, res) => {
  const { _id, email } = user;

  const token = _id + uuidv4();
  const link = APP_URL + "/users/reset-password/" + _id + "/" + token;

  //   mail options
  const mailOptions = {
    from: AUTH_EMAIL,
    to: email,
    subject: "Password Reset",
    html: `<p style="font-family: Arial, sans-serif; font-size: 16px; color: #333; background-color: #f7f7f7; padding: 20px; border-radius: 5px;">
         Password reset link. Please click the link below to reset password.
        <br>
        <p style="font-size: 18px;"><b>This link expires in 10 minutes</b></p>
         <br>
        <a href=${link} style="color: #fff; padding: 10px; text-decoration: none; background-color: #000;  border-radius: 8px; font-size: 18px; ">Reset Password</a>.
    </p>`,
  };

  try {
    const hashedToken = await hashString(token);

    const resetEmail = await PasswordReset.create({
      userId: _id,
      email: email,
      token: hashedToken,
      createdAt: Date.now(),
      expiresAt: Date.now() + 600000,
    });

    if (resetEmail) {
      transporter
        .sendMail(mailOptions)
        .then(() => {
          res.status(201).send({
            success: "PENDING",
            message: "Reset Password Link has been sent to your account.",
          });
        })
        .catch((err) => {
          console.log(err);
          res.status(404).json({ message: "Something went wrong" });
        });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Something went wrong" });
  }
};

// HTTP server setup
const server = app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

// // Request handling
// server.on('request', async (req, res) => {
//   if (req.method === 'POST') {
//     if (req.url === '/sendVerificationEmail') {
//       const user = req.body;
//       await sendVerificationEmail(user, res);
//     } else if (req.url === '/resetPasswordLink') {
//       const user = req.body;
//       await resetPasswordLink(user, res);
//     } else {
//       res.statusCode = 404;
//       res.end('Not Found');
//     }
//   } else {
//     res.statusCode = 404;
//     res.end('Not Found');
//   }
// });
