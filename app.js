// Node.js/Express Server "app.js" for "LumberJack" 

// ** LumberJack-Setup **
// This is your server application. It's a Node.js runtime and Express build. 
// It uses EJS to dynamically render page content. You will need to edit this 
// file. Look for the setup instructions below. You must install all dependecies 
// locally and on your host.


// Dependencies 
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const favicon = require('express-favicon');

var Prismic = require('prismic-javascript');
var PrismicDOM = require('prismic-dom');
var prismicEndpoint = 'https://lumberjack.prismic.io/api/v2';

const app = express();

app.use(favicon(__dirname + '/public/favicon.ico'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


// Prismic
// Standardized URLs for known types
// var linkResolver = function (doc) {
//     if (doc.type === 'blog') return "/post/" + doc.uid;
//     if (doc.type === 'page') return "/" + doc.uid;
//     // Fallback for other types, in case new custom types get created
//     return "/";
// };

// // Middleware to inject prismic context
// app.use(function (req, res, next) {
//     res.locals.ctx = {
//         endpoint: prismicEndpoint,
//         linkResolver: linkResolver,
//     };
//     res.locals.PrismicDOM = PrismicDOM;
//     next();
// });

// // Initialize the prismic api
// function initApi(req) {
//     return Prismic.getApi(prismicEndpoint, {
//         req: req
//     });
// };
// END Prismic


// ** LumberJack-Setup - Page titles and menu links
// You need to change the appropriate route handler to reflect your page names 
// and titles. Observe capitalizations. Do not change the routing for /posts.

// Route Handlers

// app.get('/', function (req, res) {
//     res.render('home', {
//         pageTitle: 'Home',
//     });
// });

// app.get('/about', function (req, res) {
//     res.render('about', {
//         pageTitle: "About",
//     });
// });

// app.get('/technology', function (req, res) {
//     res.render('technology', {
//         pageTitle: "Technology",
//     });
// });

// app.get('/blog', function (req, res) {
//     initApi(req).then(function (api) {
//         api.query(
//             Prismic.Predicates.at('document.type', 'post')
//         ).then(function (response) {
//             // "response" is the data object you can view with the Prismic API browser.
//             res.render('blog', {
//                 document: response.results,
//                 pageTitle: "Blog",
//             });
//         });
//     });
// });

// app.get('/posts/:postTitle', function (req, res) {
//     let url = './posts/' + req.params.postTitle;
//     initApi(req).then(function (api) {
//         api.query(
//             Prismic.Predicates.at('document.type', 'post')
//         ).then(function (response) {
//             // "response" is the data object you can view with the Prismic API browser.
//             if (url) {
//                 res.render('post', {
//                     document: response.results,
//                     pageTitle: "Blog Post",
//                     title: req.params.postTitle.replace(/-/g, ' '),
//                 });
//             }
//         });
//     });
// });

// app.get('/media', function (req, res) {
//     res.render('media', {
//         pageTitle: "Media",
//     });
// });

app.get('/', function (req, res) {
    res.render('contact', {
        pageTitle: "Contact",
        responseBool: false,
    });
});

app.post('/', function (req, res) {

    let ifError = false;

    // Data recieved from the contact form
    const { user_name, user_email, user_address, user_phone, message, one_time, weekly, mix_farmers, mix_custom, mix_healthy, mix_salad, mix_spicy  } = req.body;

    // Send form data to NodeMailer module
    module.exports = { user_email, user_name, user_address, user_phone, message, one_time, weekly, mix_farmers, mix_custom, mix_healthy, mix_salad, mix_spicy };

    // ** LumberJack-Setup for NodeMailer - Adding additional templates **

    // After "finalConfirm", add in the new export from "/nodemailer.js" 
    // and uncomment transporter object for newEmail Template.

    // Imports from NodeMailer module
    const { transporter, inquiry, finalConfirm, newEmailTemplate } = require('./nodemailer.js');

    // Transporter objects
    var userInquiry = transporter.sendMail(inquiry);
    var userConfirm = transporter.sendMail(finalConfirm);
    var testEmail = transporter.sendMail(newEmailTemplate);

    // Populate the new variable into the Promise below, and add results to the 
    // console.log. Example below:
    /*
    Promise.all([userInquiry, userConfirm, newEmail])
        .then(([resultInq, resultConf, resultNew]) => {
            console.log("Emails sent", resultInq, resultConf, resultNew);
        }) 
    */

    // Upon completion, sends response to page indicating success or failure.
    Promise.all([userInquiry, userConfirm, testEmail])
        .then(([resultInq, resultConf, resultTest]) => {
            console.log("Emails sent", resultInq, resultConf, resultTest);
        })
        .catch((err) => {
            console.log(err);
            ifError = true;
        })
        .finally(() => {
            res.render('contact', {
                pageTitle: "Contact",
                responseBool: true,
                isError: ifError,
            });
        });

});

app.get('/mock1', function (req, res) {
    res.render('mock1', {
        pageTitle: "Contact",
        responseBool: false,
    });
});

app.get('/mock2', function (req, res) {
    res.render('mock2', {
        pageTitle: "Contact",
        responseBool: false,
    });
});

app.get('/mock3', function (req, res) {
    res.render('mock3', {
        pageTitle: "Contact",
        responseBool: false,
    });
});

app.get('/mock4', function (req, res) {
    res.render('mock4', {
        pageTitle: "Contact",
        responseBool: false,
    });
});

app.get('/mock5', function (req, res) {
    res.render('mock5', {
        pageTitle: "Contact",
        responseBool: false,
    });
});

// || Listener 

let port = process.env.PORT;
if (port == null || port == "") { 
    port = 3000; 
}
app.listen(port, () => console.log(`Server started at port ${port}.`));


// || END of document