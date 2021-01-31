import { SmartContract } from './SmartContract'
import { votingAbi } from '../abi/abis'

export class VotingContract extends SmartContract {
  constructor(address) {
    super(address, votingAbi)
  }

  start() {
    return this.send(this.contract.methods.Start())
  }

  vote() {
    return this.send(this.contract.methods.Vote())
  }

  finish() {
    return this.send(this.contract.methods.Finish())
  }

  cancel() {
    return this.send(this.contract.methods.Cancel())
  }

  getBlockStart() {
    return this.call(this.contract.methods.BlockStart())
  }

  getProperty() {
    return this.call(this.contract.methods.GetProperty())
  }

  isOpen() {
    return this.call(this.contract.methods.IsOpen())
  }

  getResult() {
    return this.call(this.contract.methods.Result())
  }

  getTimestampStart() {
    return this.call(this.contract.methods.TimestampStart())
  }

  getTotalNo() {
    return this.call(this.contract.methods.TotalNo())
  }

  getTotalSupply() {
    return this.call(this.contract.methods.TotalSupply())
  }

  getTotalYes() {
    return this.call(this.contract.methods.TotalYes())
  }

  getVotes(address) {
    return this.call(this.contract.methods.Votes(address))
  }
}
