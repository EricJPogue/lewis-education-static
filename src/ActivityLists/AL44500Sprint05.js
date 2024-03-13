import React from 'react'

import { getModuleDescription } from '../DataAndAPIs/ClassSections';
import { learningObjectivesIntro, activitiesListIntro, standardActivities, initialPost, standardActivitiesClosing, closing } from './AL00000Sprint00'

import { CSSW3C, HTMLW3C, JavaScriptW3C, externalLink } from '../DataAndAPIs/Links'
import { reactTicTacToeLeaderBoardMongoDBLink } from '../Activities/ReactTicTacToeLeaderBoard'
import { fullStackJavaScriptW3C } from '../DataAndAPIs/Links'
import { estimated } from './AL00000Sprint00'
import { architecturePart1, architecturePart2 } from '../DataAndAPIs/Links';

export const al44500Sprint05 = () => { 
	const sprint = 5
	return ( <div>
		<h5>Sprint {sprint}: {getModuleDescription(sprint-1)}</h5>
		<p><em>Welcome to sprint {sprint}.</em> What’s left in our Application Framework? We have a great client tool in 
		React. We also have a solid server in Node.js. We have learn how to create web service APIs using REST and learned 
		how to secure the APIs with HTTPs and Auth0 (or Passport). All that is left is to figure out where to store our
		application data. Let’s learn about databases, understand why MongoDB was selected in MERN, and implement a MongoDB
		database locally and using MongoDB Atlas.</p>

		{learningObjectivesIntro(sprint)}
		<ul style={{listStyleType:'square'}}>
			<li>Understand databases including SQL, NoSQL, MongoDB, and MongoDB Atlas</li>
			<li>Understand the tradeoffs of Object-Oriented Programming, Functional Programming and Object-Relational Mappers relate and databases</li>
			<li>Implement MongoDB locally and MongoDB on the MongoDB Atlas cloud service</li>
			<li>Configuring the development and production environments so the Application Framework can be utilized effectively</li>
		</ul>

		{list44500Sprint05(sprint)} 
		{closing(sprint)}
	</div> ) 
}

export const list44500Sprint05 = (sprint) => {
	const mongoDBMovieCRUD = () => { return externalLink('MongoDB Atlas Movie CRUD', 'https://lewisu.hosted.panopto.com/Panopto/Pages/Embed.aspx?pid=88eb7868-6f43-4645-99ad-ad9501397cf7&id=7541ab37-4610-441e-8911-aeb4011588f2&advance=true')}
	const movieCRUDLite = () => { return externalLink('MovieCRUDLite', 'https://lewisu.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=8e35daa6-863c-4620-9d58-aeb700336ccb')}
	const fullStackW3C = () => { return externalLink('What is Full Stack?', 'https://www.w3schools.com/whatis/whatis_fullstack.asp') }
	const nodeJS = () => { return externalLink('Node.js', 'https://www.w3schools.com/nodejs')}
	const nodeJSAndMongoDB = () => { return externalLink('Node.js and MongoDB', 'https://www.w3schools.com/nodejs/nodejs_mongodb.asp')}
	const connectToAMongoDBDatabaseUsingNodeJSTutorialDBTutorial = () => { return externalLink('Connect to a MonoDB Database Using Node.js', 'https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database')}
	const movieCRUDLiteCode = () => { return externalLink('sample code', 'https://github.com/EricJPogue/MovieCRUDLite')}

	return ( <div>
		{activitiesListIntro(sprint)}
		<ol>
			{standardActivities(sprint, reactTicTacToeLeaderBoardMongoDBLink())} 
			<li>As needed review {HTMLW3C()}, {CSSW3C()}, and {JavaScriptW3C()} all from W3C</li>
			<li>Review {fullStackW3C()} and {fullStackJavaScriptW3C()}</li>
			<li>Review {nodeJS()} and {nodeJSAndMongoDB()}</li>
			<li>Complete the {mongoDBMovieCRUD()} tutorial'</li>
			<li>Review {architecturePart1()}</li>
			{initialPost(sprint)}
			<li>Complete {connectToAMongoDBDatabaseUsingNodeJSTutorialDBTutorial()} tutorial{estimated('3 hours')}</li>
			<li>Complete {movieCRUDLite()} tutorial</li>
			<li>Review the {movieCRUDLiteCode()} as needed</li>
			<li>Review {architecturePart2()}</li>
			{standardActivitiesClosing(sprint, reactTicTacToeLeaderBoardMongoDBLink(), '8 hours')}
		</ol>
	</div> )
}