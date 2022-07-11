import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeInternalURL } from './ActivityRouter';
import { azureWebsiteLink } from './AzureWebsite';
import { JSONWebServicesTutorial, codingStandards, externalLink } from '../data/Links';

export const LIONS_TIGERS_AND_BEARS_ROUTE = 'lions-tigers-and-bears'
const NAME = 'Lions and Tigers and Bears, Oh My!'
export const lionsTigersAndBearsLink = () => {return (<NavLink to={makeInternalURL(LIONS_TIGERS_AND_BEARS_ROUTE)}>{NAME}</NavLink>)}
export const lionsTigersAndBears = () => { 
	const publicAPIs = () => { return externalLink('Public APIs', 'https://github.com/public-apis/public-apis')}
	const lionsTigersAndBearsClip = () => { return externalLink('The Wizard of Oz - Lions, Tigers, and Bears', 'https://www.youtube.com/watch?v=dU6B81844CE')}
	return ( <div>
		<br />
		<h4>“{NAME}” - Dorthy from the Wizard of Oz</h4>
		<p>Summary: Although I really do want to implement a Lions, Tigers, and Bears application, maybe we should 
		start with Dogs and then enhance our application over time. We will start by following the very well done 
		tutorial by Brad Schiff called {JSONWebServicesTutorial()} to create an web application that displays images 
		of various dog breeds in a slide show utilizing a public API based on HTTP(s), JSON, and AJAX. Then we can 
		practice our web hosting skills be hosting the application in Azure. Finally, we can create our own application 
		using our newly acquired JavaScript, JSON, and AJAX skills along with our existing CI/CD and {azureWebsiteLink()} 
		capabilities to build something interesting and uniquely our own</p>
		<p>Prerequisites: HTML, CSS, Basic JavaScript, JSON, AJAX, and {azureWebsiteLink()}</p>		
		<p><em>Suggested: </em>If you have not seen the “Lions, Tigers, and Bears, Oh My!” scene from the 1939 Wizard of Oz film, you can
		view the colorized version on YouTube at {lionsTigersAndBearsClip()}</p>
		

		<em>Requirement 1</em>
		<p>Complete {JSONWebServicesTutorial()}</p>

		<em>Requirement 2</em>
		<p>Publish your implementation of {JSONWebServicesTutorial()} by</p>
		<ol>
			<li>Hosting the application as an {azureWebsiteLink()}</li>
			<li>Including a readme file that meets our {codingStandards()} and gives Brad Schiff full credit for the application</li>
			<li>Including a license file that is compatible with and/or references Brad Schiff’s license</li>
		</ol>

		<em>Requirement 3</em>
		<p>Create your own unique and interesting application while focusing on CI/CD by:</p>
		<ol>
			<li>Creating a “Hello World” style application and successfully hosting it as and {azureWebsiteLink()}</li>
			<li>Enhancing the application step-by-step while testing the regularly testing it on the public site</li>
			<li>Consistently repeat the develop local, test local, deploy to public site, test public site sequence</li>
		</ol>

		<em>Requirement 4</em>
		<p>Continue to enhance and test your new application by:</p>
		<ol>
			<li>Reviewing the available public APIs including those referenced in the GitHub {publicAPIs()} repository</li>
			<li>Selecting one or more APIs to utilize in your application... do not select the Dogs API that was used above</li>
			<li>Create and publish an application that has similar functionality to the tutorial but utilizes a different API</li>
		</ol>
	</div> ) 
}