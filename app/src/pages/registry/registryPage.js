import React, { useState, useEffect } from "react";
import Select from "react-select";
import firebase from "firebase";
import { v4 as uuidv4 } from "uuid";

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
    <div>
      <h1>Registry</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <progress value={uploadValue} max="100" />
          <input type="file" onChange={handleUpload} />
          <img width="320" src={picture} alt="" />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Department:</label>
          <Select
            options={states}
            onChange={(values) => {
              setCities([]);
              setDepartment(values.value);
            }}
          />
        </div>
        <div>
          <label>Ciudad:</label>
          <Select
            options={cities}
            onChange={(values) => {
              setCity(values);
            }}
          />
        </div>
        <div>
          <label>Sales Method:</label>
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
        </div>
        <div>
          <label>Sales Hours:</label>
          <label>open</label>
          <input
            type="text"
            name="open"
            value={openHour}
            onChange={(e) => {
              setOpenHour(e.target.value);
            }}
          />
          <label>close</label>
          <input
            type="text"
            name="close"
            value={closeHour}
            onChange={(e) => {
              setCloseHour(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Commerce Types:</label>
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
        </div>
        <div>
          <label>Specialty:</label>
          <input
            type="text"
            name="specialty"
            value={specialty}
            onChange={(e) => {
              setSpecialty(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Contact:</label>
          <label>Instagram:</label>
          <input
            type="text"
            name="instagram"
            value={instagram}
            onChange={(e) => {
              setInstagram(e.target.value);
            }}
          />
          <label>Facebook:</label>
          <input
            type="text"
            name="facebook"
            value={facebook}
            onChange={(e) => {
              setFacebook(e.target.value);
            }}
          />
          <label>Whatsapp:</label>
          <input
            type="text"
            name="whatsapp"
            value={whatsapp}
            onChange={(e) => {
              setWhatsapp(e.target.value);
            }}
          />
          <label>Web:</label>
          <input
            type="text"
            name="web"
            value={web}
            onChange={(e) => {
              setWeb(e.target.value);
            }}
          />
          <label>Other:</label>
          <input
            type="text"
            name="other"
            value={other}
            onChange={(e) => {
              setOther(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Payment Type:</label>
          <Select
            isMulti
            options={PAYMENT_METHODS}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(values) => {
              setPaymentType(values);
            }}
          />
        </div>
        <div>
          <label>Img:</label>
          <input
            type="hidden"
            name="img"
            value={img}
            onChange={(e) => {
              setImg(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Invitation:</label>
          <input
            type="hidden"
            name="invitation"
            value={invitation}
            onChange={(e) => {
              setInvitation(e.target.value);
            }}
          />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default RegistryPage;
