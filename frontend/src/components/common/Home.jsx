import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image1 from '../../Images/Image1.png'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Footer from './FooterC'

const Home = () => {
   return (
      <>
         <Navbar bg="dark" variant="dark">
            <Container>
               <Navbar.Brand className="brand-logo">
                  Raise-Connect-Solve
               </Navbar.Brand>

               <ul className="navbar-nav">
                  <li className="nav-item mb-2">
                     <Link to={'/'}
                        className={`nav-link `}
                        style={{color: "Red"}}
                     >
                        Home
                     </Link>
                  </li>
                  <li className="nav-item mb-2">
                     <Link
                     to={'/signup'}
                        className={`nav-link `}
                        style={{color: "Orange"}}
                     >
                        SignUp
                     </Link>
                  </li>
                  <li className="nav-item mb-2">
                     <Link
                     to={'/login'}
                        className={`nav-link  `}
                        style={{color: "Orange"}}
                     >
                        Login
                     </Link>
                  </li>
               </ul>
            </Container>
         </Navbar>
         <Container className='home-container'>
            <div className="left-side">
               <img src={Image1} alt="" />
            </div>
            <div className="right-side">
               <p>
                  <span className='s-letter'>Your Concerns Matter,</span><br />
                  <span className='s-letter'> Your Connections Count,  </span> <br />
                  <span className='f-letter'> Your Solutions Begin Here. </span><br />
                  <Link to={'/Login'}><Button style={{ 
                      marginTop: '1rem', 
                      backgroundColor: '#ff0000', 
                      color: 'white', 
                      fontWeight: 'bold' 
                     }}>Register Compliant</Button></Link>
               </p>
            </div>
         </Container>
         <Footer/>
      </>
   )
}

export default Home
