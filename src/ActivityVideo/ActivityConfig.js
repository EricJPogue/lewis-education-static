import React, { Component } from 'react';
import { getClassTitle } from '../DataAndAPIs/ClassSections'
import { baseLink, videoLink } from '../Activities/Activity'

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
				<h4>{getClassTitle()}</h4>
				{this.activity()}
			</div>
		)
	}
}