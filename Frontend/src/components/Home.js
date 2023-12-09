/* eslint-disable jsx-a11y/alt-text */
import React, { useState, } from 'react'
import { Button, Spin, Row, Col } from 'antd';
import { APP_DESC, APP_NAME } from '../constants';
import { useNavigate } from 'react-router';
import logo from './../assets/logo.png'
import { CheckCircleTwoTone } from '@ant-design/icons';

const CHECKLIST_ITEMS = [
  "Craft a Page in Minutes. Monetize Your Skills, Time, and Business Leveraging Your Established Reputation.",
  "PageForge seamlessly integrates your social media profiles into your page from linked web3 and web2 networks.",
  "No Hassle with User Accounts or Vendor Agreements Needed."
];

export const Home = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [error, setError] = useState()

  return <div className='home-section'>
    <Row className='home-section'>
      <Col span={12}>
        <div className='prompt-section' style={{ size: "100px"}}>
          {/* <img src={logo} className='home-logo'/><br/> */}
          {APP_DESC}

        </div>
        {CHECKLIST_ITEMS.map((item, i) => {
          return (
            <p key={i} style={{ fontSize: '20px' }}>
              <CheckCircleTwoTone twoToneColor="#00aa00" />
              &nbsp;
              {item}
            </p>
          );
        })}
        <div>

        </div>
        <div>
          <Button className='standard-btn' size="large" type="primary" onClick={() => navigate('/create')}>
            Create your PageForge
          </Button>
        </div>
      </Col>
      <Col span={12}>
        <img className='hero-image' src={'https://app.svgator.com/assets/svgator.webapp/log-in-girl.svg'} />
      </Col>
    </Row>

  </div>

}