import React, { Component } from 'react';
import { getClass } from '../data/Classes';
import { baseLink, videoLink } from '../Activities/Activity'

const webLink = (fileName) => {
	return baseLink()+'web-and-distributed-programming/'+fileName
}

export class ActivityWeb extends Component {
	activity() {
		let activityReference = this.props.match.params.reference
		return videoLink('', webLink(activityReference+'.mp4'))
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