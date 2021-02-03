import React from 'react'
import { Card } from 'semantic-ui-react'

import ProjectCard from '../components/ProjectCard'
import { getProjects } from '../hooks'

const Projects = () => {
  const { projects } = getProjects(1)

  return (
    <Card.Group itemsPerRow="4">
      {projects.map((project, i) => (
        <ProjectCard key={i} address={project} />
      ))}
    </Card.Group>
  )
}

export default Projects
