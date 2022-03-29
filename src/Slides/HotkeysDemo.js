import React, {useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook';

import { ics6_1of6 } from './SLSprint06'

// Todo: Move currentSlideIndex into function and make it stateful. 
let currentSlideIndex = 0
export function MyComponent() {
	const deck = ics6_1of6()

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