
import React from 'react'
import { NavLink } from 'react-router-dom'
import FaceDrawScreenshot from './FaceDrawScreenshot.png'

export const FaceDrawJava  = () => { return FaceDraw(FaceDrawJavaProperties) }
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
	'requirement1_1': 'Is implemented in multiple Java (.java) files with the main file named “FaceDraw.java”',
	'requirement1_2': 'Successfully compiles from the command line using “javac *.java” and executes by typing “java FaceDraw'
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
	<li>{appProps.requirement1_1}</li>
	<li>{appProps.requirement1_2}</li>
</ol>

<em>Requirement 2</em>
<p>Be sure that application also:</p>
<ol>
	<li>Has a simple yet an aesthetically pleasing user interface</li>
	<li>Creates and draws multiple graphical faces</li>
	<li>Each face should have two eyes and a mouth</li>
	<li>The mouth should be smiling, frowning, or be neutral</li>
</ol>

<em>Requirement 3</em>
<p>Enhance the application so that when it starts it:</p>
<ol>
	<li>Draws between 3 and 10 faces (utilizing a random number)</li>
	<li>Randomly determines each faces’ characteristics including location, size, and emotion (smile, frown, or neutral)</li>
	<li>Retains original face characteristics when the window is resized</li>
	<li>Uses reasonable and visually appealing ranges for all random numbers</li>
</ol>

<em>Requirement 4</em>
<p>Test and refactor the application so that it implements all appropriate Coding Standards <NavLink to='/activity/coding-standards'>[link]</NavLink></p>
</div> )

}