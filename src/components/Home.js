import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../images/logo.jpeg"
import logo1 from "../images/logo1.jpeg"
import i1 from '../images/image1.webp'
import i2 from '../images/image2.jpg'
import i3 from '../images/image3.webp'
import i4 from '../images/image4.jpg'
import i5 from '../images/image5.jpg'
import Soprts from '../Soprts'
import Placements from '../Placements'
import Facilities from '../Facilities'


export default function () {

  var se = useState(state => { return (state) })
  var [ci, setCi] = useState(0);
  var slides = [
    { url: i1 },
    { url: i2 },
    { url: i3 },
    { url: i4 },
    { url: i5 },
  ]
  
  const z = {
    backgroundImage: `url(${slides[ci].url})`,
    width: '50%',
    height: '95%',
    backgroundSize: "cover",
    backgroundPosition: "cener",
    borderRadius: "20px",
    border: "3px solid black"
  }
  const leftarrow = {
    position: "absolute",
    top: "65%",
    transform: 'translate(0,-50%)',
    left: "5%",
    zIndex: 1,
    cursor: "pointer"
  }
  const rightarrow = {
    position: "absolute",
    top: "65%",
    transform: 'translate(0,-50%)',
    right: "53%",
    zIndex: 1,
    cursor: "pointer",
    Transform: 'translate(0,-50%)'
  }
  var goLeft = () => {
    const isFirstSlide = ci === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : ci - 1;
    setCi(newIndex)
  };
  var goRight = () => {
    const isLastSlide = ci === slides.length - 1;
    const newIndex = isLastSlide ? 0 : ci + 1;
    setCi(newIndex)
  }
  var [sport, setSport] = useState(true)
  var [place, setPlace] = useState(true)
  var [facilities, setfacilities] = useState(true)
  return (
    <>
      {
        sport == false && <Soprts />
      }
      {
        place == false && <Placements />
      }
      {
        facilities == false && <Facilities />
      }
      <div className='headdiv'>
        <div className='bg-danger p-2 text-white' >
          <h1 className='head'><i>Abdul Kalam University</i></h1>
          <nav className="navbar navbar-expand-lg bg-body-tertiary rounded d-flex justify-content-between p-3 " >
            <div className='ms-5 border border-dark rounded pt-1 pe-5'>
              <img src={logo1} height={70} width={190} className='rounded' />
              <img src={logo} height={70} width={70} alt='none' className='mg3 rounded' />
            </div>
            <div style={{ width: 800 }} className="d-flex  justify-content-between me-5 ">
              {/* <h6 onClick={()=>navi('/login')} className='text-dark lbutton'>Login</h6> */}
              <a className="icon-link icon-link-hover text-decoration-none border border-dark ps-2 pe-2 pt-1  rounded me-1" href="/login">
                <i><h4 >Login</h4></i> <i className=" fa-solid fa-right-to-bracket"></i>
              </a>
              <a className="icon-link icon-link-hover text-decoration-none border border-dark ps-2 pe-2 pt-1  rounded me-2" href="/register">
                <i><h4>Regiter</h4></i><i className="fa-solid fa-right-to-bracket"></i>
              </a>
              <a onClick={() => setSport(i => !i)} className="icon-link icon-link-hover text-decoration-none border border-dark ps-2 pe-2 pt-1  rounded me-3" href="#">
                <i ><h4 >Sports</h4></i><i className="fa-sharp fa-solid fa-medal"></i>
              </a>
              <a onClick={() => setPlace(i => !i)} className="icon-link icon-link-hover text-decoration-none border border-dark ps-2 pe-2 pt-1  rounded me-3" href="#">
                <i><h4>Placements</h4></i><i className="fa-solid fa-graduation-cap"></i>
              </a>
              <a onClick={() => setfacilities(i => !i)} className="icon-link icon-link-hover text-decoration-none border border-dark ps-2 pe-2 pt-1  rounded me-5" href="#">
                <i><h4>Facilities </h4></i><i className="fa-solid fa-sliders"></i>
              </a>
            </div>
          </nav>
          <div className='border border-white mt-2 rounded d-flex'>
            <div className='d-flex pe-5 mt-1 mb-1'>
              <i className="ms-5 mt-1 me-1 fa-solid fa-bell text-dark"> </i> Notifications</div>
            <marquee className="mt-1 me-5 ">
              <div className='d-flex '>
                <h6 className='ms-5'><i className=" col fa-solid fa-graduation-cap text-dark"> </i> M.Tech Admissions are open for 2024-2025 </h6>
                <h6 className='ms-5'><i className=" col fa-solid fa-graduation-cap text-dark"></i>  B.Tech Admissions are open for 2024-2025 </h6>
                <h6 className='ms-5'><i className=" col fa-solid fa-graduation-cap text-dark"></i>  A.P.J.A.K.U Enterence Exam Results  </h6>
                <h6 className='ms-5'><i className="fa-solid fa-table-tennis-paddle-ball text-dark"></i> Sports Tournaments  Soon  </h6>
              </div>
            </marquee>
          </div>


        </div>
        <div>
          <div className='pics '>
            <div style={leftarrow} onClick={() => goLeft()}>
              <i className="fa-solid fa-arrow-left bg-white p-3 rounded-circle"></i>
            </div>

            <div style={rightarrow} onClick={() => goRight()}>
              <i className="fa-solid fa-arrow-right bg-white p-3 rounded-circle"></i>
            </div>

            <div style={z}>

            </div>
            <div className='p-4 ms-4 mt-5 mb-5' style={{ width: "700px", border: "3px solid black", borderRadius: "20px", backgroundColor: "rgba(160, 117, 95, 0.427)" }}>
              <i><h2 className='about'>-: About :-</h2>
                <h3>Vision</h3>
                <p>To be a globally renowned university.</p>
                <h3>Mission</h3>
                <p>To impart quality higher education and to undertake research and extension with emphasis on
                  application and innovation that cater to the emerging societal needs through all-round
                  development of the students of all sections enabling them to be globally competitive and
                  socially responsible citizens with intrinsic values.
                </p>
                <h3>Objectives</h3>
                <p>Focus on Academics,Research,Extramural and extension,Infrastructure,
                  Equity / Access,ICT,Examinations and evaluations,Ecology and Environment,
                  Linkages,Employability,Governance,Quality,Value orientation and National development
                </p>
              </i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
