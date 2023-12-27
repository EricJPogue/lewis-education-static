import React, { Component } from 'react'
import { getClassTitle } from '../DataAndAPIs/ClassSections'
import { baseLink, videoLink } from '../Activities/Activity'

const architectureLink = (fileName) => {
	return baseLink()+'web-and-distributed-programming/'+fileName
}

export class ActivityArchitecture extends Component {
	activity() {
		let activityReference = this.props.match.params.reference
		return videoLink('', architectureLink(activityReference+'.mp4'))
	}

	render() { return ( <div>
			<h4>{getClassTitle()}</h4>
			{this.activity()}
		</div> )
	}
}