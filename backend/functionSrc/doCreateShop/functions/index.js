const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const defaultApp = admin.initializeApp({
  credential: admin.credential.cert({
    projectId: "openedcommerces",
    clientEmail: "openedcommerces@appspot.gserviceaccount.com",
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC2tNiwoY29zQSi\nrg0efhksueMxvuTrpPkld6CNpv8crI6Mt22D1jYM6Z1NAoYMaK64uYglm+frqPyX\naLmRphCY4tMvAx9ST9TeIAFt1LE3/iym3cTH0leSKJAt4Ipxo33BJrxseg4QyG+b\nHjngclJp6682ONV+fSG0d+bVdd5LBdLI7ZH25y9CrAPNSqIkiB3KkNBxKzdaQv85\nHCsR38828EjtS2CVY64+52cSY2qM2yvkKbPzKD7UMvGmektm37vPZuNKJGh8IC3J\nDg9U3BuZ9I7vc892PGyvUyDCjqBH4oz49vEaL4KkhdHCgjqoaupJjTA0DcscRA8J\nhP27QJqnAgMBAAECggEADe108+iqI+pRgfnaS9VD+QSwkisMS1RM88i4kfkayxDy\nYD1erqVGgy8kdmmMq2coI90Xc6UnWu+2VZpo7vaQSanyJvbKIp2toJh4U2rabuYZ\neZzqh8BRPEs1oRxT9rwGSueM3Ii6CBh8vX/ihz61E+2gnSBcUfia+FAIO4RxLhnB\n0rQsr4igjpo1xfdEXU4LpDiZXCifplN2/9BAI75D9v0bBnm1bKVliqjNVx6ivhmH\nVyPG4STi/swZQn5sqmDTQ19sC9DTC1WQSEhQ5xsU6OfLlhpGcHLdquPPl31SDzNi\nbhfbAaaDz8F9Q/oKAGpSn0PeZ3fMmKHJqrZ2sB8ANQKBgQD0ZFOaNE/QSdVU4y/Q\nK+/ohZBcF0oH5tvEWaAzlp4H7cQQst17mrn8nAgDhJPIMnazOq8kucCtvRTZu5jt\nfk2H/evZQ03D+yX/3Zj1pRkgDr1M8qrRkfMviUA0M420oIQ8Eqpd5ntFu4jHg5AU\nrwFYZ13peHgyXbM1H+bHDelONQKBgQC/YnU5UrIDNc/xUxT4W1F4ZHGlPZGh4NoO\nhnZ+pJj7ngKM0TdM7IMQeZz4RdeIWjmPAyXAdseY07qEdA5gGK4QCm1pquYKJxVf\n7pYzwYstsam50LB4UPBrtxm0w/nYtcDf6RyDRhLO67147F6n5wimoeAj7iRWpRQa\nRfwe9LiQ6wKBgHgZLXRkLKzA+9Mhage078qmiFCZKUpEys7s9GslozdmQqmqHGl3\nmdpnmxCPgEgrdGWTeypjFirK9oohRH/BR7yCrfowtvCOZRgd/+MHZRd55tD/l64x\nOP6tRh3hD8wp7ZHP4mUOtJmKFSdmodFoRxL4iRAIoZiurzh2GuTLE1HZAoGAdbEo\ngV3XVp4LCE6dQLV3fl/We1VHb5MExZXu3KZ/5Ywf6VTnewie+MywuQTKLHG/n7DB\n0H+68sKRms574KCMuhSPgEG2QVwTivD/sUg+PJVa2If7XaH4l2T8C+vQg3IR8CA8\nhoXbHyBdXjWNaBdtfHtjiPTzp8zQde+/wZGgxo0CgYByrKtBAgpG8DdCbK8QacXV\nnbUfvLIQoODfOcWZbVBCwL5b//LFJnaDKTq0idSn9Ggobp5Dgi271MaVCZRg2OJs\nP2bW8Kiq7Ixb2Q5OFtIMy17zT0ho4OmoxATM4eZB5IN9dGXPxFZCGP01t61VNseN\nP7mCyq7P6DVFGpkCvHXX5w==\n-----END PRIVATE KEY-----\n",
  }),
  databaseURL: "https://openedCommerces.firebaseio.com",
});
defaultApp.auth();
defaultApp.database();
const db = admin.firestore();

const app = express();

app.use(cors({ origin: true }));

exports.correos = functions
  .https
  .onRequest(
    app.post('/', (req, res) => {

    var transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // use SSL

      auth: {
        type: 'OAuth2',
        user: 'encuentrakco@gmail.com',
        clientId: '1018874309284-ha337j2ejll9n3bc9d9h4if56amegp4j.apps.googleusercontent.com',
        clientSecret: 'aFGnMD-H6FKZ0THZYYp6FQj8',
        refreshToken: '1//04Cutksu61dxBCgYIARAAGAQSNwF-L9IrMnaqCiFEJbiFgISB-Rt7lcq0GU4EAufx9Xc9aPsCNIpaf11hKYGTRyLHT3es76_z7N0',
        accessToken: '1//04Cutksu61dxBCgYIARAAGAQSNwF-L9IrMnaqCiFEJbiFgISB-Rt7lcq0GU4EAufx9Xc9aPsCNIpaf11hKYGTRyLHT3es76_z7N0',  
      },
      logger: true
    });

    var mailOptions = {
      from: 'encuentrakco@gmail.com',
      to: req.body.email,
      subject: 'Bienvenido a EncuentraK',
      html: `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml"  bgcolor="282c34">
      <head>
      <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
      <style type="text/css">
      body{ margin:0px; padding:0px; width:100%; background-color="#282c34"}</style>
      </head>
        <body  bgcolor="282c34">
          <table bgcolor="282c34" align="center" bgcolor="#ebebeb" border="0" cellpadding="0" cellspacing="0" style="padding:0px; margin:0px;" width="100%">
            <tbody bgcolor="282c34">
              <tr bgcolor="282c34">
                <td bgcolor="282c34">
                  <table bgcolor="282c34" align="center" border="0" cellpadding="0" cellspacing="0" width="600">
                    <tbody bgcolor="282c34">
                      <tr bgcolor="282c34">
                        <td align="left" height="20" valign="top" bgcolor="282c34"><img alt="" src="https://firebasestorage.googleapis.com/v0/b/openedcommerces.appspot.com/o/fotos%2Flogo2.png?alt=media&token=83e5eb33-25de-4268-a233-95665b0a0d19" style="display: block;width: 500px;height: 170px;margin: 0 auto;" /></td>
                      </tr>
                    </tbody>
                  </table bgcolor="f9f9f9">
                  <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" bgcolor="f9f9f9">
                    <tbody bgcolor="f9f9f9">
                      <tr bgcolor="f9f9f9">
                        <td align="left" valign="top" style="font-family:Arial, Helvetica, sans-serif;" bgcolor="f9f9f9">
                          <h2 style="margin-top: 50px;margin-bottom: 50px;font-size: 28px;color: #ff861e;text-align:center;">¡Gracias por registrarte!</h2>
                          <p style="font-size: 18px;margin: 18px 50px;text-align: center;">
                          Recuerda, invitando personas a registrarse en nuestro portal,
                          obtendrás beneficios al momento del lanzamiento de la página.
                          </p>
                          <p style="font-size: 18px;margin: 18px 50px;text-align: center;">
                          Asegurate de que usen tu enlace de invitación cuando se inscriban,
                          para que puedas disfrutar de estas ventajas.
                          </p>
                          <p style="font-size: 18px;margin: 18px 50px;text-align: center;">Tu enlace de invitación es: </p>
                          <h3 style="margin: 50px 0;font-size: 22px;color: #0072ff; text-align: center">www.encuentrak.com/registro?inv=${req.body.code}</h3>
                          <p style="font-size: 18px;margin: 18px 50px 50px;text-align: center;">Pronto podrás disfrutar de todas nuestras funcionalidades.</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
                    <tbody>
                      <tr>
                        <td align="left" height="50" valign="top" bgcolor="282c34"></td>
                      </tr>                    
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </body>
      </html>
      `
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        res.json({"res":"Email Send"});
      }
    });

  }));