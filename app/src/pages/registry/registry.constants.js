export const DATA_BASE_URL = "https://www.datos.gov.co/resource/xdk5-pm3f.json";

export const SAVE_DATA_URL =
  "https://europe-west3-openedcommerces.cloudfunctions.net/createShop";

export const PAYMENT_METHODS = [
  {
    value: "Tarjeta",
    label: "Tarjeta",
  },
  {
    value: "Efectivo",
    label: "Efectivo",
  },
];

export const SALES_METHODS = [
  {
    value: "Domicilios",
    label: "Domicilios",
  },
  {
    value: "Presencial",
    label: "Presencial",
  },
];

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDKYG7Wt_IyYoMkfu1pnlc5XOBRH5E-foc",
  storageBucket: "gs://openedcommerces.appspot.com",
  authDomain: "openedcommerces.firebaseapp.com",
  databaseURL: "https://openedcommerces.firebaseio.com",
  projectId: "openedcommerces",
};

export const RECAPTCHA_KEY = "6LeKtaIZAAAAAOZgyDDIBGQ0src_gNfWV2wDxKoN";

export const RECAPTCHA_KEY_DEV = "6LcruKIZAAAAAO4p5bOnaLPekH63AFe7AlWqpdrB";

export const SUCCESSFUL_REGISTRATION_URL = "/registro/exitoso?inv=";
