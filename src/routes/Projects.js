import React from 'react'
import { Box, CardLayout, GU } from '@aragon/ui'

import ProjectCard from '../components/ProjectCard'

const rowHeight = 294
const columnWidthMin = 30 * GU

const Projects = () => {
    return (
        <Box>
            <CardLayout columnWidthMin={columnWidthMin} rowHeight={rowHeight}>
                <ProjectCard> HI </ProjectCard>
                <ProjectCard> HI </ProjectCard>
                <ProjectCard> HI </ProjectCard>
            </CardLayout>
        </Box>
    )
}

export default Projects
