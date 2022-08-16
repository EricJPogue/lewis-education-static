import React from 'react'
import Table from 'react-bootstrap/Table'

import LewisUniversityLogo from '../Slides/LewisUniversityLogo.png'

export const syllabus = (course, courseSection, instructor) => {
	const header = (itemArray) => {
		return (<tr><td style={{width:'50px' }}><b>{itemArray[0]}</b></td><td style={{width:'200px' }} colSpan={2}><b>{itemArray[1]}</b></td></tr>)
	} 
	const row = (item) => {
		return (<tr><td>{item[0]}</td><td style={{width:'200px', textAlign:'left' }}><i><b>{item[1]}</b></i></td><td>{item[2]}</td></tr>)
	}
	const rowSpan = (label, text) => {
		return (
			<tr><td></td>
				<td colSpan={2}><p><em>{label}</em> {text}</p></td>
			</tr>
		)
	}
	const courseNameAndSection = (course) => {
		return course.name + ' ('+course.id+'-'+courseSection.section+')'
	}

	const learningStudentLearningOutcomes = (outcomes) => {
		const renderStudentLearningOutcomes = (outcomes) => { return outcomes.map((outcome, index) => { return (<li key={index}>{outcome}</li>) })}

		if (outcomes === undefined) return null
		return ( <span>
			<i><b>Student Learning Outcomes:</b></i>
			<ol style={styleSmall}>
				{renderStudentLearningOutcomes(outcomes)}
			</ol>
		</span> )
	}

	const renderOutcomes = (header, outcomes) => {
		const renderOutcomes = (outcomes) => { return outcomes.map((row, index) => {
			const {value, outcome} = row
			return (<li value={value} key={value}>{outcome}</li>)}) 
		}

		if (outcomes === undefined) return null
		return ( <span>
			<i><b>{header}</b></i>
			<ol style={styleSmall}>
				{renderOutcomes(outcomes)}
			</ol>
		</span>)
	}

	return ( <div>
		<Table style={{width:'768px'}} className="table-borderless table-sm">
			<tbody>
				<tr>
					<td style={{width:'20px', textAlign:'center'}}></td>
					<td style={{width:'200px', textAlign:'center'}}>{renderLogo()}</td>
					<td style={{width:'468px', textAlign:'center'}}><br /><br />
						<b><i>{course.name}</i></b><br />
						<b><i>CPSC-{course.number}-{courseSection.section}</i></b><br />
						<b>Syllabus</b><br />
						{courseSection.description}
					</td>
				</tr>
			</tbody>
		</Table>

		<Table style={{width:'768px'}} className="table-borderless table-sm">
			<tbody>
				{header(['I.', 'Instructor Information'])}
				{row(['', 'Instructor’s Name:', instructor.name ])}
				{row(['', 'Office Hours:', courseSection.officeHours])}
				{row(['', 'Lewis Office Location:', instructor.office])}
				{row(['', 'Appointments:', courseSection.appointmentRequests])}
				{row(['', 'Lewis Email:', instructor.lewisEmail])}
				{row(['', 'Lewis Phone Number:', instructor.lewisPhone])}
			</tbody>
		</Table>
		<Table style={{width:'768px'}} className="table-borderless table-sm">
			<tbody>
				{header(['II.', 'Course Information'])}
				{row(['', 'Course:', courseNameAndSection(course)])}
				{row(['', 'Credit Hours:', course.creditHours])}
				{row(['', 'Description:'])}
				<tr><td></td><td colSpan={2}>{course.description}</td></tr>
				{row(['', 'Prerequisites:', course.prerequisites])}
				{row(['', 'Course Meeting Times:', courseSection.meetingTimes])}
				{row(['', 'Course Meeting Dates:', courseSection.meetingDates])}
				{row(['', 'Meeting Location:', courseSection.meetingLocation])}
				{row(['', 'Course Final:', courseSection.finalExam])}
				<tr>
					<td></td>
					<td colSpan={2}>
						{learningStudentLearningOutcomes(course.learningOutcomes)}
						{renderOutcomes('Program student learning outcomes:', course.programOutcomes)}
						{renderOutcomes('Baccalaureate Characteristics:', course.baccalaureateCharacteristics)}
					</td>
				</tr>
				{header(['III.', 'Mission Statement'])}
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
				{header(['IV.', 'Course Materials'])}
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
				{header(['V.', 'Instructional Methods and Activities'])}
				<tr>
				<td></td>
				<td colSpan={2}>
					<p><em>Modality of Instruction:</em> This course will be a online, asynchronous, and include 
					blended learning instructional elements.</p>
				</td>	
				</tr>
				{header(['VI.', 'Course Schedule'])}
				<tr>
				<td></td>
				<td colSpan={2}>
					<p>The course is broken into 8 modules.</p>
				</td>	
				</tr>

				<tr>
					<td></td>
					<td colSpan={2}>
						{renderCourseScheduleTable(course.modules)}
					</td>
				</tr>
				<tr>
					<td></td>
					<td colSpan={2}>
						<p><em>Schedule Changes:</em> Material changes to the course schedule will be communicated 
						through course lecture and/or Blackboard announcements. </p>
					</td>
				</tr>
				{header(['VII.', 'Grading Criteria and Course Policies'])}
				{rowSpan('Assignments and Course Requirements: ', 
					'Assignments for this course will take the form of Labs, Quizzes, Discussion Boards, a class Demonstration, and a Final Project.')}
				{rowSpan('Course Grade: ', 'The course grade will be based on the following.')}
				<tr>
					<td></td>
					<td colSpan={2}>
						{renderGradingCriteriaTable()}
					</td>
				</tr>
				<tr>
					<td></td>
					<td colSpan={2}>
						<p><em>Grading Policies:</em> No late assignments will be accepted. It is vastly preferable 
						to submit a partially complete assignment on time than to turn in a late assignment.</p>
						<p>Similarly, it is vastly better to turn in a lab (programming) assignment that has 70% of the 
						features fully implemented than to turn in a lab assignment that has all of the features 70% 
						implemented.</p>
						<p>Final course letter grade will be determined using the following scale:</p>

					</td>
				</tr>
				<tr>
					<td></td>
					<td colSpan={2}>
						{renderGradingScale()}
					</td>
				</tr>
				<tr>
					<td></td>
					<td colSpan={2}>
						<p><em>Course Policies:</em> Class attendance is required unless otherwise specified. During our 
						class time we will remain focused on the topics at hand, avoid utilizing phones or email, and 
						be inclusive of our fellow classmates.</p>
						<p><em>Changes to Course Assignments or Grades:</em> Changes to the 
						course assignments or grades will be communicated through course lecture and/or Blackboard 
						announcements</p>
					</td>	
				</tr>
				{header(['VIII.', 'Practices and Policies during the Coronavirus Pandemic'])}
				<tr>
					<td></td>
					<td colSpan={2}>
						{renderPracticesCoronavirusPandemic()}
					</td>	
				</tr>
				{header(['IX.', 'Information for Students'])}
				<tr>
					<td></td>
					<td colSpan={2}>
						{renderInformationForStudents()}
					</td>	
				</tr>

			</tbody>
		</Table><br />			
	</div> )
}

const styleSmall = { fontSize:14 }

const renderLogo = () => {
	return (
		<div style={{display:'flex', justifyContent:'left', alignItems:'center'}}>
		<img src={LewisUniversityLogo} alt='Lewis University' width= '256'/></div>
	)
}

const renderCourseScheduleTable = (modules) => {
	const renderHeader = () => { 
		return ( 
			<thead>
				<tr style={{backgroundColor:'#C0C0C0'}}><td style={{width:'20px', textAlign:'center'}}><b>Module</b></td><td style={{width:'380px'}}><b>Topics</b></td><td><b>Assignments</b></td></tr>
			</thead> 
	) }

	const renderBody = (modules) => {
		return (
			<tbody>
				{renderModules(modules)}
			</tbody>
		)
	}

	const renderModules = (modules) => {
		return modules.map( (moduleTopic, moduleNumberBaseZero) => {
			return renderModule(moduleNumberBaseZero+1, moduleTopic)
		} )
	}

	const renderModuleTableRow = (moduleNumber, topics, assignments) => {
		return ( <tr key={moduleNumber+1}><td style={{textAlign:'center'}}>{moduleNumber}</td><td>{topics}</td><td>{assignments}</td></tr> )
	}

	const renderModule = (moduleNumber, topics) => {
		if (moduleNumber < 4) { 
			return renderModuleTableRow(moduleNumber, topics, `Discussion ${moduleNumber}, Quiz ${moduleNumber}, Lab ${moduleNumber}, and Reflection ${moduleNumber}`) 
		} else if (moduleNumber < 7 ) {
			return renderModuleTableRow(moduleNumber, topics, 'Discussion, Quiz, Lab, and Reflection') 
		} else if (moduleNumber === 7 ) {
			return renderModuleTableRow(moduleNumber, topics, 'Discussion, Quiz, Lab, Reflection, and Lab Demo') 
		} else if (moduleNumber > 7 ) {
			return renderModuleTableRow(moduleNumber, topics, 'Discussion, Quiz, Lab, Reflection, and Final Project Presentation') 
		}
	}
	return ( <div>
		<Table style={styleSmall} striped bordered hover>
			{renderHeader()}
			{renderBody(modules)}
		</Table>
	</div> )
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

	const renderTotals = (assignmentGradingIn) => {
		const calculateTotalAssignments = (assignmentGradingIn)  => {
			let totalNumber = 0
			for (let index=0; index < assignmentGradingIn.length; index++) {
				totalNumber += assignmentGradingIn[index].number
			}
			return totalNumber
		}
		const calculateTotalPoints = (assignmentGradingIn)  => {
			let totalPoints = 0
			for (let index=0; index < assignmentGradingIn.length; index++) {
				totalPoints += assignmentGradingIn[index].points  * assignmentGradingIn[index].number
			}
			return totalPoints
		}
		const calculateTotalPercent = (assignmentGradingIn)  => {
			let totalPercent = 0
			for (let index=0; index < assignmentGradingIn.length; index++) {
				totalPercent += Math.round(assignmentGradingIn[index].points*assignmentGradingIn[index].number/calculateTotalPoints(assignmentGradingIn)*100)
			}
			return totalPercent
		}

		return ( 
			<tr>
				<td style={{textAlign:'right'}}>Totals</td>
				<td style={{textAlign:'right', borderTop:'solid'}}></td>
				<td style={{textAlign:'right', borderTop:'solid'}}>{calculateTotalAssignments(assignmentGradingIn)}</td>
				<td style={{textAlign:'right', borderTop:'solid'}}>{calculateTotalPoints(assignmentGradingIn)}</td>
				<td style={{textAlign:'right', borderTop:'solid'}}>{calculateTotalPercent(assignmentGradingIn)}%</td>
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
					<td style={{width:'100px', textAlign:'center'}}>% of Grade</td>
			</tr>
			</thead>
			<tbody>
				{renderBody(assignmentGrading)}
				{renderTotals(assignmentGrading)}
			</tbody>
		</Table>
	)
}

const renderGradingScale = () => {
	return ( <div>
		Final course letter grade will be determined by using the following scale:
		<Table style={{fontSize:14}} className="table-borderless table-sm">
			<tbody>
				<tr><td style={{width:'120px' }}></td>
					<td style={{width:'40px'}}>
						A<br />A-<br />
						B+<br />B<br />B-<br />
						C+<br />C<br />C-
					</td>
					<td style={{width:'160px' }}>
						93-100%<br />90-92.9%<br />
						87-89.9%<br />83-86.9%<br />80-82.9%<br />
						77-79.9%<br />73-76.9%<br />70-72.9			
					</td><td style={{width:'40px' }}>
						D+<br />D<br />D-<br />F
					</td>
					<td style={{width:'80px' }}>
						67-69.9<br />63-66.9<br />60-62.9%<br />0-59.9%</td><td></td>
				</tr>
			</tbody>
		</Table>
	</div> )
}

const renderPracticesCoronavirusPandemic = () => {
	return ( <div>
		<p><em>Responsiveness to Change:</em> Understanding that the COVID-19 pandemic could influence the course of 
		this semester, Lewis University will be guided by our Lasallian mission and the well-being of our community of 
		students, faculty, and staff in respond and adapting to any sudden changes or circumstances. Based on the 
		guidance of the State of Illinois and the Centers for Disease Control, it may be necessary to change the planned 
		modality this course.</p>
		<p><em>Flexibility, Accommodations, and Student Absences:</em>Because we are committed to student success, the 
		University community is committed to academic standards while maintaining flexibility and empathy.</p>
		<ul>
			<li>Absences relating to the Coronavirus crisis will require documentation to be recognized as excused.  
			Documentation should be submitted to academicservices@lewisu.edu .</li>
			<li>Students experiencing disruptions in their lives related to the Coronavirus that impact class 
			attendance and participation should:</li>
			<ul>
				<li>First, contact their instructor to make arrangements for completing missed work.</li>
				<li>When this is not possible and when the absence from class is for three or more class meetings, 
				students should contact Academic Services at academicservices@lewisu.edu. </li>
			</ul>
		</ul>
		<p>Students who require academic accommodations due to disability caused by COVID-19, or to limit risk of 
		exposure to Coronavirus, can engage in an interactive process with the Learning Access Coordinator to explore 
		avenues for accommodations. Students can contact the Academic Services office at 815-836-5593 or 
		learningaccess@lewisu.edu to request an appointment.</p>
		<p>Except in the case of unforeseen circumstances that require a university-wide shift in instructional 
		modalities, courses will only be offered in the modality listed in the course schedule.  It is not possible 
		to accommodate remote attendance in on-campus classes unless the course is listed as multi-option in the 
		schedule.</p>

		<p><em>Face Coverings and Surface Cleaning:</em> Lewis understands the benefits of wearing face coverings 
		by encouraging and supporting all who choose to wear a face covering.</p>   
		<ul>
			<li>Face coverings may be required of all individuals, due to changing health and safety conditions, at 
			the advice of state and local health authorities, or under certain campus circumstances. When face coverings 
			are required, students will be informed in advance.</li>
			<li>If conditions improve, face coverings will no longer be required of those who have submitted 
			documentation of their fully vaccinated status.</li>
			<li>While the University will disinfect classrooms and common spaces throughout the day, cleaning supplies 
			will be provided in classrooms and offices so that students and faculty can wipe down work surfaces before 
			class begins.</li>
		</ul>
	</div> )
}

const renderInformationForStudents = () => {
	return ( <div>
		<p><em>Requests for Reasonable Accommodations:</em> Lewis University is committed to providing equal access and 
		opportunity for participation in all programs, services and activities. If you are a student with a disability 
		who would like to request a reasonable accommodation, please speak with the Learning Access Coordinator at the 
		Center for Academic Success and Enrichment (CASE). Please make an appointment by calling 815-836-5593 or 
		emailing learningaccess@lewisu.edu. Since accommodations require early planning and are not provided 
		retroactively, it is recommended that you make your request prior to or during the first week of class. It is 
		not necessary to disclose the nature of your disability to your instructor. For more information about academic 
		support services, visit the website at: www.lewisu.edu/CASE.</p> 

		<p>Lewis University has adopted Blackboard Ally providing alternative formats for files uploaded by instructors. 
		Students can click the down arrow next to any file, and select Alternative Formats.</p>

		<p><em>Sanctified Zone:</em> Guided by its Catholic and Lasallian heritage, Lewis University is firmly committed 
		to fostering a campus atmosphere that is permeated by its Mission values of Fidelity, Wisdom, Knowledge, 
		Justice, and Association. Accordingly, we have declared the University campus to be a Sanctified Zone, a place 
		and a people United in Diversity. The active promotion of diversity and the opposition to all forms of 
		prejudice and bias are a powerful and healing expression of our desire to be Signs of Faith (Signum Fidei) to 
		each other.  To learn more about the Sanctified Zone, please visit: http://www.lewisu.edu/sanctified zone</p>

		<p><em>Academic Integrity:</em> Scholastic integrity lies at the heart of Lewis University. Plagiarism, 
		collusion and other forms of cheating or scholastic dishonesty are incompatible with the principles of the 
		University. Students engaging in such activities are subject to loss of credit and expulsion from the 
		University. Cases involving academic dishonesty are initially considered and determined at the instructor level. 
		If the student is not satisfied with the instructor’s explanation, the student may appeal at the 
		department/program level. Appeal of the department /program decision must be made to the Dean of 
		the college/school. The Dean reviews the appeal and makes the final decision in all cases except those in 
		which suspension or expulsion is recommended, and in these cases the Provost makes the final decision.</p>

		<p><em>University Student Complaint Policy:</em> The University Student Complaint Policy can be found at 
		lewisu.edu/studentcomplaints</p>
		
		<p><em>University Grade Appeal Policy:</em> The University Grade Appeal Policy can be found at 
		lewisuedu/studentcomplaints</p>

		<p><em>Center for Health &amp; Counseling Services:</em> To support student success, all Lewis students are 
		eligible for free health and mental health services on the Romeoville campus. This includes commuters and 
		those living on campus, part-time and full-time students, graduate and undergraduate students, and those 
		taking Lewis classes at other locations.  For more information, visit the Center for Health &amp; Counseling 
		website at www.lewisu.edu/studentservices/health or call (815)836-5455.</p>
	</div> )
}