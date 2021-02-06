import React from 'react'
import { Card, Image, Placeholder, Icon } from 'semantic-ui-react'

import { EthereumAddressType } from '../prop-types'
import img from '../../public/anus.jpg'
import { Link } from 'react-router-dom'
import { getProjectBaseInfo } from '../hooks'

// TODO Add placeholder
const ProjectCard = ({ address }) => {
  const { baseProjectInfo: project, loading } = getProjectBaseInfo(address)
  return (
    <Card as={Link} to={`/project/${address}`}>
      {loading ? (
        <Placeholder>
          <Placeholder.Image square />
        </Placeholder>
      ) : (
          <>
            <Image src={img} wrapped label={{
              corner: 'left',
            }} />
          </>
        )}

      <Card.Content>
        {loading ? (
          <Placeholder>
            <Placeholder.Header>
              <Placeholder.Line length='very short' />
              <Placeholder.Line length='medium' />
            </Placeholder.Header>
            <Placeholder.Paragraph>
              <Placeholder.Line length='short' />
            </Placeholder.Paragraph>
          </Placeholder>
        ) : (
            <>
              <Card.Header>
                {project.name}
              </Card.Header>
              <Card.Meta>
                {project.symbol}
              </Card.Meta>
              <Card.Description>
                {project.projectName}
              </Card.Description>
            </>
          )}
      </Card.Content>
      {!loading ? (
        <Card.Content extra>
          <Icon name="ethereum" /> 100
        </Card.Content>
      ) : (<></>)}
    </Card>
  )
}

ProjectCard.propTypes = {
  address: EthereumAddressType,
}

export default ProjectCard
