import React from 'react'
import { NavLink } from 'react-router-dom'

import { GettingToKnowEachOther, start, complete } from './ProgrammingAssignments'
const programmingAssignment = GettingToKnowEachOther

export const al20000Sprint02 = () => {
	return (

<div>
<h4>Introduction to Computer Science</h4>
<h5>Sprint 2: Numbering Systems, Data Representation, HTML, Cascading Style Sheets, and more Tools of the Trade</h5>

<p>Welcome to sprint 2 of Introduction to Computer Science. In sprint 2 we are going to continue our journey into data
representation and also take look at some of the key technologies that make up the Web. Our sprint activities will 
include a detailed look at two of those technologies by introducing HTML and Cascading Style Sheets (CSS).</p>

<p>Once again let’s start with our Learning Objectives. By the end of sprint 2 we will be able to:</p>
<ul style={{listStyleType:'square'}}>
	<li>Identify, define, and discuss data representation</li>
	<li>Identify and classify Internet, Web, and distributed applications</li>
	<li>Develop browser based HTML5 applications that utilize common HTML and Cascading Style Sheets (CSS) elements</li>
	<li>Utilize important developer tools and services create, update, and deploy basic software applications</li>
</ul> 

<p>Below is our sprint 2 activities list. Once again they are provided in the order that I think will be the most
efficient for you and the <em>bold</em> items are graded assignments.</p>
<ol>
	<li>Stay focused on the due dates by reviewing our course calendar <NavLink to='/calendar/2'>[link]</NavLink></li>
	<li><em>Review sprint 2 assignments including Lab 2, Quiz 2, Discussion 2, Reflection 2, and Lab Demo</em></li>
	<li>Study and understand our “Coding Standards” <NavLink to='/activity/coding-standards'>[link]</NavLink></li>
	<li>{start(programmingAssignment)}</li>
	{/* The above items should be consistent across classes. */ }

	<li>Read “Computer Science Illuminated” chapter 2 <a href='https://learning.oreilly.com/library/view/computer-science-illuminated/9781284055917/' target='_blank' rel='noopener noreferrer'>[link]</a>
		Binary Values and Number Systems and review our chapter 2 lecture <NavLink to='/activity-dale/2'>[video]</NavLink></li>
	<li>Complete “Tools of the Trade - Part 2” <NavLink to='/activity/tools'>[link]</NavLink><sup> ~3 hours</sup></li>
	<li><em>Make your initial Discussion 2 post by the middle of the sprint</em></li>

	<li>Read “Computer Science Illuminated” chapter 3 Data Representation <a href='https://learning.oreilly.com/library/view/computer-science-illuminated/9781284055917/' target='_blank' rel='noopener noreferrer'>[link]</a>
		and review our chapter 3 lecture <NavLink to='/activity-dale/3'>[video]</NavLink></li>
	<li>Complete “HTML Programming - Part 1” from W3C <NavLink to='/activity/html'>[link]</NavLink><sup> ~4 hours</sup></li>

	{/* The items below should be consistent across classes. */ }
	<li>{complete(programmingAssignment)}</li>
	<li><em>Complete Discussion 2 by responding to at least two of your classmates’ posts</em></li>
	<li><em>Submit Lab 2, Quiz 2, and Reflection 2</em></li>
</ol>
<p>If you are struggling, remember to reach out to your Scrum teammates early and often for help. Also, be sure to 
periodically check for new programming together tutorials <NavLink to='/activity/programming-together'>[link]</NavLink>.</p>
{/* Programming Together: “HelloWorld Plus for the Web” and “HelloWorldPlus with Pictures” */}
{extras()}
</div>
	)
};

const extras = () => {
	return (null)
}

// Todo: Reorder or hide some of the programming together entries.
// Todo: Create and link O’Reilly Books playlist for class or topic.