import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function () {
    var nav = useNavigate()
    var s = useSelector(state => { return (state) })
    var [userinp, setUserinp] = useState({ email: "", password: "" })
    function saveData(i) {
        (i.name == "email") ?
            setUserinp({ ...userinp, email: i.value }) :
            setUserinp({ ...userinp, password: i.value })
    }
    function login(e) {
        e.preventDefault();

        if (s.length > 0) {
            s.filter((m) => {
                if ((m.email).includes(userinp.email) && (m.password).includes(userinp.password)) {
                    nav(`/data/${m.email}`)


                }

            })
        }
        else {
            alert("Please Register before Login")
            nav('/register')
        }

    }

    return (
        <div className='loginpage'>
            <div className='loginform '>
                <form className='p-4 rounded'>
                    <div className="mb-3">
                        <label for="Email1" className="form-label"><h4>Email address</h4></label>
                        <input value={userinp.email} onChange={(e) => { saveData(e.target) }} name="email" type="email" className="form-control" id="Email1" placeholder='Enter Register Email' />
                    </div>
                    <div className="mb-3">
                        <label for="Password1" className="form-label"><h4>Password</h4></label>
                        <input value={userinp.password} onChange={(e) => { saveData(e.target) }} name='password' type="password" className="form-control" id="Password1" placeholder='Enter Password' />
                    </div>
                    <div className=' d-flex justify-content-between mt-5'>
                        <button type="submit" className="btn btn-primary" onClick={(e) => { login(e) }} disabled={userinp.email == "" || userinp.password == ""}>Login</button>
                        <button onClick={() => { nav('/register') }} type="submit" className="btn btn-primary ">Register</button>
                    </div>
                </form></div>
        </div>
    )
}
