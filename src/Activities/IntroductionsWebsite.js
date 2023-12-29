import React from 'react'

import { makeNavigationLink } from './ActivityLink'
import { HelloWorldWebPart1Link } from './HelloWorld'
import { GitHub, externalLink } from '../DataAndAPIs/Links'

const renderIntroductionsWebsite = () => {
	const introductionsWebsiteTemplate = () => { return externalLink('Introductions Website Template', 'https://github.com/EricPogueExampleCode-Web/introductions-2024')}
	return ( <div><br />
		<h4>{introductionsWebsite.name}</h4>
		<h5>Summary: Create an Introductions Website for yourself and host the website using GitHub Pages</h5>
		<h5>Prerequisites: A {GitHub()} account and an interest in HTML and CSS</h5>
					
		<p>Complete the following activities to create and host your own introductions website:</p>
		<ol type="n">
			<li>Sign into your {GitHub()} account</li>
			<li>Complete or review {HelloWorldWebPart1Link()}</li>
			<li>Follow the instructions at {introductionsWebsiteTemplate()} to create an Introductions Website using GitHub Pages</li>
			<li>Update your Introductions Website to include your information and responses</li>
			<li>Fix the “Fun Fact” section to match the CSS styling of the other sections</li>
			<li>Add an unstyled “Last Updated on dd/mm/yyyy” line at the bottom of the page that includes the date the page was last updated</li>
		</ol>
		<h5>Next Steps:</h5>
		<p>Do you know what would happen if you added a Theme? Want to give it a try next time you create a website?</p>
	</div> )
}

export const introductionsWebsite = { 'name':'Building Your First Website with GitHub Pages', 'route':'introductions-website', 'render': renderIntroductionsWebsite }
export const introductionsWebsiteLink = () => { return makeNavigationLink(introductionsWebsite) }
