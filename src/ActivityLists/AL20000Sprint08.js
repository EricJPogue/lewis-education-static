import React from 'react'

import { LearningObjectivesIntro, ActivitiesListIntro } from './AL00000Sprint03'
import { StandardActivities, StandardActivitiesClosing, Closing } from './AL00000Sprint08'

import { oreillyPlaylistICS } from '../Links'
import { Start_FinalProject, Complete_FinalProject } from '../Activities/FinalProject'

export const al20000Sprint08 = () => {
	return (
<div>
<h5>Sprint 8: Final Project, Final Project, and more Final Project</h5>

<p>You made it. Very well done! Thank you for your dedication, support, and participation. All that’s left is to finish 
strong and deliver a Final Project that makes you proud. Don’t do it for the grade, don’t do it for me, do this one for 
yourself.</p>  

{LearningObjectivesIntro()}
<ul style={{listStyleType:'square'}}>
	<li>Independently deliver and present meaningful working software as part of your Final Project</li>
	<li>Present your Final Project to your instructor and classmates</li>
</ul>

{ActivitiesListIntro()}
<ol>
	{StandardActivities(Start_FinalProject(), oreillyPlaylistICS(), 8)}
	{StandardActivitiesClosing(Complete_FinalProject())}
</ol>

{Closing()}
</div>
	)
}

// Todo: Add finals date to calendar.