import { SmartContract } from './SmartContract'
import { votingSimpleFactoryABI } from '../abi/abis'

export class VotingSimpleFactoryContract extends SmartContract {
  constructor(address) {
    super(address, votingSimpleFactoryABI)
  }

  createVoting(prjAddrs, tuple) {
    return this.call(this.contract.methods.CreateVoting(prjAddrs, tuple))
  }
}
