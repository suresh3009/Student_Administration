import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { add } from '../redux/Action'

export default function () {
  var [arr, setArr] = useState([])
  var dispatch = useDispatch()

  var nav = useNavigate()
  var [SDetails, setSDetails] = useState({
    firstname: "", lastname: "", email: "", password: "", gender: "", age: 0, photo: ""
  })
  function setData(i) {
    if (i.name == "first") {
      setSDetails({ ...SDetails, firstname: i.value })
    }
    else if (i.name == "last") {
      setSDetails({ ...SDetails, lastname: i.value })
    }
    else if (i.name == "email") {
      setSDetails({ ...SDetails, email: i.value })
    }
    else if (i.name == "password") {
      setSDetails({ ...SDetails, password: i.value })
    }
    else if (i.name == "gender") {
      setSDetails({ ...SDetails, gender: i.value })
    }
    else if (i.name == "age") {
      setSDetails({ ...SDetails, age: i.value })
    }
    else if (i.name == "photo") {
      setSDetails({ ...SDetails, photo: i.value })
    }
  }
  var g = ["Male", "Female"]
  function register(e) {
    e.preventDefault();
    dispatch(add(SDetails));
    alert("registered succsessful")
    nav('/login')
    setSDetails({ ...SDetails, firstname: "", lastname: "", email: "", password: "", age: 0, photo: "" })
  }
  return (
    <div className='register'>

      <div className="App registerdiv rounded ">
        <form className='m-2 form1 p-4 rounded'>
          <div className="mb-3">
            <label for="First" className="form-label"><h4>First Name</h4></label>
            <input value={SDetails.firstname} name="first" onChange={(e) => setData(e.target)} type="text" className="form-control" id="First" placeholder='Enter First Name' />
          </div>
          <div className="mb-3">
            <label for="Last" className="form-label"><h4>Last Name</h4></label>
            <input name="last" value={SDetails.lastname} onChange={(e) => setData(e.target)} type="text" className="form-control" placeholder='Enter Last Name' id="Last" />
          </div>
          <div className="mb-3">
            <label for="Email1" className="form-label"><h4>Email address</h4></label>
            <input name="email" value={SDetails.email} onChange={(e) => setData(e.target)} type="email" className="form-control" placeholder='Enter Email' id="Email1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label for="Password1" className="form-label"><h4>Password</h4></label>
            <input name="password" value={SDetails.password} onChange={(e) => setData(e.target)} type="password" className="form-control" placeholder='Create Password' id="Password1" />
          </div>
          <label for="gender"><h4>Gender</h4></label><br />

          <div className="mb-3">
            {g.map(i => {
              return (<>
                <input onChange={(e) => { setData(e.target) }} className="form-check-input ms-1" type="radio" name="gender" value={i} id={i} />
                <lable for={i}><b className='ms-1 '>{i}</b></lable>
                <br />
              </>)
            })}
            <div className="mb-3">
              <label for="Age" className="form-label"><h4>Age</h4></label>
              <input name="age" value={SDetails.age} onChange={(e) => setData(e.target)} type="Number" className="form-control" placeholder='Enter Your Age' id="Age" />
            </div>
            <div className="mb-3">
              <label for="photo" className="form-label"><h4>Photo</h4></label>
              <input name="photo" value={SDetails.photo} onChange={(e) => setData(e.target)} type="file" className="form-control" id="photo" />
            </div>
          </div>
          <div className='d-flex justify-content-between'>
            <button type="submit" className="btn btn-primary" onClick={(e) => { register(e) }}>Register</button>
            <button onClick={() => { nav('/login') }} type="submit" className="btn btn-primary ">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}
