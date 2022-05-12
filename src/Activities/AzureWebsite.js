import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeInternalURL } from './ActivityRouter';

const NAME = 'Azure Website'
export const AZURE_WEBSITE_ROUTE = 'azure-website'
export const azureWebsiteLink = () => {return (<NavLink to={makeInternalURL(AZURE_WEBSITE_ROUTE)}>{NAME}</NavLink>)}
export const azureWebsite = () => {
	return ( <div>
	<br />
	<h4>{NAME}</h4>
		<h5>Summary: Deploy a basic web applications to Microsoft Azure</h5>
		<h5>Prerequisites: GitHub, Azure, Windows 10 or MacOS, Web Browser, and VS Code</h5>
					
		<p>Instructions: Create a Microsoft Azure Website and deploy an index.html web page to the site using one of 
		the methods demonstrated below. Test your website and make certain that your index.html web page is working 
		as expected.</p>
		<ul style={{listStyleType:'square'}}>
			<li>Complete <NavLink to='/activity-config/hello-world-html-github-and-azure'>Website Creation with GitHub and Microsoft Azure</NavLink> (required)</li>
			<li>Complete <NavLink to='/activity-config/git-deployment-to-azure-supplemental-2020'>Website Creation with GitHub and Microsoft Azure 2020 Edition</NavLink> (required)</li>
			<li>Review <NavLink to='/activity-config/git-deployment-to-azure'>Git Deployment to Microsoft Azure</NavLink></li>
			<li>Review <NavLink to='/activity-config/my-first-website-with-ftp'>Azure Static Website with FTP</NavLink></li>
		</ul><br />

		<h5>Frequently Asked Questions:</h5>
		Question: Why do I receive an message that says “You do not have permission to view this directory or page.” when I enter the URL in my browser?<br />
		Do you have an “index.html” file? If your main HTML file is something other than “index.html”, you 
		need to include the name of the HTML file in the URL to access the page.
		<br /><br />

		Question: Why does nothing comes up when I enter the URL in my browser?<br />
		What did you pick for a server-side environment? My recommendation for a static site is PHP.
		<br /><br />

		Question: What should I do if I forgot my Azure (or GitHub) password?<br />
		Don’t forget your Azure (or GitHub) password. If you do forget your password, you will need to reset it. If you are not able to reset your password, you 
		will need to create a new account.
	</div> )

}