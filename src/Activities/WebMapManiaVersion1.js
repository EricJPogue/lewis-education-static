
import React from 'react';

import WebMapManiaScreenShot from './WebMapManiaScreenShot.png';

export const WebMapManiaVersion1 = () => {
	return (
	
<div>
<br />
<h4>Map Mania Version 1</h4>
<h5>Summary: We will be creating a professional looking map based game</h5>
<h5>Prerequisites: Windows 10 or MacOS, VS Code, HTML, CSS, JavaScript, Azure, and Google Maps API</h5>
			
<p>Ever wonder how organizations add the great looking maps to there websites? Well, this week we are going to utilize 
the Google Maps JavaScript API to create a game where the player needs to search Google Maps to find at least eight of 
our favorite places. Since this application is a substantial step up in complexity (and in coolness) from our previous 
programming assignments, we will  be dividing the development into two releases with version 1 being due this week and 
version 2 due next sprint.</p>

<p>When we are done at the end of the next sprint, you will have created an application that starts out looking something 
like:</p>

<img src={WebMapManiaScreenShot} alt='Eric Pogue' width= '1024' /><br /><br />

<em>Requirement 1 - Getting Started with Google Maps JavaScript API</em>
<p>The Google Maps JavaScript API is a broadly used and sophisticated Web API. It can be a little daunting at first. However, you can get started by:</p>
<ol>
	<li>completing Get Started with Google Maps Platform <a href='https://developers.google.com/maps/gmp-get-started' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>completing the Google Maps JavaScript Getting Started tutorial <a href='https://developers.google.com/maps/documentation/javascript/overview' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>focusing on the Google Maps "Hello, World" and "Get An API Key" sections of the above tutorial</li>
	<li>reviewing the "Google Maps Garage: Where's My Map!" video <a href='https://www.youtube.com/watch?v=21PDd17dnnI&amp;feature=youtu.be' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>reviewing how the Maps API works by looking at the API reference to see the possible properties, methods, and events you can use in your program
		<a href='https://developers.google.com/maps/documentation/javascript/events' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>adding the "bounds_changed" event to your application and logging the result to the console</li>
	<li>deploying your Google Maps "Hello, World" to your Azure website, test it,  and link it to your Landing Page</li>
</ol>

<p>In response to this question, please provide the direct URL link to your Google Maps "Hello, World" and briefly describe how the above requirements were implemented.</p>
    
<em>Requirement 2 - Map Mania version 1</em>
<p>Create a new  Map Mania application by copying and renaming the "Hello, World" Google Maps application from above. 
The name of the new application should be "map-mania.html." For example, if I were creating a header section for 
"map-mania.html" it would look something like:</p>
<pre>{`<!--
Author:  Eric Pogue
Class:   Web & Distributed Programming
Project: Map Mania v1
Session: su18-cpsc-24700-lt1
Description: This is the first version of Map Mania that I am creating for Programming Assignment 3.
-->
`}</pre>

<p>Enhance Map Mania by:</p>
<ol>
	<li>creating a new location using the LatLongconstructor similar to "var loc1 = new LatLng(12.432, 43.234);"</li>
    <li>checking to see if the location is in the current map bounds by checking if a location is within the bounds by 
		using the "map.getBounds().contains(loc);" method, where loc is the variable holding a LatLng object above</li>
    <li>writing the results of the above bounds checking statement to the console so that you can verify that it is 
		working correctly</li>
	<li>getting the current zoom level using the "map.getZoom();" method</li>
	<li>completing one additional Google Maps API tutorials from YouTube and add one or more additional interesting 
		features to your implementation of Map Mania v1... if you are looking for an additional tutorial, you may want 
		to consider "Google Maps JavaScript API Tutorial"
			<a href='https://www.youtube.com/watch?v=Zxf1mnP5zcw' target='_blank' rel='noopener noreferrer'>[link]</a></li>
</ol>
<p>Tackle these enhancements gradually, make sure that you alway have something that you could submit, and make sure that 
you review the examples when you run into roadblocks.</p>
<p>Definitely pace yourself. Do not attempt to do this in one night.</p>
<p>Good luck – and have fun. This is, indeed, supposed to be fun.</p>			
</div> )

}