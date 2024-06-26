import React from 'react';
import { NavLink } from 'react-router-dom'

// import { getClass } from '../DataAndAPIs/Classes'
import { getClassNumber } from '../DataAndAPIs/ClassSections';
import { makeInternalURL } from './ActivityRouter';

export const CodingStandards = () => {
	if (getClassNumber() === '20000') return CodingStandardsAbbreviated()
	return (

<div>
<br />
<h4>Coding Standards</h4>
<h5>Summary: Understand and utilize the following coding standards</h5>
<h5>Prerequisites: None</h5>

<p>Nearly all effective software development teams maintain a set of coding standards. These standards allows them to 
maintain consistency, share code more effectively, find issues quicker, and focus on the most important aspects of 
software development.</p>

<p>With this in mind, our required coding standards include:</p>
<ol>
	<li><em>All code must compile and execute without errors or warnings</em></li>
	<li><em>Plagiarism in any form is not acceptable</em></li>
	<li><em>Any non-original work must be appropriately identified and credited in your README.md file</em></li>
	<li>Only submit the source files required to compile and execute an application plus README.md and LICENSE files should be submitted</li>
	<li>The README.md file should:
	<ul style={{listStyleType:'square'}}>
		<li>Include your name, the project, and your Lewis email address</li>
		<li>Include credits for all non-original content or a statement indicating that all content is original</li>
		<li>Include clear and concise build and execution instructions including a list of required files</li>
	</ul></li>
	<li>A LICENSE file should be included and must be MIT, GNU General Public License (GPL), or all rights reserved</li> 
	<li>Lines should be wrapped at 100 characters</li>
	<li>Tabs should be utilized for line indention (not spaces) and only line feeds utilized (LF, /n) at the end of lines</li>
	<li>Submitted zip files should extract all files into the current folder and not create subfolders</li>
	<li>All variable, function, and class naming should be descriptive and follow CamelCase naming conventions with classes starting with a capital letter and everything else starting with lower case letters</li>
	<li>Source code must be commented with comments being valuable but conservative</li>
	<li>When classes are utilized, each class should be in a separate source file</li>
	<li>File names should be meaningful and consistently follow either a CamelCase or dash-case naming convention</li>
	<li>Source code quotes should be single straight quotes when possible and user visible quotes should be curly <a href='https://typographyforlawyers.com/straight-and-curly-quotes.html' target='blank' rel='noopener noreferrer'>[link]</a></li>
	<li>All files should to be UTF-8 compatible text files</li>
	<li>Git and GitHub should be utilized to manage code</li>
</ol>

<br />
<p>Below are several references and examples of high quality to coding standards including:</p>
<ul style={{listStyleType:'square'}}>
	<li><a href='https://en.wikipedia.org/wiki/Coding_conventions' target='blank' rel='noopener noreferrer'>Wikipedia</a></li>
	<li><a href='https://www.w3schools.com/html/html5_syntax.asp' target='blank' rel='noopener noreferrer'>W3C HTML</a></li>
	<li><a href='https://www.python.org/dev/peps/pep-0008/' target='blank' rel='noopener noreferrer'>Python.org</a></li>
	<li><a href='https://google.github.io/styleguide/javaguide.html' target='blank' rel='noopener noreferrer'>Google Java</a></li>
	<li><a href='https://www.oracle.com/technetwork/java/codeconventions-150003.pdf' target='blank' rel='noopener noreferrer'>Oracle Java</a></li> 	
</ul>
</div>

	);
}

export const CodingStandardsAbbreviated = () => {
	return (

<div>
<br />
<h4>Coding Standards</h4>
<h5>Summary: Understand and utilize the following coding standards</h5>
<h5>Prerequisites: None</h5>

<p>Nearly all effective software development teams maintain a set of coding standards. These standards allows them to 
maintain consistency, share code more effectively, find issues quicker, and focus on the most important aspects of 
software development.</p>

<p>With this in mind, our required coding standards include:</p>
<ol>
	<li><em>All code must compile and execute without errors or warnings</em></li>
	<li><em>Plagiarism in any form is not acceptable</em></li>
	<li><em>Any non-original work must be appropriately identified and credited in your README.md file</em></li>
	<li>Only submit the source files required to compile and execute an application plus README.md and LICENSE files should be submitted</li>
	<li>The README.md file should:
	<ul style={{listStyleType:'square'}}>
		<li>Include your name, the project, and your Lewis email address</li>
		<li>Include credits for all non-original content or a statement indicating that all content is original</li>
		<li>Include clear and concise build and execution instructions including a list of required files</li>
	</ul></li>
	<li>A LICENSE file should be included and must be MIT, GNU General Public License (GPL), or all rights reserved</li> 
	<li>Lines should be wrapped at 100 characters</li>
	<li>Tabs should be utilized for line indention (not spaces) and only line feeds utilized (LF, /n) at the end of lines</li>
	<li>Submitted zip files should extract all files into the current folder and not create subfolders</li>
</ol>
</div>

	);
}

const CODING_STANDARDS_VALIDATOR_NAME = 'Coding Standards Validator - Part 1'
export const CODING_STANDARDS_VALIDATOR_ROUTE = 'coding-standards-validator'
export const codingStandardsValidatorLink = () => {return (<NavLink to={makeInternalURL(CODING_STANDARDS_VALIDATOR_ROUTE)}>{CODING_STANDARDS_VALIDATOR_NAME}</NavLink>)}
export const codingStandardsValidator = () => { return CodingStandardsValidator() }

export const CodingStandardsValidator = () => {
	return ( <div>
<br />
<h4>Coding Standards Validator</h4>
<h5>Summary: Utilize a Go CLI Framework to create a Go command line application that validates our coding standards</h5>
<h5>Prerequisites: Go</h5>

<p>It is important to automatically validate as many software development activities as possible. There are many 
organizations that feel that a standard should not be adopted unless the validation and enforcement of the standard 
can be automated.</p>

<p>With that in mind we are going to be developing a Go command line application that will automatically validate source
code to see if it meets a subset of our coding standards <NavLink to='/activity/coding-standards'>[link]</NavLink>. You 
will pick four (4) coding standards to validate and document those standards in your README.md file with a brief 
overview of how you will be validating each standard.</p> 

<p>In addition, you will evaluate and select a Go CLI Framework to process command line arguments. </p>

<h5>Part 1: Go Validator</h5>
<em>Requirement 1</em>
<p>Create an application that:</p>
<ol>
	<li>Is implemented in multiple Go (.go) files with a primary Go file named “val.go” (short for “validator”)</li>
	<li>Successfully compiles from the command line by typing “go run val.go</li>
	<li>Has a simple yet an aesthetically pleasing user interface</li>
	<li>Includes user instructions that succinctly describe the application when “val help” is executed</li>
</ol>

<em>Requirement 2</em>
<p>Be sure that application also:</p>
<ol>
	<li>Utilizes a Go Framework (like Cobra, kingpin, or cli-init) to process command line arguments</li>
	<li>Includes appropriate command line arguments for each validation function and a standard help feature</li>
	<li>Utilizes the preferred Framework code organization and maintains the minimal</li>
	<li>Store all code to process each standard in a separate Go file</li>
</ol>

<em>Requirement 3</em>
<p>Be sure that application also:</p>
<ol>
	<li>Defines an interface that allows us to polymorphically access each validation feature</li>
	<li>Utilizes the above interface when implementing coding standard validation</li>
	<li>Implements maximum encapsulation</li>
</ol>

<em>Requirement 4</em>
<p>Enhance the application so that it:</p>
<ol>
	<li>Successfully validates four (4) of our coding standards for a Go project</li>
	<li>Validates all Go (.go) and related project files  in the current folder</li>
	<li>Provides a user friendly summary of what is being validated</li>
	<li>Reports a user friendly message for each validated standard indicating that the standard passed or failed</li> 

</ol>

<br /><br /><br />
<h5>Part 2: Manual and Automated Testing</h5>
<em>Requirement 5</em>
<p>Enhance the application so that it provides 100% coverage utilizing manual testing and:</p>
<ol>
	<li>Includes five (5) test Go projects where:</li>
	<ul style={{listStyleType:'square'}}>
		<li>test-00 executes on your current “val” project</li>
		<li>test-01 demonstrates all validations passing</li>
		<li>test-02 demonstrates all validations failing multiple times</li>
		<li>test-03 demonstrates only one validation failing</li>
		<li>test-04 demonstrates only one validation succeeding</li>
	</ul>
	<li>Includes separate directories for test data labeled “test-01” through “test-04”</li>
	<li>Provides manual testing instructions in the README.md file for testing each coding standard</li>
	<li>Team members develop manual testing instructions for each other’s coding standard validations</li>
</ol>

<em>Requirement 6</em>
<p>Finally enhance the application so that it provides at least 80% coverage utilizing Go integrated automated testing and:</p>
<ol>
	<li>Includes four (4) application level automated tests consistent with the manual tests 01 through 04 above</li>
	<li>Implements at least two (2) tests for each module</li>
	<li>Elegantly executes and reports on all automated tests</li>
	<li>Provides automated testing instructions in the README.md file for testing each coding standard</li>
	<li>Team members develop automated testing scripts for each other’s coding standard validations</li>
</ol>
</div>

	);
}


