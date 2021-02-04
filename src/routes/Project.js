import React from 'react'
import ProjectDetails from '../components/ProjectDetails'
import { useParams } from 'react-router-dom'

const Project = () => {
  const { address } = useParams()
  return <ProjectDetails address={address} />
}

export default Project
