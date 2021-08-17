// Nodemailer functions and templates for "Wyldgreens" 

// Dependencies
const nodemailer = require("nodemailer");
const {
    user_email,
    user_name,
    user_city,
    user_phone,
    message,
    one_time,
    weekly,
    bulk,
    farmers_num,
    order1_num,
    order1_ing,
    order2_num,
    order2_ing,
    order3_num,
    order3_ing,
    healthy_num,
    salad_num,
    spicy_num,
    total_price
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
    if (one_time !== undefined) {
        return 'One Time Delivery'
    } else if (weekly !== undefined) {
        return 'Weekly Delivery'
    } else if (bulk !== undefined) {
        return 'Bulk Delivery'
    }
}

function mixChoice() {
    let farmers = '';
    let healthy = '';
    let salad = '';
    let spicy = '';

    if ( Number(farmers_num) > 0 ) {
        farmers = `Farmer's Mix - Quantity: ${farmers_num}<br>`;
    }

    if ( Number(healthy_num)> 0 ) {
        healthy = `Healthy Mix - Quantity: ${healthy_num}<br>`;
    }

    if ( Number(salad_num) > 0 ) {
        salad = `Salad Mix - Quantity: ${salad_num}<br>`;
    }

    if ( Number(spicy_num) > 0 ) {
        spicy = `Spicy Mix - Quantity: ${spicy_num}<br>`;
    }

    return farmers + healthy + salad + spicy;
}

function customChoice() {
    let order1 = '';
    let order2 = '';
    let order3 = '';

    if ( Number(order1_num) > 0 ) {
        order1 = `Custom Mix - Quantity: ${order1_num}<br><em>${order1_ing}</em><br><br>`;
    }

    if ( Number(order2_num) > 0 ) {
        order2 = `Custom Mix - Quantity: ${order2_num}<br><em>${order2_ing}</em><br><br>`;
    }

    if ( Number(order3_num) > 0 ) {
        order3 = `Custom Mix - Quantity: ${order3_num}<br><em>${order3_ing}</em>`;
    }

    return order1 + order2 + order3;
}

function subjectLineDate() {
    return new Date().toString().slice(0, 16);
}


// Templates
function inquiryTemplate() {

    let inqTemplate = `
    
    <div style='max-width: 80%; padding: 30px; border: 1px solid lightgrey; border-radius: 12px; margin: 15px;'>
        <h2>Hi Max, looks like an order is coming in.</h2>
        <h2>From:</h2>
            <p style='padding: 0 30px;'><strong>${user_name}</strong></p>
        <h2>Email:</h2>
            <p style='padding: 0 30px;'>${user_email}</p>
        <h2>Address:</h2>
            <p style='padding: 0 30px;'>${user_city}</p>
        <h2>Phone:</h2>
            <p style='padding: 0 30px;'>${user_phone}</p>
        <h2>Frequency:</h2>
            <p style='padding: 0 30px;'>${scheduleChoice()}</p>
        <h2>Mix Choice:</h2>
            <p style='padding: 0 30px;'>${mixChoice()}</p>
        <h2>Custom Choice:</h2>
            <p style='padding: 0 30px;'>${customChoice()}</p>
        <h2>Message:</h2>
            <p style='padding: 0 30px;'>${message}</p>
        <h2>Total Price:</h2>
            <p style='padding: 0 30px;'>$${total_price}</p>    
    </div>
   
    `; 

    let output = inqTemplate.replace(/\n/g, "").replace(/\r/g, "<br>");
    return output;
};

function confirmTemplate() {

    let confTemplate = `
    
    <div style='max-width: 80%; padding: 30px; border: 1px solid lightgrey; border-radius: 12px; margin: 15px;'>   
        <h2>Hi ${user_name}, thanks for checking out Wyldgreens.</h2>
            <p>This is an automatic response confirming that your email was sent. We will reach out to you within the next few days. Below is a copy of your email.</p> 
            <p>Remember, this is an automatic email and doesn't accept replys.</p>
            <p>Below is a copy of your order.</p>
        <h2>From:</h2>
            <p style='padding: 0 30px;'><strong>${user_name}</strong></p>
        <h2>Email:</h2>
            <p style='padding: 0 30px;'>${user_email}</p>
        <h2>Address:</h2>
            <p style='padding: 0 30px;'>${user_city}</p>
        <h2>Phone:</h2>
            <p style='padding: 0 30px;'>${user_phone}</p>
        <h2>Frequency:</h2>
            <p style='padding: 0 30px;'>${scheduleChoice()}</p>
        <h2>Mix Choice:</h2>
            <p style='padding: 0 30px;'>${mixChoice()}</p>
        <h2>Custom Choice:</h2>
            <p style='padding: 0 30px;'>${customChoice()}</p>
        <h2>Message:</h2>
            <p style='padding: 0 30px;'>${message}</p>
        <h2>Total Price:</h2>
            <p style='padding: 0 30px;'>$${total_price}</p>  
    </div>

    `; 

    let output = confTemplate.replace(/\n/g, "").replace(/\r/g, "<br>");
    return output;
};


// function newTemplate() {

//     let newTemplate = `

//     <div style='max-width: 80%; padding: 30px; border: 1px solid lightgrey; border-radius: 12px; margin: 15px;'>
//         <h2 style='color: #000!important;'>Hello, this is a new template for you to use.</h2>
//             <p>Below is a copy of the email.</p> 
//         <h2>From:</h2>
//             <p style='padding: 0 30px;'><strong>${user_name}</strong></p>
//         <h2>Email:</h2>
//             <p style='padding: 0 30px;'>${user_email}</p>
//         <h2>Message:</h2>
//             <p style='padding: 0 30px;'>${message}</p>
//     </div>

//     `;

//     let output = newTemplate.replace(/\n/g, "").replace(/\r/g, "<br>");
//     return output;
// };




// Nodemailer email objects
function mailNewInquiry(user_name, user_email, message) {
    return `{"from": "order@wyldgreens.com",
    "to": "ashleythomasweb@gmail.com",
    "subject": "New Wyld order! From: ${user_name} on ${subjectLineDate()}",
    "html": "${inquiryTemplate()}"}`;
};

function mailConfirmation(user_name, user_email, message) {
    return `{"from": "order@wyldgreens.com",
    "to": "${user_email}",
    "subject": "Wyld order succesfully placed on ${subjectLineDate()}",
    "html": "${confirmTemplate()}"}`;
};


// function newEmailTemp(user_name, user_email, message) {
//     return `{"from": "info@ashthomasweb.com",
//     "to": "ashthomasweb@gmail.com",
//     "subject": "New Wyld order! From: ${user_name} on ${subjectLineDate()}",
//     "html": "${inquiryTemplate()}"}`;
// };



// Object parsing
let inquiry = JSON.parse(mailNewInquiry(user_name, user_email, message));
let finalConfirm = JSON.parse(mailConfirmation(user_name, user_email, message));
// let newEmailTemplate = JSON.parse(newEmailTemp(user_name, user_email, message));


// Exports
module.exports = {
    transporter,
    inquiry,
    finalConfirm
};

// END of document