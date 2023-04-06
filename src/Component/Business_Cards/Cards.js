import React, { useState, useEffect, useMemo } from 'react';
import "./Cards.styles.scss";
import { TbChefHat } from 'react-icons/tb';
import { BsPhone } from 'react-icons/bs';
import { VscLocation } from 'react-icons/vsc';
import { AiOutlineHeart, AiTwotoneStar } from 'react-icons/ai';
import { CardImg, Card, CardBody, Container, Row, Col } from 'reactstrap';


const BusinessCards = ({ business }) => {

  console.log("business datails", business)
  const [review, setReview ] = useState([]);
  useEffect(() => {
    const r = []
    for (let i = 0; i <= business.length - 1; i++) {
      for (let i = 0; i <= business[i].rating - 1; i++) {
        r.push(1);
      }
    }
    setReview(r);
  }, []);
  /* 
  computeExpensiveValue = (business) => {

  }
  const memoizedValue = useMemo(() => computeExpensiveValue(business), [business]); */

  console.log(review)
  return (
    <Container className='col-lg-6 col-md-6 col-sm-12 col-xm-12'>
      <Row>
      {
        business.map((data, key) => {
          return (
            <Col >
              <Card className="b_card_head" key={key}>
                <CardImg top className='b_img' src="assets/images/listing-grid-1.jpg" alt="Business place image"/>
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
            </Col>
          )
        })
      
      }
      </Row>
    </Container>
  )
}

export default BusinessCards;