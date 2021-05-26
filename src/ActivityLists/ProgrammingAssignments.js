import React from 'react'
import { NavLink } from 'react-router-dom'

export const ToolsOfTheTradePart1 = {
	'name':'“Tools of the Trade - Part 1”',
	'link':'/activity/tools',
	'estimate':'~2 hours'
}

export const ToolsOfTheTradeParts1And2 = {
	'name':'“Tools of the Trade” parts 1 and 2',
	'link':'/activity/tools',
	'estimate':'~3 hours'
}

export const HTMLProgrammingPart1 = {
	'name':'“HTML Programming - Part 1” from W3C',
	'link':'/activity/html',
	'estimate':'~2 hours'
}

export const HelloWorldWithPython = {
	'name':'“Hello World with Python”',
	'link':'/activity/hello-world-python',
	'estimate':'~3 hours'
}

export const NumberingSystemsWithPython = {
	'name':'“Numbering Systems with Python”',
	'link':'/activity/numbering-systems-python',
	'estimate':'~3 hours'
}

export const GettingToKnowEachOther = {
	'name':'“Getting to Know Each Other”',
	'link':'/activity/getting-to-know-each-other',
	'estimate':'~6 hours'
}

export const AssignmentPortfolioWebsite = {
	'name':'“Assignment Portfolio”',
	'link':'/activity/assignment-portfolio',
	'estimate':'~2 hours'	
}

export const MatchmakerWithPython = {
	'name':'“Matchmaker with Python”',
	'link':'/activity/matchmaker-python',
	'estimate':'~6 hours'
}

export const MatchmakerWithJava = {
	'name':'“Matchmaker with Java”',
	'link':'/activity/matchmaker-java',
	'estimate':'~6 hours'
}

export const MatchmakerForTheWeb = {
	'name':'“Matchmaker for the Web”',
	'link':'/activity/matchmaker-web',
	'estimate':'~6 hours'
}

export const MatchmakerWithGo = {
	'name':'“Matchmaker with Go”',
	'link':'/activity/matchmaker-go',
	'estimate':'~6 hours'
}

export const HealthRiskCalculatorForTheWeb = {
	'name':'“Health Insurance Risk Calculator for the Web”',
	'link':'/activity/health-risk-calculator-web',
	'estimate':'~6 hours'
}

export const OvalDrawPlusWithJava = {
	'name':'“OvalDraw Plus”',
	'link':'/activity/ovaldraw-plus-java',
	'estimate':'~4 hours'
}

export const CodingStandardsValidatorPart1 = {
	'name':'“Coding Standards Validator - Part 1”',
	'link':'/activity/coding-standards-validator',
	'estimate':'~8 hours'
}

export const CodingStandardsValidatorPart2 = {
	'name':'“Coding Standards Validator - Part 2”',
	'link':'/activity/coding-standards-validator',
	'estimate':'~8 hours'
}

export const QuizMaster = {
	'name':'“QuizMaster Server”',
	'link':'/activity/quiz-master',
	'estimate':'~8 hours'
}

export const FaceDrawWithJava = {
	'name':'“FaceDraw”',
	'link':'/activity/facedraw-java',
	'estimate':'~8 hours'
}

export const MosaicWithJava = {
	'name':'“Mosaic”',
	'link':'/activity/mosaic-java',
	'estimate':'~8 hours'
}

export const MosaicWithReact = {
	'name':'“Mosaic with React”',
	'link':'/activity/mosaic-react',
	'estimate':'~8 hours'
}

export const MosaicV2WithReact = {
	'name':'“Mosaic with React version 2”',
	'link':'/activity/mosaic-v2-react',
	'estimate':'~6 hours'
}

export const SwissArmyKnifeWithJava = {
	'name':'“SwissArmyKnife”',
	'link':'/activity/swiss-army-knife-java',
	'estimate':'~8 hours'
}

export const SwissArmyKnifeWithJavaV2 = {
	'name':'“SwissArmyKnife version 2”',
	'link':'/activity/swiss-army-knife-java-v2',
	'estimate':'~8 hours'
}

export const ThunderbirdWithJava = {
	'name':'“Thunderbird”',
	'link':'/activity/thunderbird-java',
	'estimate':'~6 hours'
}

export const TurtleDraw = {
	'name':'“TurtleDraw”',
	'link':'/activity/turtle-draw',
	'estimate':'~8 hours'
}

export const FinalProjectProposal = {
	'name':'“Final Project Proposal”',
	'link':'/activity/final-project-proposal',
	'estimate':'~2 hours'
}

export const FinalProject = {
	'name':'your “Final Project”',
	'link':'/activity/final-project',
	'estimate':'~12 hours per team member'
}

export const FinalProjectSprint0 = {
	'name':'“Final Project Sprint 0”',
	'link':'/activity/final-project-sprint-0',
	'estimate':'~4 hours'
}

export const FinalProjectSprint1 = {
	'name':'“Final Project Sprint 1”',
	'link':'/activity/final-project-sprint-1',
	'estimate':'~8 hours per team member'
}

export const FinalProjectSprint2 = {
	'name':'“Final Project Sprint 2”',
	'link':'/activity/final-project-sprint-2',
	'estimate':'~10 hours per team member'
}

export const FinalProjectSprint3 = {
	'name':'“Final Project Sprint 3”',
	'link':'/activity/final-project-sprint-3',
	'estimate':'~12 hours per team member'
}

export const AzureWebsite = {
	'name':'“Azure Website”',
	'link':'/activity/azure-website',
	'estimate':'~6 hours'
}

export const start = (assignment) => { 
	if (assignment != null) 
		return ( <div>Start working on {assignment.name} <NavLink to={assignment.link}>[link]</NavLink></div>)
}

export const StartProgrammingActivity = (assignment) => {
	if (assignment != null) 
		return ( <div><li>Start working on {assignment.name} <NavLink to={assignment.link}>[link]</NavLink></li></div> )
}

export const reviewAndUpdate = (assignment) => { 
	return ( <div>Review and update your {assignment.name} <NavLink to={assignment.link}>[link]</NavLink></div>) 
}

export const reviewAndUpdateProgrammingActivity = (assignment) => { 
	if (assignment != null) 
	return ( <div><li>Review and update your {assignment.name} <NavLink to={assignment.link}>[link]</NavLink></li></div> )
}

export const complete = (assignment) => { 
	return ( <div>Complete {assignment.name} <NavLink to={assignment.link}>[link]</NavLink>{sup(assignment.estimate)}</div>)
}

export const ProgrammingActivity = (assignment, estimatedTime) => { 
	if (assignment != null) {
		let estimate = assignment.estimate
		if (estimatedTime != null) {
			if (estimatedTime === 1)
				estimate = '~'+estimatedTime+' hour'
			else
				estimate = '~'+estimatedTime+' hours'
		} 

		return ( <div><li>Complete {assignment.name} <NavLink to={assignment.link}>[link]</NavLink>{sup(estimate)}</li></div> )
	}
}

const sup = (text) => { return (<sup> {text} </sup>)}