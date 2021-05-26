import * as URLParameters from './URLParameters'

export const sprintCalendarFromURL = () => {
	let cpsc = URLParameters.cpsc()
	switch(cpsc) {
		// Fall 2021 classes.
		case '20000-fall-2021-002': return sprintCalendar('2021-08-30-16')
		case '20000-fall-2021-003': return sprintCalendar('2021-08-30-16')
		case '24700-fall-2021-001': return sprintCalendar('2021-08-30-16')
		case '44000-fall-2021-001': return sprintCalendar('2021-08-30-16')

		// Spring 2021 classes.
		case '20000-spring-2021-002': return sprintCalendar('2021-01-18-16')
		case '24500-spring-2021-001': return sprintCalendar('2021-01-18-16')
		case '36000-spring-2021-001': return sprintCalendar('2021-01-18-16')
		case '44000-spring-2021-001': return sprintCalendar('2021-01-18-16')

		default:
			console.log('Error: Course start date and duration not found! (cpsc='+cpsc+')') 
			return sprintCalendar('2020-08-31-16')
	}
}

export const tuesdayThursdayClass = () => {
	let cpsc = URLParameters.cpsc()
	switch(cpsc) {
		case '36000-spring-2021-001': return true;
		case '44000-spring-2021-001': return true;
		default: return false;
	}
}

export const sprintCalendar = (startDateAndDuration) => {
	// The following structure represents the sprint calendar for any class that starts on 2020-01-13 and is 16 weeks long. 
	const sprintCalendarSpring_2021_01_18_16 = [																											 
		{ 'start':'Mon Jan 18 2021 08:00:00 GMT-0600', 'end':'Sun Jan 31 2021 23:59:00 GMT-0600', 'notes':'Martin Luther King Day' },
		{ 'start':'Mon Feb 01 2021 08:00:00 GMT-0600', 'end':'Sun Feb 14 2021 23:59:00 GMT-0600', 'notes':'' },
		{ 'start':'Mon Feb 15 2021 08:00:00 GMT-0600', 'end':'Sun Feb 28 2021 23:59:00 GMT-0600', 'notes':'' },
		{ 'start':'Mon Mar 01 2021 08:00:00 GMT-0600', 'end':'Sun Mar 14 2021 23:59:00 GMT-0600', 'notes':'Spring Break' },
		{ 'start':'Mon Mar 15 2021 08:00:00 GMT-0600', 'end':'Sun Mar 28 2021 23:59:00 GMT-0600', 'notes':'' },
		{ 'start':'Mon Mar 29 2021 08:00:00 GMT-0600', 'end':'Sun Apr 11 2021 23:59:00 GMT-0600', 'notes':'Easter Holiday' },
		{ 'start':'Mon Apr 12 2021 08:00:00 GMT-0600', 'end':'Sun Apr 25 2021 23:59:00 GMT-0600', 'notes':'' },
		{ 'start':'Mon Apr 26 2021 08:00:00 GMT-0600', 'end':'Thu May 06 2021 23:59:00 GMT-0600', 'notes':'Final Exams' }
	]; 

	const sprintCalendarFall_2021_08_30_16 = [																											 
		{ 'start':'Mon Aug 30 2021 08:00:00 GMT-0600', 'end':'Sun Sep 12 2021 23:59:00 GMT-0600', 'notes':'Labor Day' },
		{ 'start':'Mon Sep 13 2021 08:00:00 GMT-0600', 'end':'Sun Sep 26 2021 23:59:00 GMT-0600', 'notes':'' },
		{ 'start':'Mon Sep 27 2021 08:00:00 GMT-0600', 'end':'Sun Oct 10 2021 23:59:00 GMT-0600', 'notes':'Fall Break' },
		{ 'start':'Mon Oct 11 2021 08:00:00 GMT-0600', 'end':'Sun Oct 24 2021 23:59:00 GMT-0600', 'notes':'' },
		{ 'start':'Mon Oct 25 2021 08:00:00 GMT-0600', 'end':'Sun Nov 07 2021 23:59:00 GMT-0600', 'notes':'' },
		{ 'start':'Mon Nov 08 2021 08:00:00 GMT-0600', 'end':'Sun Nov 21 2021 23:59:00 GMT-0600', 'notes':'' },
		{ 'start':'Mon Nov 22 2021 08:00:00 GMT-0600', 'end':'Sun Dec 05 2021 23:59:00 GMT-0600', 'notes':'Thanksgiving Break' },
		{ 'start':'Mon Dec 06 2021 08:00:00 GMT-0600', 'end':'Thu Dec 16 2021 23:59:00 GMT-0600', 'notes':'Final Exams' }
	]; 

	// Expecting a date and duration string representation of YYYY-MM-DD-RR where RR is the two 
	// digit duration in weeks (e.g. '2020-08-31-16')
	if (startDateAndDuration === '2021-01-18-16') {
		return sprintCalendarSpring_2021_01_18_16
	} 
	else if (startDateAndDuration === '2021-08-30-16') {
		return sprintCalendarFall_2021_08_30_16	
	}

	console.log('Fatal Error: sprintCalendar() called with invalid start date and duration')
	return sprintCalendarFall_2021_08_30_16;
}

export const CSTDate = (dateIn, includeYear, includeTime) => {
	var months = ['January','February','March','April','May','June','July', 'August',
		'September','October','November','December'];
	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
	var date = new Date(dateIn);

	// CST is UTC -0600 so subtract 6 hours and use UTC values
	date.setUTCHours(date.getUTCHours() - 6);	

	var dateString = days[date.getUTCDay()] + ', ' + months[date.getUTCMonth()] + ' ' + date.getUTCDate();
				
	if (includeYear) {
		dateString = dateString + ', ' + date.getUTCFullYear();
	}
	
	if (includeTime) {
		dateString = dateString + ' at ' + ((date.getUTCHours()%12) || 12) + ':' +
				('0' + date.getUTCMinutes()).slice(-2) + ' ' + (date.getUTCHours() < 12? 'AM CT':'PM CT');
	}

	return dateString;
}

export const duration = (start, end) => {
	let startDate = new Date(start);
	let endDate = new Date(end);
	let durationTime = endDate.getTime() - startDate.getTime();
	let durationDays = Math.round(durationTime / (1000 * 3600 * 24));
	return durationDays;
}

export const incrementDate = (originalDate, incrementBy) => {
	// Note that sometimes the newDate seems to be off by one hour. Limited research suggests that may be because of 
	// daylights savings time. More research may be valuable. 
	let newDate = new Date(originalDate);
	newDate.setDate(newDate.getDate()+incrementBy);
	return newDate;
}

export const isToday = (someDate) => {
	const today = new Date()
	return someDate.getDate() === today.getDate() &&
	  someDate.getMonth() === today.getMonth() &&
	  someDate.getFullYear() === today.getFullYear()
}

export const pastDate = (checkDate) => {
	if (Date.parse(checkDate) - Date.parse(new Date()) < 0) {
		return true;
	}
	return false;
}

export const sprintStartDate = (sprintNumber) => {
	let sprintCalendar = sprintCalendarFromURL()
	return CSTDate(sprintCalendar[sprintNumber].start,false,false)
}

export const sprintEndDate = (sprintNumber) => {
	let sprintCalendar = sprintCalendarFromURL()
	return CSTDate(sprintCalendar[sprintNumber].end,false,true)
}

export const sprintEndDateWithoutTime = (sprintNumber) => {
	let sprintCalendar = sprintCalendarFromURL()
	return CSTDate(sprintCalendar[sprintNumber].end,false,false)
}
