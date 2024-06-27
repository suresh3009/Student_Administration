import React from 'react'
import { useSelector } from 'react-redux'
import nopic from '../No-Photo.jpg'
import nopic2 from '../nopic2.jpg'
import { useNavigate } from 'react-router-dom'

export default function () {
  var n = useNavigate()
  var s = useSelector(state => { return (state) })
  return (
    <>
      <div className='databg' >
        <button className="m-2 btn btn-success text-white" onClick={() => n('/')}><i className="fa-solid fa-arrow-left"></i>  Home</button>
        <div className='d-flex justify-content-evenly flex-wrap'>{s.map((i) => {
          return (
            <div className="card border border-dark p-3" style={{ width: "18rem;" }}>
              <img src={(i.gender.includes("Male")) ? nopic : nopic2} width={250} style={{ border: "2px solid black" }} />
              <div className="card-body">
                <h5 className="card-title">{i.firstname} {i.lastname}</h5>
              </div>
            </div>
          )
        })}
        </div>
      </div>
    </>
  )
}
