
import React from 'react';
import ReactPlayer from 'react-player'
import { NavLink } from 'react-router-dom'

import { makeInternalURL } from './ActivityRouter';
import { externalLink } from '../DataAndAPIs/Links';

import { programmingTogetherHelloWorldPython } from '../ActivityVideo/Panopto'

export const HelloWorldJavaLink = () => {return (<NavLink to={JavaProperties.internalLink}>{JavaProperties.name}</NavLink>)}
export const HelloWorldPythonLink = () => {return (<NavLink to={PythonProperties.internalLink}>{PythonProperties.name}</NavLink>)}
export const HelloWorldGoLink = () => {return (<NavLink to={GoProperties.internalLink}>{GoProperties.name}</NavLink>)}


export const HelloWorldPython = () => { return HelloWorld(PythonProperties) }
export const HelloWorldJava = () => { return HelloWorld(JavaProperties) }
export const HelloWorldGo = () => { return HelloWorld(GoProperties) }

const PythonProperties = {
	'name': 'Hello World with Python',
	'language': 'Python',
	'prerequisites': 'Python (v3), VS Code, and Terminal',
	'tutorial': 'https://botb.blob.core.windows.net/nvm4zqwm/s44aopq9-hello-world.mp4',
	'internalLink': '/activity/hello-world-python'
}

const JavaProperties = {
	'name': 'Hello World with Java',
	'language': 'Java',
	'prerequisites': 'Java, VS Code, and Terminal',
	'tutorial': null,
	'internalLink': '/activity/hello-world-java'
}

const GoProperties = {
	'name': 'Hello World with Go',
	'language': 'Go',
	'prerequisites': 'Go, VS Code, and Terminal',
	'tutorial': null,
	'internalLink': '/activity/hello-world-go'
}

const Tutorial = (app) => {
	if (app === PythonProperties) {
		return ( <div>
			Be sure to follow along with the video tutorial below!
			{programmingTogetherHelloWorldPython()}
		</div> )
	}
	else return null
}

const HelloWorld = (app) => {
	return ( <div>
		<h4>Hello World with {app.language}</h4>
		<h5>Summary: Create a {app.language} application that prints a special version of “Hello World” that 
		includes your name in possessive form with a curly apostrophe followed by “Hello World.”</h5>
		<h5>Prerequisites: {app.prerequisites}</h5>
					
		<p>Instructions: Complete Hello World using {app.language} with some special formatting. Specifically, we are going to add 
		our preferred first name followed by our last name in possessive form along with a curly apostrophe (“ ’ ”). For 
		example, my hello world output would be “Eric Pogue’s Hello World” including the curly apostrophe.</p>

		<p>Why do we need to utilize a curly apostrophe? Well, it turns out that curly quotes and curly apostrophes should always
		be utilized in written text. The following article from Practical Typography does a nice job of explaining the 
		rational {externalLink('Practical Typography', 'https://practicaltypography.com/straight-and-curly-quotes.html')} 
		<a href='https://practicaltypography.com/straight-and-curly-quotes.html' target='_blank' rel='noopener noreferrer'>[link]</a>.
		Equally important, becoming comfortable with utilizing curly quotes and curly apostrophes is a good starting point for 
		understanding how to utilize special characters and eventually multiple languages in software applications.</p>

		<p>As in all tutorials, you should follow along and complete the steps yourself. As you go through the tutorial, make 
		the resulting application uniquely your own by adding standard comments at the top application (i.e. your name, class, 
		etc.), changing the names of variables, and adding small features. Finally, be sure to save your work as you will often 
		be asked to submit it as part of an assignment.</p>

		{Tutorial(app)}
	</div> )
}

const helloWorldTemplate = () => { return externalLink('Hello World for the Web Template', 'https://github.com/EricPogueExampleCode-Web/hello-world-template') } 
const gitHubPages = () => { return externalLink('GitHub Pages', 'https://pages.github.com/')}


const HELLO_WORLD_WEB_PART_1_NAME = 'Hello World for the Web - Part 1'
export const HELLO_WORLD_WEB_PART_1_ROUTE = 'hello-world-web-part-1'
export const HelloWorldWebPart1Link = () => {return (<NavLink to={makeInternalURL(HELLO_WORLD_WEB_PART_1_ROUTE)}>{HELLO_WORLD_WEB_PART_1_NAME}</NavLink>)}

export const HelloWorldWebPart1 = () => {
	return ( <div>
		<h4>Hello World for the Web</h4>
		<h5>Summary: Create and host Hello World for the Web using GitHub Pages</h5>
		<h5>Prerequisites: GitHub</h5>
					
		<p>Instructions: Complete Hello World for the Web using GitHub and HTML. We are going to display our preferred 
		first name followed by our last name in possessive form. For example, my hello world output would be “Eric 
		Pogue's Hello World.”</p>

		<h5>Specific requirements for the application include:</h5>
<		em>Requirement 1</em>
		<p>Create and host a website utilizing GitHub Pages by:</p>
		<ol>
			<li>Signing into your GitHub account</li>
			<li>Reviewing {gitHubPages()} and completing {HelloWorldWebT1Link()}</li>
			<li>Utilizing GitHub Pages and the {helloWorldTemplate()} to create and host a website</li>
			<li>Implementing a Hello World website</li>
		</ol>
	</div>)
}

const HELLO_WORLD_WEB_NAME = 'Hello World for the Web'
export const HELLO_WORLD_WEB_ROUTE = 'hello-world-web'
export const HelloWorldWebLink = () => {return (<NavLink to={makeInternalURL(HELLO_WORLD_WEB_ROUTE)}>{HELLO_WORLD_WEB_NAME}</NavLink>)}

export const HelloWorldWeb = () => { 
	const practicalTypographyArticle = () => { return externalLink('Practical Typography article', 'https://practicaltypography.com/straight-and-curly-quotes.html') }
	return ( <div>
		<h4>Hello World for the Web</h4>
		<h5>Summary: Create and host Hello World for the Web using GitHub Pages</h5>
		<h5>Prerequisites: GitHub</h5>
					
		<p>Instructions: Complete Hello World for the Web using GitHub and HTML. We are going to display our preferred 
		first name followed by our last name in possessive form along with a curly apostrophe (“ ’ ”). For example, my 
		hello world output would be “Eric Pogue’s Hello World” including the curly apostrophe.</p>

		<p>Why do we want need to utilize a curly apostrophe? Well, it turns out that curly quotes and curly apostrophes 
		should always be utilized in written text. This {practicalTypographyArticle()} explains the rational. Equally 
		important, becoming comfortable with utilizing curly apostrophes is a good starting point for understanding how 
		to utilize special characters and multiple languages in software applications.</p>

		<h5>Specific requirements for the application include:</h5>
<		em>Requirement 1</em>
		<p>Create and host a website utilizing GitHub Pages by:</p>
		<ol>
			<li>Signing into your GitHub account</li>
			<li>Reviewing {gitHubPages()} and completing {HelloWorldWebT1Link()}</li>
			<li>Utilizing GitHub Pages and the {helloWorldTemplate()} to create and host a website</li>
			<li>Implementing a Hello World website</li>
		</ol>


		<em>Requirement 2</em>
		<p>Enhance your application so that it:</p>
		<ol>
			<li>Has an updated valid README.md file</li>
			<li>Displays your First Name and Last Name followed by Hello World</li>
			<li>Implements a curly apostrophe (“ ’ ”) to indicate singular possessive last name</li>
			<li>Displays all text as default Header 2 text</li>
		</ol>
	</div> )
}

// const HELLO_WORLD_WEB_T1_NAME = 'Hello World for the Web - Tutorial Part 1'
const HELLO_WORLD_WEB_T1_NAME = 'Hello World for the Web - Video Tutorial'
export const HELLO_WORLD_WEB_T1_ROUTE = 'hello-world-web-t1'
export const HelloWorldWebT1Link = () => {return (<NavLink to={makeInternalURL(HELLO_WORLD_WEB_T1_ROUTE)}>{HELLO_WORLD_WEB_T1_NAME}</NavLink>)}

export const HelloWorldWebT1 = () => { 
	return ( <div>
		<h4>{HELLO_WORLD_WEB_T1_NAME}</h4>
		<h5>Summary: This video tutorial will walk you through creating and hosting a website using GitHub Pages</h5>
		<h5>Prerequisites: GitHub</h5>

		<em>Part 1 of this video tutorial will walk you through creating a website using {gitHubPages()} and the {helloWorldTemplate()}:</em><br /><br />

		<ReactPlayer url={'https://pithub.blob.core.windows.net/nvm4zqwm/vwrm8blc-github-pages.mp4'} 
			controls={true} width={1024} height={576} />
	</div> )
}

/*
		Be sure to follow along with the video tutorial below!
		<ReactPlayer url={'https://lewiseducation.blob.core.windows.net/configuration/hello-world-html-github-and-azure.mp4'} 
			controls={true} width={1024} height={576} />
*/