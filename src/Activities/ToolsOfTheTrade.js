import React from 'react'
import { NavLink } from 'react-router-dom'
//import { getClass } from '../DataAndAPIs/Classes'
import { getClassNumber } from '../DataAndAPIs/ClassSections'
import { internalLink, externalLink } from '../DataAndAPIs/Links'

import { Discord, OReillyBooks, Firefox, Chrome, VSCode, FileExplorer, Finder, ZipFiles, Office365, PowerShell, Terminal, ScreenCapture, Git, 
	GitTutorial, GitHub, Azure, Python, VSCodePython, NodeJS, microsoftOpenJDK, JavaTutorial, Go, grammarly, mongoDBAtlas, firebase, CommandLine } from '../DataAndAPIs/Links'

const chocolatey = () => externalLink('Chocolatey','https://chocolatey.org/')
const chocolateyTutorial = () => { return internalLink('Chocolatey tutorial', '/activity-config/chocolatey') }
const chocolateyInstallApplicationTutorial = () => { return internalLink('Chocolatey application installation tutorial', '/activity-config/chocolatey-install') }
const homebrew = () => { return externalLink('Homebrew tutorial', 'https://lewiseducation.blob.core.windows.net/configuration/homebrew.mp4')}

export const toolsOfTheTradeLink = () => {return (<NavLink to={link}>{name}</NavLink>)}
const link = '/activity/tools'
const name = 'Tools of the Trade'
export const Tools = () => {
	const checkNodeJS = () => {
		if ((getClassNumber() === '24700') || (getClassNumber() === '44000') || (getClassNumber() === '49200')) {
			return ( <li>{NodeJS()} development environment</li> )
		}
		return null
	}

	const checkJava = () => {
		if (getClassNumber() === '24500') {
			return ( <li>{microsoftOpenJDK()} development environment reviewing the associated {JavaTutorial()}</li> )
		}
		return null
	}

	const checkGo = () => {
		if ((getClassNumber() === '36000') || (getClassNumber() === '44500')) {
			return ( <li>{Go()} development environment</li> )
		}
		return null
	}

	const checkFirebase = () => {
		if (getClassNumber() === '49200') {
			return ( <li>{firebase()} application hosting service</li> )
		}
		return null
	}

	const checkMongoDBAtlas = () => {
		if (getClassNumber() === '49200') {
			return ( <li>{mongoDBAtlas()} database hosting service</li> )
		}
		return null
	}

	const checkGrammarly = () => {
		if (getClassNumber() === '49200') {
			return ( <li>{grammarly()} writing assistant / validator</li> )
		}
		return null
	}

	return (

<div>
<h5>{name}</h5>
<h6>Summary: Install, configure, and utilize important software development tools</h6>
<p>Prerequisites: Windows or MacOS</p>

<p>To be a successful successful software developer and to be successful in this course you will need to effectively 
install, configure, and utilize the following tools and services. By the end of this tutorial you will be able to:</p>

<ul style={{listStyleType:'square'}}>
	<li>Utilize command line and graphical tools to navigate our computer operating system and file system</li>
	<li>Install, configure, and utilize the following software development tools and services</li>
</ul>

<p>In this activity you will install and configure:</p>
<ol>
	<li>{Discord()} to allow your scrum team effectively communicate</li>
	<li>{OReillyBooks()} online service which is available free through Lewis University</li>
	<li>{GitHub()}</li>
	<li>{Firefox()} and {Chrome()} web browsers</li> 
	<li>{PowerShell()} or {Terminal()} to execute {CommandLine()} (CLI) functions including “Basic Linux CLI Commands”</li>
	<li>{VSCode()} source code editor</li>
	<li>{FileExplorer()} or {Finder()} to manage files, folders, and {ZipFiles()}</li>
	<li>{ScreenCapture()} to capture images of our computer screen</li>
	<li>Review {GitHub()} and set up the {Git()} command line source code management tool by following this {GitTutorial()}</li>
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
<h6>Install Using Package Mangers (optional):</h6>
<p>The alternative and recommended method of installing, updating, and deleting these tools is utilizing a package 
manager and your command the line interface (CLI).</p>
<ol>
	<li>Open PowerShell in administrator mode</li>
	<li>Review and install {chocolatey()}</li>
	<li>Review but do not complete {chocolateyTutorial()} using PowerShell</li>
	<li>Review but do not complete {chocolateyInstallApplicationTutorial()} to install VS Code, Python3, VS Code 
		Python extension, MS Teams, Git, Node.js, and OpenJDK using a Chocolatey</li>
</ol>

After verifying that {chocolatey()} installed correctly, execute:
and then execute the following script:
<pre style={{color:"brown", fontFamily: 'monospace'}}>{
`choco list
`}</pre>



<p>Homebrew (MacOS): Complete the {homebrew()} to install Visual Studio Code, Python3, Visual Studio Code Python 
extension, MS Teams, Git, Node.js, and OpenJDK.</p>

</div>

	);
}

/*
Proceed to execute some or all of the following lines to install the associated tools:
<pre style={{color:"brown", fontFamily: 'monospace'}}>{
`choco install python -y
choco install vscode -y
choco install vscode-python -y

choco install git -y

choco install nodejs -y
choco install openjdk -y
`}</pre>

Alternate: 
<pre style={{color:"brown", fontFamily: 'monospace'}}>{
`Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
choco ?
choco install discord -y
choco install python -y
choco list --localonly
python --version

choco install git -y
choco install nodejs -y
choco install openjdk -y
choco install maven -y
choco install vscode -y
choco install vscode-python -y
choco install vscode-java -y
choco install vscode-maven -y

choco list --localonly

git --version
node --version
npm --version
mvn --version
java --version
javac --version
choco list --localonly

code .

java-servlet-rg

lewisOOP#321

vscode install extension pack for jav
choco install vscode-java-pac

git --version
python --version
java --version
javac --version
node --version
npm --version
mvn --version`}</pre>
*/