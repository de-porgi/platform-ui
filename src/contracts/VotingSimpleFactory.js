import { SmartContract } from './SmartContract'
import { votingSimpleFactoryABI } from '../abi/votingSimpleFactory'

export class VotingSimpleFactoryContract extends SmartContract {
  constructor(address, web3) {
    super(address, web3, votingSimpleFactoryABI)
  }

  createVoting(prjAddrs, tuple) {
    return this.call(this.contract.methods.CreateVoting(prjAddrs, tuple))
  }
}
