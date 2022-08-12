import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../css/pro.css'

const Home = () => {

    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
    });

    const [data, setData] = useState([]);

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
        let { name, email, password, phone } = input;

        if (name.length <= 4) {
            alert("name should be more than 4");
        } else if (email.includes("@") && email === "") {
            alert("Enter proper mail ID")
        } else if (!email.includes("@") && email === "") {
            alert("Enter proper mail ID")
        } else if (password === "" && password.length < 5) {
            alert("Enter password more than 5")
        } else if (phone.length !== 10) {
            alert("Enter Number Properly")
        } else {
            console.log("data addedd successfully");

            localStorage.setItem("userinfo", JSON.stringify([...data, input]))
        }
    }

    return (
        <div>
            <img src="https://www.certifiedfinancialguardian.com/images/blog-wp-login.png" className='img1' alt="signup" />
            <div className='fluid-container'>
                <div>
                    <h1>Sign Up</h1>
                </div>
                <div>
                    <form className='information'>
                        <div>
                            <h5>Enter Name</h5>
                            <input type="text" placeholder='Name' onChange={getData} name="name" className='one' />
                        </div>
                        <div>
                            <h5>Enter Email</h5>
                            <input type="email" placeholder='Email Id' onChange={getData} name="email" />
                        </div>
                        <div>
                            <h5>Enter Password</h5>
                            <input type="password" placeholder='password' onChange={getData} name="password" />
                        </div>
                        <div>
                            <h5>Enter Phone number</h5>
                            <input type="tel" placeholder='Phone Number' onChange={getData} name="phone" />
                        </div>
                        <button type='Submit' onClick={addData} className='submit'>Submit</button>
                    </form>
                    <p className='mt-1'>Already have an account <span><NavLink to="/login">Sign In</NavLink></span></p>
                </div>
            </div>
        </div>
    )
}

export default Home