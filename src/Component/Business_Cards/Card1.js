/* global google */
import React, { useState, useEffect } from 'react';
import "./Cards.styles.scss";
import { TbChefHat } from 'react-icons/tb';
import { BsPhone } from 'react-icons/bs';
import { VscLocation } from 'react-icons/vsc';
import { AiOutlineHeart, AiTwotoneStar } from 'react-icons/ai';
import { CardImg, Card, CardBody, Container, Row, Col } from 'reactstrap';
import { business_data } from './data';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal';

const Card1 = ({ exact }) => {

  if (exact.length !== 0) {
    return (
      <Container>
        <Row>
        {     
          exact.map((data, Keyword) => {
            return (
              <Col key={data.id}> 
                <Fade top>
                  <Card className="b_card_head" >{/* 
                    <CardImg top className='b_img' src={data.image_url} alt="Business place image"/> */}
                    <div className='features'>
                      <span className='inner_feature'>Feature</span>
                    </div>
                    <CardBody className='b_card_body'>
                      <div className='tag'>
                        <div className='tag_text_and_icon'>
                          <div className='tag_icon'>
                            <TbChefHat className='tag_icon_icon' />
                          </div>
                          <h6 className='tag_h6'>{data.name}</h6>
                        </div>
                        <div className='business_status'>
                          {data.opening_hours ? <div className='open'> Open </div> : <div className='close'> Close </div>}
                        </div>
                      </div>
            
                      <div className='b_card_inner_body'>
                        <div className='review_stat'>
                          <div className='inner_review'>
                            <div>
                              <h5>User rating: {data.user_ratings_total}</h5>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className='b_body_footer'>
                          <div className='b_body_text'>
                            <VscLocation className='b_location_icon' />
                            <div>
                              {data.formatted_address} {data.vicinity}
                            </div>
                          </div>
                          <div className='b_body_text_right'>
                            <AiOutlineHeart className='save_icon' /> Save
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Fade>
              </Col>
              
            )
          })
        } 
        </Row>
      </Container>
    )
  }
}

export default Card1;