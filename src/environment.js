import Web3 from 'web3'
import {
  getDefaultEthNode,
  getEthNetworkType,
  getIpfsGateway,
} from './local-settings'
import { getNetworkConfig } from './network-config'

const networkType = getEthNetworkType()

export const ipfsDefaultConf = {
  gateway: getIpfsGateway(),
}

const networkConfig = getNetworkConfig(networkType)
export const network = networkConfig.settings
export const providers = networkConfig.providers

export const contractAddresses = {
  ensRegistry: networkConfig.addresses.ensRegistry,
}
if (process.env.NODE_ENV !== 'production') {
  if (Object.values(contractAddresses).some(address => !address)) {
    // Warn if any contracts are not given addresses in development
    console.error(
      'Some contracts are missing addresses in your environment! You most likely need to specify them as environment variables.'
    )
    console.error('Current contract address configuration', contractAddresses)
  }
  if (network.type === 'unknown') {
    console.error(
      'This app was configured to connect to an unsupported network. You most likely need to change your network environment variables.'
    )
  }
}

export const defaultEthNode =
  getDefaultEthNode() || networkConfig.nodes.defaultEth

export const web3Providers = {
  default: new Web3.providers.WebsocketProvider(defaultEthNode),
}
