import React from 'react';
import { NavLink } from 'react-router-dom';

import { getCourseNumber } from '../data/ClientDataAPIs' 

import { Discord, OReillyBooks, Firefox, Chrome, VSCode, FileExplorer, Finder, ZipFiles, Office365, PowerShell, Terminal, ScreenCapture, Git, 
	GitTutorial, GitHub, Azure, Python, VSCodePython, NodeJS, Java, JavaTutorial, Go } from '../Links'

export const ToolsOfTheTradeLink = () => {return (<NavLink to={internalLink}>{name}</NavLink>)}
const internalLink = '/activity/tools'
const name = 'Tools of the Trade'

export const Tools = () => {
	const checkNodeJS = () => {
		if ((getCourseNumber() === 24700) || (getCourseNumber() === 44000) || (getCourseNumber() === 49200)) {
			return ( <li>{NodeJS()} development environment</li> )
		}
	}

	const checkJava = () => {
		if (getCourseNumber() === 24500) {
			return ( <li>{Java()} development environment reviewing the associated {JavaTutorial()}</li> )
		}
	}

	const checkGo = () => {
		if (getCourseNumber() === 36000) {
			return ( <li>{Go()} development environment</li> )
		}
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
	<li>{PowerShell()} or {Terminal()} command line environments</li>
	<li>{GitHub()} and the {Git()} command line source code management tool by following this {GitTutorial()}</li>
	<li>{Python()} and the {VSCodePython()} integrated development environment</li>
	<li>{Office365()} which is available to you free through Lewis University</li>
	<li>{Azure()} cloud hosting service</li>
	{checkNodeJS()}
	{checkJava()}
	{checkGo()}
</ol>

<br />
<h6>Using Package Mangers (optional):</h6>
<p>An alternative method of installing, updating, and deleting software applications is to utilize a package manager. 
Either Chocolatey (Windows) and Homebrew (MacOS) can be utilized to set up the above applications.</p>
<p>Chocolatey (Windows):</p>
<ol>
	<li>Install Chocolatey with PowerShell <NavLink to='/activity-config/chocolatey'>[video]</NavLink></li>
	<li>Install VS Code, Python3, VS Code Python extension, MS Teams, Git, Node.js, and OpenJDK using Chocolatey <NavLink to='/activity-config/chocolatey-install'>[video]</NavLink>
		<a href='https://lewiseducation.blob.core.windows.net/configuration/choco-install-packages.txt' target='_blank' rel='noopener noreferrer'>[script]</a>
	</li>
</ol>
<p>Homebrew (MacOS): Install Homebrew and Visual Studio Code, Python3, Visual Studio Code Python extension, MS Teams, 
Git, Node.js, and OpenJDK <a href='https://lewiseducation.blob.core.windows.net/configuration/homebrew.mp4' target='_blank' rel='noopener noreferrer'>[video]</a></p>
</div>

	);
}

