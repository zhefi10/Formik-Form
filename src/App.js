import React from "react";
// TODO: import useFormik from formik library
import { useFormik} from 'formik'

function App() {
  // TODO: add a const called formik assigned to useFormik()

const formik = useFormik({
  initialValues: {
    emailField: '',
    password: ''      
  },
  onSubmit: values =>{
    console.log('form:',values);
    alert(JSON.stringify('Login Succesful'));
  },
  validate: values =>{
    let errors = {};
    if(!values.emailField) { errors.emailField = 'Field Required'; } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) {
      errors.emailField = 'Username should be an e-mail';
    }
    if(!values.password) errors.password = 'Field Required';
    return errors;
  }
})

  return (
    <div>
      <p>
        The app is ready! You can proceed with the task instructions. TODO:
        build you form here. 
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div>Username:</div>
        <input id="emailField" type="text" name="emailField" onChange={formik.handleChange} value={formik.values.emailField}/>
        {formik.errors.emailField ? <div id="emailField" style={{color:'red'}}>{formik.errors.emailField}</div> : null}        
        <div>Password:</div>
        <input id="pswField" type="text" name="password" onChange={formik.handleChange} value={formik.values.password}/><br/>
        {formik.errors.password ? <div id="pswField" style={{color:'red'}}>{formik.errors.password}</div> : null}                
        <button id="submitBtn" type="submit">Submit</button>
      </form>      
    </div>
  );
}

export default App;
