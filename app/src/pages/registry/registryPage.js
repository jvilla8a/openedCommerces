import React, {useState} from "react";
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import firebase from 'firebase';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from "react";

let firebaseConfig = {
  apiKey: 'AIzaSyDKYG7Wt_IyYoMkfu1pnlc5XOBRH5E-foc',
  storageBucket: 'gs://openedcommerces.appspot.com'
}

firebase.initializeApp(firebaseConfig).storage();


const RegistryPage = () => {

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [depatament, setDepartment] = useState('');
  const [salesMethod, setSalesMethod] = useState([]);
  const [open, setOpen] = useState('');
  const [close, setClose] = useState('');
  const [commerceTypes, setCommerceTypes] = useState([]);
  const [specialty, setSpecialty] = useState('');
  const [description, setDescription] = useState('');
  const [instagram, setInstagram] = useState('');
  const [facebook, setFacebook] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [web, setWeb] = useState('');
  const [other, setOther] = useState('');
  const [paymentType, setPaymentType] = useState([]);
  const [img, setImg] = useState('');
  const [invitation, setInvitation] = useState('');
  const [uploadValue, setUploadValue] = useState(0);
  const [picture, setPicture] = useState('');
  const [location, setLocation] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);

  useEffect(() => {
    getLocations();
  },[])

  const cosas = [{value:"comida",label: "comida"},{value:"deporte", label: "deporte"},{value:"regalos",label:"regalos"}];
  let imagen;
  let handleUpload = (e) => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref(`/fotos/${file.name}`);
    const task = storageRef.put(file);

    task.on('state_changed', snapshot => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setUploadValue(percentage);
    }, error => {
      console.log(error.message);
    }, () => {
      setUploadValue(100);
      storageRef.getDownloadURL().then((downloadUrl) => {
        imagen = downloadUrl;
        setPicture(imagen);
        setId(uuidv4());
      })     
    });
  }

  let handleSubmit = (e) => { 
    e.preventDefault();
    let data = {
      id: id,
      name: name,
      phone: phone,
      address: address,
      city: city,
      depatament: depatament,
      salesMethod: salesMethod,
      salesHours: {
        open: open,
        close: close
      },
      commerceTypes: commerceTypes,
      specialty: specialty,
      description: description,
      contact: {
        instagram: instagram,
        facebook: facebook,
        whatsapp: whatsapp,
        web: web,
        other: other
      },
      paymentType: paymentType,
      img: picture,
      invitation: invitation
    }
    console.log(data);
  }
  

  let getLocations = () => {
    let datos;
    fetch('https://www.datos.gov.co/resource/xdk5-pm3f.json')
      .then(res => res.json())
      .then(data => {const resultado = Array.from(new Set(data.map(s => s.departamento)))
        .map(departamento => {
            return {
              departamento: departamento,
            };
        });
        setDepartamentos(resultado);
        console.log(resultado);});
  }


  return (
    <div>
      <h1>Registry</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <progress value={uploadValue} max="100"></progress>
          <input type="file" onChange={handleUpload} ></input>
          <img width="320" src={picture} alt=""/>
        </div>
        <div>
          <label>
            Name:
          </label>
          <input type="text" name="name" value={name} onChange={(e) => {setName(e.target.value)}}/>

        </div>
        <div>
          <label>
            Phone:
          </label>
          <input type="text" name="phone" value={phone} onChange={(e) => {setPhone(e.target.value)}}/>

        </div>
        <div>
          <label>
            Address:
          </label>
          <input type="text" name="address" value={address} onChange={(e) => {setAddress(e.target.value)}}/>

        </div>
        <div>
          <label>
            City:
          </label>
          <input type="text" name="city" value={city} onChange={(e) => {setCity(e.target.value)}}/>

        </div>
        <div>
          <label>
            Department:
          </label>
          <AsyncSelect
            defaultValue={salesMethod}
            isMulti
            name="colors"
            isLoading ="true"
            loadOptions={departamentos}
            cacheOptions = "true"
            className="basic-multi-select"
            classNamePrefix="select"
            onInputChange={getLocations}
          />
        </div>
        <div>
          <label>
            Sales Method:
          </label>
          <Select
            defaultValue={salesMethod}
            isMulti
            name="colors"
            options={cosas}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={((values) => {setSalesMethod(values)})}
          />

        </div>
        <div>
          <label>
            Sales Hours:
          </label>
          <label>
            open
          </label>
          <input type="text" name="open" value={open} onChange={(e) => {setOpen(e.target.value)}}/>
          <label>close</label>
          <input type="text" name="close" value={close} onChange={(e) => {setClose(e.target.value)}}/>
        </div>
        <div>
          <label>
            Commerce Types:
          </label>
          <Select
            defaultValue={commerceTypes}
            isMulti
            name="colors"
            options={cosas}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={((values) => {setCommerceTypes(values)})}
          />
        </div>
        <div>
          <label>
            Specialty:
          </label>
          <input type="text" name="specialty" value={specialty} onChange={(e) => {setSpecialty(e.target.value)}}/>

        </div>
        <div>
          <label>
            Description:
          </label>
          <input type="text" name="description" value={description} onChange={(e) => {setDescription(e.target.value)}}/>

        </div>
        <div>
          <label>
            Contact:
          </label>
          <label>
            Instagram:
          </label>
          <input type="text" name="instagram" value={instagram} onChange={(e) => {setInstagram(e.target.value)}}/>
          <label>
            Facebook:
          </label>
          <input type="text" name="facebook" value={facebook} onChange={(e) => {setFacebook(e.target.value)}}/>
          <label>
            Whatsapp:
          </label>
          <input type="text" name="whatsapp" value={whatsapp} onChange={(e) => {setWhatsapp(e.target.value)}}/>
          <label>
            Web:
          </label>
          <input type="text" name="web" value={web} onChange={(e) => {setWeb(e.target.value)}}/>
          <label>
            Other:
          </label>
          <input type="text" name="other" value={other} onChange={(e) => {setOther(e.target.value)}}/>

        </div>
        <div>
          <label>
            Payment Type:
          </label>
          <Select
            defaultValue={paymentType}
            isMulti
            name="colors"
            options={cosas}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={((values) => {setPaymentType(values)})}
          />

        </div>
        <div>
          <label>
            Img:
          </label>
          <input type="hidden" name="img" value={img} onChange={(e) => {setImg(e.target.value)}}/>

        </div>
        <div>
          <label>
            Invitation:
          </label>
          <input type="hidden" name="invitation" value={invitation} onChange={(e) => {setInvitation(e.target.value)}}/>

        </div>
        <div>
          <input type="submit" value="Submit"/>
        </div>
      </form>
    </div>
  )
};

export default RegistryPage;
