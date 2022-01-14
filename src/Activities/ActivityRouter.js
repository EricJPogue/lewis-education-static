import { AIDAN_ROUTE, aidan } from './Aidan'
import { ARDUINO_DRONE_ROUTE, arduinoDrone } from './ArduinoDrone'
import { ASSIGNMENT_PORTFOLIO_ROUTE, assignmentPortfolio } from './WebAssignmentPortfolio'
import { AZURE_WEBSITE_ROUTE, azureWebsite } from './AzureWebsite'
import { CLASS_PRODUCT_SPRINT_1_ROUTE, classProductSprint1 } from './ClassProduct'
import { DELIVERY_DRONE_ROUTE, deliveryDrone } from './DeliveryDrone'
import { FAVORITE_HOBBY_ROUTE, favoriteHobby} from './WebMyFavoriteHobby'
import { GETTING_TO_KNOW_EACH_OTHER_ROUTE, gettingToKnowEachOther } from './WebGettingToKnowEachOther'
import { GETTING_TO_KNOW_EACH_OTHER_ABBREVIATED_ROUTE, gettingToKnowEachOtherAbbreviated } from './WebGettingToKnowEachOtherAbbreviated'
import { GETTING_TO_KNOW_EACH_OTHER_TEAMS_ROUTE, gettingToKnowEachOthersTeams } from './WebGettingToKnowEachOthersTeams'
import { OVAL_DRAW_PLUS_JAVA_ROUTE, ovalDrawPlusJava } from './OvalDrawPlus'
import { SEAT_SELECTOR_MERN_ROUTE, seatSelectorMERN } from './SeatSelectorMERN'
import { PIT_HUB_ROUTE, pitHub } from './PitHub'
import { QUIZ_MASTER_MERN_ROUTE, quizMasterMERN } from './QuizMasterMERN'
import { WEB_RESUME_ROUTE, webResume } from './WebResume'

const BASE_ACTIVITY_URL = '/activity/'
export const makeInternalURL = (activityRoute) => {
	return BASE_ACTIVITY_URL + activityRoute
}

export const routeActivity = (activityRoute) => {
	switch(activityRoute) {
		case AIDAN_ROUTE: return aidan()
		case ARDUINO_DRONE_ROUTE: return arduinoDrone()
		case ASSIGNMENT_PORTFOLIO_ROUTE: return assignmentPortfolio()
		case AZURE_WEBSITE_ROUTE: return azureWebsite()
		case CLASS_PRODUCT_SPRINT_1_ROUTE: return classProductSprint1()
		case DELIVERY_DRONE_ROUTE: return deliveryDrone()
		case FAVORITE_HOBBY_ROUTE: return favoriteHobby()
		case GETTING_TO_KNOW_EACH_OTHER_ROUTE: return gettingToKnowEachOther()
		case GETTING_TO_KNOW_EACH_OTHER_ABBREVIATED_ROUTE: return gettingToKnowEachOtherAbbreviated()
		case GETTING_TO_KNOW_EACH_OTHER_TEAMS_ROUTE: return gettingToKnowEachOthersTeams()
		case OVAL_DRAW_PLUS_JAVA_ROUTE: return ovalDrawPlusJava()
		case SEAT_SELECTOR_MERN_ROUTE: return seatSelectorMERN()
		case PIT_HUB_ROUTE: return pitHub()
		case QUIZ_MASTER_MERN_ROUTE: return quizMasterMERN()
		case WEB_RESUME_ROUTE: return webResume()

		default: return null
	}
}
