import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeInternalURL } from './ActivityRouter';

const NAME = 'HTML Programming'
export const HTML_ROUTE = 'html'
export const htmlLink = () => {return (<NavLink to={makeInternalURL(HTML_ROUTE)}>{NAME}</NavLink>)}
export const HTML= () => {
	return (
	
<div>

<br />
<h4>{NAME}</h4>
<h5>Summary: Complete the W3C tutorial on HTML</h5>
<h5>Prerequisites: Windows 10 or MacOS, Web Browser, and VS Code</h5>
			
<p>Instructions: Complete the <a href='https://www.w3schools.com/html/'>W3C HTML tutorial</a></p>
<ul style={{ listStyleType:'square' }}>
	<li>Part 1 of this tutorial begins with “HTML Home” and ends when you have completed the “HTML File Paths” section</li>
	<li>Part 2 picks up with “HTML File Paths” through “HTML vs. XHTML” and then skips down to include “HTML Examples”</li>
</ul>
<p>You should follow along and complete the steps yourself. As you go through the tutorial, you will need to make the 
resulting application uniquely your own by adding standard comments at the top application (i.e. your name, class, etc.), 
changing the names of variables, and making small changes.</p>

<p>Be sure to save your work so that you can submit it as part of an assignment.</p>

</div> )

}