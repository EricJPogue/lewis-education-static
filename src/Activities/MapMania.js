import React from 'react'
import { externalLink, internalLink } from '../data/Links'
import { azureWebsiteLink } from './AzureWebsite'
import { makeActivityLink } from './ActivityLink'
import { lionsTigersAndBearsLink } from './LionsTigerAndBears'

import WebMapManiaScreenShot from './WebMapManiaScreenShot.png'

const NAME = 'Map Mania'
export const MAP_MANIA_V1_ROUTE = 'map-mania-v1'
export const mapManiaVersion1Link = () => { return makeActivityLink(NAME, MAP_MANIA_V1_ROUTE) }
export const mapManiaVersion1 = () => {
	return ( <div>
		<br />
		<h4>{NAME} version 1</h4>
		<h5>Summary: We will be creating a professional looking map based game</h5>
		<h5>Prerequisites: Windows or MacOS, VS Code, HTML, CSS, JavaScript, Azure, and Google Maps API</h5>
					
		<p>Ever wonder how organizations add the great looking maps to there websites? Well, this week we are going to utilize 
		the Google Maps JavaScript API to create a game where a player needs to search Google Maps to find at least eight of 
		your favorite places. Since this application is a substantial step up in complexity (and in coolness) from our previous 
		programming assignments, we will be dividing the development into two releases with version 1 being due this week and 
		version 2 due next sprint.</p>

		<p>Be sure to tackle these requirement gradually. Definitely pace yourself and do not attempt to do this in one night. 
		Good luck and have fun. This is, indeed, supposed to be fun.</p>	

		<p>When we are done, you will have created an application that looks something like:</p>
		<img src={WebMapManiaScreenShot} alt='Eric Pogue' width= '1024' /><br /><br />

		{requirement1()}
		{requirement2()}
		{requirement3()}
		{requirement4()}	
	</div> )
}

const NAME_V2 = 'Map Mania version 2'
export const MAP_MANIA_V2_ROUTE = 'map-mania-v2'
export const mapManiaVersion2Link = () => { return makeActivityLink(NAME_V2, MAP_MANIA_V2_ROUTE) }
export const mapManiaVersion2 = () => {
	return ( <div>
		<br />
		<h4>{NAME_V2}</h4>
		<h5>Summary: We will be enhancing our initial version of Map Mania by creating a “My Favorite Places” game</h5>
		<h5>Prerequisites: {mapManiaVersion1Link()} version 1</h5>
			
		<p>Now that we have seen how organizations add the great looking maps to there websites, we are going to 
		continue to utilize the Google Maps JavaScript API to create a game where the player needs to search Google 
		Maps to find at least eight of our favorite places.</p>

		<p>When this project is complete, you will have created an game looks something like:</p>
		<img src={WebMapManiaScreenShot} alt='Eric Pogue' width= '1024' /><br /><br />

		<p>The game we are going to develop works by displaying the Google’s Maps interface on our web page and 
		allowing the user to pan and zoom in order to find one of several predefined locations. The goal of the game 
		is, for a given location, to zoom in closely (to zoom level = 8) such that the location is within the bounds 
		of the map. Once the player finds that location, an icon will show up on the location, his or her score will be 
		increased, the map will reset, and they will be directed to search for the next new location. Once they have 
		found all of the locations, the user should win the game.</p>

		<p>You are free to select the particular locations and the sequence in which they must be found. To help the 
		player find the right location, you should display a series of meaningful and intuitive hints that will help 
		them zoom and pan to the desired location.</p>

		<em>From version 1 of {NAME}:</em><br />
		<em>Recall </em>{requirement1()}
		<em>Recall </em>{requirement2()}
		<em>Recall </em>{requirement3()}
		<em>Recall </em>{requirement4()}<br />

		<em>Now in {NAME_V2} we will be enhancing {NAME} by implementing the following additional features:</em><br />

		<em>Requirement 5:</em>
		<p>Implement key game play features that allow the user to find your favorite places by:</p>
		<ol>
			<li>Implementing <em>Zoom and Pan</em></li>
			<li>Creating interactive <em>Hints</em> that are meaningful and intuitive to assist the user in finding the location</li>
			<li>Implementing <em>Location Found</em> so that a user knows when they have found the location</li>
			<li>Implementing <em>Next Location</em> so that a user knows to start looking for the next location</li>
		</ol>

		<em>Requirement 6:</em>
		<p>Implement additional game play features that allow the user to Score and Win by:</p>
		<ol>
			<li>Implementing intuitive <em>Scoring</em> so the user gets points for each location found</li>
			<li>Designing and implementing <em>Winning</em> when the user has found all of the location</li>
		</ol>
		<p><em>**Done well, Zoom, Pan, Hints, Finding, Scoring, and Winning are very challenging features!</em></p>

		<em>Requirement 7</em>
		<p>Add a “Getting Started” feature to the application by:</p>
		<ol>
			<li>Implemented a modal window that opens when the application starts</li>
			<li>Including easy to understand instructions on how to play the game</li>
			<li>Making the instruction available to the user as they are playing the game</li>
		</ol>
   
		<em>Requirement 8:</em>
		<p>Implement a “Win Now” cheat code to automatically win the game by:</p>
		<ol>
			<li>Implement your “cheat code” as a double-click event on the “Score” field</li>
			<li>Utilize a confirm dialog to verify that the user really want to skip the rest of the game and “Win Now”</li>
			<li>Document the “Win Now” cheat code at the end of the “Getting Started” instructions</li>
		</ol>		
	</div> )
}

const googleMapsPlatform = () => { return externalLink('Google Maps Platform', 'https://mapsplatform.google.com/') }
const googleMapsJavaScriptAPI = () => { return externalLink('Google Maps JavaScript API', 'https://developers.google.com/maps/documentation/javascript/')}
const googleMapsGettingStarted = () => { return externalLink('Getting started with Google Maps Platform', 'https://developers.google.com/maps/get-started' ) }
const googleMapsOverview = () => { return externalLink('Google Maps JavaScript Overview', 'https://developers.google.com/maps/documentation/javascript/overview') }
const googleMapsEvents = () => { return externalLink('Google Maps JavaScript API Events', 'https://developers.google.com/maps/documentation/javascript/events') }
const mapManiaLite = () => { return internalLink('Map Mania Lite', '/activity-web/map-mania-lite') }
const googleMapsJavaScriptAPITutorial = () => { return externalLink('Google Maps JavaScript API Tutorial', 'https://www.youtube.com/watch?v=Zxf1mnP5zcw') }

const requirement1 = () => {
	return ( <span> 
		<em>Requirement 1</em>
		<p>The Google Maps JavaScript API is a broadly used and sophisticated API. It can be daunting at first. 
		However, you can get started by:</p>
		<ol>
			<li>Casually exploring the {googleMapsPlatform()}</li>
			<li>Completing the “Getting Started” tutorials on the {googleMapsJavaScriptAPI()} page</li>
			<li>Reviewing {googleMapsOverview()} and completing the “Hello, World” tutorial</li>
			<li>Review {googleMapsEvents()} to find API events that you could use in your application</li>
		</ol>
		<p>I would not spend too much time on this requirement before you move on to Requirement 2 and Map Mania Lite. 
		Finally, you may it beneficial to take a quick look at {googleMapsGettingStarted()}.</p>
	</span> )
}

const requirement2 = () => {
	return ( <span> 
		<em>Requirement 2</em>
		<p>Demonstrate the skills you learned previously by:</p>
		<ol>
			<li>Completing {mapManiaLite()}</li>
			<li>Adding the “bounds_changed” event to your application and logging the result to the Web browser console</li>
			<li>Completing {googleMapsJavaScriptAPITutorial()} or an alternative comparable tutorial of your choice</li>
			<li>Hosting {mapManiaLite()} as a Node.js based {azureWebsiteLink()}</li>
		</ol>
	</span> )
}

const requirement3 = () => {
	return ( <span> 
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
	</span> )
}

const requirement4 = () => {
	return ( <span> 
		<em>Requirement 4</em>
		<p>Move your FavoritePlaces JSON structure from the Web browser JavaScript to Web Service by:</p>
		<ol>
			<li>Verifying that you are utilizing a Node.js server on your {azureWebsiteLink()}</li>
			<li>Implementing a JSON based Web Service that returns your FavoritePlaces JSON structure</li>
			<li>Validating that the FavoritePlaces JSON is directly accessibly in a Web browser</li>
			<li>Loading the FavoritePlaces JSON in the Web browser on application load similar to {lionsTigersAndBearsLink()}</li>
		</ol>
	</span> )
}

