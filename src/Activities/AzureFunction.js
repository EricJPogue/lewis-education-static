import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeInternalURL } from './ActivityRouter';

const NAME = 'Azure Function'
export const AZURE_FUNCTION_ROUTE = 'azure-function'
export const azureFunctionLink = () => {return (<NavLink to={makeInternalURL(AZURE_FUNCTION_ROUTE)}>{NAME}</NavLink>)}
export const azureFunction = () => {
	return ( <div>
	<br />
	<h4>{NAME}</h4>
		<h5>Summary: Deploy a basic web function to Microsoft Azure</h5>
	</div> )
}