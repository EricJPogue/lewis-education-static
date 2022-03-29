import React, {useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook';

import { sprint6Router } from './SLSprint06'

export function Deck(props) {
	const deck = sprint6Router(props.match.params.route)
	const [count, setCount ] = useState(0) 

	const incrementSlide = () => { setCount(prevCount => prevCount + 1) }
	useHotkeys('right, down', () => { incrementSlide() })

	const decrementSlide = () => { setCount(prevCount => prevCount - 1) }
	useHotkeys('left, up', () => { decrementSlide() })

	const displaySlide = (index) => {
		if ((index >= 0) && (index < deck.length)) {
			return deck[index]()
		}
		if (index < 0) { setCount(0) }
		if (index >= deck.length) { setCount(deck.length-1) }
		return null
	}

	return ( <div>
		{displaySlide(count)}
		<p style={{flex:1, position:"absolute", right:80, bottom:20}}><span onClick={()=>decrementSlide()}>&larr; </span>
		{count+1} of {deck.length}
		<span onClick={()=>incrementSlide()}> &rarr;</span></p>
	</div> )
  }