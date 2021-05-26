
import React from 'react';

import ReactPlayer from 'react-player'
import { programmingTogetherHelloWorldPython } from './../Panopto'

export const HelloWorldPython = () => { return HelloWorld(PythonProperties) }
export const HelloWorldJava = () => { return HelloWorld(JavaProperties) }
export const HelloWorldGo = () => { return HelloWorld(GoProperties) }
export const HelloWorldWeb = () => { return HelloWorld(WebProperties) }

const PythonProperties = {
	'language': 'Python',
	'prerequisites': 'Python (v3), VS Code, and Terminal',
	'tutorial': 'https://botb.blob.core.windows.net/nvm4zqwm/s44aopq9-hello-world.mp4'
}

const JavaProperties = {
	'language': 'Java',
	'prerequisites': 'Java, VS Code, and Terminal',
	'tutorial': null
}

const GoProperties = {
	'language': 'Go',
	'prerequisites': 'Go, VS Code, and Terminal',
	'tutorial': null
}

const WebProperties = {
	'language': 'HTML, GitHub, and Azure based',
	'prerequisites': 'GitHub, Microsoft Azure, VS Code, and Terminal',
	'tutorial': 'https://lewiseducation.blob.core.windows.net/configuration/hello-world-html-github-and-azure.mp4'
}

const Tutorial = (app) => {
	if (app === WebProperties) {
		return ( <div>
			Be sure to follow along with the video tutorial below!
			<ReactPlayer url={app.tutorial} controls={true} width={1024} height={576} />
		</div> ) 
	} 
	else if (app === PythonProperties) {
		return ( <div>
			Be sure to follow along with the video tutorial below!
			{programmingTogetherHelloWorldPython()}
		</div> )
	}
	else return null
}

const HelloWorld = (app) => {
	return (
	
<div>
<h4>Hello World with {app.language}</h4>
<h5>Summary: Create a {app.language} application that prints a special version of “Hello World” that 
includes your name in possessive form with a curly apostrophe followed by “Hello World” to the terminal</h5>
<h5>Prerequisites: {app.prerequisites}</h5>
			
<p>Instructions: Complete Hello World using {app.language} some special formatting. Specifically, we are going to add 
our preferred first name followed by our last name in possessive form along with a curly apostrophe (“ ’ ”). For 
example, my hello world output would be “Eric Pogue’s Hello World” including the curly apostrophe.</p>

<p>Why do we need to utilize a curly apostrophe? Well, it turns out that curly quotes and curly apostrophes should always
be utilized in written text. The following article from Practical Typography does a nice job of explaining the 
rational <a href='https://practicaltypography.com/straight-and-curly-quotes.html' target='_blank' rel='noopener noreferrer'>[link]</a>.
Equally important, becoming comfortable with utilizing curly quotes and curly apostrophes is a good starting point for 
understanding how to utilize special characters and eventually multiple languages in software applications.</p>

<p>As in all tutorials, you should follow along and complete the steps yourself. As you go through the tutorial, make 
the resulting application uniquely your own by adding standard comments at the top application (i.e. your name, class, 
etc.), changing the names of variables, and adding small features. Finally, be sure to save your work as you will often 
be asked to submit it as part of an assignment.</p>

{Tutorial(app)}
</div> )
}