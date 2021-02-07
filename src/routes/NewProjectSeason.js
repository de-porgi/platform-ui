import React from 'react'
import { Segment } from 'semantic-ui-react'

import { NewSeasonForm } from '../components/NewSeasonForm'
import { useParams } from 'react-router-dom'

export const NewProjectSeason = () => {
  const { address } = useParams();
  return (
    <Segment>
      <NewSeasonForm address={address} />
    </Segment>
  )
}
