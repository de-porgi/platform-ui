import React, { useState } from 'react'
import { Grid, Header, Button, Form } from 'semantic-ui-react'

import Series from './Series'
import { fromWei, toWei } from '../web3-utils'
import { useWallet } from '../wallet'
import { startPresale, finishPresale, invest, getProjectField, getProjectBaseInfo, withdraw } from '../hooks'
import { projectStates } from '../enum/projectState'

const Season = ({ season, address, setLoading, setError }) => {
  const { web3, account } = useWallet()
  const { baseProjectInfo } = getProjectBaseInfo(address)
  const { val: state } = getProjectField(address, "State")

  const [etherCount, setWeiCount] = useState("1")

  const isOwner = baseProjectInfo.owner === account

  return (
    <>
      <Header as="h4"> Presale Info</Header>
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
            <b>Start</b>: {season.Presale.Start}
          </Grid.Column>
          <Grid.Column>
            <b>Duration</b>: {season.Presale.Duration}
          </Grid.Column>
          <Grid.Column>
            <b>Owner Percent</b>: {season.Presale.OwnerPercent}
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <b>Price</b>: {season.Presale.Price && fromWei(season.Presale.Price)} ETH
            </Grid.Column>
          <Grid.Column>
            <b>Minimum Capacity</b>: {season.Presale.MinCap && fromWei(season.Presale.MinCap)} ETH
            </Grid.Column>
          <Grid.Column>
            <b>Total Generated</b>: {season.Presale.TotalGenerated}
          </Grid.Column>
        </Grid.Row>
      </Grid>

      {isOwner && state === projectStates.PresaleIsNotStarted &&
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

      {isOwner && state === projectStates.PresaleFinishing &&
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

      {!isOwner && state === projectStates.PresaleInProgress &&
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

      {!isOwner && state === projectStates.ProjectCanceled &&
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
        </Button>
      }

      {season.Series.map((series, i) => (
        <Series key={i} number={i} series={series} />
      ))}
    </>
  )
}

export default Season
