import React, { Component } from 'react';

import { getClass } from './data/Classes';

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
				<h4>{getClass().title}</h4>
				{this.activity()}
			</div>
		)
	}
}