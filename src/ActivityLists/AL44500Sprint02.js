import React from 'react'
import { NavLink } from 'react-router-dom'

import { externalLink } from '../DataAndAPIs/Links';
import { getModuleDescription } from '../DataAndAPIs/ClassSections';

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing } from './AL00000Sprint00'
import { codingStandardsValidatorLink } from '../Activities/CodingStandards';

export const al44500Sprint02 = () => {
	const sprint = 2
	return ( <div>
		<h5>Sprint {sprint}: {getModuleDescription(sprint-1)}</h5>
		<p><em>Welcome to sprint 2.</em> We covered a lot of material in sprint 1. We even did some programming by completing
		Matchmaker with Go. Keep your Go compilers out for this sprint. We will be enhancing our knowledge of interfaces and 
		packages while working to understand how Functional Programming Frameworks can be used similarly to how we would use 
		object-oriented Frameworks. </p>

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Compare and contrast object-oriented programming with functional programming</li>
			<li>Create, modify, compile, and execute Go applications using functional programming techniques</li>
			<li>Utilize moderately complex configuration management techniques to effectively work in small teams</li>
			<li>Utilize structs, interfaces, and packages to implement polymorphic and encapsulated programs</li>
		</ul>

		{list44500Sprint02(sprint)}
		{closing(sprint)}
	</div> )
}

export const list44500Sprint02 = (sprint) => {
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, codingStandardsValidatorLink())}
			<li>Read “Introducing Go” chapters 7 and 8 on Structs, Interfaces, and Packages</li>
			<li>Within O’Reilly Books perform a searches for Golang and ReactJS</li>
			{initialPost(sprint)}
			<li>Review {externalLink('Functional Programming vs Object-Oriented Programming', 'https://www.educba.com/functional-programming-vs-oop/')}</li>
			<li>Review <NavLink to='/activity-oop/patterns'>Object-Oriented Programming Patterns</NavLink></li>
			<li>Review  <NavLink to='/activity-oop/principles'>Object-Oriented Programming Principles</NavLink></li>

			{standardActivitiesClosing(sprint, codingStandardsValidatorLink(), '8 hours')}
		</ol>
	</div> )
}

// Certified for SP24 (01/24/2024)

/* Todo: Consider if there is a place for the following. 

	import { externalLink } from '../DataAndAPIs/Links'

	const galadrielAndChange = () => { return externalLink('Galadriel declared in LOTR', 'https://www.youtube.com/watch?v=BjJvOm94W5U')}

	<p>Is it possible that software development techniques are not as clear cut as we have made them out to be? 
	Could it be that the world has changed as {galadrielAndChange()}? That new agile development lifecycles and 
	multithreaded programming opportunities have given rise to new techniques including functional programming and
	new programming languages? Should we embrace or resist? Could it be that Scrum development techniques, iterative 
	product releases, new web development technologies, and the ever increasing power of multithreaded programming have 
	elevated testing and concurrency to a level that makes new software development languages justifiable?</p>
*/

