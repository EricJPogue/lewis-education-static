import React from 'react';
import { NavLink } from 'react-router-dom';
import { getCourseNumber } from '../data/ClientDataAPIs' 

import { internalLink, externalLink } from '../Links';

import { Discord, OReillyBooks, Firefox, Chrome, VSCode, FileExplorer, Finder, ZipFiles, Office365, PowerShell, Terminal, ScreenCapture, Git, 
	GitTutorial, GitHub, Azure, Python, VSCodePython, NodeJS, microsoftOpenJDK, JavaTutorial, Go, grammarly, mongoDBAtlas, firebase, CommandLine } from '../Links'

const chocolateyTutorial = () => { return internalLink('Chocolatey tutorial', '/activity-config/chocolatey') }
const chocolateyInstallApplicationTutorial = () => { return internalLink('Chocolatey application installation tutorial', '/activity-config/chocolatey-install') }
const chocolateyScript = () => { return externalLink('script', 'https://lewiseducation.blob.core.windows.net/configuration/choco-install-packages.txt') }
const homebrew = () => { return externalLink('Homebrew tutorial', 'https://lewiseducation.blob.core.windows.net/configuration/homebrew.mp4')}

export const toolsOfTheTradeLink = () => {return (<NavLink to={link}>{name}</NavLink>)}
const link = '/activity/tools'
const name = 'Tools of the Trade'
export const Tools = () => {
	const checkNodeJS = () => {
		if ((getCourseNumber() === 24700) || (getCourseNumber() === 44000) || (getCourseNumber() === 49200)) {
			return ( <li>{NodeJS()} development environment</li> )
		}
		return null
	}

	const checkJava = () => {
		if (getCourseNumber() === 24500) {
			return ( <li>{microsoftOpenJDK()} development environment reviewing the associated {JavaTutorial()}</li> )
		}
		return null
	}

	const checkGo = () => {
		if (getCourseNumber() === 36000) {
			return ( <li>{Go()} development environment</li> )
		}
		return null
	}

	const checkFirebase = () => {
		if (getCourseNumber() === 49200) {
			return ( <li>{firebase()} application hosting service</li> )
		}
		return null
	}

	const checkMongoDBAtlas = () => {
		if (getCourseNumber() === 49200) {
			return ( <li>{mongoDBAtlas()} database hosting service</li> )
		}
		return null
	}

	const checkGrammarly = () => {
		if (getCourseNumber() === 49200) {
			return ( <li>{grammarly()} writing assistant / validator</li> )
		}
		return null
	}

	return (

<div>
<h5>{name}</h5>
<h6>Summary: Install, configure, and utilize important software development tools</h6>
<p>Prerequisites: Windows 10 or MacOS</p>

<p>To be a successful successful software developer and to be successful in this course you will need to effectively 
install, configure, and utilize the following tools and services. By the end of this tutorial you will be able to:</p>

<ul style={{listStyleType:'square'}}>
	<li>Utilize command line and graphical tools to navigate our computer operating system and file system</li>
	<li>Install, configure, and utilize the following software development tools and services</li>
</ul>

<p>In this activity you will set up:</p>
<ol>
	<li>{Discord()} to allow your scrum team effectively communicate</li>
	<li>{OReillyBooks()} online service which is available free through Lewis University</li>
	<li>{Firefox()} and {Chrome()} web browsers</li> 
	<li>{VSCode()} source code editor</li>
	<li>{FileExplorer()} or {Finder()} to manage files, folders, and {ZipFiles()}</li>
	<li>{ScreenCapture()} to capture images of our computer screen</li>
	<li>{PowerShell()} or {Terminal()} to execute {CommandLine()} functions</li>
	<li>{GitHub()} and the {Git()} command line source code management tool by following this {GitTutorial()}</li>
	<li>{Python()} and the {VSCodePython()} integrated development environment</li>
	<li>{Office365()} which is available to you free through Lewis University</li>
	<li>{Azure()} cloud hosting service</li>
	{checkNodeJS()}
	{checkJava()}
	{checkGo()}
	{checkFirebase()}
	{checkMongoDBAtlas()}
	{checkGrammarly()}
</ol>

<br />
<h6>Using Package Mangers (optional):</h6>
<p>An alternative method of installing, updating, and deleting software applications is to utilize a package manager. 
Either Chocolatey (Windows) and Homebrew (MacOS) can be utilized to set up the above applications.</p>
<p>Chocolatey (Windows):</p>
<ol>
	<li>Complete {chocolateyTutorial()} using PowerShell</li>
	<li>Complete {chocolateyInstallApplicationTutorial()} to install VS Code, Python3, VS Code Python extension, MS 
	    Teams, Git, Node.js, and OpenJDK using a Chocolatey {chocolateyScript()}</li>
</ol>
<p>Homebrew (MacOS): Complete the {homebrew()} to install Visual Studio Code, Python3, Visual Studio Code Python 
extension, MS Teams, Git, Node.js, and OpenJDK.</p>
</div>

	);
}

