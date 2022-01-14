import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeInternalURL } from './ActivityRouter'

const NAME = 'Assignment Portfolio'
export const ASSIGNMENT_PORTFOLIO_ROUTE = 'assignment-portfolio'
export const assignmentPortfolioLink = () => {return (<NavLink to={makeInternalURL(ASSIGNMENT_PORTFOLIO_ROUTE)}>{NAME}</NavLink>)}
export const assignmentPortfolio = () => {
	return (
	
<div>
<br />
<h4>{NAME}</h4>
<h5>Summary: Create a website that links all of your class assignments utilizing HTML, CSS, and Azure</h5>
<h5>Prerequisite: <NavLink to='/activity/azure-website'>Azure Website</NavLink></h5>
			
<p>Instructions: Create a website that will serve as the portfolio hub for all of your web based class assignments.</p>
<em>Requirement</em>
<p>Create website that:</p>
<ol>
	<li>Is hosted in Microsoft Azure and is globally available</li>
	<li>Has a simple yet an aesthetically pleasing user interface</li>
	<li>Provides links to all previous, current, and future web-based class assignments</li>
	<li>Has a main file named index.html and utilizes separate HTML and CSS files</li>
</ol>
</div> )

}