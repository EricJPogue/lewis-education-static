import React from 'react'

import { makeNavigationLink } from './ActivityLink'
import { HelloWorldWebPart1Link } from './HelloWorld'
import { GitHub, externalLink } from '../DataAndAPIs/Links'

const renderIntroductionsWebsite = () => {
	const introductionsWebsiteTemplate = () => { return externalLink('Introductions Website Template', 'https://github.com/EricPogueExampleCode-Web/introductions-2024')}
	return ( <div><br />
		<h3>{introductionsWebsite.name}</h3>
		<h5>Summary</h5>
		<p>Create an Introductions Website for yourself and host the website using GitHub Pages</p>
		<h5>Prerequisites</h5>
		<p>In order to complete this activity you will need a {GitHub()} account and an interest in HyperText Markup 
		Language (HTML) and Cascading Style Sheets (CSS).</p>
					
		<h5>Instruction & Requirements</h5>
		<p>Complete the following steps to create, update, and host your own introductions website.</p>
		<em>Requirements</em>
		<ol type='n'>
			<li>Sign into your {GitHub()} account</li>
			<li>Complete or review {HelloWorldWebPart1Link()}</li>
			<li>Follow the instructions at {introductionsWebsiteTemplate()} to create an Introductions Website using GitHub Pages</li>
			<li>Update your Introductions Website to include your information and responses</li>
			<li>Fix the “Fun Fact” section to match the CSS styling of the other sections</li>
			<li>Add an unstyled “Last Updated on dd/mm/yyyy” line at the bottom of the page that includes the date the page was last updated</li>
		</ol>
		<h5>Next Steps</h5>
		<p>Do you know what would happen if you added a Theme? Want to give it a try next time you create a website?</p>
	</div> )
}

export const introductionsWebsite = { 'name':'Building Your First Website with GitHub Pages', 'route':'introductions-website', 'render': renderIntroductionsWebsite }
export const introductionsWebsiteLink = () => { return makeNavigationLink(introductionsWebsite) }
