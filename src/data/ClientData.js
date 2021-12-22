// Application Constants
export const URLCLASSID = 'cpsc'
export const SCHEDULE_MWF = 'MWF'
export const SCHEDULE_TTR = 'TTh'


export const classList = [																											 
	{ 'classID':'sp22-cpsc-20000-002', 'title':'Introduction to Computer Science', 'number':'20000', 'calendarID':'2022-01-10-16', 'schedule':'MWF', 'time':'1-1:50 PM', 'finalExam':'Wednesday, May 4 from 1:30 PM to 3:30 PM CT', 'syllabusURL':'' },
	{ 'classID':'sp22-cpsc-24500-001', 'title':'Object-Oriented Programming', 'number':'24500', 'calendarID':'2022-01-10-16', 'schedule':'MWF', 'time':'2-2:50 PM', 'finalExam':'Monday, May 2 from 4 PM to 6 PM CT', 'syllabusURL':'' },
	{ 'classID':'sp22-cpsc-44000-001', 'title':'Software Engineering', 'number':'44000', 'calendarID':'2022-01-10-16', 'schedule':'TTh', 'time':'11-12:15 PM', 'finalExam':'Tuesday, May 3 from 10:30 AM to 12:30 PM CT', 'syllabusURL':'' },
	{ 'classID':'sp22-cpsc-49200-001', 'title':'Software Systems Capstone', 'number':'49200', 'calendarID':'2022-01-10-16', 'schedule':'Online', 'time':'', 'finalExam':'Thursday, May 5 from 10:30 AM to 12:30 PM CT', 'syllabusURL':'' },
	{ 'classID':'sp22-cpsc-49200-004', 'title':'Software Systems Capstone', 'number':'49200', 'calendarID':'2022-01-10-16', 'schedule':'Online', 'time':'', 'finalExam':'Thursday, May 5 from 4 PM to 6 PM CT', 'syllabusURL':'' },
	{ 'classID':'20000-fall-2021-002', 'title':'Introduction to Computer Science', 'number':'20000', 'calendarID':'2021-08-30-16', 'schedule':'MWF', 'finalExam':'Monday, December 13 from 10:30 AM to 12:30 PM CT', 'syllabusURL':'https://pithub.blob.core.windows.net/nvm4zqwm/lnt2ybs1-syllabus-cpsc-20000-002.pdf' },
	{ 'classID':'20000-fall-2021-003', 'title':'Introduction to Computer Science', 'number':'20000', 'calendarID':'2021-08-30-16', 'schedule':'MWF', 'finalExam':'Friday, December 17 from 10:30 AM to 12:30 PM CT', 'syllabusURL':'https://pithub.blob.core.windows.net/nvm4zqwm/lonr2vt9-syllabus-cpsc-20000-003.pdf' },
	{ 'classID':'24700-fall-2021-001', 'title':'Web and Distributed Programming', 'number':'24700', 'calendarID':'2021-08-30-16', 'schedule':'MWF', 'finalExam':'Friday, December 17 from 4 PM to 6 PM CT', 'syllabusURL':'https://pithub.blob.core.windows.net/nvm4zqwm/js13m00k-syllabus-cpsc-24700-001.pdf' },
	{ 'classID':'44000-fall-2021-001', 'title':'Software Engineering', 'number':'44000', 'calendarID':'2021-08-30-16', 'schedule':'MWF', 'finalExam':'Monday, December 13 from 4 PM to 6 PM CT', 'syllabusURL':'https://pithub.blob.core.windows.net/nvm4zqwm/zj5cvkl3-syllabus-cpsc-44000-001.pdf' },
	{ 'classID':'20000-spring-2021-002', 'title':'Introduction to Computer Science', 'number':'20000', 'calendarID':'2021-01-18-16', 'schedule':'MWF', 'finalExam':'', 'syllabusURL':'https://botb.blob.core.windows.net/nvm4zqwm/v1qshz2j-syllabus-cpsc-20000-002.pdf' },
	{ 'classID':'24500-spring-2021-001', 'title':'Object-Oriented Programming', 'number':'24500', 'calendarID':'2021-01-18-16', 'schedule':'MWF', 'finalExam':'', 'syllabusURL':'https://botb.blob.core.windows.net/nvm4zqwm/o2sla524-syllabus-cpsc-24500-001.pdf' },
	{ 'classID':'36000-spring-2021-001', 'title':'Applied Programming Languages', 'number':'36000', 'calendarID':'2021-01-18-16', 'schedule':'TTh', 'finalExam':'', 'syllabusURL':'https://botb.blob.core.windows.net/nvm4zqwm/se3c5q62-syllabus-cpsc-36000-001.pdf' },
	{ 'classID':'44000-spring-2021-001', 'title':'Software Engineering', 'number':'44000', 'calendarID':'2021-01-18-16', 'schedule':'TTh', 'finalExam':'', 'syllabusURL':'https://botb.blob.core.windows.net/nvm4zqwm/ps6xfphd-syllabus-cpsc-44000-001.pdf' }
]; 
export const CURRENTCALENDARID = classList[0].calendarID

// Sprint Calendars
// The following structure represents the sprint calendar for any class that starts on 2021-01-10 and is 16 weeks long. 
export const sprintCalendarSpring_2022_01_10_16 = [																											 
	{ 'start':'Mon Jan 10 2022 08:00:00 GMT-0600', 'end':'Sun Jan 23 2022 23:59:00 GMT-0600', 'notes':'Martin Luther King Day' },
	{ 'start':'Mon Jan 24 2022 08:00:00 GMT-0600', 'end':'Sun Feb 06 2022 23:59:00 GMT-0600', 'notes':'' },
	{ 'start':'Mon Feb 07 2022 08:00:00 GMT-0600', 'end':'Sun Feb 20 2022 23:59:00 GMT-0600', 'notes':'' },
	{ 'start':'Mon Feb 21 2022 08:00:00 GMT-0600', 'end':'Sun Mar 13 2022 23:59:00 GMT-0600', 'notes':'Spring Break' },
	{ 'start':'Mon Mar 14 2022 08:00:00 GMT-0600', 'end':'Sun Mar 27 2022 23:59:00 GMT-0600', 'notes':'' },
	{ 'start':'Mon Mar 28 2022 08:00:00 GMT-0600', 'end':'Sun Apr 10 2022 23:59:00 GMT-0600', 'notes':'' },
	{ 'start':'Mon Apr 11 2022 08:00:00 GMT-0600', 'end':'Sun Apr 24 2022 23:59:00 GMT-0600', 'notes':'Easter Holiday' },
	{ 'start':'Mon Apr 25 2022 08:00:00 GMT-0600', 'end':'Thu May 05 2022 23:59:00 GMT-0600', 'notes':'Final Exams' }
]; 

export const sprintCalendarFall_2021_08_30_16 = [																											 
	{ 'start':'Mon Aug 30 2021 08:00:00 GMT-0600', 'end':'Sun Sep 12 2021 23:59:00 GMT-0600', 'notes':'Labor Day' },
	{ 'start':'Mon Sep 13 2021 08:00:00 GMT-0600', 'end':'Sun Sep 26 2021 23:59:00 GMT-0600', 'notes':'' },
	{ 'start':'Mon Sep 27 2021 08:00:00 GMT-0600', 'end':'Sun Oct 10 2021 23:59:00 GMT-0600', 'notes':'Fall Break' },
	{ 'start':'Mon Oct 11 2021 08:00:00 GMT-0600', 'end':'Sun Oct 24 2021 23:59:00 GMT-0600', 'notes':'' },
	{ 'start':'Mon Oct 25 2021 08:00:00 GMT-0600', 'end':'Sun Nov 07 2021 23:59:00 GMT-0600', 'notes':'' },
	{ 'start':'Mon Nov 08 2021 08:00:00 GMT-0600', 'end':'Sun Nov 21 2021 23:59:00 GMT-0600', 'notes':'' },
	{ 'start':'Mon Nov 22 2021 08:00:00 GMT-0600', 'end':'Sun Dec 05 2021 23:59:00 GMT-0600', 'notes':'Thanksgiving Break' },
	{ 'start':'Mon Dec 06 2021 08:00:00 GMT-0600', 'end':'Thu Dec 16 2021 23:59:00 GMT-0600', 'notes':'Final Exams' }
]; 

export const sprintCalendarSpring_2021_01_18_16 = [																											 
	{ 'start':'Mon Jan 18 2021 08:00:00 GMT-0600', 'end':'Sun Jan 31 2021 23:59:00 GMT-0600', 'notes':'Martin Luther King Day' },
	{ 'start':'Mon Feb 01 2021 08:00:00 GMT-0600', 'end':'Sun Feb 14 2021 23:59:00 GMT-0600', 'notes':'' },
	{ 'start':'Mon Feb 15 2021 08:00:00 GMT-0600', 'end':'Sun Feb 28 2021 23:59:00 GMT-0600', 'notes':'' },
	{ 'start':'Mon Mar 01 2021 08:00:00 GMT-0600', 'end':'Sun Mar 14 2021 23:59:00 GMT-0600', 'notes':'Spring Break' },
	{ 'start':'Mon Mar 15 2021 08:00:00 GMT-0600', 'end':'Sun Mar 28 2021 23:59:00 GMT-0600', 'notes':'' },
	{ 'start':'Mon Mar 29 2021 08:00:00 GMT-0600', 'end':'Sun Apr 11 2021 23:59:00 GMT-0600', 'notes':'Easter Holiday' },
	{ 'start':'Mon Apr 12 2021 08:00:00 GMT-0600', 'end':'Sun Apr 25 2021 23:59:00 GMT-0600', 'notes':'' },
	{ 'start':'Mon Apr 26 2021 08:00:00 GMT-0600', 'end':'Thu May 06 2021 23:59:00 GMT-0600', 'notes':'Final Exams' }
]; 