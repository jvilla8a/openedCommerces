import React, { useState, useEffect } from "react";
import Select from "react-select";
import firebase from "firebase";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import ReCAPTCHA from "react-google-recaptcha";

import {
  FIREBASE_CONFIG,
  DATA_BASE_URL,
  PAYMENT_METHODS,
  SALES_METHODS,
  RECAPTCHA_KEY_DEV,
} from "./registry.constants";
import { createCitiesURL } from "./registry.utils";

const defaultProject = firebase.initializeApp(FIREBASE_CONFIG);
defaultProject.storage();
const defaultFirestore = defaultProject.firestore();

const RegistryPage = () => {
  // Form Information
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [disabledInv, setDisabledInv] = useState(false);
  const [captcha, setCaptcha] = useState(false);
  const [disableRegistry, setDisabledRegistry] = useState(true);

  // Data from Form
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [department, setDepartment] = useState("");
  const [city, setCity] = useState("");
  const [salesMethods, setSalesMethods] = useState([]);
  const [openHour, setOpenHour] = useState("");
  const [closeHour, setCloseHour] = useState("");
  const [commerceTypes, setCommerceTypes] = useState([]);
  const [specialty, setSpecialty] = useState("");
  const [description, setDescription] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [web, setWeb] = useState("");
  const [email, setEmail] = useState("");
  const [other, setOther] = useState("");
  const [paymentType, setPaymentType] = useState([]);
  const [invitation, setInvitation] = useState("");
  const [uploadValue, setUploadValue] = useState(0);
  const [picture, setPicture] = useState("");

  const getStates = () => {
    // eslint-disable-next-line no-undef
    fetch(DATA_BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        const selectData = Array.from(new Set(data.map((x) => x.departamento)));
        setStates(
          selectData.map((state) => ({
            value: state,
            label: state,
          }))
        );
      });
  };

  const getCities = (state) => {
    if (state) {
      // eslint-disable-next-line no-undef
      fetch(createCitiesURL(state))
        .then((res) => res.json())
        .then((data) => {
          const selectData = Array.from(new Set(data.map((x) => x.municipio)));
          setCities(
            selectData.map((City) => ({
              value: City,
              label: City,
            }))
          );
        });
    }
  };

  useEffect(() => {
    getStates();
    if (document.location.search.split("id=")[1]) {
      setDisabledInv(true);
      setInvitation(document.location.search.split("id=")[1] || "");
    }
  }, []);

  useEffect(() => {
    if (department) getCities(department);
  }, [department]);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref(`/fotos/${file.name}`);
    const task = storageRef.put(file);

    task.on(
      "state_changed",
      (snapshot) => {
        const percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadValue(percentage);
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        setUploadValue(100);
        storageRef.getDownloadURL().then((downloadUrl) => {
          const imagen = downloadUrl;
          setPicture(imagen);
        });
      }
    );
  };

  const handleSubmit = () => {
    const data = {
      id,
      name,
      phone,
      address,
      email,
      city,
      department,
      salesMethods,
      salesHours: {
        openHour,
        closeHour,
      },
      commerceTypes,
      specialty,
      description,
      contact: {
        instagram,
        facebook,
        whatsapp,
        web,
        other,
      },
      paymentType,
      img: picture,
      invitation,
    };

    defaultFirestore
      .collection("shops")
      .add(data)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  const handleCaptchaUpdate = (value) => {
    setCaptcha(!!value);
  };

  const validateForm = () => {
    setDisabledRegistry(true);

    if (!captcha) return false;
    if (!picture) return false;
    if (!name) return false;
    if (!phone) return false;
    if (!address) return false;
    if (!department) return false;
    if (!city) return false;
    if (!salesMethods) return false;
    if (!openHour) return false;
    if (!closeHour) return false;
    if (!specialty) return false;
    if (!paymentType) return false;

    setDisabledRegistry(false);
  };

  useEffect(() => {
    validateForm();
  }, [
    captcha,
    picture,
    name,
    phone,
    address,
    department,
    city,
    salesMethods,
    openHour,
    closeHour,
    specialty,
    paymentType,
  ]);

  return (
    <Registry>
      <Container>
        <Title>Registro</Title>
        <InputGroup className="image">
          <div>
            <input
              type="file"
              name="image"
              id="image"
              onChange={handleUpload}
            />
            <label htmlFor="image">Cargar Logo*</label>
            {uploadValue !== 0 ? (
              <progress value={uploadValue} max="100" />
            ) : (
              ""
            )}
          </div>
          <div>
            <Image src={picture} alt="" />
          </div>
        </InputGroup>
        <InputGroup>
          <InputControl>
            <label htmlFor="name">Nombre*</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (!id) setId(uuidv4());
              }}
            />
          </InputControl>
          <div />
        </InputGroup>
        <InputGroup>
          <InputControl>
            <label htmlFor="phone">Teléfono*</label>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </InputControl>
          <div />
        </InputGroup>
        <InputGroup>
          <InputControl>
            <label htmlFor="address">Dirección*</label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </InputControl>
          <div />
        </InputGroup>
        <InputGroup>
          <div>
            <label htmlFor="states">Departamento*</label>
            <Select
              options={states}
              name="states"
              onChange={(values) => {
                setCities([]);
                setDepartment(values.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="cities">Ciudad*</label>
            <Select
              options={cities}
              name="cities"
              onChange={(values) => {
                setCity(values.value);
              }}
            />
          </div>
        </InputGroup>
        <InputSingle>
          <label htmlFor="SalesMethod">Tipo de Venta*</label>
          <Select
            isMulti
            name="SalesMethod"
            options={SALES_METHODS}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(values) => {
              setSalesMethods(
                values && values.length
                  ? values.map((value) => value.value)
                  : []
              );
            }}
          />
        </InputSingle>
        <InputGroup>
          <InputControl>
            <label htmlFor="open">Hora de Apertura*</label>
            <input
              type="text"
              name="open"
              value={openHour}
              onChange={(e) => {
                setOpenHour(e.target.value);
              }}
            />
          </InputControl>
          <InputControl>
            <label htmlFor="close">Hora de Cierre*</label>
            <input
              type="text"
              name="close"
              value={closeHour}
              onChange={(e) => {
                setCloseHour(e.target.value);
              }}
            />
          </InputControl>
        </InputGroup>
        <Separator />
        <InputGroup>
          <div>
            <label htmlFor="commerces">Tipo de Comercio*</label>
            <Select
              defaultValue={commerceTypes}
              isMulti
              name="commerces"
              options={commerceTypes}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={(values) => {
                setCommerceTypes(values);
              }}
            />
          </div>
          <InputControl>
            <label htmlFor="specialty">Especialidad*</label>
            <input
              type="text"
              name="specialty"
              value={specialty}
              onChange={(e) => {
                setSpecialty(e.target.value);
              }}
            />
          </InputControl>
        </InputGroup>
        <InputSingle>
          <InputControl className="single">
            <label htmlFor="description">Descripción*</label>
            <textarea
              name="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </InputControl>
        </InputSingle>
        <InputSingle>
          <label htmlFor="paymentMethods">Tipos de Pago*</label>
          <Select
            isMulti
            options={PAYMENT_METHODS}
            name="paymentMethods"
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(values) => {
              setPaymentType(
                values && values.length
                  ? values.map((value) => value.value)
                  : null
              );
            }}
          />
        </InputSingle>
        <Separator />
        <InputGroup>
          <InputControl>
            <label htmlFor="instagram">Instagram</label>
            <input
              type="text"
              name="instagram"
              value={instagram}
              onChange={(e) => {
                setInstagram(e.target.value);
              }}
            />
          </InputControl>
          <InputControl>
            <label htmlFor="facebook">Facebook</label>
            <input
              type="text"
              name="facebook"
              value={facebook}
              onChange={(e) => {
                setFacebook(e.target.value);
              }}
            />
          </InputControl>
        </InputGroup>
        <InputGroup>
          <InputControl>
            <label htmlFor="whatsapp">Whatsapp</label>
            <input
              type="text"
              name="whatsapp"
              value={whatsapp}
              onChange={(e) => {
                setWhatsapp(e.target.value);
              }}
            />
          </InputControl>
          <InputControl>
            <label htmlFor="web">Página Web</label>
            <input
              type="text"
              name="web"
              value={web}
              onChange={(e) => {
                setWeb(e.target.value);
              }}
            />
          </InputControl>
        </InputGroup>
        <InputGroup>
          <InputControl>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </InputControl>
          <InputControl>
            <label htmlFor="other">Otro</label>
            <input
              type="text"
              name="other"
              value={other}
              onChange={(e) => {
                setOther(e.target.value);
              }}
            />
          </InputControl>
        </InputGroup>
        <Separator />
        <InputGroup>
          <InputControl>
            <label htmlFor="invitation">Codigo de Invitación</label>
            <input
              type="text"
              name="invitation"
              value={invitation}
              onChange={(e) => {
                setInvitation(e.target.value);
              }}
              disabled={disabledInv}
            />
          </InputControl>
          <div />
        </InputGroup>
        <Separator />
        <SubmitRow>
          <div>
            <ReCAPTCHA
              sitekey={RECAPTCHA_KEY_DEV}
              onChange={handleCaptchaUpdate}
            />
          </div>
          <div className="left">
            <Button disabled={disableRegistry} onClick={handleSubmit}>
              Registrarse
            </Button>
          </div>
        </SubmitRow>
      </Container>
    </Registry>
  );
};

const Registry = styled.div`
  margin: 20px;
`;

const Container = styled.div`
  max-width: 800px;
  background-color: #ffffff;
  margin: 0px auto;
  padding: 20px 50px;
  box-sizing: border-box;

  input: {
    border: 1px solid #cccccc;
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const Image = styled.img`
  max-width: 100%;
  object-fit: contain;
  border: 1px solid #cccccc;
  padding: 3px;
  border-radius: 3px;
  box-sizing: border-box;
`;

const InputControl = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  &.single {
    width: 100%;
  }

  & > div:first-of-type {
    margin-right: 5px;
  }

  & > div:last-of-type {
    margin-left: 5px;
  }

  input,
  textarea {
    height: 38px;
    padding-left: 10px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
  }
  input:focus,
  textarea:focus {
    border: 2px solid #2684ff;
    outline: 0px;
  }

  textarea {
    resize: none;
    height: 100px;
    padding-top: 10px;
  }
`;

const InputGroup = styled.div`
  display: flex;
  margin-bottom: 15px;

  & > div:first-of-type {
    margin-right: 5px;
  }

  & > div:last-of-type {
    margin-left: 5px;
  }

  & > div {
    width: 50%;
    box-sizing: border-box;
  }

  &.image {
    height: 60px;

    input {
      width: 0.1px;
      height: 0.1px;
      opacity: 0;
      overflow: hidden;
      position: absolute;
      z-index: -1;
    }

    input + label {
      width: 100%;
      font-size: 14px;
      font-weight: bold;
      color: white;
      background-color: black;
      display: inline-block;
      cursor: pointer;
      text-align: center;
      padding: 8px 20px;
      box-sizing: border-box;
      border-radius: 4px;
    }

    input:focus + label,
    input + label:hover {
      background-color: #2684ff;
    }

    progress {
      width: 100%;
    }
  }
`;

const InputSingle = styled.div`
  margin-bottom: 15px;
`;

const Button = styled.button`
  background-color: #000000;
  color: #ffffff;
  border: none;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  padding: 8px 20px;
  box-sizing: border-box;
  border-radius: 4px;

  &:hover {
    background-color: #2684ff;
  }

  &:disabled {
    background-color: #cccccc;
    color: #696969;
    cursor: not-allowed;
  }
`;

const Separator = styled.hr`
  margin: 25px 0;
  border: 1px solid #efefef;
`;

const SubmitRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default RegistryPage;
