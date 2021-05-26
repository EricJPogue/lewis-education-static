import React from 'react'

export class Test extends React.Component {
	render() {
		return ( <div>

<h4>Test Page</h4>
<h5>Summary: This page is intended to provide test scenarios and links</h5>

<p>Parameter ID: {this.props.match.params.id}</p>

<br />
<h4>Fall 2021 Class Links:</h4>
<h5>Introduction to Computer Science</h5>
<h6>MWF 10am CT <a href= '/?cpsc=20000-fall-2021-002#/sprint/1'>[link]</a></h6>
{localAndGlobalLink('?cpsc=20000-fall-2021-002#/sprint/1')}

<h5>Introduction to Computer Science</h5>
<h6>MWF 11am CT <a href= '/?cpsc=20000-fall-2021-003#/sprint/1'>[link]</a></h6>
{localAndGlobalLink('?cpsc=20000-fall-2021-003#/sprint/1')}

<h5>Software Engineering</h5>
<h6>MWF 2pm CT <a href= '/?cpsc=44000-fall-2021-001#/sprint/1'>[link]</a></h6>
{localAndGlobalLink('?cpsc=44000-fall-2021-001#/sprint/1')}

<h5>Web and Distributed Programming</h5>
<h6>MWF 3pm CT <a href= '/?cpsc=24700-fall-2021-001#/sprint/1'>[link]</a></h6>
{localAndGlobalLink('?cpsc=24700-fall-2021-001#/sprint/1')}



<br /><br />
<h4>Spring 2021 Class Links:</h4>
<h5>Introduction to Computer Science</h5>
<h6>20000-spring-2021-002:</h6>
{localAndGlobalLink('?cpsc=20000-spring-2021-002#/sprint/1')}

<h5>Object-Oriented Programming</h5>
<h6>24500-spring-2021-001:</h6>
{localAndGlobalLink('?cpsc=24500-spring-2021-001#/sprint/1')}

<h5>Applied Programming Languages</h5>
<h6>36000-spring-2021-001:</h6>
{localAndGlobalLink('?cpsc=36000-spring-2021-001#/sprint/1')}

<h5>Software Engineering</h5>
<h6>44000-spring-2020-001:</h6>
{localAndGlobalLink('?cpsc=44000-spring-2021-001#/sprint/1')}
<br /><br /><br />

		</div>	)
	}
}

const localLink = (link) => {
	return (<div><a href= {'http://localhost:3000/'+link}>{'http://localhost:3000/'+link}</a><br /></div>)
}

const globalLink = (link) => {
	return (<div><a href= {'https://www.lewis.education/'+link}>{'https://www.lewis.education/'+link}</a><br /></div>)
}

const localAndGlobalLink = (link) => {
	return ( <div>
		{globalLink(link)}
		{localLink(link)}
		<br />
	</div> 	)
}
