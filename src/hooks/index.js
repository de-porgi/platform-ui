import useSWR from 'swr'
import { contractAddresses, defaultConfig } from '../environment'
import PorgiABI from '../abi/porgi'
import ProjectABI from '../abi/project'
import { getWeb3 } from '../web3-utils'

export const getProjects = state => {
  const res = useSWR(
    [contractAddresses.porgi, 'GetProjectsBy', state],
    contractFetcher(PorgiABI)
  )

  return {
    projects: res.data || [],
    error: res.error,
  }
}

export const getProjectField = (address, field, ...args) => {
  const res = useSWR(
    [address, field, ...args],
    contractFetcher(ProjectABI)
  )

  return {
    val: res.data || (!res.error && "Loading...") || "Error",
    error: res.error,
  }
}

export const contractFetcher = abi => (...args) => {
  const [arg1, arg2, ...params] = args
  const web3 = getWeb3(window.ethereum || defaultConfig.web3Provider)
  const contract = new web3.eth.Contract(abi, arg1)
  return contract.methods[arg2](...params).call()
}
