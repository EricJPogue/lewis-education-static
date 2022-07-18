import React, { Component } from 'react';
import ReactPlayer from 'react-player'

import { getClass } from '../DataAndAPIs/Classes';

import { routeActivity } from './ActivityRouter';

import { SeatSelector } from './SeatSelector'
import { StudyTable } from './StudyTable'
import { HelloWorldPython, HelloWorldJava, HelloWorldGo, HelloWorldWeb } from './HelloWorld'
import { /*MatchmakerWeb, MatchmakerJava, MatchmakerGo,*/ MatchmakerExamples } from './Matchmaker';
import { HealthRiskCalculatorPython, HealthRiskCalculatorWeb, HealthRiskCalculatorJava, HealthRiskCalculatorGo, HealthRiskCalculatorExamples } from './HealthRiskCalculator'

import { ExampleCode } from './ExampleCode'
import { FaceDrawWeb, FaceDrawReact } from './FaceDraw'
import { MosaicWeb, MosaicReact, MosaicV2React } from './Mosaic'

import { Tools } from './ToolsOfTheTrade'
import { Repository } from './Repository'

import { CodingStandards, CodingStandardsValidator } from './CodingStandards'
import { QuizMaster } from './QuizMaster'
import { GitCommands } from './GitCommands'

import { HTML } from './HTML'
import { PythonW3C } from './PythonW3C'
import { SuccessfulDeveloper } from './SuccessfulDeveloper'

import { WebAssignmentPortfolioWithNodeJS } from './WebAssignmentPortfolioWithNodeJS'
import { WebDiceRoller } from './WebDiceRoller'
import { gettingToKnowEachOther } from './WebGettingToKnowEachOther'
import { WebCourseSchedule } from './WebCourseSchedule'
import { WebMapManiaVersion2 } from './WebMapManiaVersion2'

import { MustangVersion2 } from './MustangVersion2';
import { MustangVersion3 } from './MustangVersion2';

import { ProgrammingTogether } from '../ActivityVideo/Panopto'

export const videoLink = (header, url) => {
	return ( <div><h5>{header}</h5><ReactPlayer url={url} controls={true} width={1024} height={576} /></div> )
}

const videoLinkWithSlides = (header, url, urlSlides, discussionLink) => {
	
	return ( 
		<div>
			<h5>{header}</h5>
			<ReactPlayer url={url} controls={true} width={1024} height={576} />
			<br />
			If you are looking for the associated slides, you can find them here <a href={urlSlides}>[link]</a>.
		</div>
	)
}

export const baseLink = () => {
	return 'https://lewiseducation.blob.core.windows.net/'
}

const webProgrammingLink = (fileName) => {
	return baseLink()+'web-and-distributed-programming/'+fileName
}

const foxLink = (fileName) => {
	return baseLink()+'fox/'+fileName	
}

class Activity extends Component {
	activity() {
		let activityReference = this.props.match.params.reference

		let routeActivityResponse = routeActivity(activityReference)
		if (routeActivityResponse != null) return routeActivityResponse

		switch(activityReference) {
			case 'seat-selector': return SeatSelector()

			// Each of the case statements below represent a link to an activity. Activities are referenced via the
			// application URL. For example, the following two links would take us to the test and production Blended 
			// Learning activities:
			//     http://localhost:3000/#/activity/blended-learning  
			//     http://www.lewis.education/#/activity/blended-learning
			case 'blended-learning-old': return videoLink('Blended Learning', 'https://www.youtube.com/watch?v=paQCE58334M&vl')
			case 'blended-learning': return videoLink('Blended Learning', 'https://www.youtube.com/watch?v=paQCE58334M')
			case 'scrum-in-7-minutes': return videoLink('Introduction to Scrum', 'https://www.youtube.com/watch?v=9TycLR0TqFA')
			case 'photo-to-blackboard': return videoLink('Add Your Photo to Blackboard', 'https://www.youtube.com/watch?v=PTmK3QdwZro&feature=youtu.be')
			case 'blackboard-ultra': return videoLink('Introduction to Blackboard Ultra', 'https://www.youtube.com/watch?v=IKjBxIe_138&feature=youtu.be')
			case 'tools': return Tools()
			case 'repository': return Repository()
			case 'coding-standards': return CodingStandards()
			case 'coding-standards-validator': return CodingStandardsValidator()
			case 'quiz-master': return QuizMaster()

			case 'git-commands': return GitCommands()
			case 'successful-programmer': return SuccessfulDeveloper()
			case 'study-table': return StudyTable()

			case 'hello-world-python': return HelloWorldPython()
			case 'hello-world-java': return HelloWorldJava()
			case 'hello-world-go': return HelloWorldGo()
			case 'hello-world-web': return HelloWorldWeb()

			// case 'matchmaker-web': return MatchmakerWeb()
			// case 'matchmaker-java': return MatchmakerJava()
			// case 'matchmaker-go': return MatchmakerGo()
			case 'matchmaker-examples': return MatchmakerExamples()

			case 'example-code': return ExampleCode()

			case 'facedraw-web': return FaceDrawWeb()
			case 'facedraw-react': return FaceDrawReact()

			case 'mosaic-web': return MosaicWeb()
			case 'mosaic-react': return MosaicReact()
			case 'mosaic-v2-react': return MosaicV2React()

			case 'health-risk-calculator-python': return HealthRiskCalculatorPython()
			case 'health-risk-calculator-web': return HealthRiskCalculatorWeb()
			case 'health-risk-calculator-java': return HealthRiskCalculatorJava()
			case 'health-risk-calculator-go': return HealthRiskCalculatorGo()
			case 'health-risk-calculator-examples': return HealthRiskCalculatorExamples()

			case 'html': return HTML()
			case 'python-w3c': return PythonW3C()
			case 'assignment-portfolio-with-node-js': return WebAssignmentPortfolioWithNodeJS()
			case 'dice-roller': return WebDiceRoller()
			case 'getting-to-know-each-other': return gettingToKnowEachOther()
			case 'course-schedule': return WebCourseSchedule()
			case 'map-mania-v2': return WebMapManiaVersion2()
			case 'mustang-v2': return MustangVersion2()
			case 'mustang-v3': return MustangVersion3()
			case 'programming-together': return ProgrammingTogether()

			// Start Programming The World Wide Web” by Robert W. Sebesta (Sebesta)
			case 'sebesta-chapter-01': return videoLinkWithSlides(
				'“Programming The World Wide Web” by Robert W. Sebesta (Sebesta) Chapter 1 Lecture', 
				webProgrammingLink('intro-to-web-and-distributed-programming.mp4'), 
				webProgrammingLink('intro-to-web-and-distributed-programming-slides-only.pptx'))
			case 'sebesta-chapter-02': return videoLinkWithSlides(
				'“Programming The World Wide Web” by Robert W. Sebesta (Sebesta) Chapter 2 Lecture', 
				webProgrammingLink('html5.mp4'), webProgrammingLink('html5-slides-only.pptx'))
			case 'sebesta-chapter-03': return videoLinkWithSlides(
				'“Programming The World Wide Web” by Robert W. Sebesta (Sebesta) Chapter 3 Lecture', 
				webProgrammingLink('css.mp4'), webProgrammingLink('css-slides-only.pptx'))
			case 'sebesta-chapter-04': return videoLinkWithSlides(
				'“Programming The World Wide Web” by Robert W. Sebesta (Sebesta) Chapter 4 Lecture', 
				webProgrammingLink('javascript-basics.mp4'), webProgrammingLink('javascript-basics-slides-only.pptx'))
			case 'sebesta-chapter-05': return videoLinkWithSlides(
				'“Programming The World Wide Web” by Robert W. Sebesta (Sebesta) Chapter 5 Lecture', 
				webProgrammingLink('javascript-and-html.mp4'), webProgrammingLink('javascript-and-html-slides-only.pptx'))
			case 'sebesta-chapter-06': return videoLinkWithSlides(
				'“Programming The World Wide Web” by Robert W. Sebesta (Sebesta) Chapter 6 Lecture', 
				webProgrammingLink('dynamic-documents-with-javascript.mp4'), 
				webProgrammingLink('dynamic-documents-with-javascript-slides-only.pptx'))
			case 'sebesta-chapter-07': return videoLinkWithSlides(
				'“Programming The World Wide Web” by Robert W. Sebesta (Sebesta) Chapter 7 Lecture', 
				webProgrammingLink('xml-and-webservices.mp4'), webProgrammingLink('xml-and-webservices-slides-only.pptx'))
			case 'sebesta-chapter-09': return videoLinkWithSlides(
				'“Programming The World Wide Web” by Robert W. Sebesta (Sebesta) Chapter 9 Lecture', 
				webProgrammingLink('intro-to-php.mp4'), webProgrammingLink('intro-to-php-slides-only.pptx'))
			case 'sebesta-chapter-10': return videoLinkWithSlides(
				'“Programming The World Wide Web” by Robert W. Sebesta (Sebesta) Chapter 10 Lecture', 
				webProgrammingLink('intro-to-ajax.mp4'), webProgrammingLink('intro-to-ajax-slides-only.pptx'))
			// Todo: Create and link a 'slides-only' version of database-access-through-the-web.mp4.
			case 'sebesta-chapter-13': return videoLinkWithSlides(
				'“Programming The World Wide Web” by Robert W. Sebesta (Sebesta) Chapter 13 Lecture', 
				webProgrammingLink('database-access-through-the-web.mp4'), 
				webProgrammingLink('database-access-through-the-web.pptx'))
			// End Sebesta.

			// Start Engineering Software as a Service: An Agile Approach Using Cloud Computing” by Armando Fox and 
			//     David Patterson (Fox).
			// Todo: Create and link 'slides-only' versions of Fox lectures.
			case 'fox-chapter-00': return videoLinkWithSlides(
				'“Engineering Software as a Service: An Agile Approach Using Cloud Computing” by Armando Fox and David Patterson (Fox) Preface Lecture', 
				foxLink('chapter-00-lecture.mp4'), foxLink('chapter-00-lecture.pptx'))
			case 'fox-chapter-01': return videoLinkWithSlides(
				'“Engineering Software as a Service: An Agile Approach Using Cloud Computing” by Armando Fox and David Patterson (Fox) Chapter 1 Lecture', 
				foxLink('chapter-01-lecture.mp4'), foxLink('chapter-01-lecture.pptx'))
			case 'fox-chapter-02': return videoLinkWithSlides(
				'“Engineering Software as a Service” by Armando Fox and David Patterson (Fox) Chapter 2 Lecture', 
				foxLink('chapter-02-lecture.mp4'), foxLink('chapter-02-lecture.pptx'))
			case 'fox-chapter-03': return videoLinkWithSlides(
				'“Engineering Software as a Service” by Armando Fox and David Patterson (Fox) Chapters 3-5 Lecture', 
				foxLink('chapter-03-lecture.mp4'), foxLink('chapter-03-lecture.pptx'))
			case 'fox-chapter-06': return videoLinkWithSlides(
				'“Engineering Software as a Service” by Armando Fox and David Patterson (Fox) Chapter 6 Lecture', 
				foxLink('chapter-06-lecture.mp4'), foxLink('chapter-06-lecture.pptx'))
			case 'fox-chapter-07': return videoLinkWithSlides(
				'“Engineering Software as a Service” by Armando Fox and David Patterson (Fox) Chapter 7 Lecture', 
				foxLink('chapter-07-lecture.mp4'), foxLink('chapter-07-lecture.pptx'))
			case 'fox-chapter-08': return videoLinkWithSlides(
				'“Engineering Software as a Service” by Armando Fox and David Patterson (Fox) Chapter 8 Lecture', 
				foxLink('chapter-08-lecture.mp4'), foxLink('chapter-08-lecture.pdf'))
			// End Fox.

			default: return 'Activity not found!'
		}
	}

	render() {
		return (
			<div>
				<h4>{getClass().title}</h4>
				{this.activity()}
			</div>
		)
	}
}

export { Activity }