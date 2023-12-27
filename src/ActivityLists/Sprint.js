
import React, { Component } from 'react'
import { getClassTitle, getClassNumber } from '../DataAndAPIs/ClassSections'
import { al } from './AL'
import { displayPreviewStampIfNeeded } from './ALPreviewStamp'

export class Sprint extends Component {
	render = () => {
		const activityListSprint = parseInt(this.props.match.params.reference)
		return ( <div>
			<h4>{getClassTitle()}</h4>
			{al(getClassNumber(), activityListSprint)}
			{displayPreviewStampIfNeeded(activityListSprint)}
		</div> )
	}
}