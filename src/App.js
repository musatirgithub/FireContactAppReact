import Table from "./components/table/Table";
import Form from "./components/form/Form";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const usersCollectionRef = collection(db, "contacts");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState("");

  const getContacts = async () => {
    const data = await getDocs(usersCollectionRef);
    setContacts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const createContact = async () => {
    await addDoc(usersCollectionRef, {
      name: name,
      phone: phone,
      gender: gender,
    });
  };

  const bringContact = async (id, name, phone, gender) => {
    setName(name);
    setPhone(phone);
    setGender(gender);
  };

  
  const updateContact = async (editId) => {
    const contactDoc = doc(db, "contacts", editId);
    const newFields = { 'name':name, 'phone': phone, 'gender': gender };
    await updateDoc(contactDoc, newFields);
    setEdit(false);
    getContacts();
    setName('');
    setPhone('');
    setGender('');
  };

  const deleteContact = async (id) => {
    const contactDoc = doc(db, "contacts", id);
    await deleteDoc(contactDoc);
    getContacts();
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className="main-container">
      <Form
        setName={setName}
        setPhone={setPhone}
        setGender={setGender}
        createContact={createContact}
        getContacts={getContacts}
        name={name}
        phone={phone}
        gender={gender}
        setEditId={setEditId}
        edit={edit}
        updateContact={updateContact}
        editId={editId}/>
      <Table
        contacts={contacts}
        bringContact={bringContact}
        getContacts={getContacts}
        deleteContact={deleteContact}
        setEditId={setEditId}  
        setEdit={setEdit}
      />
    </div>
  );
}

export default App;
