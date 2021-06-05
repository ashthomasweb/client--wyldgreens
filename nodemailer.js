// Nodemailer functions and templates for "Looseleashdog" 

// ** LumberJack-Setup **
// This is your nodemailer module. 
// You will need to edit this file. Look for the setup instructions below.


// Dependencies
const nodemailer = require("nodemailer");
const {
    user_name,
    user_email,
    user_address,
    user_phone,
    message,
    one_time,
    weekly,
    mix_farmers,
    mix_custom,
    mix_healthy,
    mix_salad,
    mix_spicy
} = require('./app.js');

// Mailer transport object 
var transporter = nodemailer.createTransport({
    host: 'mi3-ts3.a2hosting.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    }
});


function scheduleChoice() {
    if ( one_time !== undefined ) {
        return 'One Time Delivery'
    } else if ( weekly !== undefined ) {
        return 'Weekly Delivery'
    }
}

function mixChoice() {
    let farmers = '';
    let custom = '';
    let healthy = '';
    let salad = '';
    let spicy = '';

    if (mix_farmers !== undefined ) {
        farmers = 'Farmer\'s Mix<br>';
    }

    if (mix_custom !== undefined ) {
        custom = 'Custom Mix<br>';
    }

    if (mix_healthy !== undefined ) {
        healthy = 'Healthy Mix<br>';
    }

    if (mix_salad !== undefined ) {
        salad = 'Salad Mix<br>';
    }

    if (mix_spicy !== undefined ) {
        spicy = 'Spicy Mix<br>';
    }

    return farmers + custom + healthy + salad + spicy;
}

function subjectLineDate() {
    return new Date().toString().slice(0, 16);
}

// ** LumberJack-Setup - Editing supplied HTML email templates **

// Templates
function inquiryTemplate() {

    // Do not remove backtick. Only edit HTML markup below. Be mindful of the objects with ${this} syntax, they are data values 
    // coming from the form and must not be changed. Stick to single quotes, only use inline CSS styles.

    let inqTemplate = `

    <div style='max-width: 80%; padding: 30px; border: 1px solid lightgrey; border-radius: 12px; margin: 15px;'>
        <h2>Hi Max, looks like an order is coming in.</h2>
            <p>Below is a copy of the email.</p> 
        <h2>From:</h2>
            <p style='padding: 0 30px;'><strong>${user_name}</strong></p>
        <h2>Email:</h2>
            <p style='padding: 0 30px;'>${user_email}</p>
        <h2>Address:</h2>
            <p style='padding: 0 30px;'>${user_address}</p>
        <h2>Phone:</h2>
            <p style='padding: 0 30px;'>${user_phone}</p>
        <h2>Frequency:</h2>
            <p style='padding: 0 30px;'>${scheduleChoice()}</p>
        <h2>Mix Choice:</h2>
            <p style='padding: 0 30px;'>${mixChoice()}</p>
        <h2>Message:</h2>
            <p style='padding: 0 30px;'>${message}</p>
    </div>
   
    `; // Do not remove backtick

    let output = inqTemplate.replace(/\n/g, "").replace(/\r/g, "<br>");
    return output;
};

function confirmTemplate() {

    // Do not remove backtick. Only edit HTML markup below. Be mindful of the objects with ${this} syntax, they are data values coming 
    // from the form and must not be changed. Stick to single quotes, only use inline CSS styles.

    let confTemplate = `

    <div style='max-width: 80%; padding: 30px; border: 1px solid lightgrey; border-radius: 12px; margin: 15px;'>   
        <h2>Hi ${user_name}, thanks for checking out Wyldgreens.</h2>
            <p>This is an automatic response confirming that your email was sent. I will reach out to you within the next few days. Below is a copy of your email.</p> 
            <p>Remember, this is an automatic email and doesn't accept replys.</p>
        <h2>From:</h2>
            <p style='padding: 0 30px;'><strong>${user_name}</strong></p>  
        <h2>Email:</h2>
            <p style='padding: 0 30px;'>${user_email}</p>
        <h2>Message:</h2>
            <p style='padding: 0 30px;'>${message}</p>
    </div>

    `; // Do not remove backtick

    let output = confTemplate.replace(/\n/g, "").replace(/\r/g, "<br>");
    return output;
};

// ** LumberJack-Setup - New Email Template **



function newTemplate() {

    // This is a new email template for you to use. Simply uncomment the template, email object, and parsing lines of code associated 
    // with "newTemplate", as well as the parsed object in the exports at the bottom. Head over to your "/app.js" and look for the setup 
    // comments in the /post request.


    // Do not remove backtick. Only edit HTML markup below. Be mindful of the objects with ${this} syntax, they are data values coming 
    // from the form and must not be changed. Stick to single quotes, only use inline CSS styles.

    let newTemplate = `

    <div style='max-width: 80%; padding: 30px; border: 1px solid lightgrey; border-radius: 12px; margin: 15px;'>
        <h2 style='color: #000!important;'>Hello, this is a new template for you to use.</h2>
            <p>Below is a copy of the email.</p> 
        <h2>From:</h2>
            <p style='padding: 0 30px;'><strong>${user_name}</strong></p>
        <h2>Email:</h2>
            <p style='padding: 0 30px;'>${user_email}</p>
        <h2>Message:</h2>
            <p style='padding: 0 30px;'>${message}</p>
    </div>
   
    `; // Do not remove backtick

    let output = newTemplate.replace(/\n/g, "").replace(/\r/g, "<br>");
    return output;
};




// Nodemailer email objects
function mailNewInquiry(user_name, user_email, message) {
    return `{"from": "info@ashthomasweb.com",
    "to": "alek@alekhess.com",
    "subject": "New Wyld order! From: ${user_name} on ${subjectLineDate()}",
    "html": "${inquiryTemplate()}"}`;
};

function mailConfirmation(user_name, user_email, message) {
    return `{"from": "info@ashthomasweb.com",
    "to": "${user_email}",
    "subject": "Wyld order succesfully placed on ${subjectLineDate()}",
    "html": "${confirmTemplate()}"}`;
};


function newEmailTemp(user_name, user_email, message) {
    return `{"from": "info@ashthomasweb.com",
    "to": "ashthomasweb@gmail.com",
    "subject": "New Wyld order! From: ${user_name} on ${subjectLineDate()}",
    "html": "${inquiryTemplate()}"}`;
};



// Object parsing
let inquiry = JSON.parse(mailNewInquiry(user_name, user_email, message));
let finalConfirm = JSON.parse(mailConfirmation(user_name, user_email, message));
let newEmailTemplate = JSON.parse(newEmailTemp(user_name, user_email, message));


// Exports
module.exports = {
    transporter,
    inquiry,
    finalConfirm,
    newEmailTemplate
};

// END of document