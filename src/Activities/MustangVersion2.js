
import React from 'react';
import { NavLink } from 'react-router-dom';

import { JSONAndAJAXTutorial, RandomStrings, JSONExamples, JSONHostingExample, JSONHostingWebConfigExample, JSONIndex } from '../data/Links'
import { AutocompleteAwesomplete, AutocompleteJQuery, AutocompletePixabay, AutocompleteW3CSchools } from '../data/Links'

export const Start_MustangVersion2 = () => { return (<div>Start working on {MustangVersion2NavLink()}</div>) }
export const Complete_MustangVersion2 = () => { return (<div>Complete {MustangVersion2NavLink()} <sup>~8 hours</sup></div>) }

const MustangVersion2Name = 'Mustang version 2'
const MustangVersion2Link = '/activity/mustang-v2'
const MustangVersion2NavLink = () => { return( <NavLink to={MustangVersion2Link}>{MustangVersion2Name}</NavLink> )} 

export const MustangVersion2 = () => {
	return (
	
<div>
<br />
<h4>{MustangVersion2Name}</h4>
<h5>Summary: Mustang is a simple contact management application. In version 1 we will create the a basic web application
that can access JSON based contact information that we are also creating.</h5>
<h5>Prerequisites: Windows 10 or MacOS, VS Code, Chrome, HTML, CSS, JavaScript, and Azure</h5>
			
<p>In this project you will be utilizing your HTML, CSS, JavaScript, JSON, and Ajax skills to create a Web application 
which will read contact information from Azure hosted JSON files. This activity will have multiple steps including:

You will first create several JSON files with contact 
information and host them in Azure. Then you will create a Web application that will read these JSON files as well as the 
JSON files that your classmates create.</p>
<ul style={{listStyleType:'square'}}>
	<li>Completing the {JSONAndAJAXTutorial()} tutorial</li>
	<li>Creating multiple personal information JSON files</li>
	<li>Sharing your personal information JSON files with your classmates</li>
	<li>Creating a web application that reads and displays you and your classmates personal information JSON files</li>
</ul>

<p>The specific requirements include the following.</p>

<em>Recall Requirement 1</em>
<p>Complete {JSONAndAJAXTutorial()} and host your implementation on Azure.</p>

<em>Recall Requirement 2</em>
<p>Create three personal information JSON files to share with your classmates. One file should be for yourself
while there remaining files should be for a superhero, book character, or movie character. To create the JSON files 
you will need to:</p>
<ol>
	<li>Utilize the {RandomStrings()} website to generate JSON file names that are random ten character lower case names</li>
	<li>Include all fields listed in the {JSONExamples()} with "phoneNumber" being optional... especially for superheroes :-)</li>
	<li>Include at least one additional field that is not given in the {JSONExamples()}</li>
	<li>Utilize consistent camel case naming for all field names</li>
</ol>

<em>Recall Requirement 3</em>
<p>Host, link, verify, and share your personal JSON files. After reviewing the {JSONHostingExample()} source code, create your own website 
in Azure to host you personal information JSON files by:</p>
<ol>
	<li>Creating an Azure website that includes a {JSONHostingWebConfigExample()} file and your personal information JSON files</li>
	<li><em>Review and test</em> each of your Azure-hosted JSON files</li>
	<li>Update the class index file to include your fully tested personal information JSON files</li>
	<li>Optionally create a index.html file for your site that includes link to your personal information JSON files similar to {JSONExamples()}</li>
</ol>

<em>Recall Requirement 4</em>
<p>Create a web application that reads, verifies, and displays the personal information data for everyone in the class by:</p>
<ol>
	<li>Utilizes Ajax to load the {JSONIndex()} file</li>
	<li>Parses the {JSONIndex()} file and loads each of the individual personal information JSON files (contacts) reference in the file</li>
	<li>Provides a status indicator showing progress as the contacts are loaded and logs each contact to the console as it is loaded</li>
	<li>Provides a visually appealing view of all contacts in the main browser page</li>
	<li>Implements asynchronous loading of personal information JSON files (contacts)... this is hard!</li>
</ol>

<em>Requirement 5</em>
<p>Implement CRUD (create, read, update, and delete)functionality for managing contacting information in your web client including:</p>
<ol>
	<li>Creating new contacts (in memory)</li>
	<li>Reading contacts</li>
	<li>updating contacts (in memory)</li>
	<li>deleting contacts (in memory)</li>  
</ol>

<em>Requirement 6</em>
<p>Implement a visually appealing Zip Code to City and State Autocompletion by:</p>
<ol>
	<li>Creating a graphical user interface that encourages users to enter the zip code prior to the city or state</li>
	<li>Validating a 5 digit zip code when it is entered</li>
	<li>Updating the city and state when a new zip code is entered but NOT overwriting either the city or the state if either is already entered</li>
	<li>Implementing server-side processing in either PHP or Node.js that returns the default city/state for local Illinois zip codes</li>
	<li>Enhancing the server-side process above so that it appropriately responds to Ajax requests</li>
	<li>Testing that entering a zip code of "60106" in the zip code field correctly autocomplete "Bensenville, IL"</li>
</ol>

<em>Requirement 7</em>
<p>The final requirement for Mustang v2 is a Google Search style search (autocomplete) for contacts in the application. 
For implementing this feature you will want to research various options for implementing a Google Search style search 
style field in JavaScript, experiment with one or two options, and then select one to implement in your application. 
Always keep in mind the user experience that you want to exist in your application.</p>
<p>Although you should do your own research, several options exist that you may want to consider include:</p>
<ul style={{listStyleType:'square'}}>
	<li>{AutocompleteW3CSchools()}</li>
	<li>{AutocompleteJQuery()}</li>
	<li>{AutocompletePixabay()}</li>
	<li>{AutocompleteAwesomplete()}</li>
</ul>  

</div> )

}

export const Start_MustangVersion3 = () => { return (<div>Start working on {MustangVersion3NavLink()}</div>) }
export const Complete_MustangVersion3 = () => { return (<div>Complete {MustangVersion3NavLink()} <sup>~5 hours</sup></div>) }

const MustangVersion3Name = 'Mustang version 3'
const MustangVersion3Link = '/activity/mustang-v3'
const MustangVersion3NavLink = () => { return( <NavLink to={MustangVersion3Link}>{MustangVersion3Name}</NavLink> )} 

export const MustangVersion3 = () => {
	return (
	
<div>
<br />
<h4>{MustangVersion3Name}</h4>
<h5>Summary: In this version of Mustang we will enhance our contact management application so that it stores persistent data.</h5>
<h5>Prerequisites: Windows 10 or MacOS, VS Code, Chrome, HTML, CSS, JavaScript, and Azure</h5>
			
<p>In {MustangVersion3Name} you will enhance what you created in {MustangVersion2NavLink()} to add functionality that 
will allow the application to store persistent data on the server. In order to do this you will need to utilize 
server-side file storage or a database.</p>

<p>After verifying Requirements 1 through 7 in {MustangVersion2NavLink()}, continue with implementing the following 
requirements.</p>

<em>Requirement 8</em>
<p>Implement Create Contact and Read Contacts features that utilize persistent storage to save new contacts and load 
existing contacts when the application starts (“Create” and “Read” parts of CRUD). Note that creating a new Contact
must not overwrite existing contacts.</p>

<em>Requirement 9</em>
<p>Implement a Import contacts feature that reads each of the JSON files created by your classmates and saves them
to your application’s persistent store.</p>

</div> )

}