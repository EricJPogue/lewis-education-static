import React, { Component } from 'react';

import { getCourseTitle } from './data/ClientDataAPIs';

import { baseLink, videoLink } from './Activity'
import { designPrinciplesLink } from './Slides/Breakout';

const oopLink = (fileName) => {
	return baseLink()+'object-oriented-programming/'+fileName
}

export class ActivityOOP extends Component {
	getDiscussionLink() {
		switch(this.props.match.params.reference) {
			case 'principles': return (<div>{designPrinciplesLink()} discussion topics</div>)
			default: return null
		}
	}

	activity() {
		let activityReference = this.props.match.params.reference
		return videoLink('', oopLink(activityReference+'.mp4'))
	}

	render() {
		return (
			<div>
				<h4>{getCourseTitle()}</h4>
				{this.activity()}
				<br /><br />
				{this.getDiscussionLink()}
			</div>
		)
	}
}