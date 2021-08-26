import React from 'react';
import { NavLink } from 'react-router-dom';

export const Discord = () =>       { return externalLink('Discord',                   'https://discord.com/') }
export const OReillyBooks = () =>  { return externalLink('O’Reilly Books',            'https://lewisu.libguides.com/az.php?q=o%27reilly') }
export const Firefox = () =>       { return externalLink('FireFox',                   'https://www.mozilla.org/en-US/firefox/new/') }
export const Chrome = () =>        { return externalLink('Chrome',                    'https://www.google.com/chrome/') }
export const VSCode = () =>        { return externalLink('Visual Studio Code',        'https://code.visualstudio.com/') }
export const Office365 = () =>     { return externalLink('Microsoft Office 365',      'https://www.office.com/') }
export const ScreenCapture = () => { return externalLink('Screen Capture',            'https://www.theverge.com/2019/11/8/20953522/how-to-take-screenshot-mac-windows-pc-iphone-android') }
export const Git = () =>           { return externalLink('Git',                       'https://git-scm.com/') }
export const GitHub = () =>        { return externalLink('GitHub',                    'https://help.github.com/en/articles/applying-for-a-student-developer-pack') }
export const Azure = () =>         { return externalLink('Microsoft Azure',           'https://azure.microsoft.com/en-us/free/students/') }
export const Python = () =>        { return externalLink('Python',                    'https://www.python.org/') }
export const VSCodePython = () =>  { return externalLink('Visual Studio Code Python', 'https://code.visualstudio.com/docs/python/python-tutorial') }
export const NodeJS = () =>        { return externalLink('Node.js',                   'https://nodejs.org/en/') }
export const Java = () =>          { return externalLink('Java SDK',                  'https://docs.microsoft.com/en-us/java/azure/jdk/?view=azure-java-stable') }
export const JavaTutorial = () =>  { return internalLink('tutorial',                  '/activity-config/java-jdk-windows10-setup') }
export const Go = () =>            { return externalLink('Go',                        'https://golang.org/') }

export const PowerShell = () =>    { return internalLink('PowerShell',                '/activity-config/powershell-windows10-setup') }
export const Terminal = () =>      { return internalLink('Terminal',                  '/activity-config/macos-setup-terminal-finder-and-git') }
export const GitTutorial = () =>   { return internalLink('tutorial',                  '/activity-config/git-installation-on-windows-10') }

export const Blended = () =>       { return externalLink('Blended Learning & Flipped Classroom',          'https://youtu.be/paQCE58334M') }


const externalLink = (displayName, url) => {
	return (
		<a href={url} target='_blank' rel='noopener noreferrer'>{displayName}</a>
	)
}

const internalLink = (displayName, url) => {
	return ( <NavLink to={url}>{displayName}</NavLink> )
}

/* 
Depreciated links:
	<NavLink to='/activity-config/mscode-and-chrome-windows10-setup'>[video]</NavLink>
*/