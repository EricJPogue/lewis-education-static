import React from 'react'

import { getCurrentSprintBase1 } from '../data/ClientDataAPIs'
import { preflightChecklist, instructorChecklist, agendaSprintPlanning, agendaMWF5_4_ICS, preworkMWF5_4ISC, breakoutMWF5_4ICS, MWF5_4_UpcomingDates,MWF5_5ISCPrework, endOfSession } from './Slide'

import { SD44000_5_3_of_4_ROUTE, sd44000Sprint5_3of4 } from './SL44000Sprint05'

import { SPRINT_5_INDEX_ROUTE, sprint5Index } from './SLSprint05'
import { SD20000_5_5_of_6_ROUTE, sd20000Sprint5_5of6 } from './SLSprint05'
import { SD20000_5_6_of_6_ROUTE, sd20000Sprint5_6of6 } from './SLSprint05'
import { SD24500_5_5_of_6_ROUTE, sd24500Sprint5_5of6 } from './SLSprint05'
import { SD24500_5_6_of_6_ROUTE, sd24500Sprint5_6of6 } from './SLSprint05'
import { SD44000_5_4_of_4_ROUTE, sd44000Sprint5_4of4 } from './SLSprint05'

export class SlideDeck extends React.Component {
	deck = null
	startingSlide = 0
	sprint = getCurrentSprintBase1()

	constructor(props) {
		 super(props)
		 console.log(this.props.match.params.route)
		 switch(this.props.match.params.route) {
			case SPRINT_5_INDEX_ROUTE: this.deck = sprint5Index(); break

			case SD20000_5_6_of_6_ROUTE: this.deck = sd20000Sprint5_6of6(); break
			case SD20000_5_5_of_6_ROUTE: this.deck = sd20000Sprint5_5of6(); break

			case SD24500_5_5_of_6_ROUTE: this.deck = sd24500Sprint5_5of6(); break
			case SD24500_5_6_of_6_ROUTE: this.deck = sd24500Sprint5_6of6(); break

			case SD44000_5_4_of_4_ROUTE: this.deck = sd44000Sprint5_4of4(); break	
			case SD44000_5_3_of_4_ROUTE: this.deck = sd44000Sprint5_3of4(); break

			case CHECKLIST_ROUTE: this.deck = checklist(); break
			case TODAY_ROUTE: this.deck = today(); break
			case MWF_5_4_ROUTE: this.deck = mwf_5_4_ICS(); break
			default: this.deck = checklist()
		}

		if (this.deck.sprint !== undefined) {
			this.sprint = this.deck.sprint
		}

		if (this.deck.startingSlide !== undefined) {
			this.startingSlide = this.deck.startingSlide
		}

		this.state = { 
			currentSlide: this.startingSlide
		}
	}
	 

	incrementSlide = () => {
		if (this.state.currentSlide < (this.deck.slideFunctionList.length-1)) {
				this.setState( prevState => ({ currentSlide: prevState.currentSlide + 1 })
			)
		} 
	}

	decrementSlide = () => {
		if (this.state.currentSlide > 0) {
				this.setState( prevState => ({ currentSlide: prevState.currentSlide - 1 })
			)
		} 
	}

	render () { return ( <div> 
			{this.deck.slideFunctionList[this.state.currentSlide](this.sprint)} 
			<h2 style={{flex:1, position:"absolute", left:40, bottom:20}} onClick={() => this.decrementSlide()}>&larr;</h2>
			<h2 style={{flex:1, position:"absolute", right:40, bottom:20}} onClick={() => this.incrementSlide()}>&rarr;</h2>
		</div> ) 
	}
}

const TODAY_ROUTE = 'today'
const today = () => {
	return {
		slideFunctionList: [ preflightChecklist, instructorChecklist, agendaSprintPlanning ]
	}
}

const CHECKLIST_ROUTE = 'checklist'
const checklist = () => {
	return {
		sprint: 5,
		slideFunctionList: [ preflightChecklist, instructorChecklist ]
	}
}

const MWF_5_4_ROUTE = 'MWF_5_4_ICS'
const mwf_5_4_ICS = () => {
	return {
		sprint: 5,
		startingSlide: 2,
		slideFunctionList: [ preflightChecklist, instructorChecklist, agendaMWF5_4_ICS, preworkMWF5_4ISC, MWF5_4_UpcomingDates, breakoutMWF5_4ICS, MWF5_5ISCPrework, endOfSession ]
	}
}