import React, { useState } from 'react'
import { Box, Field, GU, Header, Main, TextInput } from '@aragon/ui'

// for the ease of this, we are taking a week as a duration measurement
// timeframe for 1st season (start date of season --> end date of a season)
// amount of series
// for every serie, generate the following
//    amount of investment batch (percentage) (another page)
//    timeframe of a serie (start date of serie)
function DevelopmentForm() {
  const [series, setSeries] = useState(1) // season must contain at least 1 serie

  function generateSeries() {
    let content = []
    for (let serie = 1; serie <= series; serie++) {
      content.push(
        <Field label={'Serie ' + serie + ' duration'}>
          <TextInput type="number" />
        </Field>
      )
    }
    return content
  }
  return (
    <Main>
      <Header primary="Development Form" secondary="Duration in weeks" />
      <Box
        css={`
          display: flex;
          align-items: center;
          justify-content: center;
          height: ${100 * GU}px;
        `}
      >
        <Field label="Season duration:">
          <TextInput type="number" />
        </Field>
        <Field label="Amount of Series:">
          <TextInput
            type="number"
            onChange={e => setSeries(Number(e.target.value))}
          />
        </Field>
        {generateSeries()}
      </Box>
    </Main>
  )
}

export default DevelopmentForm
