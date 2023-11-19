import React from 'react'
import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing } from './AL00000Sprint00'
import { oreillyPlaylistWeb, fullStackJavaScriptW3C, externalLink, internalLink, programmingTogether } from '../DataAndAPIs/Links'
import { finalProjectDistributedLink } from '../Activities/FinalProject';

export const al24700Sprint07 = () => {
	let sprint = 7
	return ( <div>
		<h5>Sprint 7: Class Project and Modern JavaScript Frameworks</h5>

		<p>Welcome to sprint 7. Sprint 7 puts you in the driver’s seat. It is time for us to work on our Class Projects. 
		We each have <em>three weeks and 20 hours</em> to deliver something uniquely your own. There is time to build something 
		that makes you proud. The only requirement is that you demonstrate what you have learned in class and demonstrate 
		that you are able to extend that learning to something new.</p>
		<p>You have the	power.</p>

		<h5> 
		<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
		“With great power there must also come great responsibility”<br /></div>
		<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
		-Peter Parker (aka Spider-Man)</div>
		</h5>
		<br />

		<p><i>What will you do with all that power... and responsibility?</i></p>
		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Deliver your Class Project while effectively utilizing a {fullStackJavaScriptW3C()} architecture to develop your class project</li>
			<li>Understand modern JavaScript client frameworks including React, Vue, and Angular</li>
		</ul>  
		{list24700Sprint07(sprint)}
		{closing(sprint)}
	</div> )
}

export const list24700Sprint07 = (sprint) => {
	const angularReactVue = () => { return externalLink('Angular vs React vs Vue.js: Which is the Best Choice?', 'https://javascript.plainenglish.io/angular-vs-react-vs-vue-js-which-is-the-best-choice-for-2022-5ef83f2257ab') }
	const reactJSOrg = () => { return externalLink('React', 'https://reactjs.org/') }
	const reactW3C = () => { return externalLink('React W3C', 'https://www.w3schools.com/REACT/') }
	const hostingReactOnAzure = () => { return internalLink('React Website Creation with Microsoft Azure', '/activity-config/react-on-azure') }
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, finalProjectDistributedLink(), oreillyPlaylistWeb())}
			<li>Read {angularReactVue()}</li>
			<li>Review {reactJSOrg()} and the {reactW3C()} tutorial</li>
	
			{initialPost(sprint)}
			<li>Review the {hostingReactOnAzure()} programming together tutorial</li>
			<li>Review the MovieCRUDLite {programmingTogether()} tutorial</li>
			{standardActivitiesClosing(sprint, finalProjectDistributedLink(), '20 hours')}
		</ol>
	</div> )
}

// Certified for SU22 (06/17/2022)
// Todo: Separate Lab 7 question 1 into two questions. 



