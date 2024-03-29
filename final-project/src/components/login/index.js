import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        const testMail = "giorgi@gmail.com";
        const testPass = "giorgi123";

        if(email === testMail && password===testPass){
            const testToken = "token123";
            sessionStorage.setItem("token", testToken);
            window.location.href = "/home/s";
        }else{
            alert("Incorrect e-mail or password")
        }
    }
  return (
    <>
        <section class="vh-100 gradient-custom">
            <form class="container py-5 h-100" onSubmit={handleSubmit}>
                <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card bg-dark text-white" >
                        <div class="card-body p-5 text-center">
                            <div class="mb-md-5 mt-md-4 pb-5">
                                <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                                <p class="text-white-50 mb-5">Please enter your login and password!</p>
                                <div class="form-outline form-white mb-4">
                                    <input type="email" id="typeEmailX" class="form-control form-control-lg" placeholder='E-mail' 
                                    onChange={
                                        (e)=>setEmail(e.target.value)
                                    }
                                    value={email}
                                    />
                                </div>
                                <div class="form-outline form-white mb-4">
                                    <input type="password" id="typePasswordX" class="form-control form-control-lg" placeholder='Password'
                                    onChange={
                                        (e)=>setPassword(e.target.value)
                                    }
                                    value={password}
                                    />
                                </div>
                                <p class="small mb-5 pb-lg-2"><a class="text-white-50">Forgot password?</a></p>
                                <button class="btn btn-outline-light btn-lg px-5" type="submit"  >Login</button>
                            </div>
                            <div>
                                <p class="mb-0">Don't have an account? 
                                    <a class="text-white-50 fw-bold" >Sign Up</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </form>
        </section>
    </>
  )
}

export default Login