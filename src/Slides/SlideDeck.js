import React, {useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook';

import { checklist } from './SLSprint00'
import { sprint6Router } from './SLSprint06'

export class SlideDeck extends React.Component {
	deck = null

	constructor(props) {
		super(props)
		this.state = { 
			currentSlide: 0
		}

		this.deck = sprint6Router(this.props.match.params.route)
		if (this.deck === null) {
			this.deck = checklist()
		}
	}

	incrementSlide = () => {
		if (this.state.currentSlide < (this.deck.length-1)) {
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
			{this.deck[this.state.currentSlide]()} 
			<h2 style={{flex:1, position:"absolute", left:40, bottom:20}} onClick={() => this.decrementSlide()}>&larr;</h2>
			<h2 style={{flex:1, position:"absolute", right:40, bottom:20}} onClick={() => this.incrementSlide()}>&rarr;</h2>
		</div> ) 
	}
}


// Todo: Move currentSlideIndex into function and make it stateful. 
let currentSlideIndex = 0
export function Deck(props) {
	const deck = sprint6Router(props.match.params.route)
	const [currentSlide, setCurrentSlide] = useState(deck[0])

	useHotkeys('left, up', () => { decrementSlide() })
	useHotkeys('right, down', () => { incrementSlide() })

	const incrementSlide = () => {
		if (currentSlideIndex < (deck.length-1)) {
			currentSlideIndex++
			setCurrentSlide(deck[currentSlideIndex])
		}
	}

	const decrementSlide = () => {
		if (currentSlideIndex > 0) {
			currentSlideIndex--
			setCurrentSlide(deck[currentSlideIndex])
		}
	}

	return ( <div>
		{currentSlide} 
		<p style={{flex:1, position:"absolute", right:80, bottom:20}}><span onClick={()=>decrementSlide()}>&larr; </span>
		{currentSlideIndex+1} of {deck.length}
		<span onClick={()=>incrementSlide()}> &rarr;</span></p>
	</div> )
  }