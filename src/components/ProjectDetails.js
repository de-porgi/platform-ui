import React, { useState } from 'react'
import {
  Header,
  Table,
  Form,
  Segment,
  Dimmer,
  Loader,
  Accordion, Label,
} from 'semantic-ui-react'
import {
  getFirstSeason, getNextSeasons,
  getProjectBaseInfo,
  getProjectField,
  invest,
} from '../hooks'
import { useWallet } from '../wallet'
import { toWei } from '../web3-utils'
import Season from './Season'

const ProjectDetails = (props) => {
  const { web3 } = useWallet()
  const { baseProjectInfo, loading } = getProjectBaseInfo(props.address)
  const creationBlock = loadFiled("creationBlock")
  const activeVoting = loadFiled("ActiveVoting")
  const totalSupply = loadFiled("totalSupply")

  function loadFiled(field) {
    const { val } = getProjectField(props.address, field)
    return val
  }

  const [etherCount, setWeiCount] = useState("1")
  function inputChange(e) {
    setWeiCount(e.target.value)
  }

  async function onSubmit() {
    const res = await invest(web3, props.address, toWei(etherCount))
    console.log(res)
  }

  const firstSeason = () => {
    const { season } = getFirstSeason(props.address)
    return season
  }

  const nextSeasons = () => {
    const { season } = getNextSeasons(props.address)
    return season
  }

  let seasons = firstSeason()
  let next = nextSeasons()
  if (Array.isArray(next)) {
    seasons = [seasons, ...next]
  } else {
    seasons = [seasons, next]
  }

  const panels = seasons && seasons.map((season, i) => {
    return season && newSeasonPanel(season, i)
  })

  function newSeasonPanel(season, i) {
    return {
      key: i,
      title: {
        content: <Label color='blue' content={`Season${i.toString()}`} />
      },
      content: {
        content: <Season season={season} />
      },
    }
  }

  return (
    <Segment>
      <Dimmer active={loading} inverted>
        <Loader />
      </Dimmer>

      <Header as="h1" textAlign="center">{baseProjectInfo.projectName}</Header>

      <Header as="h2" dividing>Details</Header>

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

      <Header as="h2" dividing>Token</Header>

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
            <label> Ether Count </label>
            <Form.Input
              placeholder='Ether Count'
              name='ether'
              type='number'
              value={etherCount}
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

      <Header as="h2" dividing>Seasons</Header>

      <Accordion defaultActiveIndex={0} panels={panels} />
    </Segment>
  )
}

export default ProjectDetails
