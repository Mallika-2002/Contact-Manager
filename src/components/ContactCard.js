import React from 'react';
// import { useReducer } from 'react';
import user from "../images/user.png";
const ContactCard=(props) => {
    const {id,name,email,phone} = props.contact;
    return (
    
        <div className="item">
            <img className='ui avatar image' src={user} alt="user"/>
          <div className="content">
            <div className="header">{name}</div>
            <div>{phone}</div>
            <div>{email}</div>
          </div>
          {/* to add trash icon */}
          <i className="trash alternate outline icon" style={{color:"red", marginTop:"7px"}} onClick={()=> props.clickHandler(id)}></i>
        </div>
      );
}
export default ContactCard;