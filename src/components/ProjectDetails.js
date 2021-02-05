import React, { useState } from 'react'
import { Header, Table, Form, Segment, Dimmer, Loader } from 'semantic-ui-react'
import { getProjectBaseInfo, getProjectField } from '../hooks'
import { useWallet } from '../wallet'
import ProjectABI from '../abi/project'

const ProjectDetails = (props) => {
  const { web3, account } = useWallet()
  const { baseProjectInfo, loading } = getProjectBaseInfo(props.address)
  const creationBlock = loadFiled("creationBlock")
  const activeVoting = loadFiled("ActiveVoting")
  const totalSupply = loadFiled("totalSupply")

  function loadFiled(field) {
    const { val } = getProjectField(props.address, field)
    return val
  }

  const [weiCount, setWeiCount] = useState(1000000000000000000)
  function inputChange(e) {
    setWeiCount(e.target.value)
  }

  function onSubmit() {
    const contract = new web3.eth.Contract(ProjectABI, props.address)

    web3.eth.sendTransaction({
      to: props.address,
      from: account,
      value: weiCount.toString(),
      data: contract.methods.Invest().encodeABI()
    })
      .then(() => {
        alert("Invested!")
        window.location.reload(true)
      })
      .catch(err => alert("Error happened during investing: " + err.message))
  }

  return (
    <Segment>
      <Dimmer active={loading} inverted>
        <Loader />
      </Dimmer>

      <Header as="h1" textAlign="center">
        {baseProjectInfo.projectName}
      </Header>

      <Header as="h2" dividing>
        Details
      </Header>

      <Table definition>
        <Table.Body>
          <Table.Row>
            <Table.Cell width={2}>Owner</Table.Cell>
            <Table.Cell>{baseProjectInfo.owner}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Name</Table.Cell>
            <Table.Cell>{baseProjectInfo.name}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>State</Table.Cell>
            <Table.Cell>{baseProjectInfo.state}</Table.Cell>
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
            <Table.Cell>{baseProjectInfo.symbol}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Total Supply</Table.Cell>
            <Table.Cell>{totalSupply}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Decimals</Table.Cell>
            <Table.Cell>{baseProjectInfo.decimals}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Transfers</Table.Cell>
            <Table.Cell>enabled</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      {baseProjectInfo.state === (2).toString() &&
        <Form onSubmit={onSubmit}>
          <Form.Field required>
            <label> Wei Count (1 Ether = 1,000,000,000,000,000,000 Wei)</label>
            <Form.Input
              placeholder='Wei Count'
              name='wei'
              type='number'
              value={weiCount}
              onChange={inputChange}
            />
            <Form.Button
              disabled={!web3}
              content={web3 ? 'Invest' : 'Connect your account'}
              fluid
              positive
            />
          </Form.Field>
        </Form>
      }
    </Segment>
  )
}

export default ProjectDetails
