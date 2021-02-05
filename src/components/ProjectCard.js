import React from 'react'
import { Card, Image } from 'semantic-ui-react'

import { EthereumAddressType } from '../prop-types'
import img from '../../public/anus.jpg'
import { Link } from 'react-router-dom'

// TODO Add placeholder
const ProjectCard = ({ address }) => {
  return (
      <Card>
        <Link to={`/project/${address}`}>
          <Image src={img} wrapped />
        </Link>
          <Card.Content>
            <Card.Header>
              <Link to={`/project/${address}`}>
                ProjectName
              </Link>
            </Card.Header>
            <Card.Meta>
              <span className="date">Started at 2021</span>
            </Card.Meta>
            <Card.Description>
              A project that projects other projects in a projected project!
            </Card.Description>
          </Card.Content>
      </Card>
  )
}

ProjectCard.propTypes = {
  address: EthereumAddressType,
}

export default ProjectCard
