import useSWR from 'swr'
import { contractAddresses, defaultConfig } from '../environment'
import PorgiABI from '../abi/porgi'
import ProjectABI from '../abi/project'
import VotingABI from '../abi/voting'
import { getMainAccount, getWeb3 } from '../web3-utils'
import { useState } from 'react'

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

  return {
    val: data || (!error && "Loading...") || "Error",
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

export const getVoting = address => {
  const { data, error } = useSWR(
    [contractAddresses.porgi, "GetVotingInfo", address],
    contractCaller(PorgiABI)
  )

  return {
    voting: data,
    error: error,
    loading: !error && !data
  }
}

export const invest = (web3, address, amount) => contractSender(web3, ProjectABI)(address, 'Invest', amount)
export const newProject = (web3, props) => contractSender(web3, PorgiABI)(contractAddresses.porgi, 'AddProject', '0', props)
export const startPresale = (web3, project) => contractSender(web3, ProjectABI)(project, 'StartPresale', '0')
export const finishPresale = (web3, project) => contractSender(web3, ProjectABI)(project, 'FinishPresale', '0')
export const addNextSeasons = (web3, project, season) => contractSender(web3, ProjectABI)(project, 'AddNextSeasons', '0', season)
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

const contractSender = (web3, abi) => async (...args) => {
  const [address, meth, amount, ...params] = args
  console.log(abi)
  const contract = new web3.eth.Contract(abi, address)
  const from = await getMainAccount(web3)
  return contract.methods[meth](...params).send({ from: from, value: amount })
}

export const useInput = init => {
  const [value, setValue] = useState(init);

  return {
    setValue,
    reset: () => setValue(""),
    input: {
      value,
      onChange: e => {
        e.preventDefault()
        setValue(e.target.value);
      }
    }
  };
};