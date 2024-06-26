import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeInternalURL } from './ActivityRouter';

const NAME = 'OvalDraw Plus'
export const OVAL_DRAW_PLUS_JAVA_ROUTE = 'ovaldraw-plus-java'
export const ovalDrawPlusJavaLink = () => {return (<NavLink to={makeInternalURL(OVAL_DRAW_PLUS_JAVA_ROUTE)}>{NAME}</NavLink>)}

export const ovalDrawPlusJava = () => { 
	return ( <div>

<h4>OvalDraw Plus</h4>
<h5>Summary: Create a graphical application with Java that that draws an oval</h5>
<h5>Prerequisites: Java, VS Code, and Terminal</h5>

<p>Create a graphical Java application that runs on Microsoft Windows and MacOS that draws an oval 
centered in the main application window when the programming starts. The oval should automatically resize and 
reposition itself when the window is resized.</p>

<p>In this activity you will start with our OvalDraw application in our sample code, review the code, and then make 
incremental improvements to the application. Be sure to make the resulting application uniquely your own by adding 
standard comments at the top application (i.e. your name, class, etc.), changing the names of variables, and adding 
small features. Finally, be sure to save your work as you will often be asked to submit it as part of an assignment.</p>

<p>Be sure to review the example OvalDraw project in the Java section of our example code repository. </p>

<em>Requirement 1</em>
<p>Create an application that:</p>
<ol>
	<li>Is implemented in a single Java (.java) file named “OvalDrawPlus.java”</li>
	<li>Successfully compiles with “javac *.java" and successfully executes with “java OvalDrawPlus”</li>
	<li>Has a simple yet an aesthetically pleasing user interface</li>
</ol>

<em>Requirement 2</em>
<p>Be sure that the application also:</p>
<ol>
	<li>Opens a resizable main window with an initial height of 500 and a width of 400</li>
	<li>Positions the upper left corner of the main window at 250 units from the left and 150 units from the top of the 
		screen</li>
	<li>Prints “Starting OvalDrawPlus...” in the terminal window when the application starts</li>
</ol>

<em>Requirement 3</em>
<p>Enhance the application so that it:</p>
<ol>
	<li>Draws an oval with a filled color other than red, blue, or black when the application starts</li>
	<li>Centers the oval so that it touches each edge of the window</li>
	<li>Resizes the oval when the application window is resized</li>
</ol>

<em>Requirement 4</em>
<p>Finally enhance the application so that it:</p>
<ol>
	<li>Draws a dark blue rectangle directly behind the oval</li>
	<li>Utilizes constants at the top of the file to define the rectangle color</li>
	<li>Prints “Closing OvalDrawPlus...” in the terminal window when the application is exited</li>
</ol>

	</div> )
}