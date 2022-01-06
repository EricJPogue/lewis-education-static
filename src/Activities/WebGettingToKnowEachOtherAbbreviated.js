import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeInternalURL } from './ActivityRouter';

const name = 'Getting to Know Each Other' /* Abbreviated */
export const GETTING_TO_KNOW_EACH_OTHER_ABBREVIATED_ROUTE = 'getting-to-know-each-other-abbreviated'
export const gettingToKnowEachOtherAbbreviatedLink = () => {return (<NavLink to={makeInternalURL(GETTING_TO_KNOW_EACH_OTHER_ABBREVIATED_ROUTE)}>{name}</NavLink>)}

export const gettingToKnowEachOtherAbbreviated= () => {
	return (
	
<div>
<br />
<h4>{name}</h4>
<h5>Summary: Create an Web page describing yourself</h5>
<h5>Prerequisites: Windows 10 or MacOS, VS Code, FireFox, Chrome, HTML, and CSS</h5>
			
<p>In this project you will create an HTML and CSS based web page about yourself.</p>

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

</div> )

}