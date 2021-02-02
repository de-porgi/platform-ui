import React from 'react'
import { ProjectContract } from '../contracts/Project'

export class Project extends React.Component {
  constructor(props) {
    super(props)

    this.project = new ProjectContract(this.props.address)
    this.state = {
      creationBlock: 'Loading...',
      decimals: 'Loading...',
      name: 'Loading...',
      projectName: 'Loading...',
      owner: 'Loading...',
      state: 'Loading...',
      symbol: 'Loading...',
      parentToken: 'Loading...',
      controller: 'Loading...',
      activeVoting: 'Loading...',
      ethBalance: 'Loading...',
      seasons: 'Loading...',
      totalSupply: 'Loading...',
      transfersEnabled: 'Loading...',
      version: 'Loading...',
    }

    this.updateState = this.updateState.bind(this)
  }

  componentDidMount() {
    this.project.getCreationBlock().then(res => {
      this.setState({ creationBlock: res })
    })

    this.project.getDecimals().then(res => {
      this.setState({ decimals: res })
    })

    this.project.getName().then(res => {
      this.setState({ name: res })
    })

    this.project.getProjectName().then(res => {
      this.setState({ projectName: res })
    })

    this.project.getOwner().then(res => {
      this.setState({ owner: res })
    })

    this.project.getSymbol().then(res => {
      this.setState({ symbol: res })
    })

    this.project.getParentToken().then(res => {
      this.setState({ parentToken: res })
    })

    this.project.getController().then(res => {
      this.setState({ controller: res })
    })

    this.project.getActiveVoting().then(res => {
      this.setState({ activeVoting: res })
    })

    this.project.getSeasons().then(res => {
      this.setState({ seasons: res })
    })

    this.project.getTotalSupply().then(res => {
      this.setState({ totalSupply: res })
    })

    this.project.isTransfersEnabled().then(res => {
      if (res === true) {
        this.setState({ transfersEnabled: 'enabled' })
        return
      }

      this.setState({ transfersEnabled: 'disabled' })
    })

    this.project.getVersion().then(res => {
      this.setState({ version: res })
    })

    this.updateState()
  }

  updateState() {
    this.project.getState().then(res => {
      this.setState({ state: res })
    })
  }

  render() {
    return (
      <div>
        <p>
          <b>Project Name: </b> {this.state.projectName}
        </p>
        <p>
          <b>Name: </b> {this.state.name}
        </p>
        <p>
          <b>Owner: </b> {this.state.owner}
        </p>
        <p>
          <b>State: </b> {this.state.state}
        </p>
        <p>
          <b>Symbol: </b> {this.state.symbol}
        </p>
        <p>
          <b>Decimals: </b> {this.state.decimals}
        </p>
        <p>
          <b>Project Token: </b> {this.state.parentToken}
        </p>
        <p>
          <b>Current Voting: </b> {this.state.activeVoting}
        </p>
        <p>
          <b>Total Supply: </b> {this.state.totalSupply}
        </p>
        <p>
          <b>Transfers: </b> {this.state.transfersEnabled}
        </p>
        <p>
          <b>Creation Block: </b> {this.state.creationBlock}
        </p>
        <p>
          <b>Controller: </b> {this.state.controller}
        </p>
        <p>
          <b>Seasons: </b> {this.state.seasons}
        </p>
        <p>
          <b>Version: </b> {this.state.version}
        </p>
        <button onClick={this.updateState}>Update State</button>
      </div>
    )
  }
}
