import React, { useState } from 'react'
import {
  Card,
  Segment,
  Dropdown,
  Divider,
  Header,
} from 'semantic-ui-react'

import ProjectCard from '../components/ProjectCard'
import { getProjects } from '../hooks'
import { projectStatesNames } from '../enum/projectState'

const Projects = () => {
  const [state, setState] = useState(1)
  const { projects, loading } = getProjects(state)

  let getOptions = () => {
    let options = []
    for (const state in projectStatesNames) {
      options = [...options,
        {
          key: state,
          text: projectStatesNames[state],
          value: state,
        }
      ]
    }
    return options
  }

  const handleChange = (e, { value }) => setState(value)

  return (
    <Segment loading={loading} placeholder={loading}>
      <Dropdown
        text={`${projectStatesNames[state]}`}
        icon='filter'
        floating
        labeled
        button
        className='icon'
        loading={loading}
        onChange={handleChange}
        options={getOptions()}
      />

      <Divider />

      {!loading ? (
        projects.length > 0 &&
        <Card.Group itemsPerRow="4">
          {projects.map((address, i) => (
            <ProjectCard key={i} address={address} />
          ))}
        </Card.Group> || <Header as="h2" textAlign={"center"}>Not Found</Header>
      ) : (<></>)}
    </Segment>
  )
}

export default Projects