import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeInternalURL } from './ActivityRouter'

import { JSONAndAJAXTutorial, JSONWebServicesTutorial, RandomStrings, JSONExamples, JSONHostingExample, JSONHostingWebConfigExample, JSONIndex } from '../data/Links'

const MUSTANG_NAME = 'Mustang'
export const MUSTANG_ROUTE = 'mustang'
export const mustangLink = () => {return (<NavLink to={makeInternalURL(MUSTANG_ROUTE)}>{MUSTANG_NAME}</NavLink>)}
export const mustang = () => {
	return ( <div>
		
<br />
<h4>{MUSTANG_NAME}</h4>
<h5>Summary: Mustang is a simple contact management application. In version 1 we will create the a basic web application
that can access JSON based contact information that we are also creating.</h5>
<h5>Prerequisites: Windows 10 or MacOS, VS Code, Chrome, HTML, CSS, JavaScript, and Azure</h5>
			
<p>In this project you will be utilizing your HTML, CSS, JavaScript, JSON, and Ajax skills to create a Web application 
which will read contact information from Azure hosted JSON files. This activity will have multiple steps including:

You will first create several JSON files with contact 
information and host them in Azure. Then you will create a Web application that will read these JSON files as well as the 
JSON files that your classmates create.</p>
<ul style={{listStyleType:'square'}}>
	<li>Completing {JSONAndAJAXTutorial()} or {JSONWebServicesTutorial()} tutorial</li>
	<li>Creating multiple personal information JSON files</li>
	<li>Sharing your personal information JSON files with your classmates</li>
	<li>Creating a web application that reads and displays you and your classmates personal information JSON files</li>
</ul>

<p>The specific requirements include the following.</p>

<em>Requirement 1</em>
<p>Complete {JSONAndAJAXTutorial()} and host your implementation on Azure. Alternatively you may complete the updated
version of {JSONWebServicesTutorial()}</p>

<em>Requirement 2</em>
<p>Create three personal information JSON files to share with your classmates. One file should be for yourself
while there remaining files should be for a superhero, book character, or movie character. To create the JSON files 
you will need to:</p>
<ol>
	<li>Utilize the {RandomStrings()} website to generate JSON file names that are random ten character lower case names</li>
	<li>Include all fields listed in the {JSONExamples()} with "phoneNumber" being optional... especially for superheroes :-)</li>
	<li>Include at least one additional field that is not given in the {JSONExamples()}</li>
	<li>Utilize consistent camel case naming for all field names</li>
</ol>

<em>Requirement 3</em>
<p>Host, link, verify, and share your personal JSON files. After reviewing the {JSONHostingExample()} source code, create your own website 
in Azure to host you personal information JSON files by:</p>
<ol>
	<li>Creating an Azure website that includes a {JSONHostingWebConfigExample()} file and your personal information JSON files</li>
	<li><em>Review and test</em> each of your Azure-hosted JSON files</li>
	<li>Update the class index file to include your fully tested personal information JSON files</li>
	<li>Optionally create a index.html file for your site that includes link to your personal information JSON files similar to {JSONExamples()}</li>
</ol>

<em>Requirement 4</em>
<p>Create a web application that reads, verifies, and displays the personal information data for everyone in the class by:</p>
<ol>
	<li>Utilizes Ajax to load the {JSONIndex()} file</li>
	<li>Parses the {JSONIndex()} file and loads each of the individual personal information JSON files (contacts) reference in the file</li>
	<li>Provides a status indicator showing progress as the contacts are loaded and logs each contact to the console as it is loaded</li>
	<li>Provides a visually appealing view of all contacts in the main browser page</li>
	<li>Implements asynchronous loading of personal information JSON files (contacts)... this is hard!</li>
</ol>

</div> )
}