import React from 'react'
import { Container, Header, Table, Button } from 'semantic-ui-react'
import { getProjectField } from '../hooks'

const ProjectDetails = (props) => {
  const projectName = loadFiled("ProjectName")
  const owner = loadFiled("Owner")
  const name = loadFiled("name")
  const state = loadFiled("State")
  const creationBlock = loadFiled("creationBlock")
  const activeVoting = loadFiled("ActiveVoting")

  const symbol = loadFiled("symbol")
  const totalSupply = loadFiled("totalSupply")
  const decimals = loadFiled("decimals")
  const transfersEnabled = loadFiled("transfersEnabled")

  function loadFiled(field) {
    const { val } = getProjectField(props.address, field)
    return val
  }

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
            <Table.Cell>{transfersEnabled ? "enabled" : "disabled"}</Table.Cell>
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
