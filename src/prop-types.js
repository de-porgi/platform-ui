import PropTypes from 'prop-types'
import {
  DAO_STATUS_ERROR,
  DAO_STATUS_READY,
  DAO_STATUS_LOADING,
  DAO_STATUS_UNLOADED,
  ACTIVITY_STATUS_CONFIRMED,
  ACTIVITY_STATUS_FAILED,
  ACTIVITY_STATUS_PENDING,
  ACTIVITY_STATUS_TIMED_OUT,
  TRANSACTION_STATUS_ERROR,
  TRANSACTION_STATUS_PENDING,
  TRANSACTION_STATUS_SUCCESS,
  TRANSACTION_STATUS_UPCOMING,
} from './symbols'
import { isAddress } from './web3-utils'

const validatorCreator = nonRequiredFunction => {
  const validator = nonRequiredFunction

  validator.isRequired = (props, propName, componentName) => {
    const value = props[propName]

    if (value === null || value === undefined || value === '') {
      return new Error(
        `Property ${propName} is required on ${componentName}, but ${value} was given.`
      )
    }

    return nonRequiredFunction(props, propName, componentName)
  }

  return validator
}

const ethereumAddressValidator = (props, propName, componentName) => {
  const value = props[propName]

  if (value === null || value === undefined || value === '') {
    return null
  }

  if (!isAddress(value)) {
    const valueType = typeof value
    let nonAddress = null

    if (valueType !== 'object') {
      nonAddress = value.toString()
    }

    return new Error(
      `Invalid prop ${propName} supplied to ${componentName}. The provided value is not a valid ethereum address.${nonAddress &&
      ` You provided "${nonAddress}"`}`
    )
  }
}

export const EthereumAddressType = validatorCreator(ethereumAddressValidator)

export const ActivityStatusType = PropTypes.oneOf([
  ACTIVITY_STATUS_CONFIRMED,
  ACTIVITY_STATUS_FAILED,
  ACTIVITY_STATUS_PENDING,
  ACTIVITY_STATUS_TIMED_OUT,
])

export const AppType = PropTypes.shape({
  appId: PropTypes.string.isRequired,
  baseUrl: PropTypes.string.isRequired,
  codeAddress: EthereumAddressType.isRequired,
  hasWebApp: PropTypes.bool.isRequired,
  proxyAddress: EthereumAddressType.isRequired,
  src: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,

  // This content may not be available if the app's content couldn't be fetched
  abi: PropTypes.array,
  appName: PropTypes.string,
  apmRegistry: PropTypes.string,
  content: PropTypes.shape({
    location: PropTypes.string.isRequired,
    provider: PropTypes.string.isRequired,
  }),
  description: PropTypes.string,
  functions: PropTypes.array,
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
    })
  ),
  name: PropTypes.string,
  roles: PropTypes.array,
  status: PropTypes.string,
  version: PropTypes.string,

  // This content is only available if the app is an aragonOS internal app
  isAragonOsInternalApp: PropTypes.bool,

  // This content is not available if the app is the Kernel
  isForwarder: PropTypes.bool,
  kernelAddress: EthereumAddressType,
})

export const AppsListType = PropTypes.arrayOf(AppType)

export const AppInstanceType = PropTypes.shape({
  // Note that app instances also include embedded applications, like Home, that do not have
  // associated on-chain information
  codeAddress: EthereumAddressType,
  identifier: PropTypes.string,
  instanceId: PropTypes.oneOfType([EthereumAddressType, PropTypes.string])
    .isRequired,
  proxyAddress: EthereumAddressType,
})

export const DaoAddressType = PropTypes.shape({
  address: EthereumAddressType,
  domain: PropTypes.string,
})

export const DaoItemType = PropTypes.shape({
  name: PropTypes.string,
  address: EthereumAddressType,
})

export const DaoStatusType = PropTypes.oneOf([
  DAO_STATUS_ERROR,
  DAO_STATUS_READY,
  DAO_STATUS_LOADING,
  DAO_STATUS_UNLOADED,
])

export const RenderFnType = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.oneOf([false]),
])


// https://github.com/react-spring/react-spring/blob/31200a79843ce85200b2a7692e8f14788e60f9e9/types/renderprops-universal.d.ts#L133
export const ReactSpringStateType = PropTypes.oneOf([
  'enter',
  'update',
  'leave',
])

// see ethereum-providers/
export const EthereumProviderType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  strings: PropTypes.object.isRequired,
})

// The status of a single transaction (only used to deploy an org for now).
// The “upcoming” status is used to indicate that the transaction is waiting
// for another one to be mined before being processed.
export const TransactionStatusType = PropTypes.oneOf([
  TRANSACTION_STATUS_ERROR,
  TRANSACTION_STATUS_PENDING,
  TRANSACTION_STATUS_SUCCESS,
  TRANSACTION_STATUS_UPCOMING,
])

// See src/wallet.js
export const WalletType = PropTypes.shape({
  account: PropTypes.string,
  balance: PropTypes.object.isRequired,
  chainId: PropTypes.number.isRequired,
  enable: PropTypes.bool.isRequired,
  connected: PropTypes.bool.isRequired,
  isContract: PropTypes.bool.isRequired,
  networkType: PropTypes.string.isRequired,
  providerInfo: PropTypes.object.isRequired,
  web3: PropTypes.object.isRequired,
})
