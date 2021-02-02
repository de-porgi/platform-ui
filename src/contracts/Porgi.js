import { SmartContract } from './SmartContract'
import { porgiABI } from '../abi/porgi'

// eslint-disable-next-line no-unused-vars
const ProjectState = {
  None: 0,
  New: 1,
  Presale: 2,
  InProgress: 3,
  Finished: 4,
  Canceled: 5,
}

export class PorgiContract extends SmartContract {
  constructor(address, web3) {
    super(address, web3, porgiABI)
  }

  getAaveWETHGateway() {
    return this.call(this.contract.methods.AaveWETHGateway())
  }

  getProjectsBy(state) {
    return this.call(this.contract.methods.GetProjectsBy(state))
  }

  getProjectsOf(owner) {
    return this.call(this.contract.methods.GetProjectsOf(owner))
  }

  getProjectsOwners() {
    return this.call(this.contract.methods.GetProjectsOwners())
  }

  getProjectStatistic(prjAddrs) {
    return this.call(this.contract.methods.GetProjectStatistic(prjAddrs))
  }

  getProjectFactory() {
    return this.call(this.contract.methods.ProjectFactory())
  }

  getTokenFactory() {
    return this.call(this.contract.methods.TokenFactory())
  }

  getVotingFactory() {
    return this.call(this.contract.methods.VotingFactory())
  }

  addProject(tuple) {
    return this.send(this.contract.methods.AddProject(tuple))
  }

  changeState(state) {
    return this.send(this.contract.methods.ChangeState(state))
  }
}
