import React from 'react'
import { estimated } from '../ActivityLists/AL00000Sprint00'
import { fullStackJavaScriptW3C, externalLink } from '../DataAndAPIs/Links'
import { azureWebsiteLink } from './AzureWebsite'
import { makeActivityLink } from './ActivityLink'

const NAME = 'Amazeriffic Full Stack (or MovieCRUD Full Stack)'
export const AMAZERIFFIC_FULL_STACK_ROUTE = 'amazeriffic-full-stack'
export const amazerifficFullStackLink = () => { return makeActivityLink(NAME, AMAZERIFFIC_FULL_STACK_ROUTE) }
export const amazerifficFullStack = () => {
	const learnWebAppDevelopmentExampleCode = () => { return externalLink('example code', 'https://github.com/semmypurewal/LearningWebAppDev') }
	const fullStackW3C = () => { return externalLink('What is Full Stack?', 'https://www.w3schools.com/whatis/whatis_fullstack.asp') }
	const nodeJS = () => { return externalLink('Node.js', 'https://www.w3schools.com/nodejs')}
	const nodeJSAndMongoDB = () => { return externalLink('Node.js and MongoDB', 'https://www.w3schools.com/nodejs/nodejs_mongodb.asp')}
	const nodeJSAndMySQL = () => { return externalLink('Node.js and MySQL', 'https://www.w3schools.com/nodejs/nodejs_mysql.asp')}
	const connectToAMongoDBDatabaseUsingNodeJSTutorialDBTutorial = () => { return externalLink('Connect to a MonoDB Database Using Node.js', 'https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database')}
	const passport = () => { return externalLink('Passport', 'https://www.passportjs.org/')}

	const movieCRUDLite = () => { return externalLink('MovieCRUDLite', 'https://lewisu.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=8e35daa6-863c-4620-9d58-aeb700336ccb') }
	const movieCRUDLiteCode = () => { return externalLink('sample code', 'https://github.com/EricJPogue/MovieCRUDLite')}

	return ( <div>
		<br />
		<h4>{NAME}</h4>
		<h5>Summary: Finalize Amazeriffic and migrate it to Microsoft Azure and MongoDB</h5>
		<h5>Prerequisites: Windows or MacOS, VS Code, HTML, CSS, JavaScript, Azure, and MongoDB</h5>
					
		<p>The Amazeriffic application is an excellent learning application. Kudos to Sammy Purewal for walking us 
		through it’s implementation in his “Learning Web App Development” book. We have learned a lot about client 
		programming with HTML, CSS, and JavaScript. We have also learned about Web server programming with Node.js 
		and JavaScript running both locally and hosted in Microsoft Azure. The final step is to implement a datastore 
		with MongoDB so that we can have persistence/statefulness functionality in the application .</p>

		<p>This assignment assumes that you already have Amazeriffic successfully running locally and in Microsoft 
		Azure. More specifically, it assumes that you have the “Learning Web Development” Chapter 7 version (or later)
		version of Amazeriffic successfully running locally and successfully hosted in Azure. If this assumption is 
		true for you, you have already completed a majority of requirement 1 below.</p>

		<p><em>Update June 16, 2022:</em> If you are struggling with completing requirements 1-4 below with Amazeriffic, 
		you may alternately complete MovieCRUD Full Stack such that it meets all of the following requirements while 
		fully implementing Create, Read, Update, and Delete (CRUD). If you choose this path, you will likely find 
		the {movieCRUDLite()} tutorial and related {movieCRUDLiteCode()} beneficial.</p>

		<em>Requirement 1</em>
		<p>Gain an understanding of Full Stack Web development, Node.js, MongoDB, and MySQL by:</p>
		<ol>
			<li>Completing {fullStackW3C()} and {fullStackJavaScriptW3C()}</li>
			<li>Completing {nodeJS()}, {nodeJSAndMongoDB()}, and {nodeJSAndMySQL()}</li>
			<li>Completing {connectToAMongoDBDatabaseUsingNodeJSTutorialDBTutorial()} tutorial{estimated('3 hours')}</li>
			<li>Hosting part of the {connectToAMongoDBDatabaseUsingNodeJSTutorialDBTutorial()} tutorial as an {azureWebsiteLink()}</li>
		</ol>

		<em>Requirement 2</em>
		<p>Although you should already have Amazeriffic successfully running on Azure and Node.js, this requirement 
		gives you some backup guidance on how you could get Amazeriffic running and hosted by:</p>
		<ol>
			<li>Downloading the “Learning Web Development” author’s {learnWebAppDevelopmentExampleCode()}</li>
			<li>Compile, execute and test the appropriate version of the Amazeriffic code locally under Node.js</li>
			<li>Utilize CI/CD concepts to host a Node.js Azure {azureWebsiteLink()}</li>
			<li>Update, migrate, test author’s code to Azure and test the Amazeriffic functionality</li>
		</ol>
		<p>**Once again, you have likely already completed these activities previously in which case you do not need to 
		complete them again.</p>

		<em>Requirement 3</em>
		<p>Fully implement a cloud hosted version of Amazeriffic with a datastore by:</p>
		<ol>
			<li>Updating the Azure hosted Amazeriffic so that it can access MongoDB Atlas on Amazon</li>
			<li>Implements all appropriate Amazeriffic functionality using MongoDB Atlas</li>
		</ol>
			
		<em>Requirement 4</em>
		<p>For those looking for an ultimate challenge, implement Authentication and/or 
		Model-View-Controller by:</p>
		<ol>
			<li>Updating your Azure hosted Amazeriffic to implement {passport()} Authentication with MongoDB or GitHub</li>
			<li>Updating your Azure hosted Amazeriffic to implement the Model-View-Controller pattern</li>
		</ol>
	</div> )
}