import React, { Component } from 'react';

import { getCourseTitle } from './data/ClientDataAPIs';

import { baseLink, videoLink } from './Activity'

const configLink = (fileName) => {
	return baseLink()+'configuration/'+fileName
}

export class ActivityConfig extends Component {
	activity() {
		let activityReference = this.props.match.params.reference
		return videoLink('', configLink(activityReference+'.mp4'))
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