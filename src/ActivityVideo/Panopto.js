import React from 'react'

import { getClassTitle, getClassNumber } from '../DataAndAPIs/ClassSections'
import { Blended, externalLink, scrumIn7Min } from '../DataAndAPIs/Links'

const panoptoWelcomeIFrameTag = () => {
	return '<iframe src="https://lewisu.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=bd836897-d00f-43b3-bb9e-b05e00fca7d7&autoplay=false&offerviewer=false&showtitle=false&showbrand=false&captions=false&interactivity=all" height="576" width="1024" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>'
}

export const welcome = () => {
	return ( <div>
		<h4>{getClassTitle}</h4>
		<h5>Welcome! Please take a few minutes to view your welcome message.</h5>
		<IFrameComponent iframe={panoptoWelcomeIFrameTag()} />
		<br />
		<p>Please also take a few minutes to gain a better understand of Blended Learning and Scrum by reviewing the 
		following videos.</p>
		<ul style={{listStyleType:'square'}}>
			<li>{Blended()}</li>
			<li>{scrumIn7Min()}</li> 
		</ul>
		Finally, you will want to take a look at our course {externalLink('syllabus', '#/syllabus')} and obtain the 
		items identified in the “IV. Course Materials.”
	</div> )
}

const IFrameComponent = (props) =>{
	return (<div dangerouslySetInnerHTML={{__html: props.iframe?props.iframe:""}} />);
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

// Todo: These should be moved to ClientData and accessed through an API.
const programmingTogether20000ID = '739ac123-56e2-4959-84f2-ad95013d3459'
const programmingTogether24500ID = 'dc5406b0-66a0-45a6-93c3-ae5101092544'
const programmingTogether24700ID = '88eb7868-6f43-4645-99ad-ad9501397cf7'
const programmingTogether44000ID = '7623082b-65bf-485a-a10d-ad95013d47f4'
const programmingTogether49200ID = '97acc02f-11c9-46ca-8993-ae4d00f84450'

// BugBug: This should be based on the class number (i.e. 20000 or 44000) and not the full class ID.
export const ProgrammingTogether = () => {
	const classNumber = getClassNumber()
	console.log('classSectionNumber='+classNumber)
	switch(classNumber) {
		case '20000': return (<div><PanoptoIFrameComponent iframe={embedCodePlaylist(programmingTogether20000ID)} /></div>)
		case '24500': return (<div><PanoptoIFrameComponent iframe={embedCodePlaylist(programmingTogether24500ID)} /></div>)
		case '24700': return (<div><PanoptoIFrameComponent iframe={embedCodePlaylist(programmingTogether24700ID)} /></div>)
		case '44000': return (<div><PanoptoIFrameComponent iframe={embedCodePlaylist(programmingTogether44000ID)} /></div>)
		case '49200': return (<div><PanoptoIFrameComponent iframe={embedCodePlaylist(programmingTogether49200ID)} /></div>)
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