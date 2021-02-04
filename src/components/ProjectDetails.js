import React, { useState, useEffect } from 'react'
import { Container, Header, Table, Button } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'
import { projectABI } from '../abi/project'
import { defaultConfig } from '../environment'

const ProjectDetails = () => {
  const { address } = useParams()
  // TODO is it right?
  const web3 = defaultConfig.web3Provider
  const project = new web3.eth.Contract(projectABI, address)

  const [projectName, setProjectName] = useState('Project')
  const [name, setName] = useState('name')
  const [owner, setOwner] = useState(
    '0x0000000000000000000000000000000000000000'
  )
  const [state, setState] = useState('0')
  const [symbol, setSymbol] = useState('TOKEN_PRG')
  const [creationBlock, setCreationBlock] = useState('0')
  const [activeVoting, setActiveVoting] = useState(
    '0x0000000000000000000000000000000000000000'
  )
  const [totalSupply, setTotalSupply] = useState('100000')
  const [transfers, srtTransfers] = useState('enabled')
  const [decimals, setDecimals] = useState('18')

  function fetch(setter, meth) {
    meth
      .call()
      .then(res => setter(res))
      .catch(err => {
        console.log(err)
        setter('Error')
      })
  }

  useEffect(() => {
    if (!web3) {
      return
    }

    fetch(setProjectName, project.methods.ProjectName())
    fetch(setName, project.methods.name())
    fetch(setOwner, project.methods.Owner())
    fetch(setState, project.methods.State())
    fetch(setSymbol, project.methods.symbol())
    fetch(setCreationBlock, project.methods.creationBlock())
    fetch(setActiveVoting, project.methods.ActiveVoting())
    fetch(setTotalSupply, project.methods.totalSupply())
    fetch(setDecimals, project.methods.decimals())
    project.methods
      .transfersEnabled()
      .call()
      .then(res => {
        res ? srtTransfers('true') : srtTransfers('false')
      })
      .catch(err => {
        console.log(err)
        srtTransfers('Error')
      })
  }, [state])

  return (
    <Container>
      <Header as="h1" textAlign="center">
        {projectName}
      </Header>

      <Header as="h2" dividing>
        Details
      </Header>

      <Table definition>
        <Table.Body>
          <Table.Row>
            <Table.Cell width={2}>Owner</Table.Cell>
            <Table.Cell>{owner}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Name</Table.Cell>
            <Table.Cell>{name}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>State</Table.Cell>
            <Table.Cell>{state}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Creation Block</Table.Cell>
            <Table.Cell>{creationBlock}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Active Voting</Table.Cell>
            <Table.Cell>{activeVoting}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Header as="h2" dividing>
        Token
      </Header>

      <Table definition>
        <Table.Body>
          <Table.Row>
            <Table.Cell width={2}>Symbol</Table.Cell>
            <Table.Cell>{symbol}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Total Supply</Table.Cell>
            <Table.Cell>{totalSupply}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Decimals</Table.Cell>
            <Table.Cell>{decimals}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Transfers</Table.Cell>
            <Table.Cell>{transfers}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Button fluid positive size="large">
        Invest
      </Button>
    </Container>
  )
}

export default ProjectDetails
