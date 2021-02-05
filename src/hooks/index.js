import useSWR from 'swr'
import { contractAddresses, defaultConfig } from '../environment'
import PorgiABI from '../abi/porgi'
import { getMainAccount, getWeb3 } from '../web3-utils'

export const getProjects = state => {
  const { data, error } = useSWR(
    [contractAddresses.porgi, 'GetProjectsBy', state],
    contractCaller(PorgiABI)
  )

  return {
    projects: data || [],
    loading: !error && !data,
    error: error,
  }
}

export const newProject = (web3, props) => contractSender(web3, PorgiABI)(contractAddresses.porgi, 'AddProject', props)

const contractCaller = abi => (...args) => {
  const [address, meth, ...params] = args
  const web3 = getWeb3(window.ethereum || defaultConfig.web3Provider)
  const contract = new web3.eth.Contract(abi, address)
  return contract.methods[meth](...params).call()
}

const contractSender = (web3, abi) => async (...args) => {
  const [address, meth, ...params] = args
  const contract = new web3.eth.Contract(abi, address)
  const from = await getMainAccount(web3)
  return contract.methods[meth](...params).send({ from: from })
}
