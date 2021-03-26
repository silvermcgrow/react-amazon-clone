const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request } = require("express");
const stripe = require("stripe")('sk_test_51IUctmK7ctUI9X4lahnCHa1EMUqRi0FzBZTMwJ0udFhSf16tD8Gx85ROIFfsRTVWJoESpqdo8inQvovuGsadPkDL00iy5tHKXO');


// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('Hello World'));

app.post('/payment/create', async (request, response) => {
    const total = request.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //SUbunits of the currency
        currency: "inr"
    });

    // OK created

    response.status(201).send({
        clientSecret: paymentIntent.client_secret 
    })

})

// Listen command

exports.api = functions.https.onRequest(app);