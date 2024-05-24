// import nodemailer from 'nodemailer';
// import dotenv from 'dotenv';
// import { v4 as uuidv4 } from 'uuid';
// import { hashString } from './index.js';
// import Verification from '../models/emailVerification.js';
// import PasswordReset from '../models/PasswordReset.js';
// import http from 'http';

// dotenv.config();

// const { AUTH_EMAIL, AUTH_PASSWORD, APP_URL } = process.env;

// // if (!AUTH_EMAIL || !AUTH_PASSWORD) {
// //   throw new Error('Missing AUTH_EMAIL or AUTH_PASSWORD in environment variables');
// // }

// // Initialize the transporter outside of the request handler
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   secure: true,
//   port: 465,
//   auth: {
//     user: AUTH_EMAIL,
//     pass: AUTH_PASSWORD,
//   },
// });

// export const sendVerificationEmail = async (user, res) => {
//   const { _id, email, firstName, lastName } = user;
//   const token = _id + uuidv4();
//   const link = `${APP_URL}users/verify/${_id}/${token}`;

//   const mailOptions = {
//     from: AUTH_EMAIL,
//     to: email,
//     subject: 'Email Verification',
//     html: `
//       <div style='font-family: Arial, sans-serif; font-size: 20px; color: #333; background-color: #f7f7f7; padding: 20px; border-radius: 5px;'>
//         <h3 style="color: rgb(8, 56, 188)">Please verify your email address</h3>
//         <hr>
//         <h4>Hi ${firstName} ${lastName},</h4>
//         <p>Please verify your email address so we can know that it's really you.</p>
//         <p>This link <b>expires in 1 hour</b></p>
//         <a href=${link} style="color: #fff; padding: 14px; text-decoration: none; background-color: #000; border-radius: 8px; font-size: 18px;">Verify Email Address</a>
//         <div style="margin-top: 20px;">
//           <h5>Best Regards</h5>
//           <h5>FriendFusion Team</h5>
//         </div>
//       </div>
//     `,
//   };

//   try {
//     const hashedToken = await hashString(token);
//     const newVerifiedEmail = await Verification.create({
//       userId: _id,
//       token: hashedToken,
//       createdAt: Date.now(),
//       expiresAt: Date.now() + 3600000,
//     });

//     if (newVerifiedEmail) {
//       await transporter.sendMail(mailOptions);
//       res.status(201).send({
//         success: 'PENDING',
//         message: 'Verification email has been sent to your account. Check your email for further instructions.',
//       });
//     }
//   } catch (error) {
//     console.error('Error in sendVerificationEmail:', error);
//     res.status(500).json({ message: 'Something went wrong' });
//   }
// };

// export const resetPasswordLink = async (user, res) => {
//   const { _id, email } = user;
//   const token = _id + uuidv4();
//   const link = `${APP_URL}users/reset-password/${_id}/${token}`;

//   const mailOptions = {
//     from: AUTH_EMAIL,
//     to: email,
//     subject: 'Password Reset',
//     html: `
//       <p style="font-family: Arial, sans-serif; font-size: 16px; color: #333; background-color: #f7f7f7; padding: 20px; border-radius: 5px;">
//         Password reset link. Please click the link below to reset your password.
//         <p style="font-size: 18px;"><b>This link expires in 10 minutes</b></p>
//         <a href=${link} style="color: #fff; padding: 10px; text-decoration: none; background-color: #000; border-radius: 8px; font-size: 18px;">Reset Password</a>
//       </p>
//     `,
//   };

//   try {
//     const hashedToken = await hashString(token);
//     const resetEmail = await PasswordReset.create({
//       userId: _id,
//       email: email,
//       token: hashedToken,
//       createdAt: Date.now(),
//       expiresAt: Date.now() + 600000,
//     });

//     if (resetEmail) {
//       await transporter.sendMail(mailOptions);
//       res.status(201).send({
//         success: 'PENDING',
//         message: 'Reset Password Link has been sent to your account.',
//       });
//     }
//   } catch (error) {
//     console.error('Error in resetPasswordLink:', error);
//     res.status(500).json({ message: 'Something went wrong' });
//   }
// };

// const server = http.createServer((req, res) => {
//   if (req.method === 'GET' && req.url === '/') {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Server is running');
//   } else if (req.method === 'POST') {
//     let body = '';
//     req.on('data', chunk => {
//       body += chunk.toString();
//     });
//     req.on('end', async () => {
//       try {
//         const user = JSON.parse(body);
//         if (req.url === '/sendVerificationEmail') {
//           await sendVerificationEmail(user, res);
//         } else if (req.url === '/resetPasswordLink') {
//           await resetPasswordLink(user, res);
//         } else {
//           res.statusCode = 404;
//           res.end('Not Found');
//         }
//       } catch (error) {
//         console.error('Error in request handler:', error);
//         res.statusCode = 500;
//         res.end('Internal Server Error');
//       }
//     });
//   } else {
//     res.statusCode = 404;
//     res.end('Not Found');
//   }
// });

// // server.listen(8800, () => {
// //   console.log('Server is listening on port 8800');
// // });
