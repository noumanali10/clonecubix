const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const corsOptions = {
    origin: 'http://localhost:3000', // Allow only your React app to make requests
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.options('*', cors(corsOptions)); // Enable preflight across-the-board

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'informationnomi@gmail.com', // Your Gmail address
        pass: 'fcwb uomr jgxj sxkj' // Use the app password here
    }
});

app.post('/send', (req, res) => {
    console.log(req.body);  // Log the entire request body to see what's being received
    const { name, phone, email, message } = req.body;
    if (!email) {
        console.error('No email address provided');
        return res.status(400).send('No recipient email defined.');
    }
    const mailOptions = {
        from: 'informationnomi@gmail.com', // This should directly come from req.body and be validated
    to: 'informationnomi@gmail.com', // Make sure this is your Gmail address
    subject: 'New Message from Client',
    text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending email:', error);
        return res.status(500).send('Error sending email');
    } else {
        console.log('Email sent: ' + info.response);
        return res.status(200).send('Email sent successfully');
    }
});

    
});
    


app.listen(5000, () => console.log('Server running on port 5000'));
