import { SmartContract } from './SmartContract'
import { projectABI } from '../abi/abis'

export class ProjectContract extends SmartContract {
  constructor(address) {
    super(address, projectABI)
  }

  getAllowance(owner, spender) {
    return this.call(this.contract.methods.allowance(owner, spender))
  }

  getBalanceOf(owner) {
    return this.call(this.contract.methods.balanceOf(owner))
  }

  getBalanceOfAt(owner, blockNumber) {
    return this.call(
      this.contract.methods.balanceOfAt(owner, blockNumber)
    )
  }

  getController() {
    return this.call(this.contract.methods.controller())
  }

  getCreationBlock() {
    return this.call(this.contract.methods.creationBlock())
  }

  getCurrentVoting() {
    return this.call(this.contract.methods.CurrentVoting())
  }

  getDecimals() {
    return this.call(this.contract.methods.decimals())
  }

  getEthBalance() {
    return this.call(this.contract.methods.GetETHBalance())
  }

  getSeason(number) {
    return this.call(this.contract.methods.GetSeason(number))
  }

  getSeasons() {
    return this.call(this.contract.methods.GetSeasons())
  }

  getName() {
    return this.call(this.contract.methods.name())
  }

  getOwner() {
    return this.call(this.contract.methods.Owner())
  }

  getParentSnapshotBlock() {
    return this.call(this.contract.methods.parentSnapshotBlock())
  }

  getParentToken() {
    return this.call(this.contract.methods.parentToken())
  }

  getProjectName() {
    return this.call(this.contract.methods.ProjectName())
  }

  getState() {
    return this.call(this.contract.methods.State())
  }

  getSymbol() {
    return this.call(this.contract.methods.symbol())
  }

  getTotalSupply() {
    return this.call(this.contract.methods.totalSupply())
  }

  getTotalSupplyAt(blockNumber) {
    return this.call(this.contract.methods.totalSupplyAt(blockNumber))
  }

  isTransfersEnabled() {
    return this.call(this.contract.methods.transfersEnabled())
  }

  getVersion() {
    return this.call(this.contract.methods.version())
  }
}
