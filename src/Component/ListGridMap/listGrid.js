/* global google */
import React, { useState, useEffect } from 'react'
import './listGrid.styles.scss';
import BusinessMap from '../Map/Map';
import { BsVectorPen } from 'react-icons/bs';
import { TfiLocationPin } from 'react-icons/tfi'
import { Card, Container, InputGroup, Input, Row, Col, Form, FormText } from 'reactstrap';
import BlsButton from "../Button/Button"
import Slide from "react-reveal/Slide";
import { DefaultPrice } from './defaultPrice';
import BusinessCards from '../Business_Cards/Cards';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Loading from '../loading';
import Card1 from "../Business_Cards/Card1";

const ListGridMap = () => {
  const [ lat, setLat] = useState()
  const [ lng, setLng ] = useState()
  const [ Business, setBusiness ] = useState([]);
  const [ mapSideFetchError, setMapSideFetchError ] = useState()
  const [ checkForError, setCheckForError ] = useState(false)
  const [ exact, setExact ] = useState([]);
  const [ checkLoading, setCheckLoading ] = useState(false)
  const [ errReturn, setErrReturn ] = useState()
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    })
    
  }, [])
  const [ searchData, setSearchdata ] = useState({keyword: "", location: "", price: ""})
  const [ category, setCategory ] = useState();

  console.log('lat', lat, "lng", lng)
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  
  if (!browserSupportsSpeechRecognition) {
    console.log("<span>Browser doesn't support speech recognition.")
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const sendTrascript = () => {
    setCheckLoading(true)

      var obj = {
        transcript: transcript
      }

      fetch("https://tan-talented-magpie.cyclic.app/users/transcript", {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(obj)
    })
    .then(resp => resp.json())
    .then(resp => {
      console.log(resp);
      if (resp.statusCode === 200) {
        setBusiness(resp.answer.businesses);
      } else {
        setErrReturn(resp.message);
      }
    })
    .then(resp => {
      if (Business.length !== 0) {
        setCheckLoading(false);
        console.log(checkLoading,"loading")
      }
    })
  }
  console.log("Business", Business)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchData.location === "") {
      get_business();
    } else {
      get_business();
    }
  }

/*   const onload = (map) => {
    let request = {
      query: `${search}`,
      fields: ['name', 'geometry'],
    }

    var service = new google.maps.places.PlacesService(map);

    service.findPlaceFromQuery(request, function(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          places.push(results[i]);
        }
        setCenter(results[0].geometry.location);
        setCoordsResult(places);
      }
    });
  } */

  const get_business = async () => {
    
      console.log("latLng", lat, lng)
    let obj
    if (searchData.location === null || searchData.location === "") {
      obj = {
        latitude: lat,
        longitude: lng,
        term: category,
        keyword: searchData.keyword,
        price: searchData.price,
      }
    } else {
      obj = {
        location: searchData.location,
        term: category,
        keyword: searchData.keyword,
        price: searchData.price,
      }
    }

    fetch('https://tan-talented-magpie.cyclic.app/users/places', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(obj)
    })
    .then(resp => resp.json())
    .then(resp => {
      console.log(resp)
      if (resp.statusCode === 200) {
        console.log("businesses", resp);
        if (resp.answer === null) {
          setExact(resp.exactLoc);
        } else {
          setBusiness(resp.answer[0].businesses)
        }
      } else if (resp.statusCode === 400) {
        console.log(resp)
        setMapSideFetchError(resp.message)
        setCheckForError(true)
      }
    }).catch(err => console.log(err));
  }
  console.log("Exact", exact)
  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setSearchdata(prev => { 
        return{
            ...prev,
            [name]: value
        }
    })
  }

  console.log(searchData);

  return (
    <div className='List'>
      {/* list header */}
      <header className='List_header'>
        <section className='List_header_left col-lg-7 col-md-12 col-sm-12'>
          <div className='list_container'>
            <div className="l_grid_map">
              <h1 className='l_grid_h1'>Listing Map</h1>
            </div>
            <button className='l_grid_btn'>
              Home | Listing Map
            </button>
          </div>
        </section>

        <section className='list_header_right col-lg-4  d-none d-sm-none d-md-none d-lg-block'>
        </section>
      </header>

      {/* Map component */}
      <div className='display_map'>
        <BusinessMap lat={lat} lng={lng} />
      </div>

      {/* Form Card */}
      <Slide top>
      <div className='b_body'>
      <Container className='list_search_container_card'>
        <Card className='list_card'>
          <Row>
            <Col sm='12' md='8' lg='8'>
              <Form onSubmit={handleSubmit} col-sm-12 col-md-6 col-lg-6>
                <Row className='list_row'>
                  <Col className='card_col' sm='12' xs='12' md='6' lg='6'>
                    <InputGroup className='list_category'>
                      <Input className='list_category_input' type='text' name='keyword' placeholder='Search By Keyword e.g mall, supermarket' onChange={handleChange}></Input><div className='list_category_icon'><BsVectorPen /></div>
                    </InputGroup>
                  </Col>
                  <Col  className='card_col' sm='12' xs='12' md='6' lg='6'>
                    <InputGroup className='list_category'>
                      <Input type='select' name='category' className='select_category' onChange={(e) => setCategory(e.target.value)} placeholder='Category'>
                        <option className='b_option'>Select categories below</option>
                        <option className='b_option'>Museums</option>
                        <option className='b_option'>Restaurants</option>
                        <option className='b_option'>Party Center</option>
                        <option className='b_option'>Fit Zone</option>
                        <option className='b_option'>Game Field</option>
                        <option className='b_option'>Job & Feed</option>
                        <option className='b_option'>Shopping</option>
                        <option className='b_option'>Art</option>
                      </Input>
                    </InputGroup>
                  </Col>
                  <Col  className='card_col mt-3' sm='12' xm='12' md='6' lg='6'>
                    <InputGroup className='list_category'>
                        <Input className='list_category_input' type='text' name='location' placeholder='Location'  onChange={handleChange}></Input><div className='category_pen'><TfiLocationPin /></div>
                    </InputGroup>
                  </Col>
                </Row>
                <Row className='list_row1'>{/*
                  <Col  className='card_col' sm='12' md="6" lg="3">
                    <InputGroup className='list_category'>
                      <Input className='list_category_input' type='text' name='keyword' placeholder='location'></Input><div className='list_category_icon'><BsVectorPen /></div>
                    </InputGroup>
                  </Col> 
                  <Col  className='card_col' sm='12' md="6" lg="3">
                    <InputGroup className='list_category'>
                      <Input type='select' name='category' className='select_category'>
                      {Country.map((data, key) => {
                        return (
                          <option className='b_option' value={data.country} key={key}>{data.country}</option>
                        )
                      })}
                      </Input>
                    </InputGroup>
                  </Col> */}
                  <Col  className='card_col' sm='12' xm='12' md='6' lg='6'>
                    <InputGroup className='list_category'>
                      <Input className='list_category_input' type='select' name='price' placeholder='Default Price' onChange={handleChange}>
                        {
                          DefaultPrice.map((data, key) => {
                            return (
                              <option className='b_option'  key={key}>{data.price}</option>
                            )
                          })
                        }
                        </Input>
                    </InputGroup>
                  </Col>
                  <Col className='card_col d-flex justify-content-center align-items-center' sm='12' xm='12' md='6' lg='6'>
                    <div style={{ marginRight: '10px'}} ><BlsButton type='submit' className='voice_btn' >Search</BlsButton></div>
                    <div>{checkForError ? <FormText style={{color: "#FF344F"}}>{mapSideFetchError}</FormText> : null}</div>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col className='search_btn sm="12" md="4" lg="4" '>
              <p className='words text-center'>{transcript}</p>
              <div className='voice_aspect'>
                <div className='usevoice'>
                    {/* <p>Microphone: {listening ? 'on' : 'off'}</p> */}
                    {listening ? <Loading /> : null}
                    <div className='voice_btn2'>
                      <button className='bls_btn m-2' onClick={SpeechRecognition.startListening}><span className='btn_child'>Start</span></button>
                      <button className='bls_btn m-2' onClick={resetTranscript}><span className='btn_child'>Reset</span></button>
                      <button className='bls_btn m-2' onClick={() => {return (setErrReturn(null), sendTrascript())}}><span className='btn_child'>Ask</span></button>
                      <div>
                        { checkLoading ? <div>
                          { Business.length !==  0 ? setCheckLoading(false) : <Loading />}
                        </div> : null}
                      </div>
                  </div>
                  <h6 style={{color: '#ff344f'}}>{errReturn}</h6>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      </Container>
      </div>
      </Slide>

      {/* business card*/}
      <div className='list_business_cards' style={{marginTop: "50px"}}>
        <Card1  exact={exact}/>
        <BusinessCards business={Business} />
      </div>
    </div>
  )
}

export default ListGridMap;