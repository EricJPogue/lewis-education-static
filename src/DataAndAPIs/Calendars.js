export const _FALL_2023_08_28_16 = '2023-08-28-16'
export const _SPRING_2024_01_15_16 = '2023-01-09-16'

export const _CURRENT_CALENDAR = _SPRING_2024_01_15_16

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
		'calendarID': _FALL_2023_08_28_16, 
		'description':'FALL 2023',
		'meetingDates':'Monday, August 28th through Friday, December 16th',
		'calendar': [																											 
			{ 'start':'Mon Aug 28 2023 08:00:00 GMT-0500', 'end':'Sun Sep 10 2023 23:59:00 GMT-0600', 'notes':'Labor Day' },
			{ 'start':'Mon Sep 11 2023 08:00:00 GMT-0500', 'end':'Sun Sep 24 2023 23:59:00 GMT-0600', 'notes':'' },
			{ 'start':'Mon Sep 25 2023 08:00:00 GMT-0500', 'end':'Sun Oct 08 2023 23:59:00 GMT-0600', 'notes':'Fall Break' },
			{ 'start':'Mon Oct 09 2023 08:00:00 GMT-0500', 'end':'Sun Oct 22 2023 23:59:00 GMT-0600', 'notes':'Midterm Exam' },
			{ 'start':'Mon Oct 23 2023 08:00:00 GMT-0500', 'end':'Sun Nov 05 2023 23:59:00 GMT-0600', 'notes':'' },
			{ 'start':'Mon Nov 06 2023 08:00:00 GMT-0500', 'end':'Sun Nov 19 2023 23:59:00 GMT-0600', 'notes':'' },
			{ 'start':'Mon Nov 20 2023 08:00:00 GMT-0500', 'end':'Sun Dec 10 2023 23:59:00 GMT-0600', 'notes':'Thanksgiving Recess' },
			{ 'start':'Mon Dec 11 2023 08:00:00 GMT-0500', 'end':'Thu Dec 14 2023 23:59:00 GMT-0600', 'notes':'Final Exam' }
		]
	},
	{ 
		'calendarID': _SPRING_2024_01_15_16,
		'description':'Spring 2024',
		'meetingDates':'Monday, January 15th through Friday, May 10th',
		'calendar': [																											 
			{ 'start':'Mon Jan 15 2024 08:00:00 GMT-0500', 'end':'Sun Jan 28 2024 23:59:00 GMT-0600', 'notes':'Martin Luther King Day' },
			{ 'start':'Mon Jan 29 2024 08:00:00 GMT-0500', 'end':'Sun Feb 11 2024 23:59:00 GMT-0600', 'notes':'' },
			{ 'start':'Mon Feb 12 2024 08:00:00 GMT-0500', 'end':'Sun Feb 25 2024 23:59:00 GMT-0600', 'notes':'' },
			{ 'start':'Mon Feb 26 2024 08:00:00 GMT-0500', 'end':'Sun Mar 17 2024 23:59:00 GMT-0600', 'notes':'Spring Break' },
			{ 'start':'Mon Mar 18 2024 08:00:00 GMT-0500', 'end':'Sun Mar 31 2024 23:59:00 GMT-0600', 'notes':'Easter Holiday' },
			{ 'start':'Mon Apr 01 2024 08:00:00 GMT-0500', 'end':'Sun Apr 14 2024 23:59:00 GMT-0600', 'notes':'Easter Holiday (continued)' },
			{ 'start':'Mon Apr 15 2024 08:00:00 GMT-0500', 'end':'Sun May 05 2024 23:59:00 GMT-0600', 'notes':'Class Project' },
			{ 'start':'Mon May 06 2024 08:00:00 GMT-0500', 'end':'Thu May 09 2024 23:59:00 GMT-0600', 'notes':'Final Exams' }
		]
	}
]