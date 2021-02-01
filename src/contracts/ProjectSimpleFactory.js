import { SmartContract } from './SmartContract'
import { projectSimpleFactoryABI } from '../abi/projectSimpleFactory'

export class ProjectSimpleFactoryContract extends SmartContract {
  constructor(address) {
    super(address, projectSimpleFactoryABI)
  }

  createProject(porgiAddrs, tuple) {
    return this.call(this.contract.methods.CreateProject(tuple, porgiAddrs))
  }
}
