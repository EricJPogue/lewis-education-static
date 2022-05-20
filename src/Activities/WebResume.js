
import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeInternalURL } from './ActivityRouter'

import { ResumeFormat, ResumeReviewServices, internalLink } from '../Links'

const NAME = 'Web Resume'
export const WEB_RESUME_ROUTE = 'web-resume'
export const webResumeLink = () => {return (<NavLink to={makeInternalURL(WEB_RESUME_ROUTE)}>{NAME}</NavLink>)}
export const webResume = () => {
	const azureWebsite = () => { return internalLink('Azure Website', '/activity/azure-website')}
	return ( <div>

<br />
<h4>{NAME}</h4>
<h5>Summary: Create and publish a high quality current resume for yourself utilizing HTML, CSS, and Azure</h5>
<h5>Prerequisite: {azureWebsite()}</h5>
			
<p>Instructions: Utilize the standard Lewis University {ResumeFormat()} to create an up to date resume 
for yourself. Next, review and utilize any appropriate Lewis University career development services. Finally, 
publish your resume to the Web by hosting it on Microsoft Azure.</p>

<em>Requirement 1</em>
<p>Create HTML and CSS based website that:</p>
<ol>
	<li>Utilizes “index.html” for all HTML code</li>
	<li>Utilizes a separate linked “index.css” for all CSS code</li>
	<li>Can be utilized for Lewis University {ResumeReviewServices()}</li>
</ol>	
 	
<em>Requirement 2</em>
<p>Create a PDF printable version of your resume that:</p>
<ol>
	<li>Implements your current resume as a web page in our standard {ResumeFormat()}</li>
	<li>Looks professional when printed</li>
	<li>Is linked to your HTML and CSS based web page</li>
</ol>	

<em>Requirement 3: </em>
<p>Publish your HTML, CSS, and PDF based web page by hosting it on Azure such that it:</p>
<ol>
	<li>Utilizes one of the standard {azureWebsite()} hosting methodologies</li>
	<li>Has the master copy of the web page in GitHub</li>
	<li>Is globally accessible via an HTTPS based URL</li>
</ol>	

<em>Requirement 4: </em>
<p>Verify and validate your web page by:</p>
<ol>
	<li>Verifying your HTML and CSS code is error free by utilizing the appropriate services</li>
	<li>Reviewing Lewis University {ResumeReviewServices()} and confirming that your resume fulfills all requirements</li>
	<li>Testing (verifying) the quality of printing of the PDF resume including removing any unsightly page numbers</li>
</ol>

</div> )
}