
import React from 'react';
import { NavLink } from 'react-router-dom';

import PythonTurtleDrawScreenShot from './PythonTurtleDrawScreenShot.png';

export const PythonTurtleDraw = () => {
	return (
	
<div>

<br />
<h4>TurtleDraw</h4>
<h5>Summary: Create a Python application that will read from a file and draw graphical lines and shapes.</h5>
<h5>Prerequisites: Python (v3), VS Code, Terminal, and the Python Debugger (optional) plus</h5>
<ul style={{listStyleType:'square'}}>
	<li>“Hello World with Python” <NavLink to='/activity/hello-world-python'>[link]</NavLink></li>
	<li>“Numbering Systems with Python” <NavLink to='/activity/numbering-systems-python'>[link]</NavLink></li>
</ul>
			
<p>In this assignment you will develop and test a python application that reads data from a text file and then based on 
the data draws graphical lines and shapes.</p>

<p>Your program will read a data text file and produce a drawing. When the program reads "stop" on a line, it will 
create a new group of connected segments. Otherwise, it will continue the connected group by drawing a line to the next 
point it has read. It will change colors for each line and point as it reads the new colors from the file.</p> 

<em>Requirement 1</em>
<p>Create a Python application that:</p>
<ol>
	<li>Is implemented in a single Python3 (.py) file name “TurtleDraw_xx.py” where “xx” are your initials in lower case</li>
	<li>Successfully executes from the command line by typing “python3 TurtleDraw_xx.py” </li>
	<li>Opens a window of dimension 450x450</li>
	<li>Sets the turtle to run at maximum speed</li>
</ol>

<em>Requirement 2</em>
<p>Be sure that application also:</p>
<ol>
	<li>Asks the user for the name of the input file</li>
	<li>Opens the input file</li>
	<li>Reads the file line by line using a for loop, stripping white space from each line</li>
	<li>Splits each line into its component pieces</li>
</ol>

<em>Requirement 3</em>
<p>Enhance the application so that it:</p>
<ol>
	<li>Moves to the first point without drawing a line from the origin to it</li>
	<li>Detects when a line says “stop” and lifts the pen accordingly</li>
	<li>For non-stop lines, it changes the color to the correct one</li>
	<li>Moves to the correct (x,y) location of the next point</li>
</ol>

<em>Requirement 4</em>
<p>Finally test and refactor the application so that it:</p>
<ol>
	<li>Calculates the distance between each connected point, omitting the disconnected ones, and sums them onto a total</li>
	<li>Prints the total distance toward the bottom right of the screen</li>
	<li>Closes the input file</li>
	<li>Waits for the user to press enter before closing the window</li>
</ol>
<br/>
<h5>Data and example</h5>
<p>Below is the data for the text file the application should read. </p>
<pre>{`green 36 29
green -49 128
green -16 36
stop
blue 54 71
black -126 15
black 180 177
black -57 -82
stop
black -89 -50
green -155 61
red -78 -187
blue 72 161
stop
green -160 -29
red -103 192
red -182 162
red -15 145
stop
red 13 -97
stop
black 168 -197
green 48 1
blue 50 148
green 102 -175
black 133 -115
black 52 -99
stop
red 130 136
blue 39 -191
green -58 -159
stop
green 53 139
green 6 175
green -138 82
stop
blue 87 33
stop
green 144 71
black -57 72
stop
black -22 61
blue 58 164
stop
red -45 26
blue 107 110
`}</pre>

Utilizing the data above, the output should look exactly like the following. 
<img src={PythonTurtleDrawScreenShot} alt='Eric Pogue' width= '512' />

<p>Notice how the program also computes and prints the total distance marked. Using the formula for the distance 
between two points, the program computes the distance between every two points it draws a line between, sums these 
distances up, and prints the result on the drawing.</p>

</div> )

}