import React from 'react'
import { useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook';

export function MyComponent2() {
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

  export function MyComponent() {
	const [count, setCount] = useState(0);
  
	useHotkeys('a', () => setCount(prevCount =>
	  prevCount + 1
	));
  
	return (
	  <span>{count}</span>
	);
  }