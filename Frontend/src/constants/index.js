import { scrollSepolia, xdcTestnet, arbitrumGoerli, filecoinCalibration, celoAlfajores, mantleTestnet, polygonZkEvmTestnet, baseGoerli } from 'viem/chains'

export const APP_NAME = 'PageForge'
export const APP_DESC = 'Amplify Your Side Gig with Web3'

export const NEXTID_BASE_URL='https://proof-service.next.id/'

export const CHAIN_OPTIONS = {
    [scrollSepolia.id]: scrollSepolia,
    [xdcTestnet.id]: xdcTestnet,
    [filecoinCalibration.id]: filecoinCalibration,
    [arbitrumGoerli.id]: arbitrumGoerli,
    [celoAlfajores.id]: celoAlfajores,
    [mantleTestnet.id]: mantleTestnet,
    [polygonZkEvmTestnet.id]: polygonZkEvmTestnet,
    [baseGoerli.id]: baseGoerli,
}

export const CHAINS = Object.values(CHAIN_OPTIONS)

export const AIRSTACK_KEY = "1f11bf3cef79845888cae5cc401500443"
export const ACTIVE_CHAIN = CHAIN_OPTIONS[scrollSepolia.id]

export const EXAMPLE_FORM = {
    "id": 1,
    "name": "Sambit Sargam",
    "purpose": "Sambit Sargam is a web3 developer and consultant.",
    "address": "0x5DAB34A2F418026E42f95D0eFd2AB4054fFD450E",
    "paymentAddress": "0x5DAB34A2F418026E42f95D0eFd2AB4054fFD450E",
    "ens": "sambitsargam.eth",
    "email": "info@sambitsargam.in",
    "offerActive": true,
    "offerDescription": "Buy my web3 book",
    "offerPrice": 1,
    "consultFee": 20
}

export const generateItem = (id) => {
    return {
        ...EXAMPLE_FORM,
        id,
        createdAt: Date.now(), // timestamp
        price: Math.round(Math.random() * 10) / 10
    }
}

// export const IPFS_BASE_URL = 'https://ipfs.filebase.io/ipfs'
// export const IPFS_BASE_URL = 'https://gateway.pinata.cloud/ipfs'
// export const IPFS_BASE_URL = 'https://saturn.ms/ipfs'
export const IPFS_BASE_URL = 'https://ipfs.io/ipfs'

export const AIRSTACK_QUERY = `query MyQuery($identity: Identity!) {
    Ethereum: Wallet(input: {identity: $identity, blockchain: ethereum}) {
       domains {
         name
       }
       poaps {
         poapEvent {
           eventName
           endDate
           eventURL
         }
       }
     socials{
       profileName
       dappName
     }
       tokenBalances {
         amount
         blockchain
         formattedAmount
         tokenAddress
         tokenId
         tokenNfts {
           contentValue {
             image {
               extraSmall
               large
               original
               medium
               small
             }
           }
         }
       }
     }
   }`