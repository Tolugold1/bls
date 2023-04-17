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
import Loading from '../loading';

const BusinessCards = (props) => {



  const [review, setReview ] = useState([]);
  const [reviewVoice, setReviewVoice ] = useState([]);

  useEffect(() => {
    const r = []

/*     if ( props.business.businessData.length !== 0) {
           for (let i = 0; i <= props.business.businessData.length - 1; i++) {
      for (let i = 0; i <= props.business.businessData[i].rating - 1; i++) {
        r.push(1);
      }
    }
    setReview(r);
    } */
    /* 
    const v = []
    for (let i = 0; i <= businessVoiceData.length - 1; i++) {
      for (let i = 0; i <= businessVoiceData[i].rating - 1; i++) {
        v.push(1);
      }
    }
    setReviewVoice(r); */
  }, []);
  console.log(props.businessByForm)

  if (props.business.errMess !== null) {
    return (
      <div className='error'>
        {props.business.errMess}
      </div>
    )
  } else if (props.business.businessData.length !== 0) {
    return (
      <Container>
        <Row>
        {     
          props.business.businessData.map((data) => {
            return (
              <Col lg='3' md='6' sm='12' key={data.id}> 
              <Fade top>
              <Link to={`/Home/:${data.id}`}>
                <Card className="b_card_head" >
                  <CardImg top className='b_img' src={data.image_url} alt="Business place image"/>
                  <div className='features'>
                    <span className='inner_feature'>Feature</span>
                  </div>
                  <CardBody className='b_card_body'>
                    <div className='tag'>
                      <div className='tag_text_and_icon'>
                        <div className='tag_icon'>
                          <TbChefHat className='tag_icon_icon' />
                        </div>
                        <h6 className='tag_h6'>{data.categories[0].title}</h6>
                      </div>
                      <div className='business_status'>
                        {data.is_closed ? <div className='close'> Close </div>: <div className='open'> Open </div>}
                      </div>
                    </div>
          
                    <div className='b_card_inner_body'>
                      <div className='review_stat'>
                        <div className='inner_review'>
                          <div>
                            {review.map((data, key) => {
                              return (
                                <AiTwotoneStar className='b_star' key={key}/>
                              )
                            })}
                          </div>
                          <h6 className='inner_review_h2'>({review.length} Reviews)</h6>
                        </div>
                      </div>
                      <div className='price'>
                        ${data.price.length} - ${data.price.length}
                      </div>
                      <div className='phone_number'>
                        <div><BsPhone className='phone_icon' /></div> <p><a className='teli' href={`tel:${data.phone}`}>{data.phone}</a></p>
                      </div>
                      <hr />
                      <div className='b_body_footer'>
                        <div className='b_body_text'>
                          <VscLocation className='b_location_icon' />
                          <div>
                            {data.location.city}, {data.location.country}
                          </div>
                        </div>
                        <div className='b_body_text_right'>
                          <AiOutlineHeart className='save_icon' /> Save
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                </Link>
                </Fade>
                </Col>
            )
          })
        } 
        </Row>
      </Container>
      )
   } else if (props.businessByForm !== 0) {
    return (
      <Container>
        <Row>
        {     
          props.businessByForm.map((data) => {
            return (
              <Col lg='3' md='6' sm='12' key={data.id}> 
              <Fade top>
              <Link to={`/Home/:${data.id}`}>
                <Card className="b_card_head" >
                  <CardImg top className='b_img' src={data.image_url} alt="Business place image"/>
                  <div className='features'>
                    <span className='inner_feature'>Feature</span>
                  </div>
                  <CardBody className='b_card_body'>
                    <div className='tag'>
                      <div className='tag_text_and_icon'>
                        <div className='tag_icon'>
                          <TbChefHat className='tag_icon_icon' />
                        </div>
                        <h6 className='tag_h6'>{data.categories[0].title}</h6>
                      </div>
                      <div className='business_status'>
                        {data.is_closed ? <div className='close'> Close </div>: <div className='open'> Open </div>}
                      </div>
                    </div>
          
                    <div className='b_card_inner_body'>
                      <div className='review_stat'>
                        <div className='inner_review'>
                          <div>
                            {review.map((data, key) => {
                              return (
                                <AiTwotoneStar className='b_star' key={key}/>
                              )
                            })}
                          </div>
                          <h6 className='inner_review_h2'>({review.length} Reviews)</h6>
                        </div>
                      </div>
                      <div className='price'>
                        ${data.price.length} - ${data.price.length}
                      </div>
                      <div className='phone_number'>
                        <div><BsPhone className='phone_icon' /></div> <p><a className='teli' href={`tel:${data.phone}`}>{data.phone}</a></p>
                      </div>
                      <hr />
                      <div className='b_body_footer'>
                        <div className='b_body_text'>
                          <VscLocation className='b_location_icon' />
                          <div>
                            {data.location.city}, {data.location.country}
                          </div>
                        </div>
                        <div className='b_body_text_right'>
                          <AiOutlineHeart className='save_icon' /> Save
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                </Link>
                </Fade>
              </Col>
            )
          })
        } 
        </Row>
      </Container>
    )
  } else if (props.business.businessData.length === 0) { // this need review
    return (
      <Container className='business_card'>
        <Row className='d-flex justify-content-center'>
        {     
          business_data.map((data, key) => {
            return (
              <Col sm='6' md='6' lg='6'>
              <Card className="b_card_head" key={key}>
                <CardImg top className='b_img' src="./assets/images/img.webp" alt="Business place image"/>
                <div className='features'>
                  <span className='inner_feature'>Feature</span>
                </div>
                <CardBody className='b_card_body'>
                  <div className='tag'>
                    <div className='tag_text_and_icon'>
                      <div className='tag_icon'>
                        <TbChefHat className='tag_icon_icon' />
                      </div>
                      <h6 className='tag_h6'>{data.businesses[0].categories[0].title}</h6>
                    </div>
                    <div className='business_status'>
                      {data.businesses[0].is_closed ? <div className='close'> Close </div>: <div className='open'> Open </div>}
                    </div>
                  </div>
        
                  <div className='b_card_inner_body'>
                    <h2 className='b_card_h2'>{data.name}</h2>
                    <div className='review_stat'>
                      <div className='inner_review'>
                        <div>
                          {review.map((data, key) => {
                            return (
                              <AiTwotoneStar className='b_star' key={key}/>
                            )
                          })}
                        </div>
                        <h6 className='inner_review_h2'>({review.length} Reviews)</h6>
                      </div>
                    </div>
                    <div className='price'>
                      ${data.businesses[0].price.length} - ${data.businesses[0].price.length}
                    </div>
                    <div className='phone_number'>
                      <div><BsPhone className='phone_icon' /></div> <p><a className='teli' href={`tel:${data.phone}`}>{data.businesses[0].phone}</a></p>
                    </div>
                    <hr />
                    <div className='b_body_footer'>
                      <div className='b_body_text'>
                        <VscLocation className='b_location_icon' />
                        <div>
                          {data.businesses[0].location.city}, {data.businesses[0].location.country}
                        </div>
                      </div>
                      <div className='b_body_text_right'>
                        <AiOutlineHeart className='save_icon' /> Save
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
              </Col>
            )
          })
        } </Row>
    </Container>
  )}
}

export default BusinessCards