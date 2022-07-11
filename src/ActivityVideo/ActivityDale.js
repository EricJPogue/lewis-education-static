// Dale chapter lecture sessions with embedded video and links to slides provided below.
import React, { Component } from 'react'

import { getClass } from '../DataAndAPIs/Classes'

import { daleLectureVideo } from './Panopto'
import { daleLectureSlidesURL } from './AzureStorage'

import { daleDiscussion3Link, daleDiscussion4Link, daleDiscussion13Link, daleDiscussion15Link } from '../Slides/Breakout'

export class ActivityDale extends Component {
	getDiscussionLink = (chapter) => { 
		switch(chapter) {
			case '3': return (<div>{daleDiscussion3Link()} Breakout Session</div>)
			case '4': return (<div>{daleDiscussion4Link()} Breakout Session</div>)
			case '13': return (<div>{daleDiscussion13Link()} Breakout Session</div>)
			case '15': return (<div>{daleDiscussion15Link()} Breakout Session</div>)
			default: return null
		}
	}

	render() {
		const chapter = this.props.match.params.reference
		const slidesURL = daleLectureSlidesURL(chapter)
		return (
			<div>
				<h4>{getClass().title}</h4>
				<h5>“Computer Science Illuminated” Chapter {chapter} Lecture</h5>
				{daleLectureVideo(chapter)}
				<br />
				<a href={slidesURL}>PowerPoint Slide Deck for Chapter {chapter} Lecture</a><br />
				{this.getDiscussionLink(chapter)}
			</div>
		)
	}
}
