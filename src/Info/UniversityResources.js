import React from 'react'
import { NavLink } from 'react-router-dom'

export const UniversityResources = () => {
	return (

<div>
<h4>University Resources</h4>
<h5>Are you in need of help?</h5>
<p>Stop by our <em>CAMS virtual study table</em> and get tutoring help with your Computer Science classes <NavLink to='/activity/study-table'>[link]</NavLink></p>

<p>Below are some of the additional Lewis University organizations and sites that are available to assist you:</p>
<ul style={{listStyleType:'square'}}>
	<li>Office of Technology Help Desk <a href='https://docs.google.com/document/d/1apPN5avRsTZ4TL7EL_wEczs8vFd_uyrwts-dfIgkOgg/edit#heading=h.gkos893m3ubj' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>University Library <a href='https://www.lewisu.edu/academics/library/index.htm' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Blackboard Support <a href='https://docs.google.com/document/d/1apPN5avRsTZ4TL7EL_wEczs8vFd_uyrwts-dfIgkOgg/edit#heading=h.bep7p3pp0iq3' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Blackboard Tutorials <a href='http://lewisstudenttutorials.weebly.com/' target='_blank' rel='noopener noreferrer'>[link]</a></li>
</ul>

<br />
<p>Catalogs, Schedules, and Calendars:</p>
<ul>
	<li>Course Catalogs <a href='https://lewisu.edu/academics/programs/catalog.htm'>[link]</a></li>
	<li>Course Schedules <a href='https://lewisu.edu/academics/programs/schedule.htm'>[link]</a></li>
	<li>Academic Calendars <a href='https://www.lewisu.edu/academics/academiccalendar.htm'>[link]</a></li>
</ul>

<br />
<p>Below are several Additional References that you may also find useful:</p>
<ul>
	<li>Technology Requirements for Web Enhanced Courses <a href='https://docs.google.com/document/d/1F1t882ne3d2Y64wJxTQX1GuUV7HvVafzB7Uj8mMSARU/edit'>[link]</a></li>
	<li>Being a Successful Online Learner <a href='https://docs.google.com/document/d/1rFkPECHaEIxEYV4ImmZmbox8VF8UiJhvDo_jbFH4jzo/edit'>[link]</a></li>
	<li>Five Tips for Success in Online Learning <a href='https://www.youtube.com/watch?v=LQy40B4y-AE'>[link]</a></li>
</ul>
</div>

	)
}