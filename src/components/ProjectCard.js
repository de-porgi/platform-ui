import React from 'react'
import { Card, Image, Placeholder, Icon, Label } from 'semantic-ui-react'

import { EthereumAddressType } from '../prop-types'
import meshImg from '../../public/mesh_club.png'
import yevImg from '../../public/yevhen.png'
import revImg from '../../public/re_vision.png'
import aaveImg from '../../public/aave.png'
import { Link } from 'react-router-dom'
import { getProjectBaseInfo, getProjectField } from '../hooks'
import { fromWei } from '../web3-utils'

const ProjectCard = ({ address }) => {
  const { baseProjectInfo: project, loading: pLoading } = getProjectBaseInfo(address)
  const { val: raised, loading: rLoading } = getProjectField(address, 'GetETHBalance')
  const loading = pLoading || rLoading

  // Nasty Hack. Please remove ASAP.
  function getImage() {
    switch (project.name) {
      case 'ReVision':
        return revImg
      case 'YevAnHen':
        return yevImg
      case 'AAVE':
        return aaveImg
      default:
        return meshImg
    }

  }

  return (
    <Card as={Link} to={`/project/${address}`}>
      {loading ? (
        <Placeholder>
          <Placeholder.Image square />
        </Placeholder>
      ) : (
          <>
            <Image src={getImage()} wrapped label={{
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
