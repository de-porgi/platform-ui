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
  Placeholder
} from 'semantic-ui-react'
import {
  getProjectBaseInfo,
  getProjectField,
  getProjectStatistic,
  getSeasons,
  getVoting,
} from '../hooks'
import { useWallet } from '../wallet'
import { fromWei, toWei } from '../web3-utils'
import { projectStatesNames } from '../enum/projectState'
import { secondsToDate } from '../utils'

const ProjectDetails = ({ address }) => {
  const { baseProjectInfo, infoLoading } = getProjectBaseInfo(address)
  const { statistic, statLoading } = getProjectStatistic(address)
  const { firstSeason, nextSeasons } = getSeasons(address)

  const { val: raised, loading: rLoading } = getProjectField(address, 'GetETHBalance')
  const { val: creationBlock, loading: cbLoading } = getProjectField(address, "creationBlock")
  const { val: totalSupply, loading: tsLoading } = getProjectField(address, "totalSupply")
  const { val: state, loading: sLoading } = getProjectField(address, "State")

  const [error, setError] = useState("")
  const [callLoading, setLoading] = useState(false)

  const creationDate = statistic && secondsToDate(statistic.TimeCreated)
  const loading = infoLoading || callLoading || statLoading || rLoading || cbLoading || tsLoading || sLoading

  if (error) {
    return (
      <Message error
        header="Failed to process action. Please retry!"
        list={[error]}
      />
    )
  }

  // TODO Loading have to be handled by upper component
  if (loading) {
    return <Segment placeholder loading />
  }

  return (
    <Segment.Group>
      <Segment>
        <Header as="h1" icon dividing textAlign="center">
          <Icon name='home' circular />
          <Header.Content>
            {baseProjectInfo.projectName}
          </Header.Content>
          <Header.Subheader>
            {state && projectStatesNames[state]}
          </Header.Subheader>
        </Header>


        <Statistic.Group widths="three">
          <Statistic>
            <Statistic.Value>{baseProjectInfo.price && fromWei(baseProjectInfo.price)} ETH</Statistic.Value>
            <Statistic.Label> Token price </Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{raised && fromWei(raised)} ETH </Statistic.Value>
            <Statistic.Label> Raized </Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>{totalSupply && fromWei(totalSupply)} {baseProjectInfo.name.slice(0, 3)} </Statistic.Value>
            <Statistic.Label> Current {baseProjectInfo.projectName} supply </Statistic.Label>
          </Statistic>
        </Statistic.Group>
        <Divider />
        <Statistic.Group widths="two">
          <Statistic>
            <Statistic.Value>{creationBlock} </Statistic.Value>
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
        </Header>
        <Statistic.Group widths="four" size="small">
          <Statistic>
            <Statistic.Value> {firstSeason.Presale.Price && fromWei(firstSeason.Presale.Price)} ETH</Statistic.Value>
            <Statistic.Label> Presale Token Price </Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value> {firstSeason.Presale.MinCap && firstSeason.Presale.MinCap} ETH </Statistic.Value>
            <Statistic.Label> Presale Soft Cap </Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value> {firstSeason.Presale.Duration} </Statistic.Value>
            <Statistic.Label> Presale Duration </Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value> {firstSeason.Presale.OwnerPercent}% </Statistic.Value>
            <Statistic.Label> Token reserve for the project </Statistic.Label>
          </Statistic>
        </Statistic.Group>
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
                      return <Series key={i} series={series} i={i} />
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


    </Segment.Group>
  )
}


const Series = ({ series, i }) => {
  const { web3, account } = useWallet()
  const { voting, loading } = getVoting(web3, series.Vote)


  if (loading) {
    return (
      <Placeholder fluid>
        <Placeholder.Header image>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Header>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>
    )
  }

  return (
    <Item>
      <Item.Content>
        <Item.Header> Series {i + 1} </Item.Header>
        <Item.Meta> Unlocks {series.StakeUnlock}% of investments </Item.Meta>
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

        <Item.Extra>
          <Button.Group>
            <Button positive> Yes </Button>
            <Button.Or />
            <Button> No </Button>
          </Button.Group>
        </Item.Extra>
      </Item.Content>
    </Item>
  )
}

export default ProjectDetails
