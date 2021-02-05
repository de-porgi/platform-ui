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

export const getProjectBaseInfo = (address) => {
  const res = useSWR(
    [address, "GetProjectBaseInfo"],
    contractFetcher(ProjectABI)
  )

  return {
    baseProjectInfo: (!res.error && res.data &&
      {
        owner: res.data[0],
        projectName: res.data[1],
        name: res.data[2],
        symbol: res.data[3],
        decimals: res.data[4],
        activeSeason: res.data[5],
        index: res.data[6]["Index"],
        state: res.data[6]["State"]
      }
    ) || [],
    error: res.error,
    loading: !res.error && !res.data
  }
}

export const contractFetcher = abi => (...args) => {
  const [arg1, arg2, ...params] = args
  const web3 = getWeb3(window.ethereum || defaultConfig.web3Provider)
  const contract = new web3.eth.Contract(abi, arg1)
  return contract.methods[arg2](...params).call()
}
