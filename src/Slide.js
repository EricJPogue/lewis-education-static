import React from 'react'
import { routeSlide } from './Slides/SlideRouter'

export class Slide extends React.Component {
	render() { return ( <div>
		{routeSlide(this.props.match.params.reference)}
	</div> ) }
}