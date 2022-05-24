import React, {useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { slideDeckRouter } from './SLSprint00'

export function Deck(props) {
	const deck = slideDeckRouter(props.match.params.route)
	const [count, setCount ] = useState(0) 

	const incrementSlide = () => { setCount(prevCount => prevCount + 1) }
	useHotkeys('right, down, pagedown', () => { incrementSlide() })

	const decrementSlide = () => { setCount(prevCount => prevCount - 1) }
	useHotkeys('left, up, pageup', () => { decrementSlide() })

	const displaySlide = (index) => {
		if (index < 0) { 
			setCount(0)
			return deck[0]()
		} else if (index >= deck.length) { 
			setCount(deck.length-1) 
			return deck[deck.length-1]()
		} else {
			return deck[index]()
		}
	}

	const displayFooter = () => {
		return ( <div>
			<p style={{flex:1, position:"absolute", right:80, bottom:20}}><span onClick={()=>decrementSlide()}>&larr; </span>
			{count+1} of {deck.length}<span onClick={()=>incrementSlide()}> &rarr;</span></p>
		</div> )
	}

	return ( <div>
		{displaySlide(count)}
		{displayFooter()}
	</div> )
  }