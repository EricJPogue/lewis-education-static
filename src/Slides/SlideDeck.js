import React from 'react'
// import { Slide } from './Slide'
import { preflightChecklist } from './Slide'

export class SlideDeck extends React.Component {
	render () { return (
		<div>SlideDeck
			{/*<Slide params={ 'preflight-checklist' }/>*/}
			{preflightChecklist()}


		</div>
	) }
}