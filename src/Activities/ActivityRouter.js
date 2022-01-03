import { classProductSprint1Route, classProductSprint1 } from './ClassProduct';

export const routeActivity = (activityRoute) => {
	switch(activityRoute) {
		case classProductSprint1Route: return classProductSprint1()
		default: return null
	}
}
