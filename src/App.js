/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Button, Layout, Menu, Select ,theme} from "antd";
import { Home } from "./components/Home";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { QuestionCircleOutlined, FormOutlined } from "@ant-design/icons";
import { ACTIVE_CHAIN, APP_DESC, APP_NAME, CHAINS, CHAIN_OPTIONS } from "./constants";
import 'antd/dist/reset.css';
import './App.css';

import { About } from "./components/About";

import logo from "./assets/logo.png";
import { abbreviate, isEmpty } from "./util";
import { ethers } from 'ethers'; // Import ethers library
import ProfilePage from "./components/ProfilePage";
import CreateContract from "./components/CreateContract";
import { Research } from "./components/Research";
import Conversation from "./components/Conversation";
// import Conversation from "./components/Conversation";

window.Buffer = window.Buffer || Buffer;

const { Header, Footer, Content, Sider } = Layout;
const { Option } = Select;

function App() {
  const navigate = useNavigate()
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(false)
  const [account, setAccount] = useState()
  const [provider, setProvider] = useState()
  const [signer, setSigner] = useState()
  const [activeChain, setActiveNetwork] = useState(CHAIN_OPTIONS[localStorage.getItem("chainId")] || ACTIVE_CHAIN)

  const pathname = window.location.pathname
  const isContractPage = pathname.indexOf('/policy/') !== -1

  const connectMetamask = async () => {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const selectedAccount = accounts[0];
      setAccount(selectedAccount);

      const ethersProvider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(ethersProvider);

      const ethersSigner = ethersProvider.getSigner();
      setSigner(ethersSigner);
    } catch (error) {
      console.error('Error connecting to Metamask:', error);
    }
  };

  const switchNetwork = async () => {
    // Implement network switching logic for Metamask if needed
  };

  useEffect(() => {
    // Check if Metamask is installed and connected
    if (window.ethereum) {
      connectMetamask();
    }
  }, []);

  const isLoggedIn = !!account;

  return (
    <div className="App">
      <Layout>
      <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            height: "1000vh", // Set the height to 100% of the viewport height
            position: "left", // Fix the position
            left: 2, // Align to the left
            zIndex: 1, // Adjust z-index as needed
          }}
        >       
         <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
            selectedKeys={[pathname]}
          >
            <Menu.Item key={0}>
              <img
                src={logo}
                className="header-logo pointer"
                onClick={() => navigate("/")}
              />
            </Menu.Item>
            {!isContractPage && (
              <>
                <Menu.Item key={'/create'} onClick={() => navigate("/create")}>
                  <FormOutlined /> Create your page
                </Menu.Item>
                <Menu.Item key={'/reputation'} onClick={() => navigate("/reputation")}>
                  <FormOutlined /> Reputation
                </Menu.Item>
              </>
            )}

            <Menu.Item key={'/about'} onClick={() => navigate("/about")}>
              <QuestionCircleOutlined /> About
            </Menu.Item>
            <br />
            <br />
            {!isLoggedIn && (
              <span>
                <Button type="primary" onClick={connectMetamask}>
                  Connect Metamask
                </Button>
              </span>
            )}
            <br />
        
           <br></br>
            <span>
              &nbsp;
              {/* select chain */}
              <Select
                style={{ width: 180 }}
                value={activeChain.id}
                onChange={(value) => {
                  const chain = CHAINS.find((chain) => chain.id === value)
                  // Save local
                  localStorage.setItem('chainId', chain.id);
                  setActiveNetwork(chain)
                }}
              >
                {CHAINS.map((chain) => {
                  return <Option key={chain.id} value={chain.id}>{chain.name}</Option>
                })}
              </Select>
            </span>
          </Menu>
          </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '18px',
              width: 99,
              height: 64,
            }}
          />
        </Header>
        <Content>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/reputation" element={<Research />} />
              <Route path="/create" element={<CreateContract activeChain={activeChain} switchNetwork={switchNetwork} signer={signer} account={account} />} />
              <Route path="/profile/:pageId" element={<ProfilePage activeChain={activeChain} switchNetwork={switchNetwork} signer={signer} account={account} />} />
              <Route path="/conversation/:targetAddress" element={<Conversation activeChain={activeChain} switchNetwork={switchNetwork} signer={signer} account={account} />} />
            </Routes>
          </div>
        </Content>
        <Footer>
          <hr />
          <p>
            <a href={"/"}><b>{APP_NAME}</b></a>&nbsp;
            &copy;2023.&nbsp;{APP_DESC}.<br />
          </p>
        </Footer>
      </Layout>
      </Layout>
    </div>
  );
}

export default App;
