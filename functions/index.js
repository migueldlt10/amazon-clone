const functions = require("firebase-functions");
// build an express app and host it on a cloud function
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("#");

// This is all to set up the API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json()); // this allows to pass data and send in JSON format

// API routes / Endpoints
app.get("/", (request, response) =>
  response.status(200).send("Route / ran...")
);

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment req recieved ! >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunit of the currency
    currency: "usd",
  });

  // Ok - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-5029e/us-central1/api
