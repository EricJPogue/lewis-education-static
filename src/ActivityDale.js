// Dale chapter lecture sessions with embedded video and links to slides provided below.
import React, { Component } from 'react'

import { getCourseTitle } from './data/ClientDataAPIs';
import { daleLectureVideo } from './Panopto'
import { daleLectureSlidesURL } from './AzureStorage'
import { daleDiscussion3Link } from './Slides/DaleDiscussion'

export class ActivityDale extends Component {
	getDiscussionLink = (chapter) => { 
		switch(chapter) {
			case '3': return daleDiscussion3Link()
			default: return null
		}
	}

	render() {
		const chapter = this.props.match.params.reference
		const slidesURL = daleLectureSlidesURL(chapter)
		return (
			<div>
				<h4>{getCourseTitle()}</h4>
				<h5>“Computer Science Illuminated” Chapter {chapter} Lecture</h5>
				{daleLectureVideo(chapter)}
				<br />
				<a href={slidesURL}>PowerPoint Slide Deck for Chapter {chapter} Lecture</a><br />
				{this.getDiscussionLink(chapter)} Breakout Session
			</div>
		)
	}
}
