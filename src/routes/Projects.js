import React from 'react'
import { Card, Segment } from 'semantic-ui-react'

import ProjectCard from '../components/ProjectCard'
import { getProjects } from '../hooks'

const Projects = () => {
  const { projects, loading } = getProjects(2)

  return (
    <Segment loading={loading} placeholder={loading}>
      {!loading ? (
        <Card.Group itemsPerRow="4">
          {projects.map((address, i) => (
            <ProjectCard key={i} address={address} />
          ))}
        </Card.Group>
      ) : (<></>)}
    </Segment>
  )
}

export default Projects
