import Web3 from 'web3'

const infuraProjectId = 'b5c50e71123d4e36a3e63b4b226a7e09' // TODO: should we hide that?
const infuraAPI = 'wss://mainnet.infura.io/ws/v3/' + infuraProjectId

export const contractAddress = {
  aave: '0xf8aC10E65F2073460aAD5f28E1EABE807DC287CF',
}

export const defaultConfig = {
  chainId: 42,
  ipfs: 'https://ipfs.infura.io:5001',
  eth: infuraAPI,
  providers: [{ id: 'provided' }],
  live: true,
  web3Provider: new Web3.providers.WebsocketProvider(infuraAPI),
}

export const getNetworkByChainId = () => {
  return 'kovan'
}
