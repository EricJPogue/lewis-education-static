
import React from 'react'
import { NavLink } from 'react-router-dom'

export const SwissArmyKnifeJava  = () => { return SwissArmyKnife(SwissArmyKnifeJavaProperties) }
export const SwissArmyKnifeJavaV2  = () => { return SwissArmyKnifeV2(SwissArmyKnifeJavaV2Properties) }

const SwissArmyKnifeJavaProperties = {
	'name': 'SwissArmyKnife', 
	'language': 'Java command-line (CLI)',
	'prerequisites': 'Java, VS Code, and Terminal',
	'type': 'command-line application written in the Java language',
	'requirement1_1': 'Is implemented in multiple Java (.java) files with the main file named “sak.java”',
	'requirement1_2': 'Successfully compiles from the command line using “javac *.java” and executes by typing “java sak”'
}

const SwissArmyKnifeJavaV2Properties = {
	'name': 'SwissArmyKnife version 2', 
	'language': 'Java command-line (CLI)',
	'prerequisites': 'Java, VS Code, and Terminal',
	'type': 'command-line application written in the Java language',
	'requirement1_1': 'Is implemented in multiple Java (.java) files with the main file named “sak.java”',
	'requirement1_2': 'Successfully compiles from the command line using “javac *.java” and executes by typing “java sak”'
}

const SwissArmyKnife = (appProps) => {
	return (
	
<div>
<br />
<h4>{appProps.name}</h4>
<h5>Summary: Create a {appProps.language} application that performs a variety functions.
</h5>
<h5>Prerequisites: {appProps.prerequisites}</h5>

<p>In this programming activity, you will create a command-line application that implements a variety of function 
focused on distributed computing and web services. </p>

<p>The application will also serve as a “sandbox” development environment for future programs. It is often 
beneficial to develop a new feature in the simplest possible environment before moving it to its final often complex 
production environment. This eliminates unnecessary dependencies and minimizes our risk of creating code that suffers 
from immobility.</p>

<h5>Specific requirements for the application include:</h5>
<em>Requirement 1</em>
<p>Create an application that:</p>
<ol>
	<li>{appProps.requirement1_1}</li>
	<li>{appProps.requirement1_2}</li>
</ol>

<em>Requirement 2</em>
<p>Enhance your application by implementing an HTTPRequest feature that:</p>
<ol>
	<li>Responds to the “-HttpRequest [URL]” command-line parameter assuming case insensitivity</li>
	<li>Retrieves the data from the URL and stores the data from the URL in memory</li>
	<li>Prints the data to the command-line</li>
	<li>Is implemented in a separate source code file</li>
</ol>

<em>Requirement 3</em>
<p>Enhance your application by implementing a help feature that it:</p>
<ol>
	<li>Responds to the “-Help” command-line parameter assuming case insensitivity</li>
	<li>Implements visually appealing detailed instructions on how to use the application</li>
	<li>Provides fully tested copy/paste examples of each application feature</li>
	<li>Is implemented in a separate source code file</li>
</ol>

<em>Requirement 4</em>
<p>Enhance your application by implementing an HTTPRequestIndex feature that it:</p>
<ol>
	<li>Responds to the “-HttpRequestIndex [URL]” command-line parameter assuming case insensitivity</li>
	<li>Opens the following JSON index file <a href='https://thunderbird-index.azurewebsites.net/w0a6zk195d.json' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Parses the index file for the additional URLs</li>
	<li>Retrieves the data from each additional URL</li>
	<li>Prints the index data followed by each individual URL data elegantly to the command-line</li>
	<li>Is implemented in a separate source code file</li>
</ol>
</div> )
}

const SwissArmyKnifeV2 = (appProps) => {
	return (
	
<div>
<br />
<h4>{appProps.name}</h4>
<h5>Summary: Create SwissArmyKnife version 2 as a {appProps.language} application that builds on the original SwissArmyKnife <NavLink to='/activity/swiss-army-knife-java'>[link]</NavLink>
</h5>
<h5>Prerequisites: {appProps.prerequisites}</h5>

<p>In this programming activity, you will enhance SwissArmyKnife application by implementing 
additional functionality.</p>

<p>The application will continue to serve as a “sandbox” development environment for developing new features. It is 
often beneficial to develop a new feature in the simplest possible environment before moving it to its final often complex 
production environment. This eliminates unnecessary dependencies and minimizes our risk of creating code that suffers 
from immobility.</p>

<h5>Review and verify your implementation of the requirements from the original SwissArmyKnife that include:</h5>
<em>Requirement 1</em>
<p>Create an application that:</p>
<ol>
	<li>{appProps.requirement1_1}</li>
	<li>{appProps.requirement1_2}</li>
</ol>

<em>Requirement 2</em>
<p>Enhance your application by implementing an HTTPRequest feature that:</p>
<ol>
	<li>Responds to the “-HttpRequest [URL]” command-line parameter assuming case insensitivity</li>
	<li>Retrieves the data from the URL and stores the data from the URL in memory</li>
	<li>Prints the data to the command-line</li>
	<li>Is implemented in a separate source code file</li>
</ol>

<em>Requirement 3</em>
<p>Enhance your application by implementing a help feature that it:</p>
<ol>
	<li>Responds to the “-Help” command-line parameter assuming case insensitivity</li>
	<li>Implements visually appealing detailed instructions on how to use the application</li>
	<li>Provides fully tested copy/paste examples of each application feature</li>
	<li>Is implemented in a separate source code file</li>
</ol>

<em>Requirement 4</em>
<p>Enhance your application by implementing an HTTPRequestIndex feature that it:</p>
<ol>
	<li>Responds to the “-HttpRequestIndex [URL]” command-line parameter assuming case insensitivity</li>
	<li>Opens the following JSON index file <a href='https://thunderbird-index.azurewebsites.net/w0a6zk195d.json' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Parses the index file for the additional URLs</li>
	<li>Retrieves the data from each additional URL</li>
	<li>Prints the index data followed by each individual URL data elegantly to the command-line</li>
	<li>Is implemented in a separate source code file</li>
</ol>

<br />
<h5>Specific requirements for SwissArmyKnife version 2 include:</h5>
<em>Requirement 5</em>
<p>Enhance your application so that it: </p>
<ol>
	<li>Calculates the total time elapsed each time it is executed in milliseconds</li>
	<li>Displays and labels elapsed time appropriately</li>
</ol>


<em>Requirement 6</em>
<p>Review the SleepFast tutorial and enhance SwissArmyKnife so that it:</p>
<ol>
	<li>Implements a “-Sleep” command-line parameter</li>
	<li>Implements a “-SleepFast” command-line parameter</li>
	<li>Implements a “-SleepFastImplementsRunnable” command-line parameter</li>
	<li>Updates the existing “-Help” features to include descriptions and copy/paste examples</li>
</ol>

<em>Requirement 7</em>
<p>Implement a HTTPValidateIndex feature that validates each personal information JSON files to make sure that:</p>
<ol>
	<li>Each personal information file referenced in the index file <a href='https://thunderbird-index.azurewebsites.net/w0a6zk195d.json' target='_blank' rel='noopener noreferrer'>[link]</a> exists</li>
	<li>The "firstName" and "lastName" fields exist and have a length of 2 to 16 characters (inclusive)</li>
	<li>If the optional "preferredName" field exists, it meets the same length requirements as "firstName" and "lastName"</li>
	<li>Prints each personal information JSON file followed by a “passed” or “failed - [[error message]]” validation statement</li>
	<li>Updates the existing “-Help” features to include descriptions and copy/paste examples</li>
</ol>

<em>Requirement 8</em>
<p>Enhance HTTPValidateIndexThreaded implements HTTPValidateIndex correctly utilizing multiple threads so that it:</p>
<ol>
	<li>Utilizes multiple threads either by extending Thread or implementing Runnable</li>
	<li>Updates the existing “-Help” features to include descriptions and copy/paste examples</li>
</ol>

</div> )
}