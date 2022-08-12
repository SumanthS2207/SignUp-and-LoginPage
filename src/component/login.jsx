import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {

    const movieList = useNavigate();
    
    const [input, setInput] = useState({
        email: "",
        password: "",
    });

    // const [data, setData] = useState([]);

    console.log(input);

    const getData = (e) => {
        const { value, name } = e.target;

        setInput(() => {
            return {
                ...input,
                [name]: value
            }
        })
    }

    const addData = (e) => {
        e.preventDefault();

        const getUser = localStorage.getItem("userinfo");
        console.log(getUser);

        const { email, password } = input;

        if (email.includes("@") && email === "") {
            alert("Enter proper mail ID")
        } else if (password === "" && password.length > 5) {
            alert("Enter password more than 5")
        } else {
            if (getUser && getUser.length) {
                const userData = JSON.parse(getUser);
                const userLogin = userData.filter((el, k) => {
                    return el.email === email && el.password === password
                });
                if (userLogin.length === 0) {
                    alert("invalid details");
                } else {
                    console.log("user login successfully");
                    localStorage.setItem("user_log", JSON.stringify(userLogin));
                    movieList("/Detail")
                }
            }
        }
    }


    return (
        <div>
            <img src="https://www.certifiedfinancialguardian.com/images/blog-wp-login.png" className='img1' alt="signup" />
            <div className='fluid-container'>
                <div>
                    <h1>Sign In</h1>
                </div>
                <div>
                    <form className='information'>
                        <div>
                            <h5>Enter Email</h5>
                            <input type="email" placeholder='Email Id' onChange={getData} name="email" />
                        </div>
                        <div>
                            <h5>Enter Password</h5>
                            <input type="password" placeholder='password' onChange={getData} name="password" />
                        </div>
                        <button type='Submit' onClick={addData} className='submit'>Submit</button>
                    </form>
                    <p className='mt-1'>New User<span><NavLink to='/'>Sign Up</NavLink></span></p>
                </div>
            </div>
        </div>
    )
}

export default Login