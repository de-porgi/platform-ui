import React from 'react'
import { Segment, Container } from 'semantic-ui-react'

import NewProjectForm from '../components/NewProjectForm'

const NewProject = () => {
  return (
    <Segment as={Container}>
      <NewProjectForm />
    </Segment>
  )
}

export default NewProject
