import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing } from './AL00000Sprint00'
import { ovalDrawPlusJavaLink } from '../Activities/OvalDrawPlus';
import { oreillyPlaylistOOP, umlClassDiagrams, gitCommands, successfulProgrammer, internalLink } from '../DataAndAPIs/Links';

const shapesPart1 = () => { return internalLink('Shapes - Part 1', '/activity-oop/java-shapes-step1') }
const shapesPart2 = () => { return internalLink('Shapes - Part 2', '/activity-oop/java-shapes-step2') }
const oopPatterns = () => { return internalLink('Object-Oriented Programming Patterns', '/activity-oop/patterns') }
const oopPrinciples = () => { return internalLink('Object-Oriented Programming Principles', '/activity-oop/principles') }

export const al24500Sprint02 = () => {
	const sprint = 2
	return ( <div>
		<h5>Sprint 2: Patterns, Principles, UML, and more Java Programming</h5>

		<p><em>Welcome to sprint 2.</em> We covered a lot of material in sprint 1. We even did some programming by completing
		Matchmaker with Java. How did Matchmaker go? Keep your Java compilers out for this sprint. We are going to start 
		practicing some of the concepts we learned while we continue to learn more about object-oriented programming (OOP) as 
		we focus on OOP Patterns and Principles.</p>

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Identify, define, and discuss object-oriented Patterns and Principles</li>
			<li>Create, modify, compile, and execute OOP based Java applications</li>
			<li>Manage and submit source code utilizing the GitHub and the Git command line client</li>
			<li>Utilize UML and JSON to represent program data</li>
		</ul>

		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, ovalDrawPlusJavaLink())}
			<li>Review basic {gitCommands()}</li>
			<li>Complete {oopPatterns()}</li>
			<li>Within {oreillyPlaylistOOP()} read “Learning Java” chapters 4 and 5</li>
			<li>Complete {shapesPart1()}</li>
			{initialPost(sprint)}

			<li>Complete {successfulProgrammer()}</li>
			<li>Complete {shapesPart2()}</li>
			<li>Complete {oopPrinciples()}</li>
			<li>Review {umlClassDiagrams()}</li>
			{standardActivitiesClosing(sprint, ovalDrawPlusJavaLink(), '4 hours')}
		</ol> 
		{closing(sprint)}
	</div> )
}

