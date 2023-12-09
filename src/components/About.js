import React from "react"
import ReactMarkdown from "react-markdown"
import { APP_NAME } from "../constants"

import logo from './../assets/logo.png'
import { Button } from "antd"
import { useNavigate } from "react-router"

// TODO: replace markdown here

const text = `

PageForge
---

PageForge effortlessly connects your existing web3 and web2 social accounts and information (including ENS, LinkedIn, Twitter, GitHub, on-chain, etc.) to craft a personalized funding page. Showcase your combined reputation to drive product sales and secure paid consultations.

PageForge aggregates data from your current web3 and web2 networks, offering a Patreon-like experience without the burden of 10% fees. Attract clients and cultivate an additional revenue stream.

Three big pieces are:
1. Monetization-Centric Sites: PageForge empowers users to effortlessly create sites focused on monetization by leveraging their established web2 and web3 social connections, eliminating the need to start anew on a greenfield platform.
2. Decentralized Backer Profiles: Each PageForge profile page operates through its own smart contract deployed on either cost-effective or high-throughput networks like Scroll, Neon, and Filecoin.
3. Comprehensive Reputation Score: The shareable PageForge profile page provides an overall reputation score based on data from Airstack and Next.ID. Users can sell content such as courses or initiate direct chats via XMTP using the creator's wallet address, eliminating the need for emails or subscriptions.
`

export const About = () => {
    const navigate = useNavigate();
    return <div>
        <br />
        <img src={logo} className='about-logo'></img>
        <br />
        <br />
        <h1>About</h1>
        <ReactMarkdown>{text}</ReactMarkdown>

           {/* Create listing */}
           <Button type="primary" onClick={() => {
                navigate('/create')
            }}>Create new listing</Button>&nbsp;
    </div>
}