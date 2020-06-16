const functions = require('firebase-functions');
const admin = require('firebase-admin');
const Commerce = require('./commerce');
const Timestamp = require('@google-cloud/firestore');
const express = require('express');
const cors = require('cors');

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

admin.initializeApp();
const db = admin.firestore();
const collect = db.collection('shops');

exports.createShop = functions
  .region('europe-west3')
  .runWith({
    memory: '256MB'
  })
  .https
  .onRequest(async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    try {

      if (!req.body.id || req.body.id === "") {
        res.send(
          new functions.https.HttpsError('invalid-argument', 'missing id')
          );
      } else if (!req.body.name || req.body.name === "") {
        res.send(
          new functions.https.HttpsError('invalid-argument', 'missing name')
          );
      } else if (!req.body.phone || req.body.phone === "") {
        res.send(
          new functions.https.HttpsError('invalid-argument', 'missing phone')
          );
      } else if (!req.body.email || req.body.email === "") {
        res.send(
          new functions.https.HttpsError('invalid-argument', 'missing email')
          );
      } else if (!req.body.address || req.body.address === "") {
        res.send(
          new functions.https.HttpsError('invalid-argument', 'missing address')
          );
      } else if (!req.body.city || req.body.city === "") {
        res.send(
          new functions.https.HttpsError('invalid-argument', 'missing city')
          );
      } else if (!req.body.department || req.body.department === "") {
        res.send(
          new functions.https.HttpsError('invalid-argument', 'missing department')
          );
      } else if (!req.body.salesMethod || req.body.salesMethod === [""]) {
        res.send(
          new functions.https.HttpsError('invalid-argument', 'missing salesMethod')
          );
      } else if (!req.body.salesHours || req.body.salesHours === "") {
        res.send(
          new functions.https.HttpsError('invalid-argument', 'missing salesHours')
          );
      } else if (!req.body.commerceTypes || req.body.commerceTypes === [""]) {
        res.send(
          new functions.https.HttpsError('invalid-argument', 'missing commerceTypes')
          );
      }  else if (!req.body.specialty || req.body.specialty === "") {
        res.send(
          new functions.https.HttpsError('invalid-argument', 'missing specialty')
          );
      } else if (!req.body.description || req.body.description === "") {
        res.send(
          new functions.https.HttpsError('invalid-argument', 'missing description')
          );
      } else if (!req.body.contact || req.body.contact === "") {
        res.send(
          new functions.https.HttpsError('invalid-argument', 'missing contact')
          );
      } else if (!req.body.paymentType || req.body.paymentType === [""]) {
        res.send(
          new functions.https.HttpsError('invalid-argument', 'missing paymentType')
          );
      } else if (!req.body.img || req.body.img === "") {
        res.send(
          new functions.https.HttpsError('invalid-argument', 'missing img')
          );
      } else if (!req.body.invitation || req.body.invitation === "") {
        res.send(
          new functions.https.HttpsError('invalid-argument', 'missing invitation')
          );
      } else {
        let shop = Commerce.parse({
          id: req.body.id,
          name: req.body.name,
          phone: req.body.phone,
          email: req.body.email,
          address: req.body.address,
          city: req.body.city,
          department: req.body.department,
          salesMethod: req.body.salesMethod,
          salesHours: req.body.salesHours,
          commerceTypes: req.body.commerceTypes,
          specialty: req.body.specialty,
          description: req.body.description,
          contact: req.body.contact,
          paymentType: req.body.paymentType,
          img: req.body.img,
          createAt: Date.now(),
          visible: false,
          invitation: req.body.invitation,
          activatePromo: false
        })
        await collect.doc().set(shop)
        res.send({
          operation: 'created'
        })
      }
    } catch (e) {
      console.error(e);
      res.send(e);
    }
  });