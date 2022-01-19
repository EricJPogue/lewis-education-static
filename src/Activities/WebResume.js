
import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeInternalURL } from './ActivityRouter';

import { ResumeFormat, ResumeReviewServices } from '../Links'

const NAME = 'Web Resume'
export const WEB_RESUME_ROUTE = 'web-resume'
export const webResumeLink = () => {return (<NavLink to={makeInternalURL(WEB_RESUME_ROUTE)}>{NAME}</NavLink>)}
export const webResume = () => {
	return (
	
<div>
<br />
<h4>{NAME}</h4>
<h5>Summary: Create and publish an high quality current resume for yourself utilizing HTML, CSS, and Azure</h5>
<h5>Prerequisite: <NavLink to='/activity/azure-website'>Azure Website</NavLink></h5>
			
<p>Instructions: Create and publish an up to date resume for yourself utilizing the available Lewis University 
career development services and hosting it on Azure.</p>

<em>Requirement 1</em>
<p>Create HTML and CSS based website that:</p>
<ol>
	<li>Implements your resume in a simple yet aesthetically pleasing resume format</li>
	<li>Utilizes “index.html” to include all HTML code</li>
	<li>Utilizes ”index.css” to include all CSS code</li>
	<li>(Optional) Implements a print version of your resume in PDF that is linked to your HTML resume</li>
</ol>	
 	
<em>Requirement 2</em>
<p>Utilize the available Lewis University career planning services including:</p>
<ol>
	<li>The standard Lewis University {ResumeFormat()}</li>
	<li>Our Lewis University {ResumeReviewServices()}</li>
</ol>	

<em>Requirement 3: </em>
<p>Host your web page on Azure that:</p>
<ol>
	<li>Utilizes an Azure static website</li>
	<li>Utilizes an HTTPS based URL</li>
	<li>(Optional) Utilizes a domain name and configuring your Azure static website to be associated with the domain.</li>
</ol>	

<em>Requirement 4: </em>
<p>Verify and validate your web page by:</p>
<ol>
	<li>Fully testing the page in both the FireFox and Chrome browsers</li>
	<li>Double-checking your email and phone numbers</li>
	<li>Test the printing of the HTML resume</li>
	<li>Validating your HTML and CSS code</li>
</ol>


</div> )

}