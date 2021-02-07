import useSWR from 'swr'
import BN from 'bn.js'
import { contractAddresses, defaultConfig } from '../environment'
import PorgiABI from '../abi/porgi'
import ProjectABI from '../abi/project'
import VotingABI from '../abi/voting'
import { getMainAccount, getWeb3, filterBalanceValue } from '../web3-utils'
import { projectStates } from '../enum/projectState'

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

export const getProjectsOf = owner => {
  const { data, error } = useSWR(
    [contractAddresses.porgi, 'GetProjectsOf', owner],
    contractCaller(PorgiABI)
  )

  return {
    projects: data || [],
    loading: !error && !data,
    error: error,
  }
}

export const getSeasons = address => {
  const { data, error } = useSWR(
    [address, "GetSeasons"],
    contractCaller(ProjectABI)
  )

  return {
    firstSeason: data && data[0],
    nextSeasons: data ? data[1] : [],
    error: error,
    loading: !error && !data
  }
}

export const getProjectField = (address, field, ...args) => {
  const { data, error } = useSWR(
    [address, field, ...args],
    contractCaller(ProjectABI)
  )

  if (error) {
    console.log(error)
  }
  return {
    val: data,
    error: error,
    loading: !error && !data
  }
}

export const getProjectBaseInfo = address => {
  const { data, error } = useSWR(
    [address, "GetProjectBaseInfo"],
    contractCaller(ProjectABI)
  )

  return {
    baseProjectInfo: data &&
    {
      owner: data[0],
      projectName: data[1],
      name: data[2],
      symbol: data[3],
      decimals: data[4],
      activeSeason: data[5],
      price: data[6]
    } || [],
    error: error,
    loading: !error && !data
  }
}

export const getProjectStatistic = address => {
  const { data, error } = useSWR(
    [contractAddresses.porgi, "GetProjectStatistic", address],
    contractCaller(PorgiABI)
  )

  return {
    statistic: data,
    error: error,
    loading: !error && !data
  }
}

export const getProjectBalance = address => {
  const wethbalacne = useSWR(
    [address, "GetETHBalance"],
    contractCaller(ProjectABI)
  ).data
  const balance = useSWR(
    [address],
    ethCaller()
  ).data
  let balanceBN = new BN(filterBalanceValue(wethbalacne))
  balanceBN = balanceBN.add(new BN(filterBalanceValue(balance)))
  return balanceBN
}

export const getVoting = address => {
  const { data, error } = useSWR(
    [address, "GetVotingInfo"],
    contractCaller(VotingABI)
  )

  return {
    voting: data,
    error: error,
    loading: !error && !data
  }
}

export const getVote = (address, voter) => {
  const { data, error } = useSWR(
    [address, "Votes", voter],
    contractCaller(VotingABI)
  )

  return {
    voting: data,
    error: error,
    loading: !error && !data
  }
}

export const invest = async (web3, address, amount) => {
  const state = await contractCaller(web3, ProjectABI)(address, 'State')
  if (state !== projectStates.PresaleInProgress) {
    return new Error("Contract is not in PresaleInProgress state anymore")
  }

  return contractSender(web3, ProjectABI)(address, 'Invest', amount)
}
export const newProject = (web3, props) => contractSender(web3, PorgiABI)(contractAddresses.porgi, 'AddProject', '0', props)
export const startPresale = (web3, project) => contractSender(web3, ProjectABI)(project, 'StartPresale', '0')
export const finishPresale = (web3, project) => contractSender(web3, ProjectABI)(project, 'FinishPresale', '0')
export const withdraw = (web3, project) => contractSender(web3, ProjectABI)(project, 'WithdrawETH', '0')
export const vote = (web3, voting, vote) => contractSender(web3, VotingABI)(voting, 'Vote', '0', vote)
export const startVoting = (web3, voting) => contractSender(web3, VotingABI)(voting, 'Start', '0')
export const finishVoting = (web3, voting) => contractSender(web3, VotingABI)(voting, 'Finish', '0')


const contractCaller = abi => (...args) => {
  const [address, meth, ...params] = args
  const web3 = getWeb3(window.ethereum || defaultConfig.web3Provider)
  const contract = new web3.eth.Contract(abi, address)
  return contract.methods[meth](...params).call()
}

const ethCaller = () => (...args) => {
  const [address] = args
  const web3 = getWeb3(window.ethereum || defaultConfig.web3Provider)
  const eth = web3.eth;
  return eth.getBalance(address);
}

const contractSender = (web3, abi) => async (...args) => {
  const [address, meth, amount, ...params] = args
  const contract = new web3.eth.Contract(abi, address)
  const from = await getMainAccount(web3)
  return contract.methods[meth](...params).send({ from: from, value: amount })
}
