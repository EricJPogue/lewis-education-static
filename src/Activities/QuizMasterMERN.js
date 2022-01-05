import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeInternalURL } from './ActivityRouter';

const NAME = 'Quiz Master'
export const QUIZ_MASTER_MERN_ROUTE = 'quiz-master-mern'
export const quizMasterMERNLink = () => {return (<NavLink to={makeInternalURL(QUIZ_MASTER_MERN_ROUTE)}>{NAME}</NavLink>)}
export const quizMasterMERN = () => { return ( <div>

<br />
<h4>QuizMaster</h4>
<h5>Summary: Create a Web based quiz application</h5>
<h5>Prerequisites: HTML, CSS, JavaScript, React, MERN, Go, and a cloud provider</h5>
			
<p>In this project you will start by creating a web service that returns a quiz based on multiple question banks.</p>

<em>Requirement 1</em>
<p>Create an HTTPs based web service utilizing one of the following architectures:</p>
<ol>
	<li>Microsoft Azure with a Go web service running in a Docker container or as a serverless function</li>
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
	<li>All questions should be optionally returned in random order</li>
	<li>The returned potential answers for each question should also be optionally in random order</li>
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
<p>Over time this product will be enhanced to support:</p>
<ol>
	<li>A minimalist browser based client (all possible complexities should remain on the server)</li>
	<li>Submission of quizzes and question responses to a MongoDB server</li>
	<li>A MERN based client interface for managing questions, quizzes, and question banks</li>
	<li>A MERN based client interface for viewing results and scores</li>
	<li>A MERN based client interface for grading</li>
</ol>

</div> ) }