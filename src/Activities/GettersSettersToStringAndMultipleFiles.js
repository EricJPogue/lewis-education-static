
import React from 'react';

export const GettersSettersToStringAndMultipleFilesJava = () => { return GettersSettersToStringAndMultipleFiles(JavaProperties) }

const JavaProperties = {
	'language': 'Java',
	'prerequisites': 'Java, VS Code, and Terminal',
	'tutorial': null
}

const Tutorial = (app) => {
	if (app.tutorial == null) {
		return null
	} else {
		return ( 
			<div>
			Be sure to follow along with the video tutorial below!
			{programmingTogetherHelloWorldPython()}
			</div>
		)
	}
}

const GettersSettersToStringAndMultipleFiles = (app) => {
	return (
	
<div>
<h4>Getters, Setters, toString, Multiple Files with {app.language} oh my!</h4>
<h5>Summary: Create a {app.language} application that uses getters and setters, that implements toString(), and utilizes 
multiple files</h5>
<h5>Prerequisites: {app.prerequisites}</h5>
			
<p>Instructions: Starting with Hello World {app.language} add standard getters and setters. Once those are in place, 
implement toString(). Finally, refactor the code so that it utilizes a separate file for each class.</p>

{Tutorial(app)}

</div> )
}