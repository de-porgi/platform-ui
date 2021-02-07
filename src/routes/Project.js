import React from 'react'
import { useParams } from 'react-router-dom'

import ProjectDetails from '../components/ProjectDetails'

const Project = () => {
  const { address } = useParams()
  return <ProjectDetails address={address} />
}

export default Project
