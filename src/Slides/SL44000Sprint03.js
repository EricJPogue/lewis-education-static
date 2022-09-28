import { xyz_n_1of6 } from './SL00000Sprint00'
import { tPreworkWithLogo, submissionPercentage } from './SLSprint00'

import { list44000Sprint02 } from '../ActivityLists/AL44000Sprint02' 
import { list44000Sprint03 } from '../ActivityLists/AL44000Sprint03'

import { ics_3_1of6_prework_list, ics_3_1of6_agenda_list  } from './SL20000Sprint03'

const sprint = 3
const activityListPrevious = () => { return list44000Sprint02(sprint-1) }
const activityList = () => { return list44000Sprint03(sprint) }

export const se_3_1of6_prework_list = ics_3_1of6_prework_list
const se_3_1of6_agenda_list = ics_3_1of6_agenda_list
export const se_3_1of6 = () => { return xyz_n_1of6(sprint, se_3_1of6_prework_list, activityListPrevious, se_3_1of6_agenda_list, se_3_2of6_prework_list, activityList) }

// Todo: Review if we still want to continue to swap Wednesday and Friday sessions. If not, make appropriate changes to slides.
const se_3_2of6_prework_list = [
	'Complete through activity 4 prior to next class', '',
	'Be prepared for team Discussion 2 and Lab' ]
export const se_3_2of6 = () => {
	const prework = () => { return tPreworkWithLogo('Prework For Today', se_3_2of6_prework_list, sprint, activityList) }

	return [ prework ]
}



const se_3_3of6_prework_list = [
	'Complete through activity 7 prior to next class', '',
	`Be prepared for sprint ${sprint-1} demos and retrospectives`,
	'Those scheduled to demo on Wednesday please be a couple of minutes early to class' ]
export const se_3_3of6 = () => {
	const prework = () => { return tPreworkWithLogo('Prework For Today', se_3_3of6_prework_list, sprint, activityList) }

	const metricsSubmissionPercentage = () => {
		return submissionPercentage([
			{ name: 'Discussion', due:14, submitted:13 },
			{ name: 'Quiz', due:14, submitted:14 },
			{ name: 'Lab', due:14, submitted:12 },
			{ name: 'Reflection', due: 14, submitted: 13 }
		])
	}
	return [ prework, metricsSubmissionPercentage ]
}


// Todo: Where do these topics fit?
/*
Team discusses topics while the presenter summarizes the topics below:
Chapter 3 Introduction to Ruby… how do we create non-objects in Ruby?
Chapter 4 Introduction to Rails… how do we create a non-model-view-controller Rails application?
Chapter 5 Advanced Rails… authentication? Is the Ruby/Rails framework opinionated? Is that good or bad?
A.6 Git and Version Control and A.7 GitHub
ORM (Object-Relational-Mapper) and NoSQL Databases
*/
