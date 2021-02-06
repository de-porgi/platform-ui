import useSWR from 'swr'
import { contractAddresses, defaultConfig } from '../environment'
import PorgiABI from '../abi/porgi'
import ProjectABI from '../abi/project'
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

export const getSeasons = (address) => {
  const res = useSWR(
    [address, "GetSeasons"],
    contractCaller(ProjectABI)
  )

  return {
    firstSeason: res.data && {
      ActiveSeries: res.data[0]["ActiveSeries"],
      StakePercentsLeft: res.data[0]["StakePercentsLeft"],
      Presale: res.data[0]["Presale"] && {
        Duration: res.data[0]["Presale"]["Duration"],
        MinCap: res.data[0]["Presale"]["MinCap"],
        OwnerPercent: res.data[0]["Presale"]["OwnerPercent"],
        Price: res.data[0]["Presale"]["Price"],
        Start: res.data[0]["Presale"]["Start"],
        TotalGenerated: res.data[0]["Presale"]["TotalGenerated"],
      },
      Series: res.data[0]["Series"] && [
        {
          Duration: res.data[0]["Series"]["Duration"],
          StakeUnlock: res.data[0]["Series"]["StakeUnlock"],
          Start: res.data[0]["Series"]["Start"],
          Vote: res.data[0]["Series"]["Vote"]
        }
      ]
    },
    nextSeasons: res.data && res.data[1],
    error: res.error,
    loading: !res.error && !res.data
  }
}

export const getProjectField = (address, field, ...args) => {
  const res = useSWR(
    [address, field, ...args],
    contractCaller(ProjectABI)
  )

  return {
    val: res.data || (!res.error && "Loading...") || "Error",
    error: res.error,
  }
}

export const getProjectBaseInfo = (address) => {
  const res = useSWR(
    [address, "GetProjectBaseInfo"],
    contractCaller(ProjectABI)
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
        price: res.data[6]
      }
    ) || [],
    error: res.error,
    loading: !res.error && !res.data
  }
}

export const invest = (web3, address, val) => contractSender(web3, ProjectABI)(address, 'Invest', val)
export const newProject = (web3, props) => contractSender(web3, PorgiABI)(contractAddresses.porgi, 'AddProject', '0', props)

const contractCaller = abi => (...args) => {
  const [address, meth, ...params] = args
  const web3 = getWeb3(window.ethereum || defaultConfig.web3Provider)
  const contract = new web3.eth.Contract(abi, address)
  return contract.methods[meth](...params).call()
}

const contractSender = (web3, abi) => async (...args) => {
  const [address, meth, val, ...params] = args
  const contract = new web3.eth.Contract(abi, address)
  const from = await getMainAccount(web3)
  return contract.methods[meth](...params).send({ from: from, value: val })
}
