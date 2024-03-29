import React from 'react'
import { NavLink } from 'react-router-dom'


export const ToolsOfTheTrade = {
	'name':'Tools of the Trade',
	'link':'/activity/tools',
	'estimate':'~3 hours'
}

export const HTMLProgrammingPart1 = {
	'name':'HTML Programming - Part 1',
	'link':'/activity/html',
	'estimate':'~2 hours'
}

export const HTMLProgrammingParts1And2 = {
	'name':'HTML Programming - Parts 1 and 2',
	'link':'/activity/html',
	'estimate':'~3 hours'
}

export const HelloWorldWithPython = {
	'name':'Hello World with Python',
	'link':'/activity/hello-world-python',
	'estimate':'~3 hours'
}

export const NumberingSystemsWithPython = {
	'name':'Numbering Systems with Python',
	'link':'/activity/numbering-systems-python',
	'estimate':'~3 hours'
}

export const GettingToKnowEachOther = {
	'name':'Getting to Know Each Other',
	'link':'/activity/getting-to-know-each-other',
	'estimate':'~6 hours'
}

export const GettingToKnowEachOthersTeams = {
	'name':'Getting to Know Each Others Teams',
	'link':'/activity/getting-to-know-each-others-teams',
	'estimate':'~4 hours'
}

export const MapManiaLite = {
	'name':'Map Mania Lite',
	'link':'/activity-web/map-mania-lite',
	'estimate':'~2 hours'
}

export const MapManiaVersion1 = {
	'name':'Map Mania Version 1',
	'link':'/activity/map-mania-v1',
	'estimate':'~6 hours'
}

export const MapManiaVersion2 = {
	'name':'Map Mania Version 2',
	'link':'/activity/map-mania-v2',
	'estimate':'~12 hours'
}

export const DiceRoller = {
	'name':'Dice Roller',
	'link':'/activity/dice-roller',
	'estimate':'~2 hours'
}

export const FavoriteHobby = {
	'name':'My Favorite Hobby',
	'link':'/activity/favorite-hobby',
	'estimate':'~3 hours'
}

export const Resume = {
	'name':'Web Resume',
	'link':'/activity/resume',
	'estimate':'~3 hours'
}

export const AssignmentPortfolioWebsite = {
	'name':'Assignment Portfolio',
	'link':'/activity/assignment-portfolio',
	'estimate':'~2 hours'	
}

export const AssignmentPortfolioWebsiteWithNodeJS = {
	'name':'Assignment Portfolio with Node.js',
	'link':'/activity/assignment-portfolio-with-node-js',
	'estimate':'~4 hours'	
}

export const MatchmakerWithPython = {
	'name':'Matchmaker with Python',
	'link':'/activity/matchmaker-python',
	'estimate':'~6 hours'
}

export const MatchmakerWithJava = {
	'name':'Matchmaker with Java',
	'link':'/activity/matchmaker-java',
	'estimate':'~6 hours'
}

export const MatchmakerForTheWeb = {
	'name':'Matchmaker for the Web',
	'link':'/activity/matchmaker-web',
	'estimate':'~6 hours'
}

export const HealthRiskCalculatorPython = {
	'name':'Health Insurance Risk Calculator with Python',
	'link':'/activity/health-risk-calculator-python',
	'estimate':'~8 hours'
}

export const HealthRiskCalculatorForTheWeb = {
	'name':'Health Insurance Risk Calculator for the Web',
	'link':'/activity/health-risk-calculator-web',
	'estimate':'~8 hours'
}

export const HealthRiskCalculatorTeamForTheWeb = {
	'name':'Health Insurance Risk Calculator for the Web with Teams',
	'link':'/activity/health-risk-calculator-team-web',
	'estimate':'~6 hours'
}

export const OvalDrawPlusWithJava = {
	'name':'“OvalDraw Plus”',
	'link':'/activity/ovaldraw-plus-java',
	'estimate':'~4 hours'
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

export const TurtleDraw = {
	'name':'TurtleDraw',
	'link':'/activity/turtle-draw',
	'estimate':'~8 hours'
}

export const MustangV2 = {
	'name':'Mustang version 2',
	'link':'/activity/mustang-v2',
	'estimate':'~8 hours'
}

export const FinalProjectProposal = {
	'name':'Final Project Proposal',
	'link':'/activity/final-project-proposal',
	'estimate':'~2 hours'
}

export const FinalProject = {
	'name':'your “Final Project”',
	'link':'/activity/final-project',
	'estimate':'~12 hours per team member'
}

export const FinalProjectSprint7 = {
	'name':'“Final Project Sprint 7”',
	'link':'/activity/final-project-sprint-7',
	'estimate':'~10 hours per team member'
}

export const FinalProjectSprint8 = {
	'name':'“Final Project Sprint 8”',
	'link':'/activity/final-project-sprint-8',
	'estimate':'~12 hours per team member'
}

export const AzureWebsite = {
	'name':'Azure Website',
	'link':'/activity/azure-website',
	'estimate':'~6 hours'
}

export const start = (assignment) => { 
	if (assignment != null) 
		return ( <div>Start working on {assignment.name} <NavLink to={assignment.link}>[link]</NavLink></div>)
}

export const StartProgrammingActivity = (assignment) => {
	if (assignment != null) 
		return ( <div><li>Start working on <NavLink to={assignment.link}>{assignment.name}</NavLink></li></div> )
}

export const ProgrammingAssignmentToLink = (assignment) => {
	return ( <NavLink to={assignment.link}>{assignment.name}</NavLink> )
}

export const startActivity = (assignment) => {
	if (assignment != null) 
		return ( <div>Start working on <NavLink to={assignment.link}>{assignment.name}</NavLink></div> )
}

export const reviewAndUpdate = (assignment) => { 
	return ( <div>Review and update your <NavLink to={assignment.link}>{assignment.name}</NavLink></div>) 
}

export const reviewAndUpdateProgrammingActivity = (assignment) => { 
	if (assignment != null) 
	return ( <div><li>Review and update your {assignment.name} <NavLink to={assignment.link}>[link]</NavLink></li></div> )
}

export const complete = (assignment) => { 
	return ( <div>Complete <NavLink to={assignment.link}>{assignment.name}</NavLink>{sup(assignment.estimate)}</div>)
}

export const completeActivity = (assignment) => { 
	return ( <div>Complete <NavLink to={assignment.link}>{assignment.name}</NavLink>{sup(assignment.estimate)}</div>)
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

		return ( <div><li>Complete <NavLink to={assignment.link}>{assignment.name}</NavLink>{sup(estimate)}</li></div> )
	}
}

export const Activity = (assignment) => { 
	return ( <NavLink to={assignment.link}>{assignment.name}</NavLink> )
}

export const ReviewProgrammingActivity = (assignment, estimatedTime) => {
	if (assignment != null) {
		let estimate = assignment.estimate
		if (estimatedTime != null) {
			if (estimatedTime === '1')
				estimate = '~'+estimatedTime+' hour'
			else
				estimate = '~'+estimatedTime+' hours'
		} 

		return ( <div><li>Review <NavLink to={assignment.link}>{assignment.name}</NavLink>{sup(estimate)}</li></div> )
	}
}

const sup = (text) => { return (<sup> {text} </sup>)}

export const ProgrammingActivityPlus = (assignment, estimatedTime, additionalText) => { 
	if (assignment != null) {
		let estimate = assignment.estimate
		if (estimatedTime != null) {
			if (estimatedTime === 1)
				estimate = '~'+estimatedTime+' hour'
			else
				estimate = '~'+estimatedTime+' hours'
		} 

		return ( <div><li>Complete <NavLink to={assignment.link}>{assignment.name}</NavLink> {additionalText}{sup(estimate)} </li></div> )
	}
}

export const AlternativeProgrammingActivity = (assignmentAlternative, assignmentDefault) => { 
	return ( <div>Consider substituting <NavLink to={assignmentAlternative.link}>{assignmentAlternative.name}</NavLink> (preferred) 
		for <NavLink to={assignmentDefault.link}>{assignmentDefault.name}</NavLink></div> )
}

