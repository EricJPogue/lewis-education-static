import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeInternalURL } from './ActivityRouter'

import ReactPlayer from 'react-player'
import { ExampleCode } from '../DataAndAPIs/Links'

const NAME = 'Dice Roller remote RESTful API with Node.js'
export const ASSIGNMENT_PORTFOLIO_NODEJS_ROUTE = 'assignment-portfolio-nodejs'
export const assignmentPortfolioWithNodeJSLink = () => {return (<NavLink to={makeInternalURL(ASSIGNMENT_PORTFOLIO_NODEJS_ROUTE)}>{NAME}</NavLink>)}
export const assignmentPortfolioWithNodeJS = () => {return WebAssignmentPortfolioWithNodeJS()}

// Todo: Rename the following function.
export const WebAssignmentPortfolioWithNodeJS = () => {
	return (
	
<div>
<br />
<h4>Server Dice Roller with Node.js</h4>
<h5>Summary: Create a Node.js based website that implements your Dice Roller WebService application such that all random numbers are generated on the server.</h5>
			
<p>Instructions: Create a website that will serve as WebService API for your Dice Roller application.</p>
<em>Requirement 1</em>
<p>Create a website that:</p>
<ol>
	<li>Is hosted in Microsoft Azure and is globally available</li>
	<li>Has no standard user interface</li>
	<li>Provides RESTful APIs for your Dice Roller application</li>
	<li>Has a main file named index.html that tests the RESTful APIs but does NOT implement your Dice Roller application</li>
</ol>

<em>Requirement 2</em>
<p>Update your Dice Roller so that it:</p>
<ol>
	<li>Is hosted on an Azure static website</li>
	<li>Asynchronously calls one of the remote RESTful APIs to “wake up” the Node.js server</li>
	<li>Calls remote RESTful APIs for all random numbers </li>
	<li>Demonstrates a CORS failure condition</li>
</ol>

<p>Be sure to complete the following tutorial on deploying Node.js on Azure. The code can be found in the {ExampleCode()} repository in the “web” section.</p>
<ReactPlayer url='https://lewiseducation.blob.core.windows.net/configuration/deploying-node-js-on-microsoft-azure.mp4' controls={true} width={1024} height={576} />

</div> )

}