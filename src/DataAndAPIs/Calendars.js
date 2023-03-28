export const _SPRING_2023_01_09_16 = '2023-01-09-16'
export const _CURRENT_CALENDAR = _SPRING_2023_01_09_16

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
			{ 'start':'Mon Mar 13 2023 08:00:00 GMT-0500', 'end':'Sun Mar 26 2023 23:59:00 GMT-0600', 'notes':'' },
			{ 'start':'Mon Mar 27 2023 08:00:00 GMT-0500', 'end':'Sun Apr 09 2023 23:59:00 GMT-0600', 'notes':'Easter Holiday' },
			{ 'start':'Mon Apr 10 2023 08:00:00 GMT-0500', 'end':'Sun Apr 23 2023 23:59:00 GMT-0600', 'notes':'' },
			{ 'start':'Mon Apr 24 2023 08:00:00 GMT-0500', 'end':'Thu May 04 2023 23:59:00 GMT-0600', 'notes':'Final Exams' }
		]
	}
]