import React, { useState, useEffect } from "react";
import Select from "react-select";
import firebase from "firebase";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

import {
  FIREBASE_CONFIG,
  DATA_BASE_URL,
  PAYMENT_METHODS,
  SALES_METHODS,
} from "./registry.constants";
import { createCitiesURL } from "./registry.utils";

const RegistryPage = () => {
  // Form Information
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

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
  const [other, setOther] = useState("");
  const [paymentType, setPaymentType] = useState([]);
  const [img, setImg] = useState("");
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

  const getCities = () => {
    if (department) {
      // eslint-disable-next-line no-undef
      fetch(createCitiesURL(department))
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
    firebase.initializeApp(FIREBASE_CONFIG).storage();
    getStates();
  }, []);

  useEffect(() => {
    getCities();
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
          setId(uuidv4());
        });
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id,
      name,
      phone,
      address,
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
    console.log(data);
  };

  return (
    <Registry>
      <Container>
        <Title>Registro</Title>
        <ImageControl>
          <div>
            <input
              type="file"
              name="image"
              id="image"
              onChange={handleUpload}
            />
            <label htmlFor="image">Cargar Imagen</label>
            {uploadValue !== 0 ? (
              <progress value={uploadValue} max="100" />
            ) : (
              ""
            )}
          </div>
          <div>
            <Image src={picture} alt="" />
          </div>
        </ImageControl>
        <InputGroup>
          <InputControl>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </InputControl>
          <div />
        </InputGroup>
        <InputGroup>
          <InputControl>
            <label>Teléfono:</label>
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
            <label>Dirección:</label>
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
            <label>Departamentos:</label>
            <Select
              options={states}
              onChange={(values) => {
                setCities([]);
                setDepartment(values.value);
              }}
            />
          </div>
          <div>
            <label>Ciudades:</label>
            <Select
              options={cities}
              onChange={(values) => {
                setCity(values);
              }}
            />
          </div>
        </InputGroup>
        <InputSingle>
          <label>Tipo de Venta:</label>
          <Select
            isMulti
            name="SalesMethod"
            options={SALES_METHODS}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(values) => {
              setSalesMethods(values);
            }}
          />
        </InputSingle>
        <InputGroup>
          <InputControl>
            <label>Hora de Apertura</label>
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
            <label>Hora de Cierre</label>
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
        <InputSingle>
          <label>Tipo de Comercio:</label>
          <Select
            defaultValue={commerceTypes}
            isMulti
            name="colors"
            options={commerceTypes}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(values) => {
              setCommerceTypes(values);
            }}
          />
        </InputSingle>
        <InputGroup>
          <InputControl>
            <label>Especialidad:</label>
            <input
              type="text"
              name="specialty"
              value={specialty}
              onChange={(e) => {
                setSpecialty(e.target.value);
              }}
            />
          </InputControl>
          <InputControl>
            <label>Descripción:</label>
            <input
              type="text"
              name="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </InputControl>
        </InputGroup>
        <InputGroup>
          <InputControl>
            <label>Instagram:</label>
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
            <label>Facebook:</label>
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
            <label>Whatsapp:</label>
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
            <label>Página Web:</label>
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
            <label>Otro:</label>
            <input
              type="text"
              name="other"
              value={other}
              onChange={(e) => {
                setOther(e.target.value);
              }}
            />
          </InputControl>
          <div />
        </InputGroup>
        <InputSingle>
          <label>Tipos de Pago:</label>
          <Select
            isMulti
            options={PAYMENT_METHODS}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(values) => {
              setPaymentType(values);
            }}
          />
        </InputSingle>
        <InputGroup>
          <InputControl>
            <label>Codigo de Invitación:</label>
            <input
              type="text"
              name="invitation"
              value={invitation}
              onChange={(e) => {
                setInvitation(e.target.value);
              }}
            />
          </InputControl>
          <div />
        </InputGroup>
        <div>
          <Button>Registrarse</Button>
        </div>
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

const ImageControl = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 60px;

  & div:first-of-type {
    width: 50%;
  }

  & div:last-of-type {
    position: absolute;
    top: -7px;
    right: 0px;
  }

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
`;

const Image = styled.img`
  max-width: 400px;
  object-fit: contain;
  border: 1px solid #cccccc;
  padding: 3px;
  border-radius: 3px;
`;

const InputControl = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  & > div:first-of-type {
    margin-right: 5px;
  }

  & > div:last-of-type {
    margin-left: 5px;
  }

  input {
    height: 38px;
    padding-left: 5px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  input:focus {
    border: 2px solid #2684ff;
    outline: 0px;
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
`;

export default RegistryPage;
