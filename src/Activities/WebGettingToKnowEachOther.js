import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeInternalURL } from './ActivityRouter'

import { HelloWorldWebLink } from './HelloWorld'

const NAME = 'Getting to Know Each Other'
export const GETTING_TO_KNOW_EACH_OTHER_ROUTE = 'getting-to-know-each-other'
export const gettingToKnowEachOtherLink = () => {return (<NavLink to={makeInternalURL(GETTING_TO_KNOW_EACH_OTHER_ROUTE)}>{NAME}</NavLink>)}
export const gettingToKnowEachOther = () => {
	return ( <div>
		<br />
		<h4>{NAME}</h4>
		<h5>Summary: Create an HTML page describing yourself</h5>
		<h5>Prerequisites: Windows 10 or MacOS, VS Code, FireFox, Chrome, HTML, and CSS</h5>
					
		<p>In this project you will create an HTML and CSS based web page about yourself. You will need to hand code this page 
		in VS Code so that you can fully understand the HTML and CSS that makes up a web page.</p>

		<em>Requirement 1</em>
		<p>Create an aesthetically pleasing web page in HTML and CSS that includes:</p>
		<ol>
			<li>A heading section at the top of the page with your preferred full name</li>
			<li>A separate line with your Lewis email address as an HTML email link</li>
			<li>A separate line with your Discord information </li>
			<li>A high quality and representative head and shoulders photo of yourself appropriately sized and centered</li>
		</ol>

		<em>Requirement 2</em>
		<p>Enhance your web page by adding:</p>
		<ol>
			<li>A sub-heading labeled “Introduction” with a paragraph about yourself, your family, and your major/minor</li>
			<li>A sub-heading labeled “What I Hope to Learn in this Course” with a bulleted list of topics</li>
			<li>A sub-heading labeled “My Favorite Hobby / Activity” with a paragraph about your favorite hobby or activity</li>
			<li>A sub-heading labeled “Fun Fact” that includes something about you that is uniquely you</li>
		</ol>

		<em>Requirement 3</em>
		<p>Enhance your web page so that it includes:</p>
		<ol>
			<li>A section labeled “Greatest Innovation” that includes:
				<ul style={{listStyleType:'square'}}>
					<li>A list of the three greatest innovations in computing history with square icons (like this list)</li>
					<li>Each list item should include and external link to another web page that also describes the innovation</li>	
				</ul></li>
			<li>Refactor you code so that all of you unordered lists use square list icons</li>
		</ol>

		<em>Requirement 4</em>
		<p>Test and validate your web page:</p>
		<ol>
			<li>Validate that you are following our HTML and CSS coding standards</li>
			<li>Throughout the development process you should validate your HTML utilizing the W3C HTML validator</li>
			<li>Fully test your page by viewing and testing it in both the FireFox and Chrome browsers</li>
			<li>Be careful to save and track your work as you will likely need to submit and publish the page later</li>
		</ol>
	</div> )
}

const GETTING_TO_KNOW_EACH_OTHER_WEB_NAME = 'Getting to Know Each Other Web'
export const GETTING_TO_KNOW_EACH_OTHER_WEB_ROUTE = 'getting-to-know-each-other-web'
export const gettingToKnowEachOtherWebLink = () => {return (<NavLink to={makeInternalURL(GETTING_TO_KNOW_EACH_OTHER_WEB_ROUTE)}>{GETTING_TO_KNOW_EACH_OTHER_WEB_NAME}</NavLink>)}
export const gettingToKnowEachOtherWeb = () => {
	return ( <div>
		<br />
		<h4>{GETTING_TO_KNOW_EACH_OTHER_WEB_NAME}</h4>
		<h5>Summary: Create an HTML page describing yourself</h5>
		<h5>Prerequisites: GitHub, Windows 10 or MacOS, VS Code, FireFox, Chrome, HTML, and CSS</h5>
					
		<p>In this activity you will utilize GitHub Pages to host an HTML and CSS based web page about yourself.</p>

		<em>Requirement 1</em>
		<p>Complete {HelloWorldWebLink()}</p>

		<em>Requirement 2</em>
		<p>Complete {gettingToKnowEachOtherLink()}</p>

		<em>Requirement 3</em>
		<p>Utilize GitHub pages to host your {gettingToKnowEachOtherLink()} web page:</p>
		<ol>
			<li>Move a copy of your {gettingToKnowEachOtherLink()} to your {HelloWorldWebLink()} and rename it “me.html”</li>
			<li>Verify that your photo from {gettingToKnowEachOtherLink()} is a “png” file and rename it to “me.png”</li>
			<li>Relink your “me.png” photo to “me.html” and retest your hosted version of ”me.html”</li>
			<li>If necessary, rename your external {gettingToKnowEachOtherLink()} CSS file to “me.css” and relink the CSS file</li>
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