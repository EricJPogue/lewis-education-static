import React, { Component } from 'react';
import { getCourseTitle } from './data/ClientDataAPIs';


import { baseLink, videoLink } from './Activity'

const architectureLink = (fileName) => {
	return baseLink()+'web-and-distributed-programming/'+fileName
}

export class ActivityArchitecture extends Component {
	activity() {
		let activityReference = this.props.match.params.reference
		return videoLink('', architectureLink(activityReference+'.mp4'))
	}

	render() {
		return (
			<div>
				<h4>{getCourseTitle()}</h4>
				{this.activity()}
			</div>
		)
	}
}