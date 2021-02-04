import React from 'react'
import { Segment, Container } from 'semantic-ui-react'

import CompanyForm from '../components/ApplicationForm/CompanyForm'

const NewProject = () => {
  return (
    <Segment as={Container}>
      <CompanyForm />
    </Segment>
  )
}

export default NewProject
