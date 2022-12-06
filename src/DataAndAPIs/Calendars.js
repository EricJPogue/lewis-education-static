export const _SPRING_2023_01_09_16 = '2023-01-09-16'
export const _FALL_2022_08_29_16 = '2022-08-29-16'
export const _SUMMER_2022_05_09_08 = '2022-05-09-08'
const _SPRING_2022_01_10_16 = '2022-01-10-16'

//  _CURRENT_CALENDAR should be consistently updated to reflect the current (possibly upcoming) calendar.
export const _CURRENT_CALENDAR = _FALL_2022_08_29_16

export const getCalendarByCalendarID = (calendarID) => {
	for (let i = 0; i < CALENDAR_LIST.length; i++) {
		if (CALENDAR_LIST[i].calendarID === calendarID)
			return CALENDAR_LIST[i].calendar
	}

	console.log(`Error: Calendar ID “${calendarID}” not found returning default calendar (ID=${CALENDAR_LIST[0].calendarID})`)
	return CALENDAR_LIST[0].calendar
}

export const getCalendarPlusByCalendarID = (calendarID) => {
	for (let i = 0; i < CALENDAR_LIST.length; i++) {
		if (CALENDAR_LIST[i].calendarID === calendarID)
			return CALENDAR_LIST[i]
	}

	console.log(`Error: Calendar ID “${calendarID}” not found returning default calendar (ID=${CALENDAR_LIST[0].calendarID})`)
	return CALENDAR_LIST[0]
}

export const CALENDAR_LIST =  [
	{ 
		'calendarID': _SPRING_2023_01_09_16, 
		'description':'Spring 2023',
		'meetingDates':'Monday, January 9th through Friday, May 5th',
		'calendar': [																											 
			{ 'start':'Mon Jan 09 2023 08:00:00 GMT-0500', 'end':'Sun Jan 22 2023 23:59:00 GMT-0600', 'notes':'Martin Luther King Day' },
			{ 'start':'Mon Jan 23 2023 08:00:00 GMT-0500', 'end':'Sun Feb 05 2023 23:59:00 GMT-0600', 'notes':'' },
			{ 'start':'Mon Feb 06 2023 08:00:00 GMT-0500', 'end':'Sun Feb 19 2023 23:59:00 GMT-0600', 'notes':'' },
			{ 'start':'Mon Feb 20 2023 08:00:00 GMT-0500', 'end':'Sun Mar 12 2023 23:59:00 GMT-0600', 'notes':'Spring Break' },
			{ 'start':'Mon Mar 11 2023 08:00:00 GMT-0500', 'end':'Sun Mar 26 2023 23:59:00 GMT-0600', 'notes':'' },
			{ 'start':'Mon Mar 27 2023 08:00:00 GMT-0500', 'end':'Sun Apr 09 2023 23:59:00 GMT-0600', 'notes':'' },
			{ 'start':'Mon Apr 10 2023 08:00:00 GMT-0500', 'end':'Sun Apr 23 2023 23:59:00 GMT-0600', 'notes':'Easter Holiday' },
			{ 'start':'Mon Apr 24 2023 08:00:00 GMT-0500', 'end':'Thu May 04 2023 23:59:00 GMT-0600', 'notes':'Final Exams' }
		]
	},
	{ 
		'calendarID': _FALL_2022_08_29_16, 
		'calendar': [																											 
			{ 'start':'Mon Aug 29 2022 08:00:00 GMT-0500', 'end':'Sun Sep 11 2022 23:59:00 GMT-0600', 'notes':'Labor Day' },
			{ 'start':'Mon Sep 12 2022 08:00:00 GMT-0500', 'end':'Sun Sep 25 2022 23:59:00 GMT-0600', 'notes':'' },
			{ 'start':'Mon Sep 26 2022 08:00:00 GMT-0500', 'end':'Sun Oct 09 2022 23:59:00 GMT-0600', 'notes':'Fall Break' },
			{ 'start':'Mon Oct 10 2022 08:00:00 GMT-0500', 'end':'Sun Oct 23 2022 23:59:00 GMT-0600', 'notes':'' },
			{ 'start':'Mon Oct 24 2022 08:00:00 GMT-0500', 'end':'Sun Nov 06 2022 23:59:00 GMT-0600', 'notes':'' },
			{ 'start':'Mon Nov 07 2022 08:00:00 GMT-0500', 'end':'Sun Nov 20 2022 23:59:00 GMT-0600', 'notes':'' },
			{ 'start':'Mon Nov 21 2022 08:00:00 GMT-0500', 'end':'Sun Dec 04 2022 23:59:00 GMT-0600', 'notes':'Thanksgiving Break' },
			{ 'start':'Mon Dec 05 2022 08:00:00 GMT-0500', 'end':'Thu Dec 15 2022 23:59:00 GMT-0600', 'notes':'Final Exams' }
		] 
	},
	{ 
		'calendarID': _SUMMER_2022_05_09_08,
		'calendar': [																											 
			{ 'start':'Mon May 09 2022 08:00:00 GMT-0500', 'end':'Sun May 15 2022 23:59:00 GMT-0600', 'notes':'' },
			{ 'start':'Mon May 16 2022 08:00:00 GMT-0500', 'end':'Sun May 22 2022 23:59:00 GMT-0600', 'notes':'' },
			{ 'start':'Mon May 23 2022 08:00:00 GMT-0500', 'end':'Sun May 29 2022 23:59:00 GMT-0600', 'notes':'' },
			{ 'start':'Mon May 30 2022 08:00:00 GMT-0500', 'end':'Sun Jun 05 2022 23:59:00 GMT-0600', 'notes':'Memorial Day' },
			{ 'start':'Mon Jun 06 2022 08:00:00 GMT-0500', 'end':'Sun Jun 12 2022 23:59:00 GMT-0600', 'notes':'' },
			{ 'start':'Mon Jun 13 2022 08:00:00 GMT-0500', 'end':'Sun Jun 19 2022 23:59:00 GMT-0600', 'notes':'' },
			{ 'start':'Mon Jun 20 2022 08:00:00 GMT-0500', 'end':'Sun Jun 26 2022 23:59:00 GMT-0600', 'notes':'Juneteenth' },
			{ 'start':'Mon Jun 27 2022 08:00:00 GMT-0500', 'end':'Thu Jun 30 2022 23:59:00 GMT-0600', 'notes':'Final Exams' }
		] 
	}, 
	{ 
		'calendarID': _SPRING_2022_01_10_16, 
		'calendar': [																											 
			{ 'start':'Mon Jan 10 2022 08:00:00 GMT-0500', 'end':'Sun Jan 23 2022 23:59:00 GMT-0600', 'notes':'Martin Luther King Day' },
			{ 'start':'Mon Jan 24 2022 08:00:00 GMT-0500', 'end':'Sun Feb 06 2022 23:59:00 GMT-0600', 'notes':'' },
			{ 'start':'Mon Feb 07 2022 08:00:00 GMT-0500', 'end':'Sun Feb 20 2022 23:59:00 GMT-0600', 'notes':'' },
			{ 'start':'Mon Feb 21 2022 08:00:00 GMT-0500', 'end':'Sun Mar 13 2022 23:59:00 GMT-0600', 'notes':'Spring Break' },
			{ 'start':'Mon Mar 14 2022 08:00:00 GMT-0500', 'end':'Sun Mar 27 2022 23:59:00 GMT-0600', 'notes':'' },
			{ 'start':'Mon Mar 28 2022 08:00:00 GMT-0500', 'end':'Sun Apr 10 2022 23:59:00 GMT-0600', 'notes':'' },
			{ 'start':'Mon Apr 11 2022 08:00:00 GMT-0500', 'end':'Sun Apr 24 2022 23:59:00 GMT-0600', 'notes':'Easter Holiday' },
			{ 'start':'Mon Apr 25 2022 08:00:00 GMT-0500', 'end':'Thu May 05 2022 23:59:00 GMT-0600', 'notes':'Final Exams' }
		]
	}
]