const Model = require('js-model');
const Timestamp = require('@google-cloud/firestore');

let Hours = new Model({
  open: "",
  close: ""
});

let Social = new Model({
  instagram: "",
  facebook: "",
  whatsapp: "",
  web: "",
  other: ""
});

let Commerce = new Model({
  id: "",
  name: "",
  phone: "",
  address: "",
  city: "",
  department: "",
  salesMethod: [""],
  salesHours: Hours,
  commerceTypes: [""],
  specialty: "",
  description: "",
  contact: Social,
  paymentType: [""],
  img: "",
  createAt: Timestamp,
  visible: false,
  invitation: "",
  activatePromo: false,
});

module.exports = Commerce;