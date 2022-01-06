import { AIDAN_ROUTE, aidan } from './Aidan';
import { ARDUINO_DRONE_ROUTE, arduinoDrone } from './ArduinoDrone';
import { CLASS_PRODUCT_SPRINT_1_ROUTE, classProductSprint1 } from './ClassProduct';
import { DELIVERY_DRONE_ROUTE, deliveryDrone } from './DeliveryDrone';
import { GETTING_TO_KNOW_EACH_OTHER_ABBREVIATED_ROUTE, gettingToKnowEachOtherAbbreviated } from './WebGettingToKnowEachOtherAbbreviated';
import { SEAT_SELECTOR_MERN_ROUTE, seatSelectorMERN } from './SeatSelectorMERN';
import { PIT_HUB_ROUTE, pitHub } from './PitHub';
import { QUIZ_MASTER_MERN_ROUTE, quizMasterMERN } from './QuizMasterMERN';

const BASE_ACTIVITY_URL = '/activity/'
export const makeInternalURL = (activityRoute) => {
	return BASE_ACTIVITY_URL + activityRoute
}

export const routeActivity = (activityRoute) => {
	switch(activityRoute) {
		case AIDAN_ROUTE: return aidan()
		case ARDUINO_DRONE_ROUTE: return arduinoDrone()
		case CLASS_PRODUCT_SPRINT_1_ROUTE: return classProductSprint1()
		case DELIVERY_DRONE_ROUTE: return deliveryDrone()
		case GETTING_TO_KNOW_EACH_OTHER_ABBREVIATED_ROUTE: return gettingToKnowEachOtherAbbreviated()
		case SEAT_SELECTOR_MERN_ROUTE: return seatSelectorMERN()
		case PIT_HUB_ROUTE: return pitHub()
		case QUIZ_MASTER_MERN_ROUTE: return quizMasterMERN()

		default: return null
	}
}
