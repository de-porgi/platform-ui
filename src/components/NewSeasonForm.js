import React, { useState } from 'react'
import { addNextSeasons, useInput } from '../hooks'
import { Divider, Form, Header, Segment } from 'semantic-ui-react'
import { useWallet } from '../wallet'
import { useHistory } from 'react-router-dom'
import { NewNextSeason } from './NewNextSeason'

export const NewSeasonForm = ({ address }) => {
  const { web3 } = useWallet()
  const history = useHistory()

  const { input: tokensEmissionPercent } = useInput(10)
  const { input: emissions } = useInput(5)
  const { input: ownerTokensPercent } = useInput(20)
  const { input: timeBetweenEmissions } = useInput(1000)
  const [serieses, setSerieses] = useState([
    {
      Duration: 100,
      StakeUnlock: 30,
      Vote: {
        Duration: 100,
        Filters: [{
          Schema: 2,
          Value: 50,
        }]
      }
    },
    {
      Duration: 100,
      StakeUnlock: 70,
      Vote: {
        Duration: 100,
        Filters: [{
          Schema: 2,
          Value: 50,
        }]
      }
    },
  ])

  const onSubmit = async () => {
    let stakeUnlock = 0
    serieses.forEach(s => {
      stakeUnlock += Number(s.StakeUnlock)
    })

    if (stakeUnlock < 100) {
      alert("Error: Sum of Series Portion(%) less then 100%")
      return
    }

    if (stakeUnlock > 100) {
      alert("Error: Sum of Series Portion(%) bigger then 100%")
      return
    }

    serieses.forEach(s => {
      s.Duration *= 7 * 24 * 60 * 60 // weeks to sec
      s.Vote.Duration *= 24 * 60 * 60 // days to sec
    })

    const season = {
      Vote: {
        Duration: 100,
        Filters: [{
          Schema: 2,
          Value: 50,
        }]
      },
      Presale: {
        TokensEmissionPercent: tokensEmissionPercent.value,
        Emissions: emissions.value,
        OwnerTokensPercent: ownerTokensPercent.value,
        TimeBetweenEmissions: timeBetweenEmissions.value
      },
      Series: serieses,
    }

    try {
      await addNextSeasons(web3, address, season)
    } catch (e) {
      console.log(e)
      return
    }

    history.push(`/project/${address}`)
  }

  return (
    <Form onSubmit={onSubmit}>
      <Header as="h2" textAlign={"center"}> New Season </Header>

      <NewNextSeason
        serieses={serieses}
        setSerieses={setSerieses}
        tokensEmissionPercent={tokensEmissionPercent}
        emissions={emissions}
        ownerTokensPercent={ownerTokensPercent}
        timeBetweenEmissions={timeBetweenEmissions}
      />

      <Divider />

      {web3 &&
      <Form.Button fluid primary size="large">
        Submit
      </Form.Button> ||
      <Form.Button fluid primary disabled size="large">
        Connect your account
      </Form.Button>
      }
    </Form>
  )
}