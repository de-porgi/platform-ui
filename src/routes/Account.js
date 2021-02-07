import React from 'react'
import { Tab, Segment, Card, Message } from 'semantic-ui-react'

import ProjectCard from '../components/ProjectCard'
import WalletWarning from '../components/WalletWarning'
import { getProjectsOf } from '../hooks'
import { useWallet } from '../wallet'

// TODO Here is some bad decoupled code written fast to reach deadline
const Account = () => {
  const { account } = useWallet()

  if (!account) {
    return <WalletWarning />
  }

  const { projects, loading } = getProjectsOf(account)
  return (
    <Segment loading={loading}>
      <Tab menu={{ secondary: true, pointing: true }} panes={[
        {
          menuItem: "My Projects",
          render: () => {
            if (loading) {
              return
            }

            return (
              <Card.Group itemsPerRow="4">
                {projects.map((address, i) => (
                  <ProjectCard key={i} address={address} />
                ))}
              </Card.Group>
            )
          },
        },
        {
          menuItem: "Invested Projects",
          render: () => (<Message warning> Waiting for integration with 'The Graph'  to allow indexing for such case</Message>)
        }
      ]} />
    </Segment>
  )
}

export default Account
