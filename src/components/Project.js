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
    }
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

    this.project.getState().then(res => {
      this.setState({ state: res })
    })

    this.project.getSymbol().then(res => {
      this.setState({ symbol: res })
    })

    this.project.getParentToken().then(res => {
      this.setState({ parentToken: res })
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
          <b>Creation Block: </b> {this.state.creationBlock}
        </p>
      </div>
    )
  }
}
