
import React from 'react'
import { NavLink } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { makeInternalURL } from './ActivityRouter'

const NUMBERING_SYSTEMS_NAME = 'Numbering Systems with Python'
export const NUMBERING_SYSTEMS_ROUTE = 'numbering-systems-python'
export const numberingSystemsLink = () => {return (<NavLink to={makeInternalURL(NUMBERING_SYSTEMS_ROUTE)}>{NUMBERING_SYSTEMS_NAME}</NavLink>)}
export const numberingSystems = () => { return PythonNumberingSystems() }

const PythonNumberingSystems = () => {
	return (
	
<div>

<br />
<h4>{NUMBERING_SYSTEMS_NAME}</h4>
<h5>Summary: Follow the video tutorial to create a Python application that converts numbers from different bases</h5>
<h5>Prerequisites: Python (v3), VS Code, Terminal, and the Python Debugger (optional)</h5>

<p>Instructions: Complete this tutorial utilizing the following video as a guide. You should complete the steps 
yourself as you go through the tutorial, make the resulting application uniquely your own by adding standard 
comments (i.e. your name, class, etc.), changing the names of variables, and adding small features.</p>
<p>Be sure to save your work so that you can submit it as part of an assignment.</p>

<ReactPlayer url='https://botb.blob.core.windows.net/nvm4zqwm/s44aopq9-numbering-systems-with-python.mp4' controls={true} width={1024} height={576} />
<br />
<p>Additional references:</p>
<ul style={{ listStyleType:'square' }}>
	<li>Source code for tutorial <a href='https://botb.blob.core.windows.net/nvm4zqwm/s44aopq9-numbering-systems-with-python.zip'>[link]</a></li>
	<li>Getting Started with Python in VS Code tutorial <a href='https://code.visualstudio.com/docs/python/python-tutorial'
		target='_blank' rel='noopener noreferrer'>[link]</a></li> 
	<li>Configure and Run the Python Debugger <a href='https://code.visualstudio.com/docs/python/python-tutorial#_configure-and-run-the-debugger'
		target='_blank' rel='noopener noreferrer'>[link]</a></li> 
</ul>

</div> )

}