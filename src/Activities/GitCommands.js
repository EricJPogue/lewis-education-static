import React from 'react';

export const GitCommands = () => {
	return (

<div>
<br />
<h4>Git Commands and Patterns</h4>
<h5>Summary: Understand and utilize common Git commands and patterns including branching.</h5>
<h5>Prerequisites: Git</h5>

<p>Configuration management is one of the most important and underemphasized aspects of computer science and software
engineering. Git is a rich and powerful source code control and configuration management tool. Let's start by focusing 
on some basic Git commands including:</p>
<ul style={{listStyleType:'square'}}>
	<li>git clone</li>
	<li>git pull</li>
	<li>git add</li>
	<li>git commit</li>
	<li>git commit -a -m “Add and update files.”</li>
	<li>git push</li>
	<li>git branch</li>
	<li>get checkout</li>
	<li>git merge</li>
	<li>git stash</li>
</ul>

<p>There is a common pattern of Git commands often utilized when developing complex software. The pattern includes the 
following branching commands:</p>
<ul style={{listStyleType:'square'}}>
	<li>git clone OR git pull</li>
	<li>git branch f-0x</li>
	<li>git checkout f-0x</li>
	<li>git add .</li>
	<li>git commit -m “Implement f-0x.”</li>
	<li>git checkout master</li>
	<li>git merge f-0x</li>
	<li>git push</li>
</ul>

<p>Below is a Git and GitHub reference provided by GitHub:</p>
<ul style={{listStyleType:'square'}}>
	<li>GitHub Git Cheat Sheet <a href='https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf' target='blank' rel='noopener noreferrer'>[link]</a></li>
</ul>
</div>

	);
}

