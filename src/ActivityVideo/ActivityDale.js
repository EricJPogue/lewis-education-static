// Dale chapter lecture sessions with embedded video and links to slides provided below.
import React, { Component } from 'react'

import { getClass } from '../DataAndAPIs/Classes'
import { daleLectureVideo } from './Panopto'

export class ActivityDale extends Component {
	// Todo: Consider adding back link to video slides and breakout discussion on video.
	render() {
		const chapter = this.props.match.params.reference
		return (
			<div>
				<h4>{getClass().title}</h4>
				<h5>“Computer Science Illuminated” Chapter {chapter} Lecture</h5>
				{daleLectureVideo(chapter)}
			</div>
		)
	}
}
