import Web3 from 'web3'

const infuraProjectId = 'b5c50e71123d4e36a3e63b4b226a7e09' // TODO: should we hide that?
const infuraAPI = 'wss://mainnet.infura.io/ws/v3/' + infuraProjectId

export const contractAddresses = {
  aave: '0xf8aC10E65F2073460aAD5f28E1EABE807DC287CF',
  porgi: '0xa899540348C824cd9e305a03b0643F90cf72BE4e',
}

export const defaultConfig = {
  chainId: 42,
  networkName: 'kovan',
  ipfs: 'https://ipfs.infura.io:5001',
  eth: infuraAPI,
  providers: [{ id: 'provided' }],
  live: true,
  web3Provider: new Web3.providers.WebsocketProvider(infuraAPI),
  type: 'test'
}

export const getNetworkByChainId = () => {
  return 'kovan'
}
