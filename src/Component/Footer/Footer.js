import {Link} from 'react-router-dom'
import React from "react";
import Fade from 'react-reveal'
import { AiOutlineApple, AiFillAndroid, AiOutlineInstagram, AiOutlineDribbble, AiOutlineTwitter } from 'react-icons/ai';
import { RiFacebookFill } from "react-icons/ri";
import { FaPinterestP } from 'react-icons/fa';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import "./Footer.styles.scss";

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className=" dark-black">
        <div className="footer_top">
          <div className="f_container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 mb-4 d-flex align-items-center justify-content-center">
                <Fade top>
                  <div className="footer-social">
                    <div className='footer-social-body'>
                    <h4>Follow Us</h4>
                    <div className="social-link">
                        <Link to="#" className='social_icon1'>
                          <RiFacebookFill className='ic1'/>
                        </Link>
                        <Link to="#" className='social_icon2'>
                          <AiOutlineTwitter className='ic2' />
                        </Link>
                        <Link to="#" className='social_icon3'>
                          <FaPinterestP className='ic3' />
                        </Link>
                        <Link to="#"  className='social_icon'>
                          <AiOutlineInstagram  className='ic'/>
                        </Link>
                    </div>
                    </div>
                  </div>
                </Fade>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
                <Fade top>
                  <div>
                  <h4 className="widget-title">Categories</h4>
                  <ul className="categories-link">
                    <li className='li_side'>
                      <div className='side_icon'>
                        <MdOutlineArrowForwardIos className='side_arrow_icon' />
                      </div>
                      <div className='side_a'>
                        <a href="#" className='inner_side_a'>Restaurant</a>
                      </div>
                    </li>
                   <li className='li_side'>
                      <div className='side_icon'>
                        <MdOutlineArrowForwardIos className='side_arrow_icon' />
                      </div>
                      <div className='side_a'>
                        <a href="#" className='inner_side_a'>Museum</a>
                      </div>
                    </li>
                   <li className='li_side'>
                      <div className='side_icon'>
                        <MdOutlineArrowForwardIos className='side_arrow_icon' />
                      </div>
                      <div className='side_a'>
                        <a href="#" className='inner_side_a'>Party Center</a>
                      </div>
                    </li>
                   <li className='li_side'>
                      <div className='side_icon'>
                        <MdOutlineArrowForwardIos className='side_arrow_icon' />
                      </div>
                      <div className='side_a'>
                        <a href="#" className='inner_side_a'>Game Field</a>
                      </div>
                    </li>
                   <li className='li_side'>
                      <div className='side_icon'>
                        <MdOutlineArrowForwardIos className='side_arrow_icon' />
                      </div>
                      <div className='side_a'>
                        <a href="#" className='inner_side_a'>Shopping</a>
                      </div>
                    </li>
                   <li className='li_side'>
                      <div className='side_icon'>
                        <MdOutlineArrowForwardIos className='side_arrow_icon' />
                      </div>
                      <div className='side_a'>
                        <a href="#" className='inner_side_a'>Art & Gallery</a>
                      </div>
                    </li>
                  </ul>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="f_container_f">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="copyright-text d-flex justify-content-center">
                  <p>
                    Copyright &copy; 2021. All rights reserved to{" "}
                    <span>Webtend</span>
                  </p>
                </div>
              </div>
              <div className="col-lg-6 ">
                <div className="copyright-link">
                  <ul className='f_ul'>
                    <li>
                      <a href="#">Terms & Conditins</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Career</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
