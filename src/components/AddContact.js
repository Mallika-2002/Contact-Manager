import React from "react";

// here we create class component using React.Component and we return using render() method
class AddContact extends React.Component {
    state ={
        name:"",
        email:"",
        phone:""
    };
    add = (e)=>{
        e.preventDefault();
        if(this.state.name==="" || this.state.email==="" || this.state.phone===""){
alert("All fields are mandatory");
return 
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"",email:"",phone:""});
        console.log(this.state);
    
    }
  render() {
    return (
      <div className="ui main">
        <h2 className="ui header blue">Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name </label>
            <input type="text" placeholder="Name" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} />
          </div>
          <div className="field">
            <label>Email </label>
            <input type="email" placeholder="xyz@gmail.com" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} />
          </div>
          <div className="field">
            <label>Phone Number </label>
            <input type="number" placeholder="Phone Number" value={this.state.phone} onChange={(e) => this.setState({phone: e.target.value})} />
          </div>
          <button className="ui button green" style={{justifyContent:'center'}} >Add</button>
        </form>
      </div>
    );
  }
}
export default AddContact;
