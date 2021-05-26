
import React from 'react';
import { NavLink } from 'react-router-dom';

export const AzureWebsite= () => {
	return (
	
<div>

<br />
<h4>Azure Website</h4>
<h5>Summary: Deploy a basic web applications to Microsoft Azure</h5>
<h5>Prerequisites: GitHub, Azure, Windows 10 or MacOS, Web Browser, and VS Code</h5>
			
<p>Instructions: Create a Microsoft Azure Website and deploy an index.html Landing Page to the site using 
one of the methods demonstrated below. Test your website and make certain that your index.html Landing Page is working 
as expected.</p>
<ul style={{listStyleType:'square'}}>
	<li>Complete “Website Creation with GitHub and Microsoft Azure - 2021 Edition” (highly recommended) <NavLink to='/activity-config/hello-world-html-github-and-azure.mp4'>[link]</NavLink></li>
	<li>Complete “Website Creation with GitHub and Microsoft Azure - 2020 Edition” <NavLink to='/activity-config/git-deployment-to-azure-supplemental-2020'>[link]</NavLink></li>
	<li>Review “Build Your First Web App” from Microsoft <a href='https://azure.microsoft.com/en-us/resources/videos/build-your-first-web-app/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Review “Git Deployment to Microsoft Azure” <NavLink to='/activity-config/git-deployment-to-azure'>[link]</NavLink></li>
	<li>Review “Azure Static Website with FTP” <NavLink to='/activity-config/my-first-website-with-ftp'>[link]</NavLink></li>
</ul><br />

<h5>Frequently Asked Questions:</h5>
Question: Why do I receive an message that says “You do not have permission to view this directory or page.” when I enter the URL in my browser<br />
Do you have an “index.html” file? If you main HTML file is something other than “index.html”, you 
need to include the name of the HTML file in the URL to access the page.<br /><br />
Question: Why does nothing comes up when I enter the URL in my browser?<br />
What did you pick for a server-side environment? My recommendation for a static site is PHP.<br /><br />
Question: What should I do if I forgot my Azure (or GitHub) password?<br />
Don’t forget your Azure (or GitHub) password. If you do forget your password, you will need to reset it. If you are not able to reset your password, you 
will need to create a new account.
</div> )

}