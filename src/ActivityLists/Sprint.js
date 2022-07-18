
import React, { Component } from 'react'

import { getClass } from '../DataAndAPIs/Classes'
import { al } from './AL'
import { displayPreviewStampIfNeeded } from './ALPreviewStamp'

export class Sprint extends Component {
	render = () => {
		const course = getClass()
		if (course === null) {
			// If no course is currently identified, forward the user to the base URL where they can pick a course.
			console.log('Warning: No course identified when attempting to display activity list.')
			window.location.assign('')
		} else {
			const activityListSprint = parseInt(this.props.match.params.reference)
			const number = course.number
			return ( <div>
					<h4>{course.title}</h4>
					{al(number, activityListSprint)}
					{displayPreviewStampIfNeeded(activityListSprint)}
			</div> )
		}
	}
}