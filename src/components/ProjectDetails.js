import React, { useState } from 'react'
import {
  Header,
  Table,
  Form,
  Segment,
  Dimmer,
  Loader,
  Accordion,
} from 'semantic-ui-react'
import {
  getProjectBaseInfo,
  getProjectField, getSeasons,
  invest,
} from '../hooks'
import { useWallet } from '../wallet'
import { toWei } from '../web3-utils'
import Season from './Season'
import { projectStates, projectStatesNames } from '../enum/projectState'

const ProjectDetails = (props) => {
  const { web3 } = useWallet()
  const { baseProjectInfo, loading } = getProjectBaseInfo(props.address)
  const creationBlock = loadFiled("creationBlock")
  const state = loadFiled("State")
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

  const { firstSeason, nextSeasons } = getSeasons(props.address)
  let panels = firstSeason && [newSeasonPanel(firstSeason, 1)]
  if (nextSeasons && nextSeasons.length > 0) {
    panels = [...panels, nextSeasons.map((season, i) => {
      return season && newSeasonPanel(season, i+2)
    })]
  }

  function newSeasonPanel(season, i) {
    return {
      key: i,
      title: {
        content: <b>{`Season ${i.toString()}`}</b>
      },
      content: {
        content: (
          <div>
            {baseProjectInfo.activeSeason === i &&
              <Header as='h4' inverted color='green'>
                Active
              </Header>
            }
            <Season season={season} />
          </div>
        )
      },
    }
  }

  async function onSubmit() {
    const res = await invest(web3, props.address, toWei(etherCount))
    console.log(res)
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
            <Table.Cell>{state && projectStatesNames[state]}</Table.Cell>
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
            <Table.Cell>Price</Table.Cell>
            <Table.Cell>{baseProjectInfo.price}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Transfers</Table.Cell>
            <Table.Cell>enabled</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      {state === projectStates.PresaleInProgress &&
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

      <Accordion
        styled
        fluid
        defaultActiveIndex={baseProjectInfo.activeSeason > -1 && baseProjectInfo.activeSeason || 0}
        panels={panels}
      />
    </Segment>
  )
}

export default ProjectDetails
