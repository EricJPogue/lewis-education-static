import React from 'react'

import { makeNavigationLink } from './ActivityLink'

import { reactTicTacToeLeaderBoardMongoDBLink } from './ReactTicTacToeLeaderBoard'
import { externalLink } from '../DataAndAPIs/Links'

const renderMERNaMa = () => {
	const syllabusIntro = () => { return externalLink('Introduction to Computer Science', 'https://www.lewis.education/?cpsc=sp24-cpsc-20000-002#/syllabus')}
	const syllabusSoftwareEngineering = () => { return externalLink('Software Engineering', 'https://www.lewis.education/?cpsc=sp24-cpsc-44000-001#/syllabus')}
	const lewisEducationGitHub = () => { return externalLink('Lewis.Eduction GitHub repository', 'https://github.com/EricJPogue/lewis-education-static')}

	return ( <div><br />
		<h3>{MERNaMa.name}</h3>
		<h5>Summary</h5>
		<p>{MERNaMa.name} is a Syllabus creation application created with MERNa application framework. 
		We are going to create a MERNa application that provides a web service interface for Instructor, Class, 
		and ClassSection information. That information will be utilized withing a React client to generate a Syllabus
		for the class</p>
		<h5>Prerequisites</h5>
		<p>Although not required, completing {reactTicTacToeLeaderBoardMongoDBLink()} would be beneficial</p>
		<h5>Requirements</h5>

		<em>Requirement 1</em>
		<p>Review the current hard coded syllabi and related source code by:</p>
		<ol type='n'>
			<li>Reviewing the existing syllabi for {syllabusIntro()} and {syllabusSoftwareEngineering()}, </li>
			<li>Reviewing the “Syllabus.js” code in “src” folder of the {lewisEducationGitHub()}</li>
			<li>Reviewing the Instructor, Class, and ClassSection code in the “src/DataAndAPIs” folder</li>
			<li>Decide which (if any) of the reviewed code you want to utilize</li>
		</ol>

		<em>Requirement 2</em>
		<p>Create an application that:</p>
		<ol type='n'>
			<li>Utilizes GitHub, Azure, and MongoDB Atlas to host a MongoDB, Express, React, and Node.js application (MERNa)</li>
			<li>Utilizes similar structure and functionality to {reactTicTacToeLeaderBoardMongoDBLink()}</li>
			<li>Can be developed and tested locally before being deployed to GitHub, Azure, and MongoDB Atlas</li>
			<li>The application should be names “MENRa Ma”</li>
		</ol>

		<em>Requirement 3</em>
		<p>Enhance your application so that it also:</p>
		<ol type='n'>
			<li>Implements an Instructor web service API</li>
			<li>Implements a Class API</li>
			<li>Implements a ClassSection API</li>
			<li>Implements a composite ClassSectionClassAndInstructor API</li>
		</ol>

		<em>Requirement 4</em>
		<p>Continue to enhance your application so that it also:</p>
		<ol type='n'>
			<li>Utilizes a React based client to display a Syllabus generated from the ClassSectionClassAndInstructor API</li>
			<li>Stores all Instructor, Class, and ClassSection data in MongoDB Atlas</li>
		</ol>

	</div> )
}
 
export const MERNaMa = { 'name':'MERNa Ma', 'route':'merna-ma', 'render':renderMERNaMa }
export const MernaMaLink = () => { return makeNavigationLink(MERNaMa) }