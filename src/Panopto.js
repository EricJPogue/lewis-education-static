import React from 'react'
import { NavLink } from 'react-router-dom'

import { cpsc, courseTitle, classSyllabusURL } from './URLParameters'

export const welcome2021Spring = () => {
	return (
		<div>
		<h4>{courseTitle()}</h4>
		<h5>Welcome to Lewis University Spring 2021 Semester!</h5>
		<p style={{marginTop:'20px'}}>Please take a few minutes to view your spring 2021 welcome message.</p>
		<IFrameComponent iframe={panoptoWelcomeIFrameTag()} />
		<br />
		<p>Prior to our first class session, please also take a few minutes to gain a better understand of 
		Blended Learning and Scrum by reviewing the following videos.</p>
		<ul style={{listStyleType:'square'}}>
			<li>“Blended Learning &amp; Flipped Classroom” 
				<NavLink to='/activity/blended-learning'>[video]</NavLink></li>
			<li>“Introduction to Scrum in 7 Minutes”
				<NavLink to='/activity/scrum-in-7-minutes'>[video]</NavLink></li> 
		</ul>
		Finally, you will want to take a look at our course syllabus <a href={classSyllabusURL()}>[link]</a> 
			and obtain the items identified in the “IV. Course Materials.”
		</div> )
}

const IFrameComponent = (props) =>{
	return (<div dangerouslySetInnerHTML={{__html: props.iframe?props.iframe:""}} />);
}

const panoptoWelcomeIFrameTag = () => {
	return "<iframe src='https://lewisu.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=ea0cac63-6820-411f-b31a-acaf01489295&autoplay=true&offerviewer=false&showtitle=false&showbrand=false&start=0&interactivity=all' height='576' width='1024' style='border: 1px solid #464646;' allowfullscreen allow='autoplay'></iframe>"
}

// Programming together functions.
const PanoptoIFrameComponent = (props) =>{
	return (<div dangerouslySetInnerHTML={{__html: props.iframe?props.iframe:""}} />);
}
// Note that changing PanoptoIFrameComponent to a lower case leading “p”) caused an error in the browser.

// Playlist functions.
const panoptoEmbedCodePrefixForPlaylist = '<iframe src="https://lewisu.hosted.panopto.com/Panopto/Pages/Embed.aspx?pid='
const panoptoEmbedSuffixForPlaylist = '&autoplay=false&offerviewer=false&showtitle=false&showbrand=false&start=0&interactivity=all" height="576" width="1024" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>'
const embedCodePlaylist = (iD) => { return panoptoEmbedCodePrefixForPlaylist+iD+panoptoEmbedSuffixForPlaylist }

const programmingTogether20000ID = '5b13e440-2f35-437a-ba5e-acaf01643326'
const programmingTogether24500ID = '52d70042-a880-4d3f-990d-acf701094e57'
const programmingTogether44000ID = '02966c28-e8c1-4a94-b6b2-acbe003233bb'

export const ProgrammingTogether = () => {
	let classReference = cpsc()
	switch(classReference) {
		case '20000-fall-2021-002': return (<div><PanoptoIFrameComponent iframe={embedCodePlaylist(programmingTogether20000ID)} /></div>)
		case '20000-fall-2021-003': return (<div><PanoptoIFrameComponent iframe={embedCodePlaylist(programmingTogether20000ID)} /></div>)
		case '24700-fall-2021-001': return (null)
		case '44000-fall-2021-001': return (<div><PanoptoIFrameComponent iframe={embedCodePlaylist(programmingTogether44000ID)} /></div>)

		case '20000-spring-2021-002': return (<div><PanoptoIFrameComponent iframe={embedCodePlaylist(programmingTogether20000ID)} /></div>)
		case '24500-spring-2021-001': return (<div><PanoptoIFrameComponent iframe={embedCodePlaylist(programmingTogether24500ID)} /></div>)
		case '36000-spring-2021-001': return (null)
		case '44000-spring-2021-001': return (<div><PanoptoIFrameComponent iframe={embedCodePlaylist(programmingTogether44000ID)} /></div>)
		default: return (null)
	}
}

// Video Functions. 
const panoptoEmbedCodePrefix = '<iframe src="https://lewisu.hosted.panopto.com/Panopto/Pages/Embed.aspx?id='
const panoptoEmbedSuffix = '&autoplay=false&offerviewer=false&showtitle=false&showbrand=false&start=0&interactivity=all" height="576" width="1024" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>'
const embedCode = (iD) => { return panoptoEmbedCodePrefix+iD+panoptoEmbedSuffix }

const panoptoVideo = (iD) => {
	const emCode = embedCode(iD)
	return (<PanoptoIFrameComponent iframe={emCode} />)
}

const helloWorldPythonID = '090cc4e3-20c8-46e4-a723-acb500f6a30a'
export const programmingTogetherHelloWorldPython = () => {
	return panoptoVideo(helloWorldPythonID)
}

// Dale videos.
export const daleLectureVideo = (chapter) => {
	const daleLectureVideoID = (chapter) => {
		switch(chapter) {
			case  '1': return '6d751974-7cfc-45ef-aec8-acb6016de351'
			case  '2': return 'a563c200-75ed-451d-a55e-acb6016db7f6'
			case  '3': return '4e3b4753-5b71-4290-9596-acb6016d9264'
			case  '4': return '3a8a5169-a3f7-49c1-8e13-acb6016d889e'
			case  '5': return '578a64ed-76fe-4572-9b52-acb6016d559a'
			case  '6': return '3a9ab748-974c-40d0-9b9e-acb6016d2ff7'
			case '11': return 'f7e1cb7b-cf9a-4563-b5e9-acb6016d05e8'
			case '13': return 'a7192813-57a8-4c4b-9522-acb6016ce60b'
			case '15': return '57dc1c20-a953-4ef6-87ed-acb6016ce5ad'
			case '16': return '26144aa8-0670-496b-b847-acb6016ce586'
			case '17': return 'db61a5b6-4b59-4bdf-980a-acb6016ce5d6'
		
			default:
				console.log('Error: Dale lecture video ID not found (chapter='+chapter+')') 
				return ''
		}
	}

	return panoptoVideo(daleLectureVideoID(chapter))
}