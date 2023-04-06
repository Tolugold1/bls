/* global google */
import React, { useState, useEffect } from 'react'
import './listGrid.styles.scss';
import Header from '../Header/Header'
import BusinessMap from '../Map/Map';
import { BsVectorPen } from 'react-icons/bs';
import { TfiLocationPin } from 'react-icons/tfi'
import { MdKeyboardVoice } from 'react-icons/md';
import { Card, Container, InputGroup, Input, Row, Col, Form } from 'reactstrap';
import { Country } from './country';
import BlsButton from "../Button/Button"
import Slide from "react-reveal/Slide";
import { DefaultPrice } from './defaultPrice';
import BusinessCards from '../Business_Cards/Cards';/* 
import { yelp } from 'yelp-fusion'; */


const places = [];
const ListGridMap = ({ search }) => {
  const [ businessCarddetails, setBusinessCardDetails ] = useState([])
  const [ lat, setLat] = useState()
  const [ lng, setLng ] = useState()
  const [ center, setCenter ] = useState();
  const [ coordsResult, setCoordsResult ] = useState();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    })
    console.log(lat, "lat");
    console.log(lng, 'lng');
  }, [])
  const [ searchData, setSearchdata ] = useState({keyword: "", category: "", location: "", price: "", latitude: "", longitude: ""})

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchData.location === null) {
      setSearchdata(searchData.latitude = lat);
      setSearchdata(searchData.longitude = lng);
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

  }

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
      {/* header */}
      <Header />
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
          <Form onSubmit={handleSubmit}>
            <Row className='list_row'>
              <Col className='card_col' sm='12' md="6" lg="3">
                <InputGroup className='list_category'>
                  <Input className='list_category_input' type='text' name='keyword' placeholder='Search By Keyword e.g mall, supermarket' onChange={handleChange}></Input><div className='list_category_icon'><BsVectorPen /></div>
                </InputGroup>
              </Col>
              <Col  className='card_col' sm='12' md="6" lg="3">
                <InputGroup className='list_category'>
                  <Input type='select' name='category' className='select_category' onChange={handleChange} placeholder='Category'>
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
              <Col  className='card_col' sm='12' md="6" lg="3">
                <InputGroup className='list_category'>
                    <Input className='list_category_input' type='text' name='location' placeholder='Location'  onChange={handleChange}></Input><div className='category_pen'><TfiLocationPin /></div>
                </InputGroup>
              </Col>
              <Col className='card_col' sm='12' md="6" lg="3">
                <BlsButton className='voice_btn'><MdKeyboardVoice className='mic' /></BlsButton>
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
              <Col  className='card_col' sm='12' md="6" lg="3">
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
              <Col className='card_col' sm='12' md="6" lg="3">
                <BlsButton type='submit' className='voice_btn'><h5>Search</h5></BlsButton>
              </Col>
            </Row>
          </Form>
        </Card>
      </Container>
      </div>
      </Slide>

      {/* business card*/}
      <div className='list_business_cards'>
        <BusinessCards business={businessCarddetails} />
      </div>
    </div>
  )
}

export default ListGridMap;