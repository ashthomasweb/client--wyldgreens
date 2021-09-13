// Node.js/Express Server "app.js" for "Wyldgreens" 


// Dependencies 
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const favicon = require('express-favicon');

const app = express();

app.use(favicon(__dirname + '/public/favicon.ico'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (req, res) {
    res.render('home', {
        pageTitle: "Wyldgreens",
        responseBool: false,
    });
});

app.post('/', function (req, res) {

    let ifError = false;

    // Data recieved from the contact form
    const { user_name, user_email, user_city, user_phone, message, one_time, weekly, bulk, farmers_num, order1_num, order1_ing, order2_num, order2_ing, order3_num, order3_ing, healthy_num, salad_num, spicy_num, total_price  } = req.body;

    
    console.log(req.body);

    // Send form data to NodeMailer module
    module.exports = { user_email, user_name, user_city, user_phone, message, one_time, weekly, bulk, farmers_num, order1_num, order1_ing, order2_num, order2_ing, order3_num, order3_ing, healthy_num, salad_num, spicy_num, total_price };

    // Imports from NodeMailer module
    const { transporter, inquiry, finalConfirm } = require('./nodemailer.js');

    // Transporter objects
    var userInquiry = transporter.sendMail(inquiry);
    var userConfirm = transporter.sendMail(finalConfirm);
    // var testEmail = transporter.sendMail(newEmailTemplate);

    // Upon completion, sends response to page indicating success or failure.
    Promise.all([userInquiry, userConfirm])
        .then(([resultInq, resultConf]) => {
            console.log("Emails sent", resultInq, resultConf);
        })
        .catch((err) => {
            console.log(err);
            ifError = true;
        })
        .finally(() => {
            res.render('home', {
                pageTitle: "Wyldgreens",
                responseBool: true,
                isError: ifError,
            });
        });

});

// || Listener 

const server = app.listen(0, () => {
    console.log('Server running at port:', server.address().port);
});

// let port = process.env.PORT;
// // if (port == null || port == "") { 
// //     port = 3000; 
// // }
// app.listen(port, () => console.log(`Server started at port ${port}.`));


// || END of document
