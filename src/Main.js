import './Main.css';

import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { HeaderNavigation } from './HeaderNavigation'

import { Home } from './Home'
import { Welcome } from './ActivityVideo/Welcome'
import { Syllabus } from './Syllabi/Syllabus' 
import { Sprint } from './ActivityLists/Sprint'
import { SprintCalendar } from './SprintCalendar'
import { SprintClassActivities } from './SprintSchedule'
import { UniversityResources } from './Info/UniversityResources'
import { InfoEricPogue } from './Info/InfoEricPogue'
import { Credits } from './Info/Credits'
import { Version } from './Info/Version'
import { StudyTable } from './Activities/StudyTable'

import { Deck } from './Slides/SlideDeck';
import { Breakout } from './Slides/Breakout'

import { Test } from './Test/Test'
import { Activity } from './Activity'
import { ActivityConfig } from './ActivityVideo/ActivityConfig'
import { ActivityOOP } from './ActivityVideo/ActivityOOP'
import { ActivityWeb } from './ActivityVideo/ActivityWeb'
import { ActivityDale } from './ActivityVideo/ActivityDale'
import { ActivityArchitecture } from './ActivityVideo/ActivityArchitecture'

class Main extends Component {
	render() {
		return (
			<div>
				<HeaderNavigation />
				<HashRouter>
					<div className='Main'>
						<Route exact path='/' component={Home}/>
						<Route exact path='/home' component={Home}/>
						<Route path='/welcome' component={Welcome}/>
						<Route path='/syllabus' component={Syllabus}/>
						<Route path='/sprint/:reference' component={Sprint}/>
						<Route path='/calendar/:reference' component={SprintCalendar}/>
						<Route path='/schedule/:reference' component={SprintClassActivities}/>

						<Route path='/info' component={InfoEricPogue}/>
						<Route path='/credits' component={Credits}/>
						<Route path='/getting-help' component={UniversityResources}/>
						<Route path='/study-table' component={StudyTable}/>
						<Route path='/version' component={Version}/>

						<Route path='/deck/:route' component={Deck}/>

						<Route path={'/breakout/:reference'} component={Breakout}/>
						<Route path={'/test/:id'} component={Test}/>

						<Route path={'/activity/:reference'} component={Activity}/>
						<Route path={'/activity-config/:reference'} component={ActivityConfig}/>
						<Route path={'/activity-oop/:reference'} component={ActivityOOP}/>
						<Route path={'/activity-web/:reference'} component={ActivityWeb}/>
						<Route path={'/activity-dale/:reference'} component={ActivityDale}/>
						<Route path={'/activity-architecture/:reference'} component={ActivityArchitecture}/>
					</div>
				</HashRouter>
			</div>
		);
	}
}

export default Main;