const express = require("express");

const app = require('express').Router();
require("dotenv").config();
const cors = require("cors");
const axios = require("axios");
const Transaction = require("../models/PaymentModel");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Mpesa programming underway</h1>");
});

app.get("/token", (req,res) =>{
    generateToken();
})

const generateToken = async (req, res, next) => {
  const key = process.env.MPESA_CONSUMER_KEY;
  const secret = process.env.MPESA_CONSUMER_SECRET;
  const auth = new Buffer.from(`${key}:${secret}`).toString("base64");

  await axios
    .get(
      // "https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      {
        headers: {
          authorization: `Basic ${auth}`,
        },
      }
    )
    .then((res) => {
      //   resp.status(200).json(res.data);
      token = res.data.access_token;
      // console.log(token);
      // console.log(res.data.access_token);
      ;
    })
    .catch((err) => {
      console.log(err);
    });
};
// middleware fucntion to generate token

app.post("/stk", generateToken, async (req, res) => {
  const phone = req.body.phone.substring(1);
  const amount = req.body.amount;

  // res.json({ phone, amount});

  const date = new Date();
  const timestamp =
    date.getFullYear() +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    ("0" + date.getDate()).slice(-2) +
    ("0" + date.getHours()).slice(-2) +
    ("0" + date.getMinutes()).slice(-2) +
    ("0" + date.getSeconds()).slice(-2);
  const shortCode = process.env.MPESA_PAYBILL;
  const passkey = process.env.MPESA_PASSKEY;

  //   const callbackurl = process.env.CALLBACK_URL;

  const password = new Buffer.from(shortCode + passkey + timestamp).toString(
    "base64"
  );
  await axios
    .post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      {
        BusinessShortCode: process.env.MPESA_PAYBILL,
        Password: password,
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: amount,
        PartyA: `254${phone}`,
        PartyB: shortCode,
        PhoneNumber: `254${phone}`,
        //   CallBackURL: "https://mydomain.com/path",
        CallBackURL: "https://a597-197-156-137-154.eu.ngrok.io/callback",
        AccountReference: `254${phone}`,
        TransactionDesc: "Testing stk push",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((resp) => {
      res.json(resp.data);
      const data = resp.data;
      console.log(resp.data);
    })
    .catch((err) => {
      res.json(err);
      console.log(err.message);
    });
});

app.post("/payment/callback", (req, res) => {
  const callbackData = req.body;
  console.log(callbackData);
  if (!req.body.Body.stkCallback.CallbackMetadata) {
    console.log(req.body.Body.stkCallback.ResultDesc);
    res.status(200).json("ok");
    return;
  }
  const amount = req.body.Body.stkCallback.CallbackMetadata.Item[0].Value;
  const code = req.body.Body.stkCallback.CallbackMetadata.Item[1].Value;
  const phone1 =
    req.body.Body.stkCallback.CallbackMetadata.Item[4].Value.toString().substring(
      3
    );
  const phone = `0${phone1}`;
  // saving the transaction to db
  console.log({
    phone,
    code,
    amount,
  });
  const transaction = new Transaction();

  transaction.customer_number = phone;
  transaction.mpesa_ref = code;
  transaction.amount = amount;

  transaction
    .save()
    .then((data) => {
      console.log({ message: "transaction saved successfully", data });
    })
    .catch((err) => console.log(err.message));

  res.status(200).json("ok");
});


module.exports = app