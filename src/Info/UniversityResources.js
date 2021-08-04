import React from 'react'
import { NavLink } from 'react-router-dom'

export const UniversityResources = () => {
	return (

<div>
<h4>University Resources</h4>
<h5>Are you in need of help?</h5>
<p>Stop by our <NavLink to='/activity/study-table'><em>CAMS virtual study table</em></NavLink> and get tutoring help with your Computer Science classes.</p>

<p>Below are some of the additional Lewis University organizations that are available to assist you:</p>
<ul style={{listStyleType:'square'}}>
	<li><a href='https://docs.google.com/document/d/1apPN5avRsTZ4TL7EL_wEczs8vFd_uyrwts-dfIgkOgg/edit#heading=h.gkos893m3ubj' target='_blank' rel='noopener noreferrer'>Office of Technology Help Desk</a></li>
	<li><a href='https://www.lewisu.edu/academics/library/index.htm' target='_blank' rel='noopener noreferrer'>University Library</a></li>
	<li><a href='https://www.lewisu.edu/welcome/offices/business/facilities.htm' target='_blank' rel='noopener noreferrer'>Campus Facilities</a></li>
	<li><a href='https://www.lewisu.edu/studentservices/security/' target='_blank' rel='noopener noreferrer'>Campus Security</a></li>
	<li><a href='https://www.youtube.com/watch?v=3KQ6QemExf4' target='_blank' rel='noopener noreferrer'>Center for Health and Counseling Services</a></li>
</ul>

<br />
<p>Catalogs, Schedules, and Calendars:</p>
<ul>
	<li><a href='https://lewisu.edu/academics/programs/catalog.htm'>Course Catalogs</a></li>
	<li><a href='https://lewisu.edu/academics/programs/schedule.htm'>Course Schedules</a></li>
	<li><a href='https://www.lewisu.edu/academics/academiccalendar.htm'>Academic Calendars</a></li>
</ul>

<br />
<p>Below are several Additional References that you may also find useful:</p>
<ul>
	<li><a href='https://docs.google.com/document/d/1apPN5avRsTZ4TL7EL_wEczs8vFd_uyrwts-dfIgkOgg/edit#heading=h.bep7p3pp0iq3' target='_blank' rel='noopener noreferrer'>Blackboard Support</a></li>
	<li><a href='http://lewisstudenttutorials.weebly.com/' target='_blank' rel='noopener noreferrer'>Blackboard Tutorials</a></li>
	<li><a href='https://docs.google.com/document/d/1F1t882ne3d2Y64wJxTQX1GuUV7HvVafzB7Uj8mMSARU/edit'>Technology Requirements for Web Enhanced Courses</a></li>
	<li><a href='https://docs.google.com/document/d/1rFkPECHaEIxEYV4ImmZmbox8VF8UiJhvDo_jbFH4jzo/edit'>Being a Successful Online Learner</a></li>
	<li><a href='https://www.youtube.com/watch?v=LQy40B4y-AE'>Five Tips for Success in Online Learning</a></li>
</ul>
</div>

	)
}