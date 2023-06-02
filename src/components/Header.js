import React from 'react';
// creating  a functional component
const Header=() =>{
    return (
        <div className='ui header menu pink '>
            <div className='ui container center '>
            <h2 className='ui center aligned container' style={{marginTop:"8px"}}>Contact Manager</h2>
        </div></div>
    );
}
// exporting Header for using it in App.js
export default Header;