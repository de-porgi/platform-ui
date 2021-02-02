import { SmartContract } from './SmartContract'
import { projectSimpleFactoryABI } from '../abi/projectSimpleFactory'

export class ProjectSimpleFactoryContract extends SmartContract {
  constructor(address, web3) {
    super(address, web3, projectSimpleFactoryABI)
  }

  createProject(porgiAddrs, tuple) {
    return this.call(this.contract.methods.CreateProject(tuple, porgiAddrs))
  }
}
