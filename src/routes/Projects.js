import React from 'react'
import { Card, Segment, Container } from 'semantic-ui-react'

import ProjectCard from '../components/ProjectCard'
import { getProjects } from '../hooks'

const Projects = () => {
  const { projects, loading } = getProjects(1)

  return (
    <Segment as={Container} loading={loading} placeholder={loading}>
      <Card.Group itemsPerRow="4">
        {projects.map((project, i) => (
          <ProjectCard key={i} address={project} />
        ))}
      </Card.Group>
    </Segment>
  )
}

export default Projects
