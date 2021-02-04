import React from 'react'
import { Container, Header, Table, Button, Input } from 'semantic-ui-react'
import { getProjectBaseInfo, getProjectField } from '../hooks'
import { getWeb3 } from '../web3-utils'
import ProjectABI from '../abi/project'
import { defaultConfig } from '../environment'

const ProjectDetails = (props) => {
  const { baseInfo, loading } = getProjectBaseInfo(props.address)
  const owner = baseInfo[0] || (loading && "Loading...")
  const projectName = baseInfo[1] || (loading && "Loading...")
  const name = baseInfo[2] || (loading && "Loading...")
  const symbol = baseInfo[3] || (loading && "Loading...")
  const decimals = baseInfo[4] || (loading && "Loading...")
  // TODO will be used for accordion
  // const activeSeason = baseInfo[5] || (loading && "Loading...")
  const statistic = baseInfo[6] || (loading && "Loading...")
  const state = statistic[1] || (loading && "Loading...")

  const creationBlock = loadFiled("creationBlock")
  const activeVoting = loadFiled("ActiveVoting")
  const totalSupply = loadFiled("totalSupply")

  function loadFiled(field) {
    const { val } = getProjectField(props.address, field)
    return val
  }

  let weiCount = 300000000000000
  // TODO it works, but require refines
  function invest() {
    const web3 = getWeb3(window.ethereum || defaultConfig.web3Provider)
    const contract = new web3.eth.Contract(ProjectABI, props.address)

    web3.eth.sendTransaction({
      to: props.address,
      from: window.ethereum.selectedAddress,
      value: weiCount.toString(),
      data: contract.methods.Invest().encodeABI()
    })
  }

  function handleCount(e) {
    weiCount = e.target.value
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
            <Table.Cell>enabled</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Input onChange={handleCount} fluid size='large' type='number' placeholder='Count of WEI' defaultValue={weiCount} action>
        <input />
        <Button positive
                onClick={invest}
        >Invest</Button>
      </Input>
    </Container>
  )
}

export default ProjectDetails
