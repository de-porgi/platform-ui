import React from 'react'
import { Redirect } from 'react-router-dom'

// TODO Design Landing Page
//  While we don't have it, simply redirect to `/projects`.
export const Landing = () => {
    return <Redirect to="/projects" />
}
