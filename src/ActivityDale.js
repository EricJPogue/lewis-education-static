// Dale chapter lecture sessions with embedded video and links to slides provided below.
import React, { Component } from 'react'

import { courseTitle } from './URLParameters'
import { daleLectureVideo } from './Panopto'
import { daleLectureSlidesURL } from './AzureStorage'

export class ActivityDale extends Component {
	render() {
		const chapter = this.props.match.params.reference
		const slidesURL = daleLectureSlidesURL(chapter)
		return (
			<div>
				<h4>{courseTitle()}</h4>
				<h5>“Computer Science Illuminated” by Nell Dale and John Lewis (Dale) Chapter {chapter} Lecture</h5>
				{daleLectureVideo(chapter)}<br />
				If you are looking for the associated slides, you can find them here <a href={slidesURL}>[link]</a>.
			</div>
		)
	}
}
