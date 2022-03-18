import React from 'react'
import { getCurrentSprintBase1 } from '../data/ClientDataAPIs';
import { preflightChecklist, instructorChecklist, agendaSprintPlanning } from './Slide'

export class SlideDeck extends React.Component {
	slideFunctionList = [ preflightChecklist, instructorChecklist, agendaSprintPlanning ]
	state = { currentSlide: 0 }

	incrementSlide = () => {
		if (this.state.currentSlide < (this.slideFunctionList.length-1)) {
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
			{this.slideFunctionList[this.state.currentSlide](getCurrentSprintBase1())} 
			<h2 style={{flex:1, position:"absolute", left:20, bottom:20}} onClick={() => this.decrementSlide()}>&larr;</h2>
			<h2 style={{flex:1, position:"absolute", right:20, bottom:20}} onClick={() => this.incrementSlide()}>&rarr;</h2>
		</div> ) 
	}
}
