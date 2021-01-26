import React from 'react'
import {
  Box,
  Button,
  Field,
  GU,
  Header,
  DropDown,
  Main,
  TextInput,
} from '@aragon/ui'

//  During 1st season's fundrising session, PD sets the percentage of total created PRJ that transfers to PD
//  PD sets the timeframe of the season (e.g. 1 year)
//  PD sets the amount of series for 1 season
//  PD sets the timeframe of every series
//  PD sets the amount of every investments' batches
//  PD sets the neccessary amount of "yes" votes to continue the next serie
//  After the end of the active serie, the voting procedure for the next serie begins
//  PD sets the timeframe for the voting procedure for the next serie (e.g 2 weeks)
//  PI has the right to vote
//

// timeframe for 1st season (start date of season --> end date of a season)
// amount of series
// for every serie, generate the following
//    amount of investment batch (percentage)
//    timeframe of a serie (start date of serie)
function VotingForm() {
  return (
    <Main>
      <Header primary="Idea Application Form" />
      <Box
        css={`
          display: flex;
          align-items: center;
          justify-content: center;
          height: ${100 * GU}px;
        `}
      >
        <Field label="Company name:">
          <input />
        </Field>
        <Field label="What your company does in 50 words:">
          <input />
        </Field>
        <Field label="Describe the product and what it does:">
          <TextInput multiline="true" />
        </Field>
        <Field label="Email to contact:">
          <TextInput />
        </Field>
        <Field label="Category">
          <DropDown
            items={['Arts', 'Design & Tech', 'Music', 'Food & Crafts']}
            // selected={selected}
            // onChange={setSelected}
          />
        </Field>
      </Box>
    </Main>
  )
}

export default VotingForm
