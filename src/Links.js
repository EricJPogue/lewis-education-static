import React from 'react';
import { NavLink } from 'react-router-dom';

export const Discord = () => { return externalLink('Discord', 'https://discord.com/') }
export const OReillyBooks = () => { return externalLink('O’Reilly Books', 'https://lewisu.libguides.com/az.php?q=o%27reilly') }
export const ExampleCode = () => { return externalLink('Example Code', 'https://github.com/EricJPogue/cpsc-example-code') }
export const CommandLine = () => { return externalLink('Command Line Interface', 'https://www.w3schools.com/whatis/whatis_cli.asp' )}
export const Firefox = () => { return externalLink('FireFox', 'https://www.mozilla.org/en-US/firefox/new/') }
export const Chrome = () => { return externalLink('Chrome', 'https://www.google.com/chrome/') }
export const VSCode = () => { return externalLink('Visual Studio Code', 'https://code.visualstudio.com/') }
export const Office365 = () => { return externalLink('Microsoft Office 365', 'https://www.office.com/') }
export const ScreenCapture = () => { return externalLink('Screen Capture', 'https://www.theverge.com/2019/11/8/20953522/how-to-take-screenshot-mac-windows-pc-iphone-android') }
export const Git = () => { return externalLink('Git', 'https://git-scm.com/') }
export const GitHub = () => { return externalLink('GitHub', 'https://help.github.com/en/articles/applying-for-a-student-developer-pack') }
export const Azure = () => { return externalLink('Microsoft Azure', 'https://azure.microsoft.com/en-us/free/students/') }
export const Python = () => { return externalLink('Python', 'https://www.python.org/') }
export const VSCodePython = () => { return externalLink('Visual Studio Code Python', 'https://code.visualstudio.com/docs/python/python-tutorial') }
export const NodeJS = () => { return externalLink('Node.js', 'https://nodejs.org/en/') }
export const Java = () => { return externalLink('Java SDK', 'https://docs.microsoft.com/en-us/java/azure/jdk/?view=azure-java-stable') }
export const JavaTutorial = () => { return internalLink('tutorial', '/activity-config/java-jdk-windows10-setup') }
export const Go = () => { return externalLink('Go', 'https://golang.org/') }
export const PowerShell = () => { return internalLink('PowerShell', '/activity-config/powershell-windows10-setup') }
export const Terminal = () => { return internalLink('Terminal', '/activity-config/macos-setup-terminal-finder-and-git') }
export const GitTutorial = () => { return internalLink('tutorial', '/activity-config/git-installation-on-windows-10') }
export const Blended = () => { return externalLink('Blended Learning & Flipped Classroom', 'https://youtu.be/paQCE58334M') }
export const FoxHTML = () => { return externalLink('HTML', 'https://www.youtube.com/watch?v=wy6O5hAjKAo') }
export const FoxCSS = () => { return externalLink('CSS', 'https://www.youtube.com/watch?v=AfBK2Masemk') }
export const FoxCookies = () => { return externalLink('Cookies', 'https://www.youtube.com/watch?v=Xlt7xeqVfO4') }
export const FoxAttributes = () => { return externalLink('Attributes', 'https://www.youtube.com/watch?v=X5ArSbUea_o') }
export const FoxRubyMVC = () => { return externalLink('Ruby MVC', 'https://www.youtube.com/watch?v=XXrYmVzjTKQ') }
export const HTMLW3C =  () => { return externalLink('HTML', 'https://www.w3schools.com/html/') }
export const CSSW3C =  () => { return externalLink('CSS', 'https://www.w3schools.com/css/') }
export const JavaScriptW3C =  () => { return externalLink('JavaScript', 'https://www.w3schools.com/js/') }
export const RegularExpressionsW3C =  () => { return externalLink('Regular Expressions', 'https://www.w3schools.com/jsref/jsref_obj_regexp.asp') }

export const oreillyPlaylistICS = () => { return( <a href='https://learning.oreilly.com/playlists/1a69d11a-2aff-4179-a664-6b842a666f34' target='_blank' rel='noopener noreferrer'>O’Reilly Books</a> ) }
export const oreillyPlaylistWeb = () => { return( <a href='https://learning.oreilly.com/playlists/70918629-ecf2-4b8c-8268-9e6d699d533d' target='_blank' rel='noopener noreferrer'>O’Reilly Books</a> ) }
export const oreillyPlaylistSE = () => { return( <a href='https://learning.oreilly.com/playlists/b2510780-81f1-404e-975d-4354219ff894' target='_blank' rel='noopener noreferrer'>O’Reilly Books</a> ) }


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