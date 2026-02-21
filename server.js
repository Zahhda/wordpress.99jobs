import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '99jobsgrabnow@gmail.com',
        pass: 'tgqd pawt ghal fbgb'
    }
});

app.post('/api/contact', async (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;

    try {
        const info = await transporter.sendMail({
            from: '"99Jobs Contact Form" <99jobsgrabnow@gmail.com>',
            to: '99jobsgrabnow@gmail.com', // Send to yourself
            subject: `New Contact Submission from ${firstName} ${lastName}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
        });

        console.log('Message sent: %s', info.messageId);
        res.status(200).json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send message' });
    }
});

app.listen(port, () => {
    console.log(`Email server running at http://localhost:${port}`);
});
