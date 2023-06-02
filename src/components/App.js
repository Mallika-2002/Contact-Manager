//  use State to change State 
//  useEffect to use local storage to store data
import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './Header';
import ContactList from './ContactList';
import ContactCard from './ContactCard';
import AddContact from './AddContact';
import {v4 as uuid} from 'uuid';

// to display contact list -- creating array of contacts
// const contacts=[
//   {
//     id:"1",
//     name:"Prats",
//     email:"prats@gmail.com",
//     phone: "9878896756"
//    },
//   {
//     id:"2",
//     name:"Mallika",
//     email:"mall@gmail.com",
//     phone: "9878897886"
//   }
// ]
function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  // using states to create reactive contact list 
const [contacts, setContacts] = useState(
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
);

const addContactHandler =(contact) =>{
  console.log(contact);
  setContacts([...contacts,{id:uuid(), ...contact}]);
};

// to delete contact
const removeContactHandler = (id) =>{
  const newContactList = contacts.filter((contact)=>{
    return contact.id !== id;
  });
  setContacts(newContactList);
};
// for retreiving data from local storage------- even after refresh the data is not deleted
//  JSON.parse is used to parse the string from local storage
useEffect(()=> {
  const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if(retriveContacts) setContacts(retriveContacts);
  },[]);

// for entering data into local storage
useEffect(()=> {
localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
},[contacts]);


  return (
   <div className='ui container'> 
    <Header />
    <AddContact addContactHandler={addContactHandler}/>
    {/* use props to pass data to parent */}
    <ContactList contacts={contacts} getContactId={removeContactHandler}/>
   
   </div>
  );
}

export default App;
