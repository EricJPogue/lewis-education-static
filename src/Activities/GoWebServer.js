import React from 'react'

import { makeNavigationLink } from './ActivityLink'
// import { externalLink } from '../DataAndAPIs/Links'

const renderGoWebServer = () => {
	// const goWebServerTemplate = () => { return externalLink('Introductions Website Template', 'https://github.com/EricPogueExampleCode-Web/introductions-2024')}
	return ( <div><br />
		<h3>{goWebServer.name}</h3>
		<h5>Summary</h5>
		<p>Utilize the Go “/net/http” and “/embed” Frameworks to create a Go web server</p>
		<h5>Prerequisites</h5>
		<p>Go</p>
		<h5>Instruction & Requirements</h5>
		<p>Utilize the Go “/net/http” and “embed” Frameworks to create a Go web server. The server should implement 
			multiple APIs, including hello-world, hello-world-json, hello-world-json-static, and finally, implement 
			a JSON return that is an embedded JSON file (using the “embed” framework).</p>
		<em>Requirement 1</em>
		<p>Create an application that:</p>
		<ol type='n'>
			<li>Is implemented in multiple Go (.go) files with a primary Go file named “gws.go” (short for “Go Web Server”)</li>
			<li>Successfully compiles from the command line by typing “go run gws.go</li>
			<li>Store all code to process each standard in a separate Go file</li>
			<li>Includes user instructions that describe the application when “gws help” is executed</li>
		</ol>

		<em>Requirement 2</em>
		<p>Enhance your application so that it also:</p>
		<ol type='n'>
			<li>Utilizes the “/net/http” Go Framework to process HTTP request</li>
			<li>Implements hello-world by responding in plane text with “Hello World – GWS”</li>
			<li>Implements hello-world-html by responding in HTML with “Hello World – GWS” including the “header 1” font and 
				an mDash between “Hello World” and “GWS”</li>
			<li>Implements hello-world-json by responding in JSON “&#123;“message”:”Hello World - GWS”&#125;</li>
		</ol>

		<em>Requirement 3</em>
		<p>Be sure that the application also:</p>
		<ol type='n'>
			<li>Implements the embedding of JSON file GWS using the “embed” Go library</li>
			<li>Embed a “Syllabus” JSON file in each in a separate Go file</li>
			<li>Implement the “syllabus” API first implementing Read (of CRUD) in response to the “GET” HTTP request</li>
			<li>Implement a “stubbed” Delete request that responds back with text “deleted – stubbed”</li>
		</ol>

		<em>Requirement 4</em>
		<p>Enhance your application so that it also:</p>
		<ol type='n'>
			<li>Implements Create and Update both of which respond with “create-stubbed” and “update-stubbed” respectively</li>
			<li>Implements the “help” API returning API help that includes links to each of the other APIs</li>
		</ol>
	</div> )
}

export const goWebServer = { 'name':'Go Web Server', 'route':'go-web-server', 'render': renderGoWebServer }
export const goWebServerLink = () => { return makeNavigationLink(goWebServer) }