import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeInternalURL } from './ActivityRouter';
import { externalLink } from '../DataAndAPIs/Links';

const NAME = 'Azure Static Website'
export const AZURE_STATIC_WEBSITE_ROUTE = 'azure-static-website'
export const azureStaticWebsiteLink = () => {return (<NavLink to={makeInternalURL(AZURE_STATIC_WEBSITE_ROUTE)}>{NAME}</NavLink>)}
export const azureStaticWebsite = () => {
	return ( <div>
	<br />
	<h4>{NAME}</h4>
		<h5>Summary: Deploy an Azure Static Website</h5>
		{externalLink('Azure Static Web Apps', 'https://learn.microsoft.com/en-us/azure/static-web-apps/?WT.mc_id=build2020_swa-docs-cxa')}

		https://learn.microsoft.com/en-us/azure/app-service/
		https://learn.microsoft.com/en-us/azure/developer/javascript/
	</div> )
}