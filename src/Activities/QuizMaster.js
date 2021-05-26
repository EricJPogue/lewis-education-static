
import React from 'react';

export const QuizMaster = () => {
	return (
	
<div>
<br />
<h4>QuizMaster Server</h4>
<h5>Summary: Create a web service that serves quiz questions</h5>
<h5>Prerequisites: Windows 10 or MacOS, VS Code, Go, and a cloud provider</h5>
			
<p>In this project you will create a web service that returns a quiz based on multiple question banks.</p>

<em>Requirement 1</em>
<p>Create an HTTPs based web service utilizing one of the following architectures:</p>
<ol>
	<li>Microsoft Azure with a Go web service  running in a Docker container</li>
	<li>Microsoft Azure Functions with Go utilizing a custom handler</li>
	<li>Google Cloud Functions with Go</li>
	<li>Microsoft Azure with JavaScript</li>
</ol>

<em>Requirement 2</em>
<p>Enhance your server to support multiple choice questions from multiple question banks:</p>
<ol>
	<li>Implement a service endpoint that returns the ID, name, and number of questions for each question bank</li>
	<li>Implement a service endpoint that accepts an array of question bank IDs and numbers and returns the appropriate 
		number of questions and potential answers from each question bank</li>
	<li>All questions should be returned in random order</li>
	<li>The returned potential answers for each question should also be in random order</li>

</ol>

<em>Requirement 3</em>
<p>Enhance your server so that JSON is utilized throughout:</p>
<ol>
	<li>Each question bank should be stored as JSON</li>
	<li>Each service endpoint should be implemented as restful web service and utilize JSON for input and return values</li>
	<li>The correct answer for each question should be stored in the question bank JSON</li>
	<li>The correct answer should never be sent to the client</li>
</ol>

<em>Requirement 4</em>
<p>Test and validate your server utilizing a multithreaded Go command line client application:</p>
<ol>
	<li>Create a user friendly Go client application to test your QuizMaster server... be sure to include a “help” feature</li>
	<li>Initiate 10 simultaneous (multithreaded) requests for your first endpoint and validate the results</li>
	<li>Initiate 10 simultaneous (multithreaded) requests for your second endpoint and validate the results</li>
	<li>Create a nice looking command line interface for showing a set of quiz questions and potential answers</li>
</ol>
</div> )

}