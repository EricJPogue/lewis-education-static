import React from 'react'
import { NavLink } from 'react-router-dom'

import { scrumIntro, learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing } from './AL00000Sprint00'
import { matchMakerGoLink } from '../Activities/Matchmaker'

export const al36000Sprint01 = (syllabusURL) => {
	const sprint = 1
	return ( <div>
		<h5>Sprint 1: Getting Started, Programming Languages, Object-Oriented Programming, Go, and Matchmaker</h5>
		<p><em>Welcome to Applied Programming Languages!</em> By this point in your software development journey I'm sure you 
		are confident in writing moderately complicated software programs. You’ve learned about structured programming 
		techniques like sequence, selection, and repetition. You've learned how to break complicated programs down into more 
		manageable pieces by using functions, files, and modules. You even understand how Object-Oriented Programming can help 
		you develop more complex applications by utilizing encapsulation, inheritance, and polymorphism.</p>

		<p>That’s wonderful. However, is it possible that some things in software development are not as clear cut as we have 
		made them out to be? Could it be that some of the things we learned in Object-Oriented Programming added unnecessary 
		complexity? Could it be that the world of software development has changed <a href='https://youtu.be/4L_3JrRSMQ4?t=30' target='_blank' rel='noopener noreferrer'>[link]</a>?
		Could it be that Scrum development techniques, iterative product releases, new web development technologies,
		and the ever increasing power of multithreaded programming have elevated testing and concurrency to a level that makes 
		new software development languages justifiable? These are just some of the topics that we will explore in our Applied 
		Programming Languages class.</p>

		{scrumIntro()}

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Effectively participate in a blended classroom environment and as part of a Scrum team</li>
			<li>Compare and contrast key software development language and environment features</li>
			<li>Explain why agile development and scrum have impacted our choice of programming techniques and languages</li>
			<li>Explain why the prevalence of multithreaded programming has impacted our choice of techniques and languages</li>
			<li>Understand the Go language and how it compares with other languages</li>
		</ul>

		{list36000Sprint01(sprint)}

		{closing(sprint)}
	</div> )
}

export const list36000Sprint01 = (sprint) => {
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, matchMakerGoLink())}
			<li><em>Complete the Introduction assignment by making your post and responding to at least two of your classmates</em></li>

			<li>Review Object-Oriented Concepts <NavLink to='/activity-oop/concepts-and-practices'>[video]</NavLink></li>
			<li>Review O’Reilly Books <a href='https://www.oreilly.com' target='_blank' rel='noopener noreferrer'>[link]</a>and read “Introducing Go” chapters 1 though 6<a href='https://learning.oreilly.com/library/view/introducing-go/9781491941997/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
			<li>Add a representative photo of yourself to your Blackboard and Zoom profiles<NavLink to='/activity/photo-to-blackboard'>[video]</NavLink></li>
			
			{initialPost(sprint)}

			<li>Complete “Tools of the Trade” including Go <NavLink to='/activity/tools'>[link]</NavLink><sup> ~2 hours</sup></li>
			<li>Complete “Hello World with Python” <NavLink to='/activity/hello-world-python'>[link]</NavLink></li>
			<li>Complete “Hello World with Go” <NavLink to='/activity/hello-world-go'>[link]</NavLink></li>

			{standardActivitiesClosing(sprint, matchMakerGoLink(), '6 hours')}
		</ol>
	</div> )
}


// BugBug: There is no Programming Together playlist for this class so the closing link does not work. 