import { getClassCalendar } from '../DataAndAPIs/Classes'

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
	// Todo: Verify the CST is always GMT-0500 and does not change with daylight savings time.
	if (Date.parse(checkDate) - Date.parse(new Date()) < 0) {
		return true;
	}
	return false;
}

export const sprintStartDate = (sprintNumber) => {
	let sprintCalendar = getClassCalendar()
	return CSTDate(sprintCalendar[sprintNumber].start,false,false)
}

export const sprintEndDate = (sprintNumber) => {
	let sprintCalendar = getClassCalendar()
	return CSTDate(sprintCalendar[sprintNumber].end,false,true)
}

export const sprintEndDateWithoutTime = (sprintNumber) => {
	let sprintCalendar = getClassCalendar()
	return CSTDate(sprintCalendar[sprintNumber].end,false,false)
}

