import { SmartContract } from './SmartContract'
import { votingSimpleFactoryABI } from '../abi/votingSimpleFactory'

export class VotingSimpleFactoryContract extends SmartContract {
  constructor(address) {
    super(address, votingSimpleFactoryABI)
  }

  createVoting(prjAddrs, tuple) {
    return this.call(this.contract.methods.CreateVoting(prjAddrs, tuple))
  }
}
