import { SmartContract } from './SmartContract'
import { porgiABI } from '../abi/abis'

export class PorgiContract extends SmartContract {
  constructor(address) {
    super(address, porgiABI)
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
}
