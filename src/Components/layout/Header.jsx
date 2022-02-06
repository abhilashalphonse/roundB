import React, { Component } from 'react';
import {Nav, Offcanvas} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';

function Header() {

     const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
    return (
      
        <div style={{display:"inline-flex", marginTop:"2%",width:"100vw",overflow:"hidden" , background:"none"}}>
          <div class="nameWrapper" style={{textAlign:"left", width:"50%",marginLeft:"30px"}}><span class="logoName"  style={{fontSize:"22px", color:"white"}}>roundB</span></div>
          <div class="offCanvasWrapper" style={{ cursor:"pointer", width:"50%", textAlign:"right", marginRight:"50px"}}>
             <div onClick={handleShow}>
             <img src="https://www.starlink.com/assets/images/Menu_Hamburger.svg" alt="menu-icon" style={{width:"25px"}} />
             </div>

             <Offcanvas show={show} onHide={handleClose} style={{background:"black"}} placement='end'>
               <Offcanvas.Header closeButton closeVariant='white'>
                
               </Offcanvas.Header>
            <Offcanvas.Body style={{textColor:"white"}}>
                <Nav className='d-flex flex-column justify-content-between text-white' >
                <Nav.Link as={Link} to="/" className='p-3' style={{marginTop:"40px"}}>Support</Nav.Link>
                <Nav.Link as={Link} to="/Services" className='p-3'>Services</Nav.Link>
                <Nav.Link as={Link} to="/Services" className='p-3'>Sign In</Nav.Link>
                </Nav>
            </Offcanvas.Body>
            </Offcanvas>
          </div>
        </div>

    );
  }

 
export default Header;