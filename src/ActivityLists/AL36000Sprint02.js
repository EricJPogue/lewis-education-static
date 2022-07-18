import React from 'react'
import { NavLink } from 'react-router-dom';

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing } from './AL00000Sprint00'
import { codingStandardsValidatorLink } from '../Activities/CodingStandards';

export const al36000Sprint02 = () => {
	const sprint = 2
	return ( <div>
		<h5>Sprint 2: Patterns, Principles, Interfaces, Packages, and Functional Programming, </h5>
		<p><em>Welcome to sprint 2.</em> We covered a lot of material in sprint 1. We even did some programming by completing
		Matchmaker with Go. Keep your Go compilers out for this sprint. We will be enhancing our knowledge of interfaces and 
		packages while working to understand the similarities and differences between object-oriented programming and functional
		programming.</p>

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Compare and contrast object-oriented programming with functional programming</li>
			<li>Create, modify, compile, and execute Go applications using functional programming techniques</li>
			<li>Utilize moderately complex configuration management techniques to effectively work in small teams</li>
			<li>Utilize structs, interfaces, and packages to implement polymorphic and encapsulated programs</li>
		</ul>

		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, codingStandardsValidatorLink())}
			<li>Review Object-Oriented Programming Patterns<NavLink to='/activity-oop/patterns'>[video]</NavLink></li>
			<li>Review Object-Oriented Programming Principles <NavLink to='/activity-oop/principles'>[video]</NavLink></li>
			<li>Read “Introducing Go” chapters 7 on Structs and Interfaces <a href='https://learning.oreilly.com/library/view/introducing-go/9781491941997/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
			<li>Read “Introducing Go” chapters 8 on Packages <a href='https://learning.oreilly.com/library/view/introducing-go/9781491941997/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
			<li>Complete the “Create a Go module” tutorial <a href='https://golang.org/doc/tutorial/create-module' target='_blank' rel='noopener noreferrer'>[link]</a></li>
			<li>Within O’Reilly Books <a href='https://www.oreilly.com' target='_blank' rel='noopener noreferrer'>[link]</a> 
				perform a searches for Golang, Git, and ReactJS</li>
			{initialPost(sprint)}

			{standardActivitiesClosing(sprint, codingStandardsValidatorLink(), '8 hours')}
		</ol>

		{closing(sprint)}
	</div> )
}

// Todo: Review https://www.educba.com/functional-programming-vs-oop/.