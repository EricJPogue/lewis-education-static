
import React from 'react';

import WebMapManiaScreenShot from './WebMapManiaScreenShot.png';

export const WebMapManiaVersion2 = () => {
	return (
	
<div>

<br />
<h4>Map Mania Version 2</h4>
<h5>Summary: We will be enhancing Map Mania version 1 by creating a "My Favorite Places" game</h5>
<h5>Prerequisites: Windows 10 or MacOS, VS Code, HTML, CSS, JavaScript, Azure, and Google Maps API</h5>
			
<p>Ever wonder how organizations add the great looking maps to there websites? Well, this week we are going to utilize 
the Google Maps JavaScript API to create a game where the player needs to search Google Maps to find at least eight of 
our favorite places. Since this application is a substantial step up in complexity (and in coolness) from our previous 
programming assignments, we will  be dividing the development into two releases with version 1 being due this week and 
version 2 due next sprint.</p>

<p>When this project is complete, you will have created an game looks something like:</p>

<img src={WebMapManiaScreenShot} alt='Eric Pogue' width= '1024' /><br /><br />

<p>The game we are going to develop works by displaying the Google’s Maps interface on our web page and allowing the user 
to pan and zoom in order to find one of several predefined locations. The goal of the game is, for a given location, 
to zoom in closely (to zoom level = 8) such that the location is within the bounds of the map. Once the player finds 
that location, an icon will show up on the location, his or her score will be increased, the map will reset, and they 
will be directed to search for the next new location. Once they have found all of the locations, the user should win 
the game.</p>

<p>You are free to select the particular locations and the sequence in which they must be found. To help the player find 
the right location, you should display a hint message if the location can be found on the currently shown portion of 
the map within the current zoom level. The hints should be more specific as the user zooms in. For example, for zoom 
level 2, you may display “You are getting there!”, for zoom level 3, you may display “You’re getting close”, for zoom 
level 4, you may display “You’re getting closer”, etc. You should also suggest which way the should pan if the location 
is not currently within the map bounds.</p>

<p>What to Submit</p>
<p>In response to this question please submit the direct URL to your Map Mania game (v2). When the link is clicked it 
should directly open the game (not to your Landing Page).</p>

<em>Recall Requirement 1 - Getting Started with Google Maps JavaScript API</em>
<p>The Google Maps JavaScript API is a broadly used and sophisticated Web API. It can be a little daunting at first. 
However, you can get started by:</p>
<ol>
	<li>completing the Google Maps JavaScript Getting Started tutorial <a href='https://developers.google.com/maps/documentation/javascript/overview' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>focusing on the Google Maps "Hello, World" and "Get An API Key" sections of the above tutorial</li>
	<li>reviewing the "Google Maps Garage: Where's My Map!" video <a href='https://www.youtube.com/watch?v=21PDd17dnnI&feature=youtu.be' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>reviewing how the Maps API works by looking at the API reference to see the possible properties, methods, and events you can use in your program
		<a href='https://developers.google.com/maps/documentation/javascript/events' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>adding the "bounds_changed" event to your application and logging the result to the console</li>
	<li>deploying your Google Maps "Hello, World" to your Azure website, test it,  and link it to your Landing Page</li>
</ol>

<p>In response to this question, please provide the direct URL link to your Google Maps "Hello, World" and briefly describe how the above requirements were implemented.</p>
    
    
<em>Recall Requirement 2 - Map Mania version 1</em>
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
<p>In response to this question briefly describe you your implementation of Map Mania v1 met the above criteria. In 
particular, be sure to provide a description of the the "interesting feature" that you add and the URL to the extra YouTube video you completed.</p>

<em>Requirement 3</em>
<p>Finally we get to the new requirements for version 2 of Map Mania. In Map Mania v2 we will need to introduce a 
"Getting Started" feature to the application. This should be a easy to understand description of how to play the game. 
Preferably it will be a HTML element that will show up (visible) when the application starts and the disappears when 
the user clicks anyplace in the application. Clicking to "close" the instructions should also be included in the 
instructions. Alternatively, the "Getting Started" section can be a URL link available in the application.</p>

<em>Requirement 4:</em>
<p>All game play features will need to be implemented including:</p>
<ol>
	<li>Zoom and Pan</li>
	<li>Hints</li>
	<li>Scoring</li>
	<li>Winning</li>
</ol>
<p>Each of these features should intuitive, visually appealing, and easy to use. For example, a "Hint" field should 
be read-only, provide useful messages depending on the situation, and let the user know what to do next after a 
location is found. </p>
    
<em>Requirement 5:</em>
<p>Implement a "cheat code" to automatically win the game. Your "cheat code" can be as simple as including a "Win Now" 
button that allows the player to win, or preferably it can be a more subtle implementation like double-clicking or 
right-clicking on the "Score" field. The "cheat code" needs to be documented in your Getting Started section as well.</p>

<em>Requirement 6</em>
<p>In response to this question submit a JSON file that includes all of your favorite locations. The JSON file 
should be:</p>
<ol>
	<li>An array of locations ordered with your favorite location at the end of the list... the first location 
		that the user will be searching for should be at the top of the list</li>
	<li>Easy to read</li>
	<li>Well formatted</li>
	<li>Validated and error free</li>
</ol>

<p>Tackle these enhancements gradually, make sure that you alway have something that you could submit, and make sure that 
you review the examples when you run into roadblocks.</p>
<p>Definitely pace yourself. Do not attempt to do this in one night.</p>
<p>Good luck – and have fun. This is, indeed, supposed to be fun.</p>		
					
</div> )

}