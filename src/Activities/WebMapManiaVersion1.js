
import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeInternalURL } from './ActivityRouter'

import WebMapManiaScreenShot from './WebMapManiaScreenShot.png'

import { externalLink, internalLink } from '../Links'
import { azureWebsiteLink } from './AzureWebsite'
import { lionsTigersAndBearsLink } from './LionsTigerAndBears'

const NAME = 'Map Mania'
export const MAP_MANIA_V1_ROUTE = 'map-mania-v1'
export const mapManiaVersion1Link = () => {return (<NavLink to={makeInternalURL(MAP_MANIA_V1_ROUTE)}>{NAME}</NavLink>)}
export const mapManiaVersion1 = () => { return WebMapManiaVersion1() }

export const WebMapManiaVersion1 = () => {
	const googleMapsPlatform = () => { return externalLink('Google Maps Platform', 'https://mapsplatform.google.com/') }
	const googleMapsJavaScriptAPI = () => { return externalLink('Google Maps JavaScript API', 'https://developers.google.com/maps/documentation/javascript/')}
	const googleMapsGettingStarted = () => { return externalLink('Getting started with Google Maps Platform', 'https://developers.google.com/maps/get-started' ) }
	const googleMapsOverview = () => { return externalLink('Google Maps JavaScript Overview', 'https://developers.google.com/maps/documentation/javascript/overview') }
	const googleMapsEvents = () => { return externalLink('Google Maps JavaScript API Events', 'https://developers.google.com/maps/documentation/javascript/events') }
	const mapManiaLite = () => { return internalLink('Map Mania Lite', '/activity-web/map-mania-lite') }
	const googleMapsJavaScriptAPITutorial = () => { return externalLink('Google Maps JavaScript API Tutorial', 'https://www.youtube.com/watch?v=Zxf1mnP5zcw') }
	
	return ( <div>

<br />
<h4>Map Mania version 1</h4>
<h5>Summary: We will be creating a professional looking map based game</h5>
<h5>Prerequisites: Windows or MacOS, VS Code, HTML, CSS, JavaScript, Azure, and Google Maps API</h5>
			
<p>Ever wonder how organizations add the great looking maps to there websites? Well, this week we are going to utilize 
the Google Maps JavaScript API to create a game where a player needs to search Google Maps to find at least eight of 
your favorite places. Since this application is a substantial step up in complexity (and in coolness) from our previous 
programming assignments, we will  be dividing the development into two releases with version 1 being due this week and 
version 2 due next sprint.</p>

<p>Be sure to tackle these requirement gradually. Definitely pace yourself and do not attempt to do this in one night. 
Good luck – and have fun. This is, indeed, supposed to be fun.</p>	

<p>When we are done, you will have created an application that looks something like:</p>
<img src={WebMapManiaScreenShot} alt='Eric Pogue' width= '1024' /><br /><br />

<em>Requirement 1</em>
<p>The Google Maps JavaScript API is a broadly used and sophisticated API. It can be daunting at first. 
However, you can get started by:</p>
<ol>
	<li>Casually exploring the {googleMapsPlatform()}</li>
	<li>Completing the “Getting Started” tutorials on the {googleMapsJavaScriptAPI()} page</li>
	<li>Reviewing {googleMapsOverview()} and completing the “Hello, World” tutorial</li>
	<li>Review {googleMapsEvents()} to find API events that you could use in your application</li>

</ol>
<p>You may also find it beneficial to review {googleMapsGettingStarted()}</p>

<em>Requirement 2</em>
<p>Demonstrate the skills you learned previously by:</p>
<ol>
	<li>Completing {mapManiaLite()}</li>
	<li>Adding the “bounds_changed” event to your application and logging the result to the Web browser console</li>
	<li>Completing {googleMapsJavaScriptAPITutorial()} or an alternative comparable tutorial of your choice</li>
	<li>Hosting {mapManiaLite()} as a Node.js based {azureWebsiteLink()}</li>
</ol>

<em>Requirement 3</em>
<p>Create version 1 of Map Mania that is <em>distinctly your own</em> by:</p>
<ol>
	<li>Starting with new index.html, index.css, and index.js files and hosting them as a Node.js based {azureWebsiteLink()}</li>
	<li>Leveraging what you have learned in {mapManiaLite()} and creating your version 1 of Map Mania with similar functionality</li>
	<li>Creating a new location using the LatLong constructor (e.g. “var loc1 = new LatLng(12.432, 43.234)”)</li>
    <li>Checking to see if the location is in the map bounds (e.g “map.getBounds().contains(loc1)”)</li>
    <li>Writing the results of the above bounds checking to the Web browser console to verify that it is working</li>
	<li>Writing the current zoom level (e.g. “map.getZoom()”) to the Web browser console</li>
</ol>

<em>Requirement 4</em>
<p>Move your FavoritePlaces JSON structure from the Web browser JavaScript to Web Service by:</p>
<ol>
	<li>Verifying that you are utilizing a Node.js server on your {azureWebsiteLink()}</li>
	<li>Implementing a JSON based Web Service that returns your FavoritePlaces JSON structure</li>
	<li>Validating that the FavoritePlaces JSON is directly accessibly in a Web browser</li>
	<li>Loading the FavoritePlaces JSON in the Web browser on application load similar to {lionsTigersAndBearsLink()}</li>
</ol>
		
	</div> )

}