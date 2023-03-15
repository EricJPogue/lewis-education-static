import { orderedListSlide, scrumProcess } from './SLSprint00'

export const insertInto = (destinationDeck, sourceDeck, atDestinationIndex) => {
	let returnSlideDeck = destinationDeck
	for (var insertSlideIndex = 0; insertSlideIndex < sourceDeck.length; insertSlideIndex++) {
		returnSlideDeck.splice(atDestinationIndex+insertSlideIndex, 0, sourceDeck[insertSlideIndex])
	}
	return returnSlideDeck
} 

export const sprintPlanningSlideDeck = (sprint) => {
	const intro = () => {
		return orderedListSlide('Sprint Planning Goal & Steps', 
			`Each team member will **request** and commit to multiple User Stories that have a total story point 
			estimate approximately equal to their sprint ${sprint} capacity by utilizing the following steps:`, [
				'Priorities and Roles',
				'“Done”',
				`Product Backlog Grooming`, 
				`Sprint ${sprint} Planning` ]
		)
	}
	const prioritiesAndRoles = () => {
		return orderedListSlide('Step 1: Priorities and Roles', 
			'Scrum priorities and associated roles include:', [
				'Customer & Product Owner',
				'Technology & Architect (optional)',
				'Process & Scrum Master' ])
	} 
	const done = () => {
		return orderedListSlide('Step 2: “Done”', 
			'Update your team’s definition of “Done” by:', [
				'Verifying your definition of Done includes that stories are deployed and available to Demo in production',
				'Including at least one team specific item (i.e. “Demoed to Product Owner” or “Test in production”)',
				'Document your definition of Done by creating a “done.md” file in the root of your product repository' ])
	} 
	const productBacklogGrooming = () => {
		return orderedListSlide('Step 3: Product Backlog Grooming', 
			'Product Owner leads your team’s Product Backlog Grooming of stories so that the backlog includes:', [
				'Permanent unique identifiers for each story',
				'Only valid stories',
				'Only a “small” percentage of spikes',
				'Story point estimates for each story based on “Done” and assuming that 1 story point ~ 1 hour effort',
				'Updated or split stories for any story that is too large to complete in a single sprint',
				'Force ranked stories',
				`More estimated stories than your team can get Done in sprint ${sprint}` ])
	}
	const planning = () => {
		return orderedListSlide('Step 4: Sprint Planning', 
			'Create your team’s Sprint Backlog by:', [
				'Team members requesting highest priority stories', 
				`Product Owner **Moving** requested highest priority stories to the Sprint ${sprint} Backlog`,
				'Assigning each story to a **single** team member',
				'Maintaining the force ranking of stories as they are moved to the Sprint Backlog',
				`Creating the team’s **immutable** Sprint ${sprint} Backlog`,
				'Documenting the Sprint Backlog including team capacity plus stories and story points committed',
				'Making commitments while recalling that it is okay to be wrong, but not okay to be ambiguous' ])
	}

	return [ intro, scrumProcess, prioritiesAndRoles, done, scrumProcess, productBacklogGrooming, scrumProcess, planning ]
} 