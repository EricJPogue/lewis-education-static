import React from 'react'
import { NavLink } from 'react-router-dom'

import { continuousIntegration, internalLink } from '../DataAndAPIs/Links'
import { makeInternalURL } from './ActivityRouter'

const NAME = 'Getting to Know Each Other'
export const GETTING_TO_KNOW_EACH_OTHER_ROUTE = 'getting-to-know-each-other'
export const gettingToKnowEachOtherLink = () => {return (<NavLink to={makeInternalURL(GETTING_TO_KNOW_EACH_OTHER_ROUTE)}>{NAME}</NavLink>)}
export const gettingToKnowEachOther = () => {
	const introductionsDiscussion = () => { return internalLink('Introduction Discussion', 'introductions-website')}
	return ( <div>
		<br />
		<h4>{NAME}</h4>
		<h5>Summary: Create an HTML page describing yourself and host it as a GitHub Pages web application</h5>
		<h5>Prerequisites: GitHub, Windows or MacOS, VS Code, FireFox, Chrome, HTML, and CSS</h5>
					
		<p>In this project you will create and host an HTML and CSS based web page about yourself. You will need to hand code this page 
		in VS Code so that you can fully understand the HTML and CSS that makes up a web page. You will also want to review 
		the {introductionsDiscussion()}	activity for more detail on how to create and host your web site.</p>

		<em>Requirement 1</em>
		<p>Create a web page using HTML and CSS that:</p>
		<ol>
			<li>Is hosted as GitHub Pages project website utilizing a public <em>GitHub repository named "me"</em></li>
			<li>Includes a heading section at the top of the page with your preferred and last name</li>
			<li>Includes a separate line with your Lewis email address as an HTML email link</li>
			<li>A separate line with your Discord information </li>
		</ol>

		<em>Requirement 2</em>
		<p>Enhance your web page by:</p>
		<ol>
			<li>Adding a representative head and shoulders photo in PNG format named <em>"me.png"</em> of yourself appropriately sized and centered</li>
			<li>Resizing the native version of your photo so that it is optimized for the web page</li>
			<li>Placing the photo so that appears centered and appropriately sized at the top of your page</li>
			<li>Including image alt text of your <em>preferred</em> name</li>
		</ol>

		<em>Requirement 3</em>
		<p>Enhance your web page so that it includes:</p>
		<ol>
			<li>A sub-heading labeled “Introduction” with a paragraph about yourself, your family, and your major/minor</li>
			<li>A sub-heading labeled “What I Hope to Learn in this Course” with a bulleted list of topics</li>
			<li>A sub-heading labeled “My Favorite Hobby / Activity” that includes: </li>
			<ul style={{listStyleType:'square'}}>
				<li>A list of at least two hobbies or activities</li>
				<li>Square list icons (like this list) for all list items</li>
				<li>An HTML link to an external web page that describes the activity or hobby in greater detail</li>	
			</ul>
			<li>A sub-heading labeled “Fun Fact” that includes something about you that is uniquely you</li>
		</ol>

		<em>Requirement 4</em>
		<p>Test and validate your web page:</p>
		<ol>
			<li>Refactor your code so that all unordered lists use square icons</li>
			<li>Throughout the development process you should validate your HTML utilizing the W3C HTML validator</li>
			<li>Review and refactor your code so that all quotes and apostrophes are “curly”</li>
			<li>Fully test your page by viewing and testing it in both the FireFox and Chrome browsers</li>
		</ol>
	</div> )
}

const GETTING_TO_KNOW_EACH_OTHER_WEB_NAME = 'Getting to Know Each Other Enhanced'
export const GETTING_TO_KNOW_EACH_OTHER_WEB_ROUTE = 'getting-to-know-each-other-enhanced'
export const gettingToKnowEachOtherWebLink = () => {return (<NavLink to={makeInternalURL(GETTING_TO_KNOW_EACH_OTHER_WEB_ROUTE)}>{GETTING_TO_KNOW_EACH_OTHER_WEB_NAME}</NavLink>)}
export const gettingToKnowEachOtherWeb = () => {
	return ( <div>
		<br />
		<h4>{GETTING_TO_KNOW_EACH_OTHER_WEB_NAME}</h4>
		<h5>Summary: Create an HTML page describing yourself</h5>
		<h5>Prerequisites: GitHub, Windows 10 or MacOS, VS Code, FireFox, Chrome, HTML, and CSS</h5>
					
		<p>In this activity you will utilize GitHub Pages to host an HTML and CSS based web page about yourself.</p>

		<em>Requirement 1</em>
		<p>Complete {gettingToKnowEachOtherLink()}</p>

		<em>Requirement 2</em>
		<p>Utilize GitHub pages to host your {gettingToKnowEachOtherLink()} web page:</p>
		<ol>
			<li>Copy of your {gettingToKnowEachOtherLink()} to a GitHub pages website and rename it “me.html”</li>
			<li>Verify that your photo from {gettingToKnowEachOtherLink()} is a “png” file and rename it to “me.png”</li>
			<li>Relink your “me.png” photo to “me.html” and retest your hosted version of ”me.html”</li>
			<li>If necessary, rename your external {gettingToKnowEachOtherLink()} CSS file to “me.css” and relink the CSS file</li>
		</ol>

		<em>Requirement 3</em>
		<ol>
			<li>Review {continuousIntegration()} and emphasize the CI/CD</li>
			<li>Implement one (1) substantial HTML based enhancement to {gettingToKnowEachOtherLink()}</li>
			<li>Implement one (1) substantial CSS based enhancement to {gettingToKnowEachOtherLink()}</li>
			<li>Implement one (2) substantial JavaScript based enhancement to {gettingToKnowEachOtherLink()}</li>
		</ol>

		<em>Requirement 4</em>
		<p>Test and validate your hosted web page:</p>
		<ol>
			<li>Fully test your hosted {gettingToKnowEachOtherLink()} webpage</li>
			<li>Validate your HTML utilizing the W3C HTML validator</li>
			<li>Fully test your page in both the FireFox and Chrome browsers</li>
			<li>Finally, add just a touch of JavaScript to your web page by making your name change to your favorite color when clicked</li>
		</ol>
	</div> )
}