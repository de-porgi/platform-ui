import React from 'react'
import { Header } from 'semantic-ui-react'
import Series from './Series'

const Season = (props) => {
  return (
    <div>
      <Header as="h4" dividing>Stake Percents Left: {props.season.StakePercentsLeft || '-'}</Header>

      {props.season.Series.map((series, i) => (
        <Series key={i} series={series} />
      ))}
    </div>
  )
}

export default Season
