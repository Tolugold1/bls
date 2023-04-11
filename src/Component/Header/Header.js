import React, { useState, useEffect } from 'react';
import { RiFacebookFill } from 'react-icons/ri';
import { AiOutlineTwitter, AiOutlineDribbble, AiOutlineInstagram, AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart, AiOutlinePlus, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { CiUser } from 'react-icons/ci';
import { FaPinterestP } from 'react-icons/fa'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Header.styles.scss';
import { Link } from 'react-router-dom';
import BlsButton from '../Button/Button';
import OffcanvasBody from 'react-bootstrap/OffcanvasBody';
import OffcanvasHeader from 'react-bootstrap/OffcanvasHeader';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Outlet } from 'react-router-dom';

const Header = () => {

  const [ show, setShow ] = useState(false);
  const toggleShow = () => setShow(!show);

  useEffect(() => {
    let fixedHeader = document.querySelector('.nav_row');

    window.addEventListener('scroll', () => {
      const scrol = window.scrollY;
      const w = window.outerWidth;
      if (scrol >= 50) {
        if (w >= 1200) {
          fixedHeader.style.position = 'fixed';
          fixedHeader.style.width = "100vw";
        } else if (w >= 992) {
          fixedHeader.style.position = 'fixed';
          fixedHeader.style.width = "100vw";
        } else if (w >= 768) {
          fixedHeader.style.position = 'fixed';
          fixedHeader.style.width = "100vw";
        } else if (w >= 577 || w <= 576)  {
          fixedHeader.style.position = 'fixed';
          fixedHeader.style.width = "100vw";
        }
      } else {
        fixedHeader.style.position = 'relative';
      }
    })
  }, [])
  
  return (
    <div className='head'>
      <Row className='header'>
        <Col sm='12' md='4' lg='4' className='left_header_section'>
          <div  className='social_icons'>
            <h6>Follow us: </h6>
            <div>
              <RiFacebookFill className='header-icons'/>
              <AiOutlineTwitter className='header-icons'/>
              <FaPinterestP className='header-icons'/>
              <AiOutlineDribbble className='header-icons'/>
              <AiOutlineInstagram className='header-icons'/>
            </div>
          </div>
        </Col>

        <Col sm='12' md='4' lg='4' className='middle_header_section'>
          <h6>We Have Special Offer Every <Link to='/' style={{color: '#FF344F'}}>Find Your Offer</Link></h6>
        </Col>

        <Col sm='12' md='4' lg='4' className='right_header_section'>
          <div className='right_section'><AiOutlineSearch className=' icon'/> <span className='header_span d-none d-lg-none d-xl-block'>Search here</span></div>
          <div className='pipe'>|</div>
          <div className='right_section'><AiOutlineHeart className=' icon'/> <span className='header_span  d-none d-lg-none d-xl-block'>Wishlist</span></div>
          <div className='pipe'>|</div>
          <div  className='right_section'><AiOutlineShoppingCart className=' icon'/><span className='header_span  d-none d-lg-none d-xl-block'>Cart</span></div>
        </Col>
      </Row>

      <Row className='nav_row'>
        <Col lg='8' md='6' sm='6' xs='8'className='brand_name'>
          <Link to='/Home'><div className='img_div'>
            <img src='assets/images/Ask.com-Search-Logo.png' style={{width: '50px', height: '50px'}} alt='...'/>
          </div></Link>
          <ul className='navigation'>
            <Link to='/Home'>
              <li className='navigation_link'><h5>Home</h5></li>
            </Link>
            <Link to='/listMapGrid'>
              <li className='navigation_link'><h5>List Map Grid</h5></li>
            </Link>
          </ul>
        </Col>

        <Col lg='4' md='5' sm='5' xs='4' className='brand_toggle_btn'>
          <div className='avr'>
            <div><CiUser/></div>
          </div>
          <div  className='header_nav_bls_btn'><BlsButton>ADD LISTING <AiOutlinePlus /></BlsButton></div>
          <button onClick={toggleShow} className='d-block d-sm-block d-md-block d-lg-block d-xl-none show'>{show ? <AiOutlineClose className='close'/> : <AiOutlineMenu className='open' /> }</button>

          <Offcanvas show={show} onHide={toggleShow} >
            <OffcanvasHeader closeButton></OffcanvasHeader>
            <OffcanvasBody>
              <ul className='offcas_nav'>
                <Link to='/Home'>
                  <li className='offcas_list'><h5>Home</h5></li>
                </Link><hr style={{width: '100%'}}/>
                <Link to='/listMapGrid'>
                  <li className='offcas_list'><h5>List Map Grid</h5></li>
                </Link><hr />
              </ul>
            </OffcanvasBody>
          </Offcanvas>
        </Col>
      </Row>
      <Outlet />
    </div>
  )
}

export default Header;