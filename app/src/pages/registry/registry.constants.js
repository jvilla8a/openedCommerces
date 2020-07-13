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

const AOptions = [
  { value: "Agro", label: "Agro" },
  { value: "Alimentos", label: "Alimentos" },
  { value: "Antiguedades", label: "Antiguedades" },
  { value: "Arte", label: "Arte" },
  { value: "Aseo", label: "Aseo" },
  { value: "Automotriz", label: "Automotriz" },
];

const BOptions = [
  { value: "Barberia", label: "Barberia" },
  { value: "Bares", label: "Bares" },
  { value: "Bebes", label: "Bebes" },
  { value: "Bebidas", label: "Bebidas" },
  { value: "Belleza", label: "Belleza" },
  { value: "Bienes Raices", label: "Bienes Raices" },
  { value: "Bienestar", label: "Bienestar" },
  { value: "Bizuteria", label: "Bizuteria" },
  { value: "Boleteria", label: "Boleteria" },
];

const COptions = [
  { value: "Casino", label: "Casino" },
  { value: "Cafeterias", label: "Cafeterias" },
  { value: "Cafes", label: "Cafes" },
  { value: "Calzado", label: "Calzado" },
  { value: "Cocina", label: "Cocina" },
  { value: "Cigarreria", label: "Cigarreria" },
  { value: "Comida", label: "Comida" },
  { value: "Construccion", label: "Construccion" },
  { value: "Contaduria", label: "Contaduria" },
];

const DOptions = [
  { value: "Danza", label: "Danza" },
  { value: "Deportes", label: "Deportes" },
  { value: "Detalles", label: "Detalles" },
  { value: "Discotecas", label: "Discotecas" },
  { value: "Drogueria", label: "Drogueria" },
];

const EOptions = [
  { value: "Educacion", label: "Educación" },
  { value: "Electrodomesticos", label: "Electrodomesticos" },
  { value: "Electronicos", label: "Electronicos" },
  { value: "Entrenamiento", label: "Entrenamiento" },
  { value: "Entretenimiento", label: "Entretenimiento" },
  { value: "Estacion de servicio", label: "Estación de servicio" },
  { value: "Estetica", label: "Estetica" },
];

const FOptions = [
  { value: "Farmacia", label: "Farmacia" },
  { value: "Ferreterias", label: "Ferreterias" },
  { value: "Fiestas", label: "Fiestas" },
  { value: "Flores", label: "Flores" },
];

const GOptions = [
  { value: "Gaming", label: "Gaming" },
  { value: "Gas", label: "Gas" },
];

const HOptions = [
  { value: "Herramientas", label: "Herramientas" },
  { value: "Hogar", label: "Hogar" },
  { value: "Hospedaje", label: "Hospedaje" },
];

const IOptions = [
  { value: "Impresiones", label: "Impresiones" },
  { value: "Instrumentos musicales", label: "Instrumentos musicales" },
];

const JOptions = [
  { value: "Juegos", label: "Juegos" },
  { value: "Juguetes", label: "Juguetes" },
  { value: "Joyas", label: "Joyas" },
];

const LOptions = [
  { value: "Lavanderia", label: "Lavanderia" },
  { value: "Licores", label: "Licores" },
  { value: "Libros", label: "Libros" },
];

const MOptions = [
  { value: "Madera", label: "Madera" },
  { value: "Mascotas", label: "Mascotas" },
  { value: "Miscelanea", label: "Miscelanea" },
  { value: "Moda", label: "Moda" },
  { value: "Motos", label: "Motos" },
  { value: "Mudanzas", label: "Mudanzas" },
  { value: "Muebles", label: "Muebles" },
  { value: "Musica", label: "Musica" },
];

const OOptions = [{ value: "Oficina", label: "Oficina" }];

const POptions = [
  { value: "Peleterias", label: "Peleterias" },
  { value: "Peluqueria", label: "Peluqueria" },
  { value: "Panaderia", label: "Panaderia" },
  { value: "Papeleria", label: "Papeleria" },
  { value: "Pasteleria", label: "Pasteleria" },
  { value: "Publicidad", label: "Publicidad" },
];

const QOptions = [{ value: "Quimicos", label: "Quimicos" }];

const ROptions = [
  { value: "Regalos", label: "Regalos" },
  { value: "Relojes", label: "Relojes" },
  { value: "Reparaciones", label: "Reparaciones" },
  { value: "Restaurantes", label: "Restaurantes" },
  { value: "Ropa", label: "Ropa" },
];

const SOptions = [
  { value: "Sexshop", label: "Sexshop" },
  { value: "Salud", label: "Salud" },
  { value: "Seguridad", label: "Seguridad" },
];

const TOptions = [
  { value: "Tatuajes", label: "Tatuajes" },
  { value: "Tecnologia", label: "Tecnologia" },
  { value: "Turismo", label: "Turismo" },
];

const VOptions = [{ value: "Video Juegos", label: "Video Juegos" }];

const ZOptions = [{ value: "Zapateria", label: "Zapateria" }];

export const COMMERCES = [
  { label: "A", options: AOptions },
  { label: "B", options: BOptions },
  { label: "C", options: COptions },
  { label: "D", options: DOptions },
  { label: "E", options: EOptions },
  { label: "F", options: FOptions },
  { label: "G", options: GOptions },
  { label: "H", options: HOptions },
  { label: "I", options: IOptions },
  { label: "J", options: JOptions },
  { label: "L", options: LOptions },
  { label: "M", options: MOptions },
  { label: "O", options: OOptions },
  { label: "P", options: POptions },
  { label: "Q", options: QOptions },
  { label: "R", options: ROptions },
  { label: "S", options: SOptions },
  { label: "T", options: TOptions },
  { label: "V", options: VOptions },
  { label: "Z", options: ZOptions },
];
