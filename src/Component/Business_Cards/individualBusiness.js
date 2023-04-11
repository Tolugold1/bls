import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';import "./Cards.styles.scss";
import { TbChefHat } from 'react-icons/tb';
import { BsPhone } from 'react-icons/bs';
import { VscLocation } from 'react-icons/vsc';
import { AiOutlineHeart, AiTwotoneStar } from 'react-icons/ai';
import { IoIosReturnRight } from 'react-icons/io';
import {  Media, Card, CardBody, Container, Row, Col } from 'reactstrap';
import { WiTime11 } from 'react-icons/wi'
import "./individual.styles.scss"

const RenderCard = ({ cardFullData, dataR, noreview }) => {

  const weekDays = [ 'Sunday', 'Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday'];

  const [review, setReview ] = useState([]);


  useEffect(() => {
    const r = []
    if (cardFullData.rating !== 0) {
      for (let i = 0; i <= cardFullData.length - 1; i++) {
        for (let i = 0; i <= 5 - 1; i++) {
          r.push(1);
        }
      }
    }

    setReview(r);
  }, []);
  console.log("dataR", dataR)
  console.log(noreview,"noreview");
  return (
    <div>
      { cardFullData.map((data, key) => {
        return (
          <Container className='I_container' key={key}>
            <div className='I_card_header'>
              <div className='i_media row'>
                <div left center className='img_hose col-sm-12 col-md-3 col-lg-3'>
                  <img className='I_img ing-fluid' object src={data.image_url}  alt="..." />
                </div>
                <div className="I_media_left  col-sm-12 col-md-3 col-lg-3">
                  <h6>{data.categories[0].title}</h6>
                  <h5 className='title'>{data.alias}</h5>
                  <h6>{data.location.address1} {data.location.city}, {data.location.country}</h6>
                </div>
                  <ul className='I_media_middle  col-sm-12 col-md-3 col-lg-3'>
                    <div>
                    <li className='inner_review'>
                      <h5>
                        {review.map((data, key) => {
                          return (
                            <AiTwotoneStar className='b_star' key={key}/>
                          )
                        })}
                      </h5>
                      <h6 className='inner_review_h2'>({review.length} Reviews)</h6>
                    </li>
                    <li className='I_location'>
                      <div className='l_left_location'>
                        <VscLocation />
                      </div>
                      <h6 className='loc_h2'>{data.location.address1} {data.location.city}, {data.location.country}</h6>
                    </li>
                    <li className='phone_number'>
                      <div><BsPhone className='phone_icon' /></div> <p className='telno'><a className='teli' href={`tel:${data.phone}`}>{data.phone}</a></p>
                    </li>
                    </div>
                  </ul>
                  <div className='I_status  col-sm-12 col-md-3 col-lg-3'>
                    <div className='icon_body'>
                      <AiOutlineHeart className='I_heart_icon'/>
                    </div>
                    <div className='icon_body1'>
                      <IoIosReturnRight className="I_return_icon" />
                    </div>
                </div>
              </div>
            </div>
            <hr />
            <div className='I_body_middle row'>
              <div className='left_col col-sm-12 col-md-7 col-lg-7'>
                <div className='I_left_header'>
                  <h5 className='alias ml-3'>Reviews</h5>
                  { dataR.length === 0 ? <div className='noreview'>{noreview} </div> :
                  <div className='review_media'>
                    { dataR.map((data, key) => {
                    return (
                      <Media key={key} className='reviews'>
                        <Media>{/* 
                          <Media object src={data.user.profile_url}  alt="Reviewer image"></Media> */}
                        </Media>
                        <Media body className='reviews_body'>
                          <div className='reviewer_details'>
                            <h3 className='r_name'>{data.user.name}</h3>
                          </div>
                          <p className='user_text'>{data.text}</p>
                          <div className='reviews_footer'>
                            <h6 className='rating_status'>rating: {data.rating}</h6>
                            <div className='time d-flex align-items-center' style={{color:"#ff344f"}}>
                              <h6 className='time_created mr-2'>{data.time_created}</h6><WiTime11 />
                            </div>
                          </div>
                        </Media>
                      </Media>
                    )
                  })}
                  </div>
                  }
                </div>
                <hr />
                <div className='I_left_middle_photo_section'>
                  <h5 className='photo_case'>Photo case</h5>
                  <Row className='photo-grid'>
                    { data.photos.map((data, key) => {
                      return (
                        <Col sm='12' md='6' lg='6' className='photos' key={key}>
                          <img src={data} alt="business photo" className='pics'/>
                        </Col>
                      )
                    })}
                  </Row>
                </div>
              </div>
              <div className='right_col col-sm-12 col-md-5 col-lg-5'>
                <Card className='business_hours'>
                  <CardBody>
                    <h5 className='hour_title_card'>Business Hours.</h5>
                    {data.hours.length !== 0 ? <div>
                      <ul className='day_list'>
                      {data.hours[0].open.map((data, key) => {
                        return (
                        <>
                          <li className='weekdays' key={key}>
                            <h6 className='day'>{weekDays[data.day]}</h6>
                            <h6 className='day_right'>
                              {data.start} - {data.end}
                            </h6>
                          </li>
                          <hr />
                        </>
                        )
                      })}
                      </ul>
                    </div> : null}
                  </CardBody>
                </Card>
              </div>
            </div>
          </Container>
        )
      })}
    </div>
  )
}


const IndividualBusiness = () =>  {
  const [ selfData, setSelfData ] = useState([])
  const [ dataR, setDataR ] = useState([]);
  const [ noreview, setNoreview ] = useState();
  
  const id = useParams()

  useEffect(() => {
    const obj = {
      id: id
    }
    console.log(id);
    const getBusinessById = () => {
      fetch('https://tan-talented-magpie.cyclic.app/users/id', {
        method: 'POST',
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(obj)
      })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.statusCode === 200) {
          setSelfData(resp.answer);
          setDataR(resp.reviews.reviews)
        } else if (resp.statusCode === 400) {
          setSelfData(resp.answer);
          setNoreview(resp.reviews)
        }
      }).catch(err => console.log(err));
    }

/*     const getReview = () => {
      fetch("https://tan-talented-magpie.cyclic.app/users/review", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
      })
      .then(resp => resp.json())
      .then(resp => {
        console.log("resp", resp.answer[0].reviews)
        setDataR(resp.answer[0].reviews);
        console.log("dataR", dataR)
      }).catch(err => console.log(err))
    }

    console.log('dataR out', dataR)
    getReview(); */

    getBusinessById();
  }, [])

  return (
    <div className="individual">
      <RenderCard cardFullData={selfData} dataR={dataR} noreview={noreview}/>
    </div>
  )
}

export default IndividualBusiness