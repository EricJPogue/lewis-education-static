// Introduction to Computer Science (ICS) sprint 7 global values.
const sprint = 7
const activityListPrevious = () => { return list20000Sprint06(sprint-1) }
const activityList = () => { return list20000Sprint07(sprint) }

// Session 1 of 6: Monday
export const ics_7_1of6_PAaA = xyz_n_1of6_lists(sprint)
export const ics_7_1of6 = () => { return [ tNoClassToday ] }

// Session 2 of 6: Wednesday
export const ics_7_2of6_PAaA = xyz_n_1of6_lists(sprint)
export const ics_7_2of6 = () => { 
	const sprintPlanning = () => {
		return orderedListSlide('Sprint Planning as a Class', `Sprint ${sprint} Expectations:`, [
			'Similar to previous sprints with Discussion, Quiz, Lab, and Reflection',
			'We missed Monday due to the Easter Holiday recess which is challenging',
			'Demos will be occurring Friday... including Aidan',
			'We will complete our scrum team Discussion Board on Friday',
			`We will have sprint ${sprint-1} Retrospective on Friday also if possible` ])
	}

	return xyz_n_1of6(sprint, ics_7_1of6_PAaA.prework, activityListPrevious, ics_7_1of6_PAaA.agenda, ics_7_4of6_PAaA.prework, activityList, sprintPlanning) 
}