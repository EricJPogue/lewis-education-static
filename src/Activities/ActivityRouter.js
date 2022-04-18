import { AIDAN_ROUTE, aidan } from './Aidan'
import { ARDUINO_DRONE_ROUTE, arduinoDrone } from './ArduinoDrone'
import { ASSIGNMENT_PORTFOLIO_ROUTE, assignmentPortfolio } from './WebAssignmentPortfolio'
import { assignmentPortfolioWithNodeJS, ASSIGNMENT_PORTFOLIO_NODEJS_ROUTE } from './WebAssignmentPortfolioWithNodeJS'
import { AZURE_WEBSITE_ROUTE, azureWebsite } from './AzureWebsite'
import { CLASS_PRODUCT_SPRINT_1_ROUTE, classProductSprint1 } from './ClassProduct'
import { CLASS_PRODUCT_SPRINT_2_ROUTE, classProductSprint2 } from './ClassProduct'
import { CLASS_PRODUCT_SPRINT_3_ROUTE, classProductSprint3 } from './ClassProduct'
import { CLASS_PRODUCT_SPRINT_4_ROUTE, classProductSprint4 } from './ClassProduct'
import { CLASS_PRODUCT_SPRINT_5_ROUTE, classProductSprint5 } from './ClassProduct'
import { CLASS_PRODUCT_SPRINT_6_ROUTE, classProductSprint6 } from './ClassProduct'
import { CLASS_PRODUCT_SPRINT_7_ROUTE, classProductSprint7 } from './ClassProduct'
import { DELIVERY_DRONE_ROUTE, deliveryDrone } from './DeliveryDrone'
import { FACEDRAW_JAVA_ROUTE, faceDrawJava } from './FaceDraw'
import { FAVORITE_HOBBY_ROUTE, favoriteHobby} from './WebMyFavoriteHobby'
import { FINAL_PROJECT_PROPOSAL_ROUTE, finalProjectProposal } from './FinalProjectProposal'
import { FINAL_PROJECT_SPRINT_5_ROUTE, finalProjectSprint5 } from './FinalProject'
import { FINAL_PROJECT_SPRINT_6_ROUTE, finalProjectSprint6 } from './FinalProject'
import { FINAL_PROJECT_SPRINT_7_ROUTE, finalProjectSprint7 } from './FinalProject'
import { GETTING_TO_KNOW_EACH_OTHER_ROUTE, gettingToKnowEachOther } from './WebGettingToKnowEachOther'
import { GETTING_TO_KNOW_EACH_OTHER_ABBREVIATED_ROUTE, gettingToKnowEachOtherAbbreviated } from './WebGettingToKnowEachOtherAbbreviated'
import { GETTING_TO_KNOW_EACH_OTHER_TEAMS_ROUTE, gettingToKnowEachOthersTeams } from './WebGettingToKnowEachOthersTeams'
import { HEALTH_RISK_CALCULATOR_TEAM_WEB_ROUTE, healthRiskCalculatorTeamWeb } from './HealthRiskCalculatorTeam'
import { MATCHMAKER_PYTHON_ROUTE, matchmakerPython } from './Matchmaker'
import { MATCHMAKER_WEB_ROUTE, matchmakerWeb } from './Matchmaker'
import { MOSAIC_JAVA_ROUTE, mosaicJava } from './Mosaic'
import { MUSTANG_ROUTE, mustang } from './MustangVersion1'
import { NUMBERING_SYSTEMS_ROUTE, numberingSystems } from './PythonNumberingSystems'
import { OVAL_DRAW_PLUS_JAVA_ROUTE, ovalDrawPlusJava } from './OvalDrawPlus'
import { SEAT_SELECTOR_MERN_ROUTE, seatSelectorMERN } from './SeatSelectorMERN'
import { SWISS_ARMY_KNIFE_ROUTE, swissArmyKnife } from './SwissArmyKnife'
import { SWISS_ARMY_KNIFE_V2_ROUTE, swissArmyKnifeV2 } from './SwissArmyKnife'
import { thunderbird } from './Thunderbird'
import { TURTLEDRAW_ROUTE, turtledraw } from './PythonTurtleDraw'
import { PIT_HUB_ROUTE, pitHub } from './PitHub'
import { QUIZ_MASTER_MERN_ROUTE, quizMasterMERN } from './QuizMasterMERN'
import { WEB_RESUME_ROUTE, webResume } from './WebResume'

import { introductionToReact } from './IntroductionToReact'
import { finalProject } from './FinalProject'

// const BASE_ACTIVITY_URL = '/activity/'
export const makeInternalURL = (activityRoute) => {
	return BASE_ACTIVITY_ROUTE + activityRoute
}
export const BASE_ACTIVITY_ROUTE = '/activity/'

export const routeActivity = (activityRoute) => {
	switch(activityRoute) {
		case AIDAN_ROUTE: return aidan()
		case ARDUINO_DRONE_ROUTE: return arduinoDrone()
		case ASSIGNMENT_PORTFOLIO_ROUTE: return assignmentPortfolio()
		case ASSIGNMENT_PORTFOLIO_NODEJS_ROUTE: return assignmentPortfolioWithNodeJS()
		case AZURE_WEBSITE_ROUTE: return azureWebsite()
		case CLASS_PRODUCT_SPRINT_1_ROUTE: return classProductSprint1()
		case CLASS_PRODUCT_SPRINT_2_ROUTE: return classProductSprint2()
		case CLASS_PRODUCT_SPRINT_3_ROUTE: return classProductSprint3()
		case CLASS_PRODUCT_SPRINT_4_ROUTE: return classProductSprint4()
		case CLASS_PRODUCT_SPRINT_5_ROUTE: return classProductSprint5()
		case CLASS_PRODUCT_SPRINT_6_ROUTE: return classProductSprint6()
		case CLASS_PRODUCT_SPRINT_7_ROUTE: return classProductSprint7()
		case DELIVERY_DRONE_ROUTE: return deliveryDrone()
		case FACEDRAW_JAVA_ROUTE: return faceDrawJava()
		case FAVORITE_HOBBY_ROUTE: return favoriteHobby()
		case FINAL_PROJECT_PROPOSAL_ROUTE: return finalProjectProposal()
		case FINAL_PROJECT_SPRINT_5_ROUTE: return finalProjectSprint5()
		case FINAL_PROJECT_SPRINT_6_ROUTE: return finalProjectSprint6()
		case FINAL_PROJECT_SPRINT_7_ROUTE: return finalProjectSprint7()
		case GETTING_TO_KNOW_EACH_OTHER_ROUTE: return gettingToKnowEachOther()
		case GETTING_TO_KNOW_EACH_OTHER_ABBREVIATED_ROUTE: return gettingToKnowEachOtherAbbreviated()
		case GETTING_TO_KNOW_EACH_OTHER_TEAMS_ROUTE: return gettingToKnowEachOthersTeams()
		case HEALTH_RISK_CALCULATOR_TEAM_WEB_ROUTE: return healthRiskCalculatorTeamWeb()
		case MATCHMAKER_PYTHON_ROUTE: return matchmakerPython()
		case MATCHMAKER_WEB_ROUTE: return matchmakerWeb()
		case MOSAIC_JAVA_ROUTE: return mosaicJava()
		case MUSTANG_ROUTE: return mustang()
		case NUMBERING_SYSTEMS_ROUTE: return numberingSystems()
		case OVAL_DRAW_PLUS_JAVA_ROUTE: return ovalDrawPlusJava()
		case SEAT_SELECTOR_MERN_ROUTE: return seatSelectorMERN()
		case SWISS_ARMY_KNIFE_ROUTE: return swissArmyKnife()
		case SWISS_ARMY_KNIFE_V2_ROUTE: return swissArmyKnifeV2()
		case TURTLEDRAW_ROUTE: return turtledraw()
		case PIT_HUB_ROUTE: return pitHub()
		case QUIZ_MASTER_MERN_ROUTE: return quizMasterMERN()
		case WEB_RESUME_ROUTE: return webResume()

		case introductionToReact.route: return introductionToReact.function()
		case thunderbird.route: return thunderbird.function()
		case finalProject.route: return finalProject.function()

		default: return null
	}
}
