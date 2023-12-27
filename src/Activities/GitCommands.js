import React from 'react';
import { NavLink } from 'react-router-dom';

// import { getClass } from '../DataAndAPIs/Classes'
import { getClassTitle } from '../DataAndAPIs/ClassSections';

import { Git, GitTutorial, GitHub } from '../DataAndAPIs/Links'

export const GetCommandsLink = () => {return (<NavLink to={internalLink}>{name}</NavLink>)}
const internalLink = '/activity/git-commands'
const name = 'Git Commands and Patterns'

export const GitCommands = () => {
	const mono = { fontFamily: 'monospace' }
	return (

<div>
<br />
<h4>{name}</h4>
<h5>Summary: Understand and utilize common Git commands and patterns including branching.</h5>
<h5>Prerequisites: Git and optionally GitHub</h5>

<p>Configuration management is one of the most important and underemphasized aspects of computer science and software
engineering. Git is a rich and powerful source code control and configuration management tool. Let's start by focusing 
on some basic Git commands including:</p>

<p>The first Git command that most of us learn is <span style={mono}>“git clone”</span> which allows us to make a 
complete local copy of a remote repository. For example, the command to make a copy of the example code 
for {getClassTitle()} is:</p>
<pre>{`git clone https://github.com/EricJPogue/cpsc-example-code.git`}</pre><br />

<p>When initially creating our own repositories, it is usually easiest to create the initial repository in GitHub and 
then clone it locally using the <span style={mono}>“git clone”</span> command. Once we have a local copy to work with,
the normal pattern is to create, update, and test code locally. Once the code is tested, we can update the remote GitHub 
repository with the following sequence of commands:</p>
<pre>{`git add -A
git commit -m "Update files."
git push`}</pre><br />

<p>Sometimes it is helpful to review the current status of the local repository and to pull down any changes that have 
been made to the remote repository by using following commands:</p>
<pre>{`git status
git pull
`}</pre><br />

<p>Common Git configuration commands include</p>
<pre>{`git config --global user.name "[[YOUR_FIRST_NAME YOUR_LAST_NAME]]"
git config --global user.email "[[YOUR_EMAIL_ADDRESS]]"
git config --global pull.rebase false
git config --global core.editor [[YOUR_FAVORITE_EDITOR]]
`}</pre><br />

<p>On professional development teams Git branching is often essential in order to allow us to <em>safely</em> work on 
multiple enhancements and fixes simultaneously. For example, if I was working on a fix for a defect with an ID of 
D1082, the sequence of Git commands might include:</p>
<pre>{`git pull
git branch "D1082" 
git checkout "D1082"
[[ Do Work... ]]
git add -A
git commit -m "Implement fix for defect D1082"
git checkout master
git merge "D1082"
git push

git branch -d "D1082" [[ Optional ]]
`}</pre><br />

<p>Additional Git and GitHub references:</p>
<ul style={{listStyleType:'square'}}>
	<li>{GitHub()} and the {Git()} command line source code management tool while reviewing the related {GitTutorial()}</li>
	<li>GitHub Git Cheat Sheet <a href='https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf' target='blank' rel='noopener noreferrer'>[link]</a></li>
	<li>“An Intro to Git and GitHub for Beginners” tutorial steps 1 though 3 from GitHub <a href='https://guides.github.com/activities/hello-world/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>“Git Handbook” <a href='https://guides.github.com/introduction/git-handbook/' target='_blank' rel='noopener noreferrer'>[link]</a> and 
		the “GitHub Git Cheat Sheet” <a href='https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf' target='_blank' rel='noopener noreferrer'>[link]</a></li> 
	<li>“An Intro to Git and GitHub for Beginners” tutorial from HubSpot <a href='https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners' target='_blank' rel='noopener noreferrer'>[link]</a></li>
</ul>

<br />
<p>Frequently Asked Questions:</p>
Question: How do I reinstall Git on MacOS?
<div>Consider the follow commands:</div>
<pre>{`xcode-select --print-path
sudo rm -r -f /Library/Developer/CommandLineTools
xcode-select --install
`}</pre>

</div> );
}

