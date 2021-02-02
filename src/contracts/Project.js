import { SmartContract } from './SmartContract'
import { projectABI } from '../abi/project'

export class ProjectContract extends SmartContract {
  constructor(address, web3) {
    super(address, web3, projectABI)
  }

  getAllowance(owner, spender) {
    return this.call(this.contract.methods.allowance(owner, spender))
  }

  getBalanceOf(owner) {
    return this.call(this.contract.methods.balanceOf(owner))
  }

  getBalanceOfAt(owner, blockNumber) {
    return this.call(this.contract.methods.balanceOfAt(owner, blockNumber))
  }

  getController() {
    return this.call(this.contract.methods.controller())
  }

  getCreationBlock() {
    return this.call(this.contract.methods.creationBlock())
  }

  getActiveVoting() {
    return this.call(this.contract.methods.ActiveVoting())
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

  approve(spender, amount) {
    return this.send(this.contract.methods.approve(spender, amount))
  }

  approveAndCall(spender, amount, extraData) {
    return this.send(
      this.contract.methods.approveAndCall(spender, amount, extraData)
    )
  }

  changeController(newController) {
    return this.send(this.contract.methods.changeController(newController))
  }

  createCloneToken(
    cloneTokenName,
    cloneDecimalUnits,
    cloneTokenSymbol,
    snapshotBlock,
    transfersEnabled
  ) {
    return this.send(
      this.contract.methods.createCloneToken(
        cloneTokenName,
        cloneDecimalUnits,
        cloneTokenSymbol,
        snapshotBlock,
        transfersEnabled
      )
    )
  }

  decreaseAllowance(spender, subtractedValue) {
    return this.send(
      this.contract.methods.decreaseAllowance(spender, subtractedValue)
    )
  }

  destroyTokens(owner, amount) {
    return this.send(this.contract.methods.destroyTokens(owner, amount))
  }

  enableTransfers(transfersEnabled) {
    return this.send(this.contract.methods.enableTransfers(transfersEnabled))
  }

  finishPresale() {
    return this.send(this.contract.methods.FinishPresale())
  }

  finishSeries(result) {
    return this.send(this.contract.methods.FinishSeries(result))
  }

  generateTokens(owner, amount) {
    return this.send(this.contract.methods.generateTokens(owner, amount))
  }

  increaseAllowance(spender, addedValue) {
    return this.send(
      this.contract.methods.increaseAllowance(spender, addedValue)
    )
  }

  startNextSeason() {
    return this.send(this.contract.methods.StartNextSeason())
  }

  startPresale() {
    return this.send(this.contract.methods.StartPresale())
  }

  transfer(to, amount) {
    return this.send(this.contract.methods.transfer(to, amount))
  }

  transferFrom(from, to, amount) {
    return this.send(this.contract.methods.transferFrom(from, to, amount))
  }

  withdrawETH() {
    return this.send(this.contract.methods.WithdrawETH())
  }
}
