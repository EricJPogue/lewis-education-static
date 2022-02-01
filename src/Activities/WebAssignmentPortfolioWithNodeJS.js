import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeInternalURL } from './ActivityRouter'

import ReactPlayer from 'react-player'
import { ExampleCode } from '../Links'

const NAME = 'Assignment Portfolio with Node.js'
export const ASSIGNMENT_PORTFOLIO_NODEJS_ROUTE = 'assignment-portfolio-nodejs'
export const assignmentPortfolioWithNodeJSLink = () => {return (<NavLink to={makeInternalURL(ASSIGNMENT_PORTFOLIO_NODEJS_ROUTE)}>{NAME}</NavLink>)}
export const assignmentPortfolioWithNodeJS = () => {return WebAssignmentPortfolioWithNodeJS()}

// Todo: Rename the following function.
export const WebAssignmentPortfolioWithNodeJS = () => {
	return (
	
<div>
<br />
<h4>Assignment Portfolio with Node.js</h4>
<h5>Summary: Create a website that links all of your class assignments utilizing HTML, CSS, Azure Node.js hosting, and the Express javascript library</h5>
<h5>Prerequisite: <NavLink to='/activity/assignment-portfolio'>Assignment Portfolio</NavLink> and <NavLink to='/activity/azure-website'>Azure Website</NavLink></h5>
			
<p>Instructions: Create a website that will serve as the portfolio hub for all of your web based class assignments.</p>
<em>Requirement 1 (from <NavLink to='/activity/assignment-portfolio'>Assignment Portfolio</NavLink>)</em>
<p>Create a website that:</p>
<ol>
	<li>Is hosted in Microsoft Azure and is globally available</li>
	<li>Has a simple yet an aesthetically pleasing user interface</li>
	<li>Provides links to all previous, current, and future web-based class assignments</li>
	<li>Has a main file named index.html and utilizes separate HTML and CSS files</li>
</ol>

<em>Requirement 2</em>
<p>Create website that:</p>
<ol>
	<li>Implement a basic Node.js and Express application utilizing Azure Node.js hosting</li>
	<li>Update your basic Node.js and Express application so that it implements your Assignment Portfolio</li>
	<li>Fully test your Node.js and Express implementation of Assignment Portfolio</li>
	<li>Remove any previous versions of Assignment Portfolio from Azure</li>
</ol>

<p>Be sure to complete the following tutorial on deploying Node.js on Azure. The code can be found in the {ExampleCode()} repository in the “web” section.</p>
<ReactPlayer url='https://lewiseducation.blob.core.windows.net/configuration/deploying-node-js-on-microsoft-azure.mp4' controls={true} width={1024} height={576} />

</div> )

}