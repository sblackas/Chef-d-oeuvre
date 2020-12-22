import React from 'react';
import axios from 'axios' // importer tout ce qu'on utiliser dans le component
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



class SignUp extends React.Component{
state = {
    name: "",
    last_name: "",
    email: "",
    password: "",

};

// Chaque input necessite sa fonction
inputName = event => {
    this.setState({name:event.target.value})
};
inputLastName = event => {
    this.setState({name:event.target.value})
};
inputEmail = event => {
    this.setState({email:event.target.value})
};
inputPassword = event => {
    this.setState({password:event.target.value})
};


// fonction pour notre Submit
handleSubmit = event => {
    event.preventDefault();

    const user = {
        name: this.state.name,
        last_name : this.state.last_name,
        email: this.state.email,
        password: this.state.password
    };

    axios.post('http://localhost:8000/users/sign-up', user)
    .then(res => {
      console.log(res);
      console.log(res.data);
    });
  
}

render() {
  return (
   <div>

<Form onSubmit={this.handleSubmit}> 

<Form.Group controlId="formBasicName" >
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Enter Name" onChange={this.inputName} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="name" placeholder="Enter your last name" onChange={this.inputLastName} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={this.inputEmail} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={this.inputPassword} />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
  </Form> 


          </div>
        )
    }
}

export default SignUp;