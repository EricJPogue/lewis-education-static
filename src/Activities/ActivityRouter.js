import { AIDAN_ROUTE, aidan } from './Aidan'
import { AMAZERIFFIC_FULL_STACK_ROUTE, amazerifficFullStack } from './AmazerifficFullStack'
import { ARDUINO_DRONE_ROUTE, arduinoDrone } from './ArduinoDrone'
import { ASSIGNMENT_PORTFOLIO_ROUTE, assignmentPortfolio } from './WebAssignmentPortfolio'
import { ASSIGNMENT_PORTFOLIO_NODEJS_ROUTE, assignmentPortfolioWithNodeJS } from './WebAssignmentPortfolioWithNodeJS'
import { AZURE_FUNCTION_ROUTE, azureFunction } from './AzureFunction'
import { AZURE_STATIC_WEBSITE_ROUTE, azureStaticWebsite } from './AzureStaticWebsite'
import { AZURE_WEBSITE_ROUTE, azureWebsite } from './AzureWebsite'
import { CAPACITY_COMMITTED_EFFORT_DELIVERED_ROUTE, capacityCommittedEffortDelivered } from './CapacityCommittedEffortDelivered'
import { CLASS_PRODUCT_SPRINT_1_ROUTE, classProductSprint1 } from './ClassProduct'
import { CLASS_PRODUCT_SPRINT_2_ROUTE, classProductSprint2 } from './ClassProduct'
import { CLASS_PRODUCT_SPRINT_3_ROUTE, classProductSprint3 } from './ClassProduct'
import { CLASS_PRODUCT_SPRINT_4_ROUTE, classProductSprint4 } from './ClassProduct'
import { CLASS_PRODUCT_SPRINT_5_ROUTE, classProductSprint5 } from './ClassProduct'
import { CLASS_PRODUCT_SPRINT_6_ROUTE, classProductSprint6 } from './ClassProduct'
import { CLASS_PRODUCT_SPRINT_7_ROUTE, classProductSprint7 } from './ClassProduct'
import { CLASS_PRODUCT_SPRINT_8_ROUTE, classProductSprint8 } from './ClassProduct'
import { CODING_STANDARDS_VALIDATOR_ROUTE, codingStandardsValidator } from './CodingStandards'
import { DELIVERY_DRONE_ROUTE, deliveryDrone } from './DeliveryDrone'
import { FACEDRAW_JAVA_ROUTE, faceDrawJava } from './FaceDraw'
import { FAVORITE_HOBBY_ROUTE, favoriteHobby } from './WebMyFavoriteHobby'
import { FINAL_PROJECT_PROPOSAL_ROUTE, finalProjectProposal } from './FinalProjectProposal'
import { FINAL_PROJECT_DISTRIBUTED_ROUTE, finalProjectDistributed } from './FinalProject'
import { FINAL_PROJECT_DISTRIBUTED_V2_ROUTE, finalProjectDistributedV2 } from './FinalProject'
import { FINAL_PROJECT_SPRINT_5_ROUTE, finalProjectSprint5 } from './FinalProject'
import { FINAL_PROJECT_SPRINT_6_ROUTE, finalProjectSprint6 } from './FinalProject'
import { FINAL_PROJECT_SPRINT_7_ROUTE, finalProjectSprint7 } from './FinalProject'
import { FINAL_PROJECT_SPRINT_8_ROUTE, finalProjectSprint8 } from './FinalProject'
import { GETTING_TO_KNOW_EACH_OTHER_ROUTE, gettingToKnowEachOther } from './WebGettingToKnowEachOther'
import { GETTING_TO_KNOW_EACH_OTHER_WEB_ROUTE, gettingToKnowEachOtherWeb } from './WebGettingToKnowEachOther'
import { GETTING_TO_KNOW_EACH_OTHER_ABBREVIATED_ROUTE, gettingToKnowEachOtherAbbreviated } from './WebGettingToKnowEachOtherAbbreviated'
import { GETTING_TO_KNOW_EACH_OTHER_TEAMS_ROUTE, gettingToKnowEachOthersTeams } from './WebGettingToKnowEachOthersTeams'
import { HEALTH_RISK_CALCULATOR_TEAM_WEB_ROUTE, healthRiskCalculatorTeamWeb } from './HealthRiskCalculatorTeam'
import { HELLO_WORLD_WEB_ROUTE, HelloWorldWeb } from './HelloWorld'
import { HELLO_WORLD_WEB_PART_1_ROUTE, HelloWorldWebPart1 } from './HelloWorld'
import { HELLO_WORLD_WEB_T1_ROUTE, HelloWorldWebT1 } from './HelloWorld'
import { LIONS_TIGERS_AND_BEARS_ROUTE, lionsTigersAndBears } from './LionsTigerAndBears'
import { MAP_MANIA_V1_ROUTE, mapManiaVersion1 } from './MapMania'
import { MAP_MANIA_V2_ROUTE, mapManiaVersion2 } from './MapMania'
import { MATCHMAKER_GO_ROUTE, matchmakerGo } from './Matchmaker'
import { MATCHMAKER_JAVA_ROUTE, matchmakerJava } from './Matchmaker'
import { MATCHMAKER_PYTHON_ROUTE, matchmakerPython } from './Matchmaker'
import { MATCHMAKER_WEB_ROUTE, matchmakerWeb } from './Matchmaker'
import { MOSAIC_JAVA_ROUTE, mosaicJava } from './Mosaic'
import { MUSTANG_ROUTE, mustang } from './MustangVersion1'
import { NUMBERING_SYSTEMS_ROUTE, numberingSystems } from './PythonNumberingSystems'
import { OVAL_DRAW_PLUS_JAVA_ROUTE, ovalDrawPlusJava } from './OvalDrawPlus'
import { SEAT_SELECTOR_MERN_ROUTE, seatSelectorMERN } from './SeatSelectorMERN'
import { SWISS_ARMY_KNIFE_ROUTE, swissArmyKnife } from './SwissArmyKnife'
import { SWISS_ARMY_KNIFE_V2_ROUTE, swissArmyKnifeV2 } from './SwissArmyKnife'
import { SWISS_ARMY_KNIFE_SERVER_ROUTE, swissArmyKnifeServer } from './SwissArmyKnifeServer'
import { thunderbird } from './Thunderbird'
import { TURTLEDRAW_ROUTE, turtledraw } from './PythonTurtleDraw'
import { PIT_HUB_ROUTE, pitHub } from './PitHub'
import { PYTHON_ADD_COMMIT_PUSH_ROUTE, pythonAddCommitPush } from './PythonAddCommitPush'
import { QUIZ_MASTER_MERN_ROUTE, quizMasterMERN } from './QuizMasterMERN'
import { WEB_DICE_ROLLER_ROUTE, webDiceRoller } from './WebDiceRoller'
import { WEB_RESUME_ROUTE, webResume } from './WebResume'

// The following includes represent an new alternative method of implementing activities.
import { introductionsWebsite } from './IntroductionsWebsite'
import { introductionToReact } from './IntroductionToReact'
import { finalProject } from './FinalProject'
import { goWebServer } from './GoWebServer'

export const BASE_ACTIVITY_ROUTE = '/activity/'
export const makeInternalURL = (activityRoute) => {
	return BASE_ACTIVITY_ROUTE + activityRoute
}

const activityIndex = [
	introductionsWebsite,
	introductionToReact,
	goWebServer
]

const getRender = (route) => {
		console.log('test')
		console.log(activityIndex)
		//activityIndex.forEach((item, index) => { 
		//	console.log(item, index)
		//})

}

export const routeActivity = (activityRoute) => {
	getRender(activityRoute)	
	switch(activityRoute) {
		case AIDAN_ROUTE: return aidan()
		case AMAZERIFFIC_FULL_STACK_ROUTE: return amazerifficFullStack()
		case ARDUINO_DRONE_ROUTE: return arduinoDrone()
		case ASSIGNMENT_PORTFOLIO_ROUTE: return assignmentPortfolio()
		case ASSIGNMENT_PORTFOLIO_NODEJS_ROUTE: return assignmentPortfolioWithNodeJS()
		case AZURE_FUNCTION_ROUTE: return azureFunction()
		case AZURE_STATIC_WEBSITE_ROUTE: return azureStaticWebsite()
		case AZURE_WEBSITE_ROUTE: return azureWebsite()
		case CAPACITY_COMMITTED_EFFORT_DELIVERED_ROUTE: return capacityCommittedEffortDelivered()
		case CLASS_PRODUCT_SPRINT_1_ROUTE: return classProductSprint1()
		case CLASS_PRODUCT_SPRINT_2_ROUTE: return classProductSprint2()
		case CLASS_PRODUCT_SPRINT_3_ROUTE: return classProductSprint3()
		case CLASS_PRODUCT_SPRINT_4_ROUTE: return classProductSprint4()
		case CLASS_PRODUCT_SPRINT_5_ROUTE: return classProductSprint5()
		case CLASS_PRODUCT_SPRINT_6_ROUTE: return classProductSprint6()
		case CLASS_PRODUCT_SPRINT_7_ROUTE: return classProductSprint7()
		case CLASS_PRODUCT_SPRINT_8_ROUTE: return classProductSprint8()
		case CODING_STANDARDS_VALIDATOR_ROUTE: return codingStandardsValidator()
		case DELIVERY_DRONE_ROUTE: return deliveryDrone()
		case FACEDRAW_JAVA_ROUTE: return faceDrawJava()
		case FAVORITE_HOBBY_ROUTE: return favoriteHobby()
		case FINAL_PROJECT_PROPOSAL_ROUTE: return finalProjectProposal()
		case FINAL_PROJECT_DISTRIBUTED_ROUTE: return finalProjectDistributed()
		case FINAL_PROJECT_DISTRIBUTED_V2_ROUTE: return finalProjectDistributedV2()
		case FINAL_PROJECT_SPRINT_5_ROUTE: return finalProjectSprint5()
		case FINAL_PROJECT_SPRINT_6_ROUTE: return finalProjectSprint6()
		case FINAL_PROJECT_SPRINT_7_ROUTE: return finalProjectSprint7()
		case FINAL_PROJECT_SPRINT_8_ROUTE: return finalProjectSprint8()
		case GETTING_TO_KNOW_EACH_OTHER_ROUTE: return gettingToKnowEachOther()
		case GETTING_TO_KNOW_EACH_OTHER_ABBREVIATED_ROUTE: return gettingToKnowEachOtherAbbreviated()
		case GETTING_TO_KNOW_EACH_OTHER_WEB_ROUTE: return gettingToKnowEachOtherWeb()
		case GETTING_TO_KNOW_EACH_OTHER_TEAMS_ROUTE: return gettingToKnowEachOthersTeams()
		case HEALTH_RISK_CALCULATOR_TEAM_WEB_ROUTE: return healthRiskCalculatorTeamWeb()
		case HELLO_WORLD_WEB_ROUTE: return HelloWorldWeb()
		case HELLO_WORLD_WEB_PART_1_ROUTE: return HelloWorldWebPart1()
		case HELLO_WORLD_WEB_T1_ROUTE: return HelloWorldWebT1()
		case LIONS_TIGERS_AND_BEARS_ROUTE: return lionsTigersAndBears()
		case MAP_MANIA_V1_ROUTE: return mapManiaVersion1()
		case MAP_MANIA_V2_ROUTE: return mapManiaVersion2()
		case MATCHMAKER_GO_ROUTE: return matchmakerGo()
		case MATCHMAKER_JAVA_ROUTE: return matchmakerJava()
		case MATCHMAKER_PYTHON_ROUTE: return matchmakerPython()
		case MATCHMAKER_WEB_ROUTE: return matchmakerWeb()
		case MOSAIC_JAVA_ROUTE: return mosaicJava()
		case MUSTANG_ROUTE: return mustang()
		case NUMBERING_SYSTEMS_ROUTE: return numberingSystems()
		case OVAL_DRAW_PLUS_JAVA_ROUTE: return ovalDrawPlusJava()
		case SEAT_SELECTOR_MERN_ROUTE: return seatSelectorMERN()
		case SWISS_ARMY_KNIFE_ROUTE: return swissArmyKnife()
		case SWISS_ARMY_KNIFE_V2_ROUTE: return swissArmyKnifeV2()
		case SWISS_ARMY_KNIFE_SERVER_ROUTE: return swissArmyKnifeServer()
		case TURTLEDRAW_ROUTE: return turtledraw()
		case PIT_HUB_ROUTE: return pitHub()
		case PYTHON_ADD_COMMIT_PUSH_ROUTE: return pythonAddCommitPush()
		case QUIZ_MASTER_MERN_ROUTE: return quizMasterMERN()
		case WEB_DICE_ROLLER_ROUTE: return webDiceRoller()
		case WEB_RESUME_ROUTE: return webResume()

		// The following case statements represent an new alternative method of implementing activities.
		case thunderbird.route: return thunderbird.function()
		case finalProject.route: return finalProject.function()

		// Updated naming to .render()
		case introductionsWebsite.route: return introductionsWebsite.render()
		case introductionToReact.route: return introductionToReact.render()
		case goWebServer.route: return goWebServer.render()

		default: return null
	}
}



