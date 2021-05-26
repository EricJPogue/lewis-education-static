import './Main.css';

import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { HeaderNavigation } from './HeaderNavigation'

import { Home } from './Home'

import { Welcome } from './Welcome'
import { Sprint } from './Sprint'

import { SprintCalendar } from './SprintCalendar'
import { SprintClassActivities } from './SprintSchedule'

import { UniversityResources } from './Info/UniversityResources'
import { InfoEricPogue } from './Info/InfoEricPogue'
import { Credits } from './Info/Credits'
import { Version } from './Info/Version'

import { Activity } from './Activity'
import { ActivityConfig } from './ActivityConfig'
import { ActivityOOP } from './ActivityOOP'
import { ActivityWeb } from './ActivityWeb'
import { ActivityDale } from './ActivityDale'
import { ActivityArchitecture } from './ActivityArchitecture'
import { StudyTable } from './Activities/StudyTable'

import { Test } from './Test'

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
						<Route path='/sprint/:reference' component={Sprint}/>

						<Route path='/calendar/:reference' component={SprintCalendar}/>
						<Route path='/schedule/:reference' component={SprintClassActivities}/>

						<Route path='/info' component={InfoEricPogue}/>
						<Route path='/credits' component={Credits}/>
						<Route path='/getting-help' component={UniversityResources}/>
						<Route path='/study-table' component={StudyTable}/>
						<Route path='/version' component={Version}/>

						<Route path={'/activity/:reference'} component={Activity}/>
						<Route path={'/activity-config/:reference'} component={ActivityConfig}/>
						<Route path={'/activity-oop/:reference'} component={ActivityOOP}/>
						<Route path={'/activity-web/:reference'} component={ActivityWeb}/>
						<Route path={'/activity-dale/:reference'} component={ActivityDale}/>
						<Route path={'/activity-architecture/:reference'} component={ActivityArchitecture}/>

						<Route path={'/test/:id'} component={Test}/>
					</div>
				</HashRouter>
			</div>
		);
	}
}

export default Main;