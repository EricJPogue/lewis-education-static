import React, { Component } from 'react';
import * as URLParameters from './URLParameters'

import { baseLink, videoLink } from './Activity'

const oopLink = (fileName) => {
	return baseLink()+'object-oriented-programming/'+fileName
}

export class ActivityOOP extends Component {
	activity() {
		let activityReference = this.props.match.params.reference
		return videoLink('', oopLink(activityReference+'.mp4'))
	}

	render() {
		return (
			<div>
				<h4>{URLParameters.courseTitle()}</h4>
				{this.activity()}
			</div>
		)
	}
}