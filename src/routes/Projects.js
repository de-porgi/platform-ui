import React from 'react'
import { Card } from 'semantic-ui-react'

import ProjectCard from '../components/ProjectCard'

const Projects = () => {
    return (
        <Card.Group itemsPerRow="2">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </Card.Group>
    )
}

export default Projects
