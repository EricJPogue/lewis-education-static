import React from 'react'
import { routeSlide } from './SlideRouter'

export class Slide extends React.Component {
	render() { return ( <div>
		{routeSlide(this.props.match.params.reference)}
	</div> ) }
}