import React from 'react'
import { Card, Image, Placeholder, Icon, Label } from 'semantic-ui-react'

import { EthereumAddressType } from '../prop-types'
import img from '../../public/anus.jpg'
import { Link } from 'react-router-dom'
import { getProjectBaseInfo, getProjectField } from '../hooks'
import { fromWei } from '../web3-utils'

const ProjectCard = ({ address }) => {
  const { baseProjectInfo: project, loading: pLoading } = getProjectBaseInfo(address)
  const { val: raised, loading: rLoading } = getProjectField(address, 'GetETHBalance')
  const loading = pLoading || rLoading
  return (
    <Card as={Link} to={`/project/${address}`}>
      {loading ? (
        <Placeholder>
          <Placeholder.Image square />
        </Placeholder>
      ) : (
          <>
            <Image src={img} wrapped />
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
          <Label color="green" size="medium">
            Price: {fromWei(project.price)}
            <Icon name="ethereum" />
          </Label>
          <Label color="teal" size="medium">
            Cap: {fromWei(raised)}
            <Icon name="ethereum" />
          </Label>
        </Card.Content>
      ) : (<></>)}
    </Card>
  )
}

ProjectCard.propTypes = {
  address: EthereumAddressType,
}

export default ProjectCard
