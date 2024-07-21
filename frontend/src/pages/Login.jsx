import React from 'react'
import { useState } from "react";

const Login = () => {
  
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:"",
    
  }) 

  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async () => {
    console.log(formData)
    let responseData;
    await fetch('https://ecommerce-website-codesoft.onrender.com/api/users/login', {
      method: 'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json'
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)
    
    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    } 
    else{
      alert(responseData.errors)
    }
  }

  const sign_up = async () => {
    console.log("Signup function executed", formData);
    try {
      const responseData = await fetch('https://ecommerce-website-codesoft.onrender.com/api/users/register', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      }).then((response) => response.json());
  
      console.log('Response Data:', responseData); // Log the response data
  
      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace("/");
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while signing up. Please try again.');
    }
  };


  return (
    <section className="max_padd_container flexCenter flex-col pt-32">
      <div className="max-w-[555px] h-[600px] bg-white m-auto px-14 py-10 rounded-md">
        <h3 className="text-black_color text-3xl font-bold ">{state}</h3>
        <div className="flex flex-col gap-4 mt-7">
          {state==="Sign Up"?<input name='name' value={formData.name} onChange={changeHandler} type="text" placeholder="Your Name" className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl" />: <></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="text" placeholder="Email" className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl" />
          <input name='password' value={formData.password} onChange={changeHandler} type="text" placeholder="Password" className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl" />
        </div>
        <button onClick={()=>{state==="Login"?login():sign_up()}} className="bg-black_color text-white my-5 w-full rounded-md py-2 px-4 hover:bg-gray-800 transition-colors">Continue</button>
        {state==="Sign Up"?<p className="text-black font-bold"> Already have an account? <span onClick={()=>{setState("Login")}} className="text-secondary underline cursor-pointer">Login</span>
</p>:<p className="text-black font-bold"> Don't have an account? <span onClick={()=>{setState("Sign Up")}} className="text-secondary underline cursor-pointer">Register</span> Here</p>}

        
        <div className="flexCenter mt-6 gap-3">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </section>
  )
}

export default Login