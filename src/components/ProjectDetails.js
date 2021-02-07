import React, { useState } from 'react'
import {
  Header,
  Icon,
  Segment,
  Message,
  Statistic,
  Divider,
  Container,
  Tab,
  Item,
  Button,
  Placeholder,
  Form
} from 'semantic-ui-react'
import {
  getProjectBaseInfo,
  getProjectField,
  getProjectStatistic,
  getProjectBalance,
  getSeasons,
  getVoting,
  withdraw,
  startPresale,
  finishPresale,
  invest,
  startVoting,
  finishVoting,
  vote,
  getVote
} from '../hooks'
import { useWallet } from '../wallet'
import { fromWei, toWei, isEmptyAddress } from '../web3-utils'
import { projectInnerStates, projectInnerStatesNames } from '../enum/projectState'
import { secondsToDate } from '../utils'

const ProjectDetails = ({ address }) => {
  const { web3, account } = useWallet()
  const { baseProjectInfo } = getProjectBaseInfo(address)
  const { statistic } = getProjectStatistic(address)
  const { firstSeason } = getSeasons(address)

  const { val: creationBlock } = getProjectField(address, "creationBlock")
  const { val: totalSupply } = getProjectField(address, "totalSupply")
  const { val: state } = getProjectField(address, "State")
  const balance = getProjectBalance(address)

  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [etherCount, setWeiCount] = useState("1")

  if (error) {
    return (
      <Message error
        header="Failed to process action. Please retry!"
        list={[error]}
      />
    )
  }

  // TODO Loading have to be handled by totalSupplyupper component
  if (!firstSeason || !statistic || !baseProjectInfo || !creationBlock || !totalSupply || !state || loading) {
    return <Segment placeholder loading />
  }

  const creationDate = statistic && secondsToDate(statistic.TimeCreated)
  const isOwner = baseProjectInfo.owner === account
  return (
    <Segment.Group>
      <Segment>
        <Header as="h1" icon dividing textAlign="center">
          <Icon name='home' circular />
          <Header.Content>
            {baseProjectInfo.projectName}
          </Header.Content>
          <Header.Subheader>
            {state && projectInnerStatesNames[state]}
          </Header.Subheader>
        </Header>

        <Statistic.Group widths="three">
          <Statistic>
            <Statistic.Value>
              {baseProjectInfo.price && fromWei(baseProjectInfo.price)} {baseProjectInfo.symbol}/ETH
            </Statistic.Value>
            <Statistic.Label> Token price </Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{fromWei(balance)} ETH </Statistic.Value>
            <Statistic.Label> Raized </Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{totalSupply && fromWei(totalSupply)} {baseProjectInfo.symbol} </Statistic.Value>
            <Statistic.Label> Current {baseProjectInfo.projectName} supply </Statistic.Label>
          </Statistic>
        </Statistic.Group>
        <Divider />
        <Statistic.Group widths="two">
          <Statistic>
            <Statistic.Value> {creationBlock} </Statistic.Value>
            <Statistic.Label> Created On Block </Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{statistic && creationDate.toLocaleDateString()} </Statistic.Value>
            <Statistic.Label> Created At </Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </Segment>
      <Segment>
        <Header as="h2">
          Description
          <Header.Subheader>Imagine here offchain data fetched from IPFS :)</Header.Subheader>
        </Header>
        <Container>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
            quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
            arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
            viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
            quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
            arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi.
        </p>
        </Container>
      </Segment>
      <Segment>
        <Header as="h2">
          Presale
          <Header.Subheader> {state === projectInnerStates.PresaleInProgress && "Active"} </Header.Subheader>
        </Header>
        <Statistic.Group widths="four" size="mini">
          <Statistic>
            <Statistic.Value> {firstSeason.Presale.Price && fromWei(firstSeason.Presale.Price)} {baseProjectInfo.symbol}/ETH</Statistic.Value>
            <Statistic.Label> Presale Token Price </Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value> {firstSeason.Presale.MinCap && fromWei(firstSeason.Presale.MinCap)} ETH </Statistic.Value>
            <Statistic.Label> Presale Soft Cap </Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value> {Math.floor(firstSeason.Presale.Duration / (3600 * 24))} days</Statistic.Value>
            <Statistic.Label> Presale Duration </Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value> {firstSeason.Presale.OwnerPercent}% </Statistic.Value>
            <Statistic.Label> Token reserve for the project </Statistic.Label>
          </Statistic>
        </Statistic.Group>
        {isOwner && state === projectInnerStates.PresaleIsNotStarted &&
          <Button primary onClick={async () => {
            setLoading(true)
            try {
              await startPresale(web3, address)
            } catch (e) {
              setError(e.message)
            } finally {
              setLoading(false)
            }
          }}>
            Start Presale
          </Button>
        }

        {isOwner && state === projectInnerStates.PresaleFinishing &&
          <Button primary onClick={async () => {
            setLoading(true)
            try {
              await finishPresale(web3, address)
            } catch (e) {
              setError(e.message)
            } finally {
              setLoading(false)
            }
          }}>
            Finish Presale
          </Button>
        }
      </Segment>
      <Segment>
        <Tab
          menu={{ secondary: true, pointing: true }}
          panes={[
            {
              menuItem: "First Season",
              render: () => {
                return (
                  <Item.Group relaxed divided>
                    {firstSeason.Series.map((series, i) => {
                      return <Series key={i} project={address} series={series} i={i} />
                    })}
                  </Item.Group>
                )
              }
            },
            {
              menuItem: "Second Season",
              render: () => (<Message>Empty</Message>)
            }
          ]}
        />
      </Segment>
      <Segment>
        {state === projectInnerStates.PresaleInProgress &&
          <Form onSubmit={async () => {
            setLoading(true)
            try {
              await invest(web3, address, toWei(etherCount))
            } catch (e) {
              setError(e.message)
            } finally {
              setLoading(false)
            }
          }}>
            <Form.Field required>
              <label> Ether Count </label>
              <Form.Input
                placeholder='Ether Count'
                name='ether'
                type='number'
                value={etherCount}
                onChange={(e, { value }) => setWeiCount(value)}
              />
              <Form.Button
                disabled={!web3}
                content='Invest'
                fluid
                positive
              />
            </Form.Field>
          </Form>
        }

        {state === projectInnerStates.ProjectCanceled &&
          <Button primary onClick={async () => {
            setLoading(true)
            try {
              await withdraw(web3, address)
            } catch (e) {
              setError(e.message)
            } finally {
              setLoading(false)
            }
          }}>
            Withdraw Funds
        </Button>}
      </Segment>
    </Segment.Group>
  )
}


const Series = ({ series, i, project }) => {
  return (
    <Item>
      <Item.Content>
        <Item.Header> Series {i + 1} </Item.Header>
        <Item.Meta> Unlocks {series.StakeUnlock}% of investments, {Math.floor(series.Duration / (3600 * 24))} days </Item.Meta>
        <Item.Description>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
          ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
          ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
          quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
          arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
          Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
          dapibus. Vivamus eslementum semper nisi.
         </Item.Description>
        <Voting project={project} address={series.Vote} />
      </Item.Content>
    </Item>
  )
}

const Voting = ({ address, project }) => {
  if (isEmptyAddress(address)) {
    return <></>
  }

  const { web3, account } = useWallet()
  const { voting } = getVoting(address)
  const { accountVote } = getVote(address, account)
  const { baseProjectInfo } = getProjectBaseInfo(project)
  const { val: state } = getProjectField(project, "State")

  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  if (!voting || !baseProjectInfo || !state || loading) {
    return (
      <Placeholder fluid>
        <Placeholder.Header image>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Header>
      </Placeholder>
    )
  }

  if (error) {
    return (
      <Message error
        header="Failed to process action. Please retry!"
        list={[error]}
      />
    )
  }

  const isOwner = baseProjectInfo.owner === account
  const open = voting.Result === voting.Result.None && Date.now().getTime() / 1000 < (voting.TimestampStart + voting.Property.Duration) && voting.TimestampStart !== 0
  return (
    <Item.Extra>
      <Button.Group>
        {isOwner && state === projectInnerStates.SeriesFinishing &&
          <Button primary onClick={async () => {
            setLoading(true)
            try {
              await startVoting(web3, address)
            } catch (e) {
              setError(e.message)
            } finally {
              setLoading(false)
            }
          }}>
            Start Voting
          </Button>
        }

        {isOwner && state === projectInnerStates.VotingFinishing &&
          <Button primary onClick={async () => {
            setLoading(true)
            try {
              await finishVoting(web3, address)
            } catch (e) {
              setError(e.message)
            } finally {
              setLoading(false)
            }
          }}>
            Finish Voting
          </Button>
        }

        <Button
          disabled={!open || accountVote === 2}
          basic
          primary
          content="Yes"
          icon="thumbs up outline"
          label={{
            basic: true,
            color: "blue",
            pointing: "left",
            content: voting.TotalYes,
          }}
          onClick={async () => {
            setLoading(true)
            try {
              await vote(web3, address, 2)
            } catch (e) {
              setError(e.message)
            } finally {
              setLoading(false)
            }
          }}
        />
        <Button.Or />
        <Button
          disabled={!open || accountVote === 1}
          basic
          secondary
          content="No"
          icon="thumbs down outline"
          label={{
            basic: true,
            color: "black",
            pointing: "left",
            content: voting.TotalNo,
          }}
          onClick={async () => {
            setLoading(true)
            try {
              await vote(web3, address, 1)
            } catch (e) {
              setError(e.message)
            } finally {
              setLoading(false)
            }
          }}
        />
      </Button.Group>
    </Item.Extra>
  )
}

export default ProjectDetails
