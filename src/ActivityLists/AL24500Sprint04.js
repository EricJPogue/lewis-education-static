import React from 'react'

import { estimated } from './AL00000Sprint00'
import { LearningObjectivesIntro, ActivitiesListIntro, InitialPost } from './AL00000Sprint03'
import { StandardActivitiesWithLinkAndSprint, StandardActivitiesClosingWithLinkAndSprint } from './AL00000Sprint04'
import { oreillyPlaylistOOP, ExampleCode, learningJavaExampleCode, internalLink } from '../DataAndAPIs/Links';
import { gUIsInJava } from './AL24500Sprint03';

import { mosaicJavaLink } from '../Activities/Mosaic';

export const al24500Sprint04 = () => {
	const actionListenerPlus = () => { return internalLink('ActionListenerPlus', '/activity-oop/java-action-listeners') }
	const mosaicLite = () => { return internalLink('Mosaic Lite', '/activity-oop/java-mosaic-lite')}
	const shapeDrawPlus = () => { return internalLink('ShapeDraw Plus', '/activity-oop/java-ovaldraw-plus')}
	const sprint = 4
	return ( <div>

<h5>Sprint 4: Interactive User Interfaces and Mosaic</h5>

<p>Welcome to sprint 4. We have covered a lot of material in the first three sprints. I suspect
that the FaceDraw programming assignment was challenging. As we near the halfway point of our course, we will
continue to focus on delivering working software each sprint. This week we will continue with enhancing our
programming skills by learning how to develop <em>interactive</em> applications while also learning how to
read and write files.</p>

{LearningObjectivesIntro()}
<ul style={{listStyleType:'square'}}>
	<li>Master Java Inheritance and Class Interfaces</li>
	<li>Effectively utilize Action Listeners</li>
	<li>Develop <em>interactive</em> graphical desktop Java applications</li>
	<li>Understand Error Handling and Exceptions</li>
</ul>

{ActivitiesListIntro(sprint)}
<ol>
	{StandardActivitiesWithLinkAndSprint(sprint, mosaicJavaLink(), oreillyPlaylistOOP())}
	<li>Complete {mosaicLite()}{estimated('2 hours')}</li>
	<li>Review {gUIsInJava()}</li>
	<li>Complete {actionListenerPlus()}</li>

	{InitialPost(sprint)}
	<li>Within {oreillyPlaylistOOP()} read “Learning Java” chapter 10 on Desktop Applications and review associated {learningJavaExampleCode()}</li>
	<li>Within {oreillyPlaylistOOP()} review “Learning Java” chapter 6 on Error Handling and Logging</li>
	<li>Analyze and test ShapeDraw which is located in our {ExampleCode()}</li>
	<li>Complete {shapeDrawPlus()} by enhancing ShapeDraw (sometimes referred to as “OvalDraw”){estimated('2 hours')}</li>

	{StandardActivitiesClosingWithLinkAndSprint(sprint, mosaicJavaLink(), '6 hours')}
</ol> 
<p>If you are struggling, remember to reach out to your Scrum teammates early and often for help.</p>
</div> )
}

// Todo: From ActionListenerPlus video remove date/sprint references