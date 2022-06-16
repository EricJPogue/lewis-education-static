import React from 'react'

import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing } from './AL00000Sprint00'
import { oreillyPlaylistWeb, architecturePart1, fullStackJavaScriptW3C } from '../Links'
import { finalProjectDistributedLink } from '../Activities/FinalProject';

export const al24700Sprint07 = () => {
	let sprint = 7
	return ( <div>
		<h5>Sprint 7: Full Stack Final Project, Modern JavaScript Frameworks, and Application Architecture </h5>

		<p>Welcome to Sprint 7. The time has come for us to put what we have learned into action. This sprint we will be 
		focused on version 1 of our final project. We will spend our time implementing the initial version of our final 
		project with a {fullStackJavaScriptW3C()} architecture including an HTML, CSS, and JavaScript client application 
		running in the browser, a JavaScript based web server running in Node.js hosted in Microsoft Azure, and a MongoDB 
		database running in MongoDB Atlas.</p>

		<p>In addition to the practical experience of implementing version 1 of our final project in {fullStackJavaScriptW3C()},
		we want to develop an understanding of where Web development is heading by exploring modern JavaScript frameworks like
		React, Vue, and Angular. Finally, we want to begin our journey to understand where web application architecture and 
		practices fit into software application architecture.</p>

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Effectively utilize a {fullStackJavaScriptW3C()} architecture to develop web applications</li>
			<li>Understand modern JavaScript client frameworks including React, Vue, and Angular</li>
			<li>Begin to understand key application architecture concepts and how they relate to Web application architecture</li>
		</ul>  
		{list24700Sprint07(sprint)}
		{closing(sprint)}
	</div> )
}

const list24700Sprint07 = (sprint) => {
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, finalProjectDistributedLink(), oreillyPlaylistWeb())}
			{/* React plus */}
			{initialPost(sprint)}
			<li>Explore {architecturePart1()}</li>
			{standardActivitiesClosing(sprint, finalProjectDistributedLink(), '12 hours')}
		</ol>
	</div> )
}

// Todo:
// https://javascript.plainenglish.io/angular-vs-react-vs-vue-js-which-is-the-best-choice-for-2022-5ef83f2257ab
// https://reactjs.org/
// <li>Review the React tutorial from W3C <a href='https://www.w3schools.com/react/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
// Add books from Applied Programming languages and tutorial video


// Todo: Add back “Complete Lab Demo if you have not already” to standardActivitiesClosing() for non-online classes.



// Following Coding Standards are graded twice. Consider updating programming assignment so that it does not have 
//     coding standards as requirement 4.  
