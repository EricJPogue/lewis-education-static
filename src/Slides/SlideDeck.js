import React from 'react'
import { getCurrentSprintBase1 } from '../data/ClientDataAPIs'
import { preflightChecklist, instructorChecklist, agendaSprintPlanning } from './Slide'

export class SlideDeck extends React.Component {
	deck = null
	sprint = getCurrentSprintBase1()

	constructor(props) {
		 super(props)

		 switch(this.props.match.params.route) {
			case CHECKLIST_ROUTE: this.deck = checklist(); break
			case TODAY_ROUTE: this.deck = today(); break
			default: this.deck = checklist()
		}

		if (this.deck.sprint !== undefined) {
			this.sprint = this.deck.sprint
		}

		this.state = { 
			currentSlide: 0
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