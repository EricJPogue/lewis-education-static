import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeInternalURL } from './ActivityRouter'

const SWISS_ARMY_KNIFE_SERVER_NAME = 'SwissArmyKnife Server'
export const SWISS_ARMY_KNIFE_SERVER_ROUTE = 'swiss-army-knife-java-server'
export const swissArmyKnifeServerLink = () => {return (<NavLink to={makeInternalURL(SWISS_ARMY_KNIFE_SERVER_ROUTE)}>{SWISS_ARMY_KNIFE_SERVER_NAME}</NavLink>)}
export const swissArmyKnifeServer = () => {
	return ( <div>
		<br />
		<h4>{SWISS_ARMY_KNIFE_SERVER_NAME}</h4>
		<h5>Summary: Create a web service utilizing Java servlets that returns HTML, plain text, or JSON as appropriate.</h5>

		<p>In this programming activity, you will create a Java servlet that returns command-line application that 
		implements a variety of function focused on distributed computing and web services. </p>

		<p>The application will also serve as a “sandbox” development environment for future programs. It is often 
		beneficial to develop a new feature in the simplest possible environment before moving it to its final often complex 
		production environment. This eliminates unnecessary dependencies and minimizes our risk of creating code that suffers 
		from immobility.</p>

		<h5>Specific requirements for the application include:</h5>
		<em>Requirement 1</em>
		<p>Create an application that:</p>
		<ol>
			<li>Stores the source code in a GitHub repository</li>
			<li>Is implemented in on or more Java (.java) files with the main file named “saks.java”</li>
			<li>Successfully compiles a Java servlet from the command line using “javac *.java”</li>
			<li>Includes README.md, LICENSE, and .gitignore (Java) files</li>
		</ol>

		<em>Requirement 2</em>
		<p>Enhance your application by:</p>
		<ol>
			<li>Implementing a basic web page that describes the application and the services provided</li>
			<li>Including valid and fully tested links to each service on the web page</li>
			<li>Implementing a “ping” service that responds in plain text with “ping response”</li>
			<li>Executing and testing Java servlet locally</li>
		</ol>

		<em>Requirement 3</em>
		<p>Enhance your application by:</p>
		<ol>
			<li>Deploying to Microsoft Azure</li>
			<li>Executing and testing the web page, service links, and web services in Azure</li>
		</ol>

		<em>Requirement 4</em>
		<p>Enhance your application by:</p>
		<ol>
			<li>Implementing an “index” service that responds in JSON with the relative URLs to at least three contacts</li>
			<li>Implementing a “get-contact” service that takes a name as input and responds in JSON with the 
				associated contact information</li>
			<li>Failing gracefully when an invalid names is passed into the “get-contact” service</li>
			<li>Failing gracefully when a request is made for a service that does not exist</li>
		</ol>
	</div> )
}
