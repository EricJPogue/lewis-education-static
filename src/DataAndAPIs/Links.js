import React from 'react';
import { NavLink } from 'react-router-dom';

export const Discord = () => { return externalLink('Discord', 'https://discord.com/') }
export const OReillyBooks = () => { return externalLink('O’Reilly Books', 'https://lewisu.libguides.com/az.php?q=o%27reilly') }
export const ExampleCode = () => { return externalLink('example code', 'https://github.com/EricJPogue/cpsc-example-code') }
export const CommandLine = () => { return externalLink('Command Line Interface', 'https://www.w3schools.com/whatis/whatis_cli.asp' )}
export const FileExplorer = () => { return externalLink('File Explorer', 'https://www.tutorialspoint.com/windows10/windows10_file_explorer.htm' )}
export const Finder = () => { return externalLink('Finder', 'https://support.apple.com/en-us/HT201732')}
export const ZipFiles = () => { return externalLink('Zip files', 'https://www.businessinsider.com/how-to-zip-a-file')}
export const Firefox = () => { return externalLink('FireFox', 'https://www.mozilla.org/en-US/firefox/new/') }
export const Chrome = () => { return externalLink('Chrome', 'https://www.google.com/chrome/') }
export const VSCode = () => { return externalLink('Visual Studio Code', 'https://code.visualstudio.com/') }
export const Office365 = () => { return externalLink('Microsoft Office 365', 'https://www.office.com/') }
export const ScreenCapture = () => { return externalLink('Screen Capture', 'https://www.theverge.com/2019/11/8/20953522/how-to-take-screenshot-mac-windows-pc-iphone-android') }
export const Git = () => { return externalLink('Git', 'https://git-scm.com/') }
export const GitHub = () => { return externalLink('GitHub', 'https://help.github.com/en/articles/applying-for-a-student-developer-pack') }
export const Azure = () => { return externalLink('Microsoft Azure', 'https://azure.microsoft.com/en-us/free/students/') }
export const Python = () => { return externalLink('Python', 'https://www.python.org/') }
export const IntroducingPythonSampleCode = () => { return externalLink('source code', 'https://github.com/madscheme/introducing-python') }
export const introducingPythonCodeExamples = () => { return externalLink('code examples', 'https://github.com/madscheme/introducing-python') }

export const firebase = () => { return externalLink('Google Firebase', 'https://firebase.google.com/')}
export const mongoDBAtlas = () => { return externalLink('MongoDB Atlas', 'https://www.mongodb.com/atlas') }
export const grammarly = () => { return externalLink('Grammarly', 'https://www.grammarly.com')}

export const VSCodePython = () => { return externalLink('Visual Studio Code Python', 'https://code.visualstudio.com/docs/python/python-tutorial') }
export const NodeJS = () => { return externalLink('Node.js', 'https://nodejs.org/en/') }
export const Java = () => { return externalLink('Java SDK', 'https://docs.microsoft.com/en-us/java/azure/jdk/?view=azure-java-stable') }
export const microsoftOpenJDK = () => { return externalLink('Java Software Development Kit (Microsoft OpenJDK)', 'https://www.microsoft.com/openjdk') }

export const JavaTutorial = () => { return internalLink('tutorial', '/activity-config/java-jdk-windows10-setup') }
export const Go = () => { return externalLink('Go', 'https://golang.org/') }
export const PowerShell = () => { return internalLink('PowerShell', '/activity-config/powershell-windows10-setup') }
export const Terminal = () => { return internalLink('Terminal', '/activity-config/macos-setup-terminal-finder-and-git') }
export const GitTutorial = () => { return internalLink('tutorial', '/activity-config/git-installation-on-windows-10') }

export const Blended = () => { return externalLink('Blended Learning & Flipped Classroom', 'https://www.youtube.com/watch?v=paQCE58334M') }
export const scrumIn7Min = () => { return internalLink('Introduction to Scrum in 7 Minutes', '/activity/scrum-in-7-minutes') }

export const blackboardChangePhoto = () => { return internalLink('Blackboard', '/activity/photo-to-blackboard')}

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

export const oreillyPlaylistICS = () => { return( <a href='https://learning.oreilly.com/playlists/1a69d11a-2aff-4179-a664-6b842a666f34' target='_blank' rel='noopener noreferrer'>O’Reilly Books</a> ) }
export const oreillyPlaylistWeb = () => { return( <a href='https://learning.oreilly.com/playlists/70918629-ecf2-4b8c-8268-9e6d699d533d' target='_blank' rel='noopener noreferrer'>O’Reilly Books</a> ) }
export const oreillyPlaylistOOP = () => { return externalLink('O’Reilly Books', 'https://learning.oreilly.com/playlists/788c5005-f6f7-499b-a13f-2885daadf0bd') }
export const oreillyPlaylistSE = () => { return( <a href='https://learning.oreilly.com/playlists/b2510780-81f1-404e-975d-4354219ff894' target='_blank' rel='noopener noreferrer'>O’Reilly Books</a> ) }
export const oreillyPlaylistSC = () => { return( <a href='https://learning.oreilly.com/playlists/d72310ce-9438-4d60-a2fb-3725153fd236' target='_blank' rel='noopener noreferrer'>O’Reilly Books</a> ) }

export const ResumeFormat = () => { return( <a href='https://pithub.blob.core.windows.net/nvm4zqwm/f7h4j48d-resume-format.pdf' target='_blank' rel='noopener noreferrer'>resume format</a> ) }
export const ResumeReviewServices = () => { return( <a href='https://lewisu.edu/resources/careerservices/students.htm' target='_blank' rel='noopener noreferrer'>resume review services</a> ) }

export const SequenceSelectionAndRepetition = () => { return( <a href='https://edu.gcfglobal.org/en/computer-science/sequences-selections-and-loops/1/' target='_blank' rel='noopener noreferrer'>Sequences, selections, and loops (repetition)</a> ) }

export const programmingTogether = () => { return internalLink('programming together', '/activity/programming-together') }
export const NodeJSOnAzure = () => { return internalLink('Deploying Node.js on Microsoft Azure', '/activity/programming-together') }
export const AzureFunctionsWithVSCodeAndJavaScript = () => { return internalLink('Azure Functions with VS Code and JavaScript', '/activity/programming-together') }

export const PythonTurtleLibrary = () => { return externalLink('Turtle', 'https://docs.python.org/3/library/turtle.html#introduction')}

export const JSONAndAJAXTutorial = () => { return externalLink('JSON and AJAX Tutorial: With Real Examples', 'https://www.youtube.com/watch?v=rJesac0_Ftw')}
export const JSONWebServicesTutorial = () => { return externalLink('Dogs, JavaScript & An API 🐶 Fetch, Promises & Async Await', 'https://www.youtube.com/watch?v=AVmGmLFcukM&t=0s')}

export const RandomStrings = () => { return externalLink('Random', 'https://www.random.org/strings/')}
export const JSONExamples = () => { return externalLink('JSON Examples', 'https://mustang-index.azurewebsites.net/')}
export const JSONHostingExample = () => { return externalLink('JSON Hosting Example', 'https://github.com/EricJPogue/cpsc-example-code/blob/main/web/hosting-json/')}
export const JSONHostingWebConfigExample = () => { return externalLink('web.config', 'https://github.com/EricJPogue/cpsc-example-code/blob/main/web/hosting-json/web.config')}
export const JSONIndex = () => { return externalLink('index.json', 'https://mustang-index.azurewebsites.net/index.json')}

export const AutocompleteW3CSchools = () => { return externalLink('W3C Schools Autocomplete', 'https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_autocomplete')}
export const AutocompleteJQuery = () => { return externalLink('jQuery Autocomplete', 'https://jqueryui.com/autocomplete/')}
export const AutocompletePixabay = () => { return externalLink('Pixabay Autocomplete', 'https://github.com/Pixabay/JavaScript-autoComplete/')}
export const AutocompleteAwesomplete = () => { return externalLink('Awesomplete Autocomplete', 'https://www.sitepoint.com/javascript-autocomplete-widget-awesomplete/')}

export const ServerlessAzure = () => { return externalLink('Azure Functions', 'https://azure.microsoft.com/en-us/overview/serverless-computing/') }
export const ServerlessGoogle = () => { return externalLink('Google Cloud Functions', 'https://cloud.google.com/functions') }
export const ServerlessAWS = () => { return externalLink('AWS Lambda', 'https://aws.amazon.com/lambda/') }

export const unrealEngine = () => { return externalLink('Unreal Engine', 'https://www.unrealengine.com/en-US/')}
export const unity = () => { return externalLink('Unity', 'https://unity.com/')}
export const revit = () => { return externalLink('Revit', 'https://www.autodesk.com/products/revit/architecture')}

export const mern = () => { return externalLink('MERN', 'https://www.mongodb.com/mern-stack')}

export const deliveryDronePowerpoint = () => { return externalLink('Delivery Drone PowerPoint', 'https://lewiseducation.blob.core.windows.net/todo/delivery-drone.pptx')}
export const umlClassDiagrams = () => { return externalLink('UML Class Diagrams', 'https://www.youtube.com/watch/UI6lqHOVHic')}

export const codingStandards = () => { return internalLink('coding standards', '/activity/coding-standards')}

export const calendarLink = (sprint) => { return ( <NavLink to={'/calendar/'+sprint}>calendar</NavLink> ) }
export const scheduleLink = (sprint) => { return ( <NavLink to={'/schedule/'+sprint}>schedule</NavLink> ) }

export const blackboard = () => { return externalLink('Blackboard', 'https://lewisuniversity.blackboard.com/')}
export const wireless = () => { return externalLink('wireless', 'https://mylewis.lewisu.edu/web/mylewis-home/resources')}

export const gitCommands = () => { return internalLink('Git commands', '/activity/git-commands')}

export const jsonW3CTutorial = () => { return externalLink('JSON', 'https://www.w3schools.com/js/js_json_intro.asp')}
export const ajaxW3CTutorial = () => { return externalLink('AJAX', 'https://www.w3schools.com/js/js_ajax_intro.asp')}
export const jsonArticle = () => { return externalLink('What is JSON? JavaScript Object Notation explained', 'https://www.infoworld.com/article/3222851/javascript/what-is-json-javascript-object-notation-explained.html') }

// Agile Alliance
export const agileAlliance = () => { return externalLink('Agile Alliance', 'https://www.agilealliance.org/')}
export const agileAllianceAgile101 = () => { return externalLink('Agile 101', 'https://www.agilealliance.org/agile101') }
export const backlogGrooming = () => { return externalLink('Backlog Grooming', 'https://www.agilealliance.org/glossary/backlog-refinement/')}
export const epic = () => { return externalLink('Epic', 'https://www.agilealliance.org/glossary/epic') }
export const iNVEST = () => { return externalLink('INVEST', 'https://www.agilealliance.org/glossary/invest' )}
export const productBacklog = () => { return externalLink('Product Backlog', 'https://www.agilealliance.org/glossary/backlog' )}
export const scrum = () => { return externalLink('Scrum', 'https://www.agilealliance.org/glossary/scrum')}
export const sprintBacklog = () => { return externalLink('Sprint Backlog', 'https://www.agilealliance.org/glossary/sprint-backlog')}
export const sprintPlanning = () => { return externalLink('Sprint Planning', 'https://www.agilealliance.org/glossary/sprint-planning')}
export const userStory = () => { return externalLink('User Story', 'https://www.agilealliance.org/glossary/user-stories')}
export const userStoryTemplate = () => { return externalLink('User Story Template', 'https://www.agilealliance.org/glossary/user-story-template/')}

export const learningJavaExampleCode = () =>  { return internalLink('example code', 'https://github.com/l0y/learnjava5e.git')}

export const done = () => { return externalLink('Done', 'https://www.agilealliance.org/glossary/definition-of-done')}

export const architecturePart1 = () => { return internalLink('Application Architectures, Object-Oriented Programming, and Databases - Part 1', 
	'/activity-architecture/application-architecture-part1')}
export const architecturePart2 = () => { return internalLink('Application Architectures - Part 2', 
	'/activity-architecture/application-architecture-part2')}

export const continuousIntegration = () => { return externalLink('What is CI/CD? Continuous integration and continuous delivery explained', 
	'https://www.infoworld.com/article/3271126/what-is-cicd-continuous-integration-and-continuous-delivery-explained.html') }

export const fullStackJavaScriptW3C = () => { return externalLink('Full stack JavaScript', 'https://www.w3schools.com/whatis/whatis_fullstack_js.asp') }

export const successfulProgrammer = () => { return internalLink('How To Be A Successful Programmer', '/activity/successful-programmer') }


export const externalLink = (displayName, url) => {
	return (
		<a href={url} target='_blank' rel='noopener noreferrer'>{displayName}</a>
	)
}

export const internalLink = (displayName, url) => {
	return ( <NavLink to={url}>{displayName}</NavLink> )
}