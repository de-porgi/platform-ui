import React, { useState } from 'react'
import {
  Form,
  Header,
  Segment,
  Message
} from 'semantic-ui-react'

import WalletWarning from './WalletWarning'
import { useWallet } from '../wallet'
import { newProject, useInput } from '../hooks'
import { toWei } from 'web3-utils'
import { useHistory } from 'react-router-dom'
import { NewFirstSeason } from './NewFirstSeason'

// TODO Add additional explanation for each field
const NewProjectForm = () => {
  const { web3 } = useWallet()
  const history = useHistory()

  const { input: name } = useInput("Hate Google")
  const { input: token } = useInput("Hate Google")
  const { input: symbol } = useInput("TKN")

  const { input: decimals } = useInput(18)
  const { input: price } = useInput("1")
  const { input: distribution } = useInput(20)
  const { input: presaleDuration } = useInput(100)
  const { input: minCap } = useInput(10000000000)

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

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const onSubmit = async () => {
    let fullStakeUnlock = 0
    serieses.forEach(s => {
      fullStakeUnlock += Number(s.StakeUnlock)
    })

    if (fullStakeUnlock < 100) {
      alert("Error: Sum of Series Portion(%) less then 100%")
      return
    }

    if (fullStakeUnlock > 100) {
      alert("Error: Sum of Series Portion(%) bigger then 100%")
      return
    }

    serieses.forEach(s => {
      s.Duration *= 7 * 24 * 60 * 60 // weeks to sec
      s.Vote.Duration *= 24 * 60 * 60 // days to sec
    })

    const project = {
      ProjectName: name.value,
      TokenName: token.value,
      TokenSymbol: symbol.value,
      TokenDecimal: decimals.value,
      FirstSeason: {
        Presale: {
          TokenPrice: toWei(price.value),
          OwnerTokensPercent: distribution.value,
          Duration: presaleDuration.value * 24 * 60 * 60, // days to sec
          MinCap: minCap.value
        },
        Series: serieses,
      }
    }

    setLoading(true)
    try {
      await newProject(web3, project)
    } catch (e) {
      setLoading(false)
      setError(e.message)
      return
    }

    history.push("/")
  }

  if (!web3) {
    return <WalletWarning />
  }

  if (error) {
    return (
      <Message error
        header="Failed to create new project. Please retry!"
        list={[error]}
      />
    )
  }

  // TODO Loading have to be handled by upper component
  if (loading) {
    return <Segment placeholder loading />
  }

  return (
    <Form onSubmit={onSubmit}>
      <Segment.Group>
        <Segment>
          <Header as="h3"> Configure Project Info </Header>
          <Form.Field>
            <label> Project Name </label>
            <input
              placeholder="e.g. Hate Google"
              {...name}
            />
          </Form.Field>
          <Form.Field>
            <label> Token Name </label>
            <input
              placeholder="e.g. Hate Facebook"
              {...token}
            />
          </Form.Field>
          <Form.Field>
            <label> Token Symbol </label>
            <input
              placeholder="e.g. Hate Apple"
              maxLength="3"
              {...symbol}
            />
          </Form.Field>
          <Form.Field>
            <label> Token Decimals </label>
            <input
              type="number"
              placeholder="42"
              {...decimals}
            />
          </Form.Field>
        </Segment>
        <NewFirstSeason
          serieses={serieses}
          setSerieses={setSerieses}
          price={price}
          distribution={distribution}
          presaleDuration={presaleDuration}
          minCap={minCap}
        />
        <Segment>
          <Form.Button fluid primary size="large">
            Submit
          </Form.Button>
        </Segment>
      </Segment.Group>
    </Form>
  )
}

export default NewProjectForm
