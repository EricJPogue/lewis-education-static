import React from 'react'
import { NavLink } from 'react-router-dom'

import { makeInternalURL } from './ActivityRouter'

export const PYTHON_ADD_COMMIT_PUSH_NAME = 'Add, commit, and push with Python'
export const PYTHON_ADD_COMMIT_PUSH_ROUTE = 'add-commit-push'
export const pythonAddCommitPushLink = () => {return (<NavLink to={makeInternalURL(PYTHON_ADD_COMMIT_PUSH_ROUTE)}>{PYTHON_ADD_COMMIT_PUSH_NAME}</NavLink>)}
export const pythonAddCommitPush = () => {
	return ( <div>

<h4>{PYTHON_ADD_COMMIT_PUSH_NAME}</h4>
<h5>Summary: Use Python and Aliases to automate the often tedious task of moving to a project directory and 
using Git to add, commit, and push source files from the command line.</h5>
<h5>Prerequisites: Python, VS Code, Terminal, and the Python Debugger (optional)</h5>

<em>Requirement 1</em>
<p>Create an application that:</p>
<ol>
	<li>Is implemented in a single Python (.py) file name “add-commit-push.py”</li>
	<li>Successfully executes from the command line by typing “python add-commit-push.py”</li>
	<li>Accepts one optional user input of “-m MESSAGE” where MESSAGE is the user’s commit message</li>
</ol>

<em>Requirement 2</em>
<p>Be sure that application also:</p>
<ol>
	<li>Prints “git status:” and the results of executing “git status” on the next line</li>
	<li>Prints the queued add, commit, and push commands and requires the user to confirm with “y” to execute them</li>
	<li>Prints, executes, and displays the results of each command to the command line</li>
</ol>

<em>Requirement 3</em>
<p>Enhance the application so that it:</p>
<ol>
	<li>Implements a Windows Powershell or MacOS Terminal Alias of “g5” to move to your “sprint-5” folder</li>
	<li>Implements an Alias of “acp” to execute your “add-commit-push.py” Python application from any directory</li>
	<li>Include a copy of these Aliases in your README.MD file</li>
</ol>

<em>Requirement 4</em>
<p>Finally test and refactor the application so that it:</p>
<ol>
	<li>Implements and test a “-f” [force] command line flag that skips the confirmation</li>
	<li>Create a single function that prints the command, skips a line, and then prints the results of executing that command</li>
</ol>

</div> )
}