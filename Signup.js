import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import './Signupstyle.css';
function Signup() {
    const history = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/Signup", {
                email, password
            })
                .then(res => {
                    if (res.data == "exist") {
                        alert("user already exist")
                        //history("/Home",{state:{id:email}})
                    }
                    else if (res.data == "notexist") {
                        history("/Home", { state: { id: email } })
                    }
                })
                .catch(e => {
                    alert("worng details")
                    console.log(e);
                })
        }
        catch (e) {
            console.log(e)
        }
    }
    return (
        <div className="logins">
            <div className="inputboxs">
                <div className="inputss">
                    <img className='logokpr1s' src="./image/kpr1.png" alt='KPR' />
                    <h1>SIGN UP</h1>
                    <p className="text">On Duty Requisition Portal</p>
                    <from action="POST">
                        <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" className="enter" name="" id="" />
                        <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" className="enters" name="" id="" />
                        <button onClick={submit} className="subms">Sign Up</button>  
                    </from>
                    <Link to="/" className="next">Back to Log in</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup