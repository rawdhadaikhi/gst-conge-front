import React, { Component } from 'react';
import AuthenticationService from "../../services/AuthenticationService";
import { Link } from 'react-router-dom';
import { Container, Col, Row, Form, FormGroup, Button, FormControl } from 'react-bootstrap';
import loginIcon from '../../images/logo.jpg'
import uiImg from '../../images/login.png';
import './Login.css';
import AppNavbar from './AppNavbar';
//import SocialService from '../../services/SocialService';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { Input } from 'reactstrap';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {

      email: "",
      password: "",
      emailSocial:sessionStorage.getItem("email"),
      passwordSocial:"kasdjhfkadhsY776ggTyUU65khaskdjfhYuHAwjnlji",
      error: "",
      token:sessionStorage.getItem("google")
    };
  }

  changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }


  doLogin = async (event) => {
    event.preventDefault();

    AuthenticationService.useractive(this.state.email, this.state.password).then(
      (response) => {
        let ac = response.active;
        console.log(this.ac);
        if (ac == 1) {
          AuthenticationService.signin(this.state.email, this.state.password).then(
            (res) => {
              AuthenticationService.findRole(this.state.email, this.state.password).then(
                (respp)=>{
                  sessionStorage.setItem("UserName", respp.username);
                  sessionStorage.setItem("UserId", respp.id);
                  sessionStorage.setItem("nomloign", respp.nom);
                  sessionStorage.setItem("prenomloign", respp.prenom);
                if(respp.roles=="ROLE_ADMIN"){
                  this.props.history.push('/admin');
                }else{
                  this.props.history.push('/profile');
                }
                  
                  
                  
        
               
                 
                }
              )
             
              
             
            }
          )
        } else if (ac === 0) {
          sessionStorage.setItem("emailactive", this.state.email);
          this.props.history.push('/active');
        } else {
          alert("ereur");
        }
      },

    );
  }
 
    


componentClicked = () => console.log("clicked");
  render() {
    return (
      <div>
           
          <AppNavbar/>
          <div className='login'>
          <h1 className='loginTitle'>Se connecter</h1>
            <div className='wrapperLogin'>
              
              
              <div className='right'>
                <Form  onSubmit={this.doLogin} >
                   <FormGroup>
                  
                  <Input  className='inputF' autoFocus 
                    style={{widh: '25%'}}
                    type="text"
                    name="email" id="email"
                    value={this.state.email}
                    placeholder="Enter email"
                    autoComplete="email"
                    
                    onChange={this.changeHandler}
                  />
                </FormGroup>
                <FormGroup>
                  <Input  className='inputF' type="password" 
                    name="password" id="password"
                    value={this.state.password}
                    placeholder="Enter Password"
                    autoComplete="password"
                    onChange={this.changeHandler}
                  />
                </FormGroup>
  
                <Button  type="submit" variant="success" size="lg" className='submit'>
                  Sign In
                </Button >
                <br></br>
                <Link to="/rezetPasswordSendEamil" className='reset'>Mot de passe oublier</Link>
                </Form>
              </div>
              </div>
              </div>
        </div>

    );
  }
}
export default Login;