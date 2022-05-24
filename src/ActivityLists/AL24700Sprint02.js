import React from 'react'
import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, 
	closing, estimated } from './AL00000Sprint00'

import { oreillyPlaylistWeb, continuousIntegration, CSSW3C, internalLink, externalLink } from '../Links'
import { webResumeLink } from '../Activities/WebResume'
import { azureWebsiteLink } from '../Activities/AzureWebsite'
import { assignmentPortfolioLink } from '../Activities/WebAssignmentPortfolio'

const sebestaChapter3Lecture = () => { return internalLink('lecture', '/activity/sebesta-chapter-03')}
export const al24700Sprint02 = () => {
	const sprint = 2
	return ( <div>
		<h5>Sprint 2: Cascading Style Sheets, Web Servers, Cloud Hosting, and Software Licenses</h5>

		<p>Welcome to sprint 2 of Web and Distributed Programming. In sprint 2 we are going to continue exploring key
		Web technologies including web servers and Cascading Style Sheets (CSS). We will also be implementing a key 
		software development technique call “Continuous Integration / Continuous Delivery” or CI/CD for short.</p>

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Develop Web applications utilizing Continuous Integration / Continuous Delivery (CI/CD)</li>
			<li>Effectively utilize a web servers locally and in a cloud environment</li>
			<li>Understand Cascading Style Sheets to enhance web applications</li>
			<li>Understand and correctly utilize software licenses</li>
		</ul>  

		{list24700Sprint02(sprint)}
		{closing(sprint)}
	</div> )
}

export const list24700Sprint02 = (sprint) => {
	const typesOfSoftwareLicenses = () => { return externalLink('Types of Software Licenses', 'https://www.synopsys.com/blogs/software-security/5-types-of-software-licenses-you-need-to-understand/') }
	const choosingASoftwareLicense = () => { return externalLink('Choosing A Software License', 'https://choosealicense.com/') }
	const addGitHubSoftwareLicense = () => { return externalLink('Adding a Software License', 'https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository') }
	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, webResumeLink())}
			<li>Read {continuousIntegration()}</li>
			<li>Implement CI/CD with {azureWebsiteLink()} and then enhance the site by completing {assignmentPortfolioLink()}{estimated('4 hours')}</li>
			{initialPost(sprint)}

			<li>Scan Sebesta chapter 3 on Cascading Style Sheets (CSS) and review the associated {sebestaChapter3Lecture()}</li>
			<li>Complete {CSSW3C()} Tutorial from W3C{estimated('2 hours')}</li>
			<li>Within {oreillyPlaylistWeb()} read “Learning Web Development” Chapter 3 on CSS while implementing Amazeriffic{estimated('2 hours')}</li>
			<li>Review {typesOfSoftwareLicenses()} and {choosingASoftwareLicense()}</li>
			<li>Follow the instructions in {addGitHubSoftwareLicense()} to add an MIT license to each of your repositories</li>

			{standardActivitiesClosing(sprint, webResumeLink(), '6 hours')}
		</ol>
	</div> )
}

// Certified for SU22 (05/13/2022)

// Todo: Add request for Web Resume direct link to Lab 2. 
// Todo: Consider updating lectures to be topic specific (instead of Sebesta chapter specific) and removing Sebesta 
// for the fall session. 
// Todo: Figure out why when a link is clicked (i.e. Syllabus) the page scrolls to the same position on the page as
//     the current page is on. This is confusing because you would assume clicking on the link takes you to the top of
//     the destination page. 
