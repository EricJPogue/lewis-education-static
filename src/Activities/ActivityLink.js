import React from 'react'
import { NavLink } from 'react-router-dom'
import { BASE_ACTIVITY_ROUTE } from './ActivityRouter'

export const makeActivityLink = (name, route) => { return ( <NavLink to={BASE_ACTIVITY_ROUTE+route}>{name}</NavLink> ) }

export const makeNavigationLink = (activity) => {
	return ( <NavLink to={BASE_ACTIVITY_ROUTE+activity.route}>{activity.name}</NavLink> )
}