import React, { useState } from 'react';
import "./Header1.styles.scss"
import Fade from 'react-reveal/Fade'
import { BsVectorPen } from 'react-icons/bs';
import { TfiLocationPin } from 'react-icons/tfi';
import { InputGroup, Input, Card, Row, Col, Container, Form } from 'reactstrap';
import BlsButton from "../Button/Button";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Loading from "../loading"
import { RiGovernmentLine } from 'react-icons/ri'
import { BiDish } from 'react-icons/bi'
import { RiSuitcaseLine } from 'react-icons/ri';
import { ImGift } from 'react-icons/im';
import { CiDumbbell } from 'react-icons/ci';
import { BsArrowRightShort, BsController } from "react-icons/bs";
import ListGridMap from '../ListGridMap/listGrid';
import BusinessCards from '../Business_Cards/Cards';

const HomeHeader = () => {

  const [ textToSearch, setTextToSearch ] = useState({categories: "", location: ""});
  const [ buinessRecord, setBusinessRecord ] = useState([]);
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const obj = {
      location: textToSearch.location,
      categories: textToSearch.categories
    }

    fetch('http://localhost:3000/users/places', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(obj)
    })
    .then(resp => resp.json())
    .then(resp => {
      console.log("businesses", resp);
      setBusinessRecord(resp.answer.businesses);
    }).catch(err => console.log(err));
  }

  // extracting buiness-like word from the text supplied

  

  console.log(listening)
  return (
    <>
    <div className='header1'>
      <div className='header1_inner'>
        <header className='home_header'>
        <section className='home_header_left col-lg-7 col-md-12 col-sm-12'>
          <Container className='card_inner'>
            <div className='inner'>
              <Fade bottom>
                <h1 className='left_h1'>Dream Explore Discover</h1>
              </Fade>
              <Fade bottom>
                <h3 >People Don't Take Trip.</h3>
              </Fade>

              <Card className='header_card'>
                <Form onSubmit={handleSubmit}>
                <div className='head_card'>
                  <InputGroup className='category'>
                    <Input className='category_input' type='text' name='category' placeholder='Search By Category' onChange={(e) => setTextToSearch(ans => ({...ans, categories: e.target.value}))}></Input><div className='category_pen'><BsVectorPen /></div>
                  </InputGroup>
                  <InputGroup className='category'>
                    <Input className='category_input' type='text' name='category' placeholder='Location' onChange={(e) => setTextToSearch(ans => ({...ans, location: e.target.value}))}></Input><div className='category_pen'><TfiLocationPin /></div>
                  </InputGroup>
                </div>
                <div className='usevoice'>
                  <h3 className='instruction'>Or search by using Voice note</h3>
                  {/* <p>Microphone: {listening ? 'on' : 'off'}</p> */}
                  {listening ? <Loading /> : null}
                  <p className='words'>{transcript}</p>
                  <div className='voice_btn'>
                    <button className='bls_btn' onClick={SpeechRecognition.startListening}><span className='btn_child'>Start</span></button>
                    <button className='bls_btn' onClick={SpeechRecognition.stopListening}><span className='btn_child'>Stop</span></button>
                    <button className='bls_btn' onClick={resetTranscript}><span className='btn_child'>Reset</span></button>
                  </div>
                </div>
                <div className='submit_btn'>
                  <div></div><div className="sub_btn" ><BlsButton type="submit">Search</BlsButton></div>
                </div>
                </Form>
              </Card>
              <p className='p_tag'>Popular: Saloon, Restaurant, Game, Counter, Train Station,Parking, Shooping</p>
            </div>
          </Container>
        </section>

        <section className='home_header_right col-lg-5  d-none d-sm-none d-md-none d-lg-block'>
          <div className='p-tag'>
          <p>Microphone: {listening ? 'on' : 'off'}</p>
          <p>{transcript}</p>
          </div>
        </section>
      </header>


      <div className='card_container'>
      <Fade top>
        <Row className='card_row'>
          <Col className='card_card' sm='12' md='4' lg='2'>
            <Card className='inner_card'>
              <div className='category_icon'>
                <div className='inner_category_icon'>
                  <div className='icon_block'>
                    <RiGovernmentLine className='museum' />
                  </div>
                  <h5 className='card_h3'>Museums</h5>
                </div>
              </div>
              <div className='category_btn' >
                <div className='avatar'>
                  <BsArrowRightShort className='icon-icon'/>
                </div>
              </div>
            </Card>
          </Col>
          <Col className='card_card1' sm='12' md='4' lg='2'>
            <Card className='inner_card'>
              <div className='category_icon'>
                <div className='inner_category_icon'>
                  <div className='icon_block'>
                    <BiDish className='museum' />
                  </div>
                  <h5 className='card_h3'>Restaurant</h5>
                </div>
              </div>
              <div  className='category_btn' >
                <div className='avatar'>
                  <BsArrowRightShort className='icon-icon'/>
                </div>
              </div>
            </Card>
          </Col>
          <Col className='card_card2' sm='12' md='4' lg='2'>
            <Card className='inner_card'>
              <div className='category_icon'>
                <div className='inner_category_icon'>
                  <div className='icon_block'>
                    <ImGift className='museum' />
                  </div>
                  <h5 className='card_h3'>Party Center</h5>
                </div>
              </div>
              <div  className='category_btn' >
                <div className='avatar'>
                  <BsArrowRightShort className='icon-icon'/>
                </div>
              </div>
            </Card>
          </Col>
          <Col className='card_card3' sm='12' md='4' lg='2'>
            <Card className='inner_card'>
              <div className='category_icon'>
                <div className='inner_category_icon'>
                  <div className='icon_block'>
                    <RiSuitcaseLine className='museum' />
                  </div>
                  <h5 className='card_h3'>Jobs & Feed</h5>
                </div>
              </div>
              <div  className='category_btn' >
                <div className='avatar'>
                  <BsArrowRightShort className='icon-icon'/>
                </div>
              </div>
            </Card>
          </Col>
          <Col className='card_card4' sm='12' md='4' lg='2'>
            <Card className='inner_card'>
              <div className='category_icon'>
                <div className='inner_category_icon'>
                  <div className='icon_block'>
                    <BsController className='museum' />
                  </div>
                  <h5 className='card_h3'>Game Field</h5>
                </div>
              </div>
              <div  className='category_btn' >
                <div className='avatar'>
                  <BsArrowRightShort className='icon-icon'/>
                </div>
              </div>
            </Card>
          </Col>
          <Col className='card_card5' sm='12' md='4' lg='2'>
            <Card className='inner_card'>
              <div className='category_icon'>
                <div className='inner_category_icon'>
                  <div className='icon_block'>
                    <CiDumbbell className='museum' />
                  </div>
                  <h5 className='card_h3'>Fit Zone</h5>
                </div>
              </div>
              <div  className='category_btn' >
                <div className='avatar'>
                  <BsArrowRightShort className='icon-icon'/>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Fade>
      </div>
      </div>
      <div className='d-none'>
        <ListGridMap search={transcript}/>
      </div>
    </div>
    <BusinessCards business={buinessRecord}/>
    </>
  )
}

export default HomeHeader;