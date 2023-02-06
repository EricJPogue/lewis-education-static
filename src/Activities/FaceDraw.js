
import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeInternalURL } from './ActivityRouter'
import FaceDrawScreenshot from './FaceDrawScreenshot.png'

const FACEDRAW_JAVA_NAME = 'FaceDraw'
export const FACEDRAW_JAVA_ROUTE = 'facedraw-java'
export const faceDrawJavaLink = () => {return (<NavLink to={makeInternalURL(FACEDRAW_JAVA_ROUTE)}>{FACEDRAW_JAVA_NAME}</NavLink>)}
export const faceDrawJava  = () => { return FaceDraw(FaceDrawJavaProperties) }

export const FaceDrawWeb   = () => { return FaceDraw(FaceDrawWebProperties) }
export const FaceDrawReact = () => { return FaceDraw(FaceDrawReactProperties) }

const FaceDrawWebProperties = {
	'name': 'FaceDraw for the Web', 
	'language': 'Web',
	'prerequisites': 'HTML, CSS, JavaScript, VS Code, and Terminal',
	'type': 'Web application using HTML, CSS, and JavaScript',
	'requirement1_1': 'Is implemented in a single file name “index.html”',
	'requirement1_2': 'Is hosted as a public website in Microsoft Azure'
}

const FaceDrawJavaProperties = {
	'name': 'FaceDraw with Java', 
	'language': 'Java graphical',
	'prerequisites': 'Java, VS Code, and Terminal',
	'type': 'graphical application written in the Java language',
	'requirement1_1': 'Utilizes multiple Java files',
	'requirement1_2': 'compiles from the command line using “javac *.java” and executes with “java FaceDraw'
}

const FaceDrawReactProperties = {
	'name': 'FaceDraw with React', 
	'language': 'React',
	'prerequisites': 'React, HTML, CSS, JavaScript, VS Code, and Terminal',
	'type': 'Web application using React, HTML, CSS, and JavaScript',
	'requirement1_1': 'Is implemented as a standard React application',
	'requirement1_2': 'Is hosted as a public website in Microsoft Azure'
}	

const FaceDraw = (appProps) => {
	return (
	
<div>
<br />
<h4>{appProps.name}</h4>
<h5>Summary: Create a {appProps.language} application that will draw random graphical faces.
</h5>
<h5>Prerequisites: {appProps.prerequisites}</h5>

<p>In this activity, you will create a graphical application that draws random faces in a window. The application 
will draw 3 to 10 faces. The faces will have a random width and height that are set to reasonable and visually appealing 
ranges. The application window size should be initially set to a reasonable size and all faces should draw entirely 
within the window. You do not have to worry about moving or resizing the faces as the window is resized. Specifically 
the faces should remain in the same place with the window is resized. Each face should have two eyes and a mouth. The 
mouth should be randomly smiling, frowning, or in-between. </p>

<p>Your FaceDraw implementation could look something like:</p>
<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
<img src={FaceDrawScreenshot} alt='Eric Pogue' width= '512'/>
</div>
<br />
<p>Specific requirements for the application include:</p>
<em>Requirement 1</em>
<p>Create an application that:</p>
<ol>
	<li>{appProps.requirement1_1} and {appProps.requirement1_2}</li>
	<li>Implements a Face class that includes member variables and getters/setters for width, height, x, y, and smiling status</li>
	<li>Implements at least three constructors for Face including a default constructor</li>
	<li>Implements toString() in the Face class so that each member variable in printed to the console window each time a Face is painted</li>
	<li>Implements ArrayList called FaceList that includes 3 to 10 Faces</li>
</ol>

<em>Requirement 2</em>
<p>Be sure that application also:</p>
<ol>
	<li>Has a simple yet an aesthetically pleasing user interface</li>
	<li>Creates and draws multiple graphical faces when the application starts</li>
	<li>Each face should have two eyes and a mouth</li>
	<li>The mouth should be set randomly to smiling, frowning, or be neutral when the application starts</li>
</ol>

<em>Requirement 3</em>
<p>Enhance the application so that when it starts it:</p>
<ol>
	<li>Draws between 3 and 10 faces which is determined randomly when the program starts</li>
	<li>Randomly determines each faces’ characteristics including location, size, and mouth shape of smile, frown, or neutral</li>
	<li>Retains original face characteristics when the window is resized</li>
	<li>Uses reasonable and visually appealing ranges for all random numbers</li>
</ol>

<em>Requirement 4</em>
<p>Enhance the application so that:</p>
<ol>
	<li>Smiling faces have a 50% chance of having green filled eyes and a 50% chance blue filled eyes</li>
	<li>All neutral faces have yellow filled eyes</li>
	<li>All frowning faces have red filled eyes</li>
	<li>All eyes should still have a black oval around the edge of the eye</li>
</ol>
</div> )

}