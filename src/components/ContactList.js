import React from "react";
import ContactCard from "./ContactCard";
// functional component
//  to access props ..pass props in contactlist function as argument
const ContactList = (props) => {
    console.log(props);

    const deleteContactHandler =(id) =>{
      props.getContactId(id);
    }

  // to render props
  const renderContactList = props.contacts.map((contact) => {
    // returning a JSX element
  return <ContactCard contact = {contact} clickHandler={deleteContactHandler} key={contact.id}/>
  });
  return (
    <div className="ui celled list">
        {/* to reference render list */} 
        <h2 className="ui header blue">Contact List</h2>
      {renderContactList}
    </div>
  );
};
export default ContactList;
