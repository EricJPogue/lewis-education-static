import React from 'react';
import { NavLink } from 'react-router-dom';

export const Discord = () => { return externalLink('Discord', 'https://discord.com/') }
export const OReillyBooks = () => { return externalLink('O’Reilly Books', 'https://lewisu.libguides.com/az.php?q=o%27reilly') }
export const ExampleCode = () => { return externalLink('example code', 'https://github.com/EricJPogue/cpsc-example-code') }
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
export const IntroducingPythonSampleCode = () => { return externalLink('sample code', 'https://github.com/madscheme/introducing-python') }
export const introducingPythonCodeExamples = () => { return externalLink('code examples', 'https://github.com/madscheme/introducing-python') }

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
export const PythonW3C =  () => { return internalLink('Python Tutorial', '/activity/python-w3c') }

export const oreillyPlaylistICS = () => { return( <a href='https://learning.oreilly.com/playlists/1a69d11a-2aff-4179-a664-6b842a666f34' target='_blank' rel='noopener noreferrer'>O’Reilly books</a> ) }
export const oreillyPlaylistWeb = () => { return( <a href='https://learning.oreilly.com/playlists/70918629-ecf2-4b8c-8268-9e6d699d533d' target='_blank' rel='noopener noreferrer'>O’Reilly books</a> ) }
export const oreillyPlaylistSE = () => { return( <a href='https://learning.oreilly.com/playlists/b2510780-81f1-404e-975d-4354219ff894' target='_blank' rel='noopener noreferrer'>O’Reilly books</a> ) }

export const ResumeFormat = () => { return( <a href='https://pithub.blob.core.windows.net/nvm4zqwm/f7h4j48d-resume-format.pdf' target='_blank' rel='noopener noreferrer'>resume format</a> ) }
export const ResumeReviewServices = () => { return( <a href='https://lewisu.edu/resources/careerservices/students.htm' target='_blank' rel='noopener noreferrer'>resume review services</a> ) }

export const SequenceSelectionAndRepetition = () => { return( <a href='https://edu.gcfglobal.org/en/computer-science/sequences-selections-and-loops/1/' target='_blank' rel='noopener noreferrer'>Sequences, selections, and loops (repetition)</a> ) }

export const programmingTogether = () => { return internalLink('programming together', '/activity/programming-together')}

export const PythonTurtleLibrary = () => { return externalLink('Turtle', 'https://docs.python.org/3/library/turtle.html#introduction')}

export const JSONAndAJAXTutorial = () => { return externalLink('JSON and AJAX Tutorial: With Real Examples', 'https://www.youtube.com/watch?v=rJesac0_Ftw')}

export const RandomStrings = () => { return externalLink('Random', 'https://www.random.org/strings/')}
export const JSONExamples = () => { return externalLink('JSON Examples', 'https://mustang-index.azurewebsites.net/')}
export const JSONHostingExample = () => { return externalLink('JSON Hosting Example', 'https://github.com/EricJPogue/cpsc-example-code/blob/main/web/hosting-json/')}
export const JSONHostingWebConfigExample = () => { return externalLink('web.config', 'https://github.com/EricJPogue/cpsc-example-code/blob/main/web/hosting-json/web.config')}
export const JSONIndex = () => { return externalLink('index.json', 'https://mustang-index.azurewebsites.net/index.json')}

export const NodeJSExpressAndHandlebars = () => { return externalLink('NodeJS, Express, and Handlebars by Daniel Tujo', 'https://www.youtube.com/watch?v=daaMlE2sfoM')}

export const AutocompleteW3CSchools = () => { return externalLink('W3C Schools Autocomplete', 'https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_autocomplete')}
export const AutocompleteJQuery = () => { return externalLink('jQuery Autocomplete', 'https://jqueryui.com/autocomplete/')}
export const AutocompletePixabay = () => { return externalLink('Pixabay Autocomplete', 'https://github.com/Pixabay/JavaScript-autoComplete/')}
export const AutocompleteAwesomplete = () => { return externalLink('Awesomplete Autocomplete', 'https://www.sitepoint.com/javascript-autocomplete-widget-awesomplete/')}

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