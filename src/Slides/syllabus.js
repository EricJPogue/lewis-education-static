import React from 'react'
import LewisUniversityLogo from './LewisUniversityLogo.png'
import Table from 'react-bootstrap/Table'

import { getFinalExamDateAndTime } from '../data/ClientDataAPIs'


const instructor = { 
	name:'Eric Pogue', 
	office:'AS-124-A', 
	officeHours:'Friday 1-2 PM CT by appointment',
	appointmentRequests:'Appointments can be requested via email',
	lewisPhone:'(815) 836-5015',
	lewisEmail:'epogue@lewisu.edu' 
}

const course = {
	name:'Web and Distributed Programming',
	id:'CPSC-24700',
	section:'001',
	creditHours:3,
	prerequisites:'none',
	meetingTimes:'This course in online and asynchronous',
	meetingDates:'This class starts Monday, May 9th and ends Thursday, June 30th',
	meetingLocation:'Online',
	finalExamTime: `${getFinalExamDateAndTime()}`,
	textBook: 'Programming the World Wide Web 8th Edition, Robert W. Sebesta, Addison-Wesley, 2015 (ISBN 978-0-13-377598-3). This book is required for this course.'

}

const styleSmall = { fontSize:14 }
export const syllabus = () => {
	const syllabus24700 = () => {
		const header = (itemArray) => {
			return (<tr><td style={{width:'50px', textAlign:'left'}}>{itemArray[0]}</td><td style={{width:'200px', textAlign:'left'}}><b>{itemArray[1]}</b></td></tr>)
		} 
		const row = (item) => {
			return (<tr><td>{item[0]}</td><td style={{width:'200px', textAlign:'left'}}><i><b>{item[1]}</b></i></td><td>{item[2]}</td></tr>)
		}
		const rowSpan = (label, text) => {
			return (
				<tr><td></td>
					<td colSpan={2}><p><em>{label}</em> {text}</p></td>
				</tr>
			)
		}
		const subHeader = (item) => {
			return (<tr><td>{item[0]}</td><td style={{width:'200px', textAlign:'left'}} colSpan={2}><i><b>{item[1]}</b></i></td></tr>)
		}
		const courseName = (course) => {
			return course.name + ' ('+course.id+'-'+course.section+')'
		}

		return ( <div>
			<Table style={{width:'768px'}} className="table-borderless table-sm">
				<tbody>
					<tr>
						<td style={{width:'20px', textAlign:'center'}}></td>
						<td style={{width:'200px', textAlign:'center'}}>{renderLogo()}</td>
						<td style={{width:'468px', textAlign:'center'}}><br /><br />
							<b><i>Web and Distributed Programming - 24700</i></b><br />
							<b>Syllabus</b><br />
							Fall Semester 2021
						</td>
					</tr>
				</tbody>
			</Table>


			<Table style={{width:'768px'}} className="table-borderless table-sm">
				<tbody>
					{header(['I.', 'Instructor Information'])}
					{row(['', 'Instructor’s Name:', instructor.name ])}
					{row(['', 'Office Hours:', instructor.officeHours])}
					{row(['', 'Lewis Office Location:', instructor.office])}
					{row(['', 'Appointments:', instructor.appointmentRequests])}
					{row(['', 'Lewis Phone Number:', instructor.lewisPhone])}
					{row(['', 'Lewis Email:', instructor.lewisEmail])}
				</tbody>
			</Table>
			<Table style={{width:'768px'}} className="table-borderless table-sm">
				<tbody>
					{header(['II.', 'Course Information'])}
					{row(['', 'Course:', courseName(course)])}
					{row(['', 'Credit Hours:', course.creditHours])}
					{row(['', 'Description:'])}
					<tr><td></td>
						<td colSpan={2}>
							Languages and technologies for programming and leveraging web-based computer services securely. 
							Languages include PHP, Perl, JavaScript, Java, Ruby, CSS, and HTML5. Technologies include relational 
							databases, web services, Hadoop, and cloud computing platforms. This course teaches students how to 
							develop useful applications using a variety of distributed data and programming models.<br />
						</td>
					</tr>
					{row(['', 'Prerequisites:', course.prerequisites])}
					{row(['', 'Course Meeting Times:', course.meetingTimes])}
					{row(['', 'Course Meeting Dates:', course.meetingDates])}
					{row(['', 'Meeting Location:', course.meetingLocation])}
					{row(['', 'Course Final:', course.finalExamTime])}
					<tr>
						<td></td>
						<td colSpan={2}>
							<i><b>Student Learning Outcomes:</b></i>
							<ol style={styleSmall}>
								<li>understand the ideas of distributed computing and the World Wide Web / Internet</li>
								<li>create web pages with HTML5 and CSS</li>
								<li>utilize a cloud-based computing platform (Microsoft Azure) to host a basic website </li>
								<li>understand the best Web design practices</li>
								<li>create dynamic and interactive web sites using JavaScript</li>
								<li>understand XML and Web services</li>
								<li>understand basic database concepts and make simple SQL queries</li>
								<li>write PHP scripts to process forms and interact with databases</li>
								<li>understand the basics of the various software development lifecycle processes</li>
								<li>provide an overview of Perl, Java, and Ruby</li>
								<li>understand the Hadoop framework and MapReduce programs</li>
							</ol>
							<i><b>Program student learning outcomes:</b></i>
							<ol style={styleSmall}>
								<li>develop programs using languages having different programming paradigms and for a variety of platforms</li>
								<li>select the most appropriate data structures and algorithms for the given problem</li>
								<li value='7'>explain how programming languages are designed and implemented</li>
							</ol>
							
							<i><b>Baccalaureate Characteristics:</b></i>
							<ol style={styleSmall}>
								<li>Essential Skills</li>
								<li value='6'>Critical Thinking</li>
							</ol>
						</td>
					</tr>
					{row(['III.', 'Mission Statement'])}
					<tr>
						<td></td>
						<td colSpan={2}>
						<p>Lewis University, guided by its Catholic and Lasallian heritage, provides a diverse student population 
						programs for a liberal and professional education grounded in the interaction of knowledge and fidelity 
						in the search for truth.</p>
						
						<p>Lewis promotes the development of the complete person through the pursuit of wisdom and justice. 
						Fundamental to its Mission is a spirit of association, which fosters community in all teaching, learning 
						and service.</p>
						<i><b>How this course connects to the University Mission:</b></i>
						<p>This course will allow us to extend our knowledge in software development, provide us the foundation 
						for lifelong learning in this domain, and provide us the opportunity to assist each other on our learning 
						journey.</p>
						</td>
					</tr>
					{row(['IV.', 'Course Materials'])}
					<tr>
						<td></td>
						<td colSpan={2}>
							<p><em>Textbook:</em> {course.textBook}</p>

							<p><em>E-Learning Headphone with Microphone:</em> Our blended classroom setting benefits greatly 
							from a wired computer headset with a microphone for both in person and online participation.</p> 
							
							<p><em>Supplemental readings, videos, online materials:</em> Links and references to additional 
							readings, videos, and online materials will also be provided.</p>
							
							<p><em>Hardware and software requirements:</em> This course requires access to multiple 
							software tools. There are generally available for free but will need to be installed and 
							utilized from a Windows or Macintosh computer.</p> 
							
							<p><em>Other required materials or costs:</em> During this course we will be setting up and 
							utilizing GitHub and Microsoft Azure accounts. We will be able to complete course assignments 
							utilizing these resources for free or low cost (less than $20). You will need a credit card to 
							sign up for the accounts.</p>
						</td>
					</tr>
					{subHeader(['V.', 'Instructional Methods and Activities'])}
					<tr>
					<td></td>
					<td colSpan={2}>
						<p><em>Modality of Instruction:</em> This course will be a online, asynchronous, and include 
						blended learning instructional elements.</p>
					</td>	
					</tr>
					{subHeader(['VI.', 'Course Schedule'])}
					<tr>
					<td></td>
					<td colSpan={2}>
						<p>The course is broken into 8 modules.</p>
					</td>	
					</tr>

					<tr>
						<td></td>
						<td colSpan={2}>
							{renderCourseScheduleTable()}
						</td>
					</tr>
					<tr>
						<td></td>
						<td colSpan={2}>
							<p><em>Schedule Changes:</em> Material changes to the course schedule will be communicated 
							through course lecture and/or Blackboard announcements. </p>
						</td>
					</tr>
					{subHeader(['VII.', 'Grading Criteria and Course Policies'])}
					{rowSpan('Assignments and Course Requirements: ', 
						'Assignments for this course will take the form of Labs, Quizzes, Discussion Boards, a class Demonstration, and a Final Project.')}
					{rowSpan('Course Grade: ', 'The course grade will be based on the following.')}
					<tr>
						<td></td>
						<td colSpan={2}>
							{renderGradingCriteriaTable()}
						</td>
					</tr>
				</tbody>
			</Table><br />			
		</div> )
	}
	return [ syllabus24700 ]
}

export const renderLogo = () => {
	return (
		<div style={{display:'flex', justifyContent:'left', alignItems:'center'}}>
		<img src={LewisUniversityLogo} alt='Lewis University' width= '256'/></div>
	)
}

const renderCourseScheduleTable = () => {
	const renderModule = (moduleNumber, topics) => {
		if (moduleNumber < 5) {
			return ( 
				<tr><td style={{textAlign:'center'}}>{moduleNumber}</td><td>{topics}</td><td>Lab {moduleNumber}, 
				Quiz {moduleNumber}, Discussion {moduleNumber}, and Reflection {moduleNumber}</td></tr> 
			)
		} else if (moduleNumber < 7 ) {
			return ( 
				<tr><td style={{textAlign:'center'}}>{moduleNumber}</td><td>{topics}</td><td>Lab, 
				Quiz, Discussion, and Reflection</td></tr> 
			)
		} else if (moduleNumber === 7 ) {
			return ( 
				<tr><td style={{textAlign:'center'}}>{moduleNumber}</td><td>{topics}</td><td>Lab, 
				Quiz, Discussion, Reflection, and Demo</td></tr> 
			)
		} else if (moduleNumber > 7 ) {
			return ( 
				<tr><td style={{textAlign:'center'}}>{moduleNumber}</td><td>{topics}</td><td>Lab, 
				Quiz, Discussion, Reflection, and Final Project Presentation</td></tr> 
			)
		}
	}
	return (
		<Table style={styleSmall} striped bordered hover>
		<thead>
			<tr style={{backgroundColor:'#C0C0C0'}}><td style={{width:'20px', textAlign:'center'}}><b>Module</b></td><td style={{width:'380px'}}><b>Topics</b></td><td><b>Assignments</b></td></tr>
		</thead>
		<tbody>
			{renderModule(1, 'The Internet, World Wide Web, Web Browsers, Web Servers, and HTML')}
			{renderModule(2, 'HTML, XHTML, JavaScript basics, Functions, Arrays, and Control Statements')}
			{renderModule(3, 'JavaScript, Document Object Model, Event Handling, Buttons, Text boxes, and Canvas')}
			{renderModule(4, 'Dynamic Documents, Positioning and moving elements, and Dragging & Dropping')}
			{renderModule(5, 'Ajax, Ajax Toolkits, Object-Oriented Programming, and Relational Databases')}
			{renderModule(6, 'PHP, Node.js, plus Final Project Proposals with Proposed Teams')}
			{renderModule(7, 'Cloud Computing & Map Reduce (or NoSQL Databases) plus Scheduling Final Project Presentations')}
			{renderModule(8, 'Final Project')}
		</tbody>
	</Table>
	)
}

const renderGradingCriteriaTable = () => {

	const assignmentGrading = [
		{ name: 'Discussion', points:8, number:7 },
		{ name: 'Quiz', points:40, number:8 },
		{ name: 'Lab', points:70, number:8 },
		{ name: 'Reflection', points:4, number:8 },
		{ name: 'Demo', points:12, number:1 },
		{ name: 'Final Project Presentation', points:20, number:1 }
	]
	/*
	const renderRow = (assignment, points, number, totalPoints, percent) => {
		return ( 
			<tr>
				<td>{assignment}</td>
				<td style={{textAlign:'right'}}>{points}</td>
				<td style={{textAlign:'right'}}>{number}</td>
				<td style={{textAlign:'right'}}>{totalPoints}</td>
				<td style={{textAlign:'right'}}>{percent}</td>
			</tr> 
		)
	}
*/


	const renderBody = (assignmentGradingIn) => {
		const calculateTotalPoints = (assignmentGradingIn) => {
			let totalPoints = 0
			for (let index=0; index < assignmentGradingIn.length; index++) {
				totalPoints += assignmentGradingIn[index].points * assignmentGradingIn[index].number
			}
			return totalPoints
		}

		const totalPoints = calculateTotalPoints(assignmentGradingIn)
		return assignmentGradingIn.map((row, index) => {
			const {name, points, number} = row
				return (
					<tr key={index+1}>
						<td>{name}</td>
						<td style={{textAlign:'right'}}>{points}</td>
						<td style={{textAlign:'right'}}>{number}</td>
						<td style={{textAlign:'right'}}>{points*number}</td>
						<td style={{textAlign:'right'}}>{Math.round(points*number/totalPoints*100)}%</td>
					</tr> 
				)
		})
	}

	const renderTotals = (label, totalAssignments, totalPoints, totalPercent) => {
		return ( 
			<tr>
				<td style={{textAlign:'right'}}>{label}</td>
				<td style={{textAlign:'right', borderTop:'solid'}}></td>
				<td style={{textAlign:'right', borderTop:'solid'}}>{totalAssignments}</td>
				<td style={{textAlign:'right', borderTop:'solid'}}>{totalPoints}</td>
				<td style={{textAlign:'right', borderTop:'solid'}}>{totalPercent}</td>
			</tr> 
		)
	}

	return ( 
		<Table style={styleSmall} striped bordered hover>
		<thead style={{fontWeight:'bold'}}>
			<tr style={{backgroundColor:'#C0C0C0'}}>
				<td style={{width:'200px'}}>Assignment</td>
				<td style={{width:'100px', textAlign:'center'}}>Points</td>
				<td style={{width:'100px', textAlign:'center'}}>#</td>
				<td style={{width:'100px', textAlign:'center'}}>Total Points</td>
				<td style={{width:'100px', textAlign:'center'}}>Percent of Grade</td>
		</tr>
		</thead>
		<tbody>
			{renderBody(assignmentGrading)}


			{renderTotals('Totals:', '33', '1000', 'aadsfljkasfdjl;k%')}
		</tbody>
	</Table>
	)
}