import React, {useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook';

// import { checklist } from './SLSprint00';
import { ics6_1of6 } from './SLSprint06'


/*
function MyComponent2() {
	const [count, setCount] = useState(0);
  
	const ref = useHotkeys('b', () => setCount(prevCount =>
	  prevCount + 1
	));
  
	return (
	  <div>
		<span>Focusing this element will disable the hotkey {count}.</span>
		<br/>
		<span ref={ref} tabIndex='-1'>Focusing this element will enable the hotkey {count}.</span>
	  </div>
	);
  }

  function MyComponent3() {
	const incrementSlide = () => {
		if (currentSlideNumber < (deck.length-1)) {
			setCurrentSlideNumber(currentSlideNumber+1)
		}
	}

	const decrementSlide = () => {
		if (currentSlideNumber > 0) {
			setCurrentSlideNumber(currentSlideNumber-1)
		}
	}

	const [deckPlus, setDeckPlus] = useState(checklist())
	const deck = checklist()

	const [currentSlideNumber, setCurrentSlideNumber] = useState(0)

	const [count, setCount] = useState(0);
	const [countB, setCountB] = useState(1)

	const [title, setTitle] = useState('state test')
  
	useHotkeys('a', () => setCount(prevCount => prevCount + 1 ));

	useHotkeys('b', () => {
		setTitle('title')
		console.log('b='+useState.countB) 
		setCountB(prevCount => prevCount+3)
	})
  
	useHotkeys('c', () => {
		incrementSlide()
	})

	useHotkeys('.', () => {
		incrementSlide()
	})

	return ( <div>
	  <span>{count}</span>
		<h1>{title}</h1>

		<span>{countB}</span>
		{deckPlus[currentSlideNumber]()} 

		<h2 style={{flex:1, position:"absolute", left:40, bottom:20}} onClick={() => decrementSlide()}>&larr;</h2>
			<h2 style={{flex:1, position:"absolute", right:40, bottom:20}} onClick={() => incrementSlide()}>&rarr;</h2>
	  </div>

	);
  }
*/

  export function MyComponent() {
	const incrementSlide = () => {
		console.log('incrementSlide currentSlideNumber='+currentSlideNumber)
		if (currentSlideNumber < (deck.length-1)) {
			setCurrentSlideNumber(currentSlideNumber+1)
		}
	}

	const decrementSlide = () => {
		console.log('decrementSlide currentSlideNumber='+currentSlideNumber)
		if (currentSlideNumber > 0) {
			setCurrentSlideNumber(currentSlideNumber-1)
		}
	}

	const deck = ics6_1of6()

	const [currentSlideNumber, setCurrentSlideNumber] = useState(0)
  


	useHotkeys('d', () => {
		console.log('d')
		console.log(currentSlideNumber)
		if (currentSlideNumber > 0) {
			setCurrentSlideNumber(currentSlideNumber-1)
		}
	})

	useHotkeys('.', () => {
		console.log('.')
		console.log(currentSlideNumber)
		if (currentSlideNumber < (deck.length-1)) {
			setCurrentSlideNumber(currentSlideNumber+1)
		}
	})

	return ( <div>

<span>{currentSlideNumber}</span>
		{deck[currentSlideNumber]()} 
		<h2 style={{flex:1, position:"absolute", left:40, bottom:20}} onClick={() => decrementSlide()}>&larr;</h2>
			<h2 style={{flex:1, position:"absolute", right:40, bottom:20}} onClick={() => incrementSlide()}>&rarr;</h2>
	  </div>
	)
  }