
/*
// BugBug: Update syllabus sections on COVID, etc.

import React from 'react'
import Table from 'react-bootstrap/Table'

import LewisUniversityLogo from '../Slides/LewisUniversityLogo.png'
import { externalLink } from '../DataAndAPIs/Links'

export const renderSyllabus = (courseSection) => {
	const course = courseSection.course
	const instructor = courseSection.instructor

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

						{courseSection.calendar.description}
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
				{row(['', 'Course Meeting Dates:', courseSection.calendar.meetingDates])}
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
					<p><em>Modality of Instruction:</em>This course will be a face-to-face in-person synchronous class 
					with blended learning elements.</p>
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
				{header(['VIII.', 'Academic Information for Students'])}
				<tr>
					<td></td>
					<td colSpan={2}>
						{renderInformationForStudents()}
					</td>	
				</tr>
				{header(['IX.', 'Student Health, Wellness, and Community Standards'])}
				<tr>
					<td></td>
					<td colSpan={2}>
						{renderStudentHealthWellnessAndCommunityStandards()}
					</td>	
				</tr>
				{header(['X.', 'Additional Policy and Resources'])}
				<tr>
					<td></td>
					<td colSpan={2}>
						{renderAdditionalPolicyAndResources()}
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
		{ name: 'Class Project Presentation', points:20, number:1 }
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
				totalPercent += assignmentGradingIn[index].points*assignmentGradingIn[index].number/calculateTotalPoints(assignmentGradingIn)*100
			}
			return Math.round(totalPercent)
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
	</div> )
}

const renderStudentHealthWellnessAndCommunityStandards = () => {
	return ( <div>
		<p><em>Sanctified Zone:</em> Guided by its Catholic and Lasallian heritage, Lewis University is firmly committed 
		to fostering a campus atmosphere that is permeated by its Mission values of Fidelity, Wisdom, Knowledge, 
		Justice, and Association. Accordingly, we have declared the University campus to be a Sanctified Zone, a place 
		and a people United in Diversity. The active promotion of diversity and the opposition to all forms of 
		prejudice and bias are a powerful and healing expression of our desire to be Signs of Faith (Signum Fidei) to 
		each other.  To learn more about the Sanctified Zone, please visit: http://www.lewisu.edu/sanctified zone</p>

		<p><em>University Student Complaint Policy:</em> The University Student Complaint Policy can be found at 
		lewisu.edu/studentcomplaints</p>
		
		<p><em>University Grade Appeal Policy:</em> The University Grade Appeal Policy can be found at 
		lewisuedu/studentcomplaints</p>

		<p><em>Center for Health &amp; Counseling Services:</em> To support student success, all Lewis students are 
		eligible for free health and mental health services on the Romeoville campus. This includes commuters and 
		those living on campus, part-time and full-time students, graduate and undergraduate students, and those 
		taking Lewis classes at other locations.  For more information, visit the Center for Health &amp; Counseling 
		website at www.lewisu.edu/studentservices/health or call (815)836-5455.</p>


		<p><em>Sanctified Zone:</em> Guided by its Catholic and Lasallian heritage, Lewis University is firmly committed 
		to fostering a campus atmosphere that is permeated by its Mission values of Fidelity, Wisdom, Knowledge, 
		Justice, and Association. Accordingly, we have declared the University campus to be a Sanctified Zone, a place 
		and a people United in Diversity. The active promotion of diversity and the opposition to all forms of 
		prejudice and bias are a powerful and healing expression of our desire to be Signs of Faith (Signum Fidei) to 
		each other. To learn more about the Sanctified Zone, please visit: http://www.lewisu.edu/sanctified zone</p>

		<p>As a Sanctified Zone, Lewis University affirms the importance of diverse spiritual and value-based 
		identities, worldviews, and expressions, including the observance of religious and cultural traditions. To 
		learn more about the rich diversity of spiritual and cultural holidays celebrated within the Lewis community, 
		please see the Interfaith Calendar. Please note that this calendar is not a designation of spiritual and 
		cultural holidays officially recognized or observed by Lewis University; rather, it is intended as an 
		educational resource for the Lewis community.</p>

		<p>Lewis University is committed to inclusion “together and by association” on our campus and in our classrooms. 
		At the beginning of the semester, you should carefully review this course syllabus and requirements. If you have 
		religious or cultural observances that reasonably conflict with attendance or submission of assignments in this 
		class, please let the instructor know as soon as possible so that alternative arrangements may be discussed at 
		the instructor’s discretion.</p>

		<p><em>Violence Prevention</em> Students at Lewis University are entitled to personal safety. Our Catholic and 
		Lasallian tradition views every person as created in the image of God, full of dignity and worth. All community 
		members are expected to behave in a way that respects others' rights to control their sexual behavior and bodily 
		integrity. The University takes seriously any incidents of sexual misconduct — including but not limited to 
		sexual harassment, non-consensual sexual intercourse, non-consensual sexual contact and sexual exploitation. To 
		learn more about our comprehensive Sexual Misconduct Policy, find out how to report an incident, or access on and 
		off campus resources, please visit the LU Cares website at www.lewisu.edu/LUCares.</p>

		<p><em>Mandatory Reporting</em> As an instructor, I have a required reporting responsibility as a part of my 
		role. Lewis University policy requires me to share certain information brought to my attention about potential 
		sexual misconduct with the Title IX Coordinator. I will seek to keep the information you share private to the 
		greatest extent possible. Information will only be shared with those that need to know to ensure the University 
		can respond, take appropriate measures, and provide resources.</p>

		<p>A list of confidential (those not required to report to the Title IX office) on and off-campus resources can 
		be found on the LU Cares website: www.lewisu.edu/LUCares. For those who may have experienced sexual violence, 
		harassment, dating violence, or stalking, there are no-cost resources available to provide assistance. This 
		support also extends to the individuals' associates. The timeframe in which the violence occurred is not a 
		factor in accessing these resources.</p>

		<p><em>Student Wellness Center</em>All Lewis students are eligible and encouraged to use the services 
		offered to support overall well-being and student success. The Student Wellness Center is located on the lower 
		level of Mother Teresa Hall on the Romeoville campus. For more information about all Center offerings or to 
		access on campus, in-person services, visit https://www.lewisu.edu/StudentWellnessCenter or call (815)836-5455.</p>

		<p><em>Timely Care</em> All students have access to a 24/7, 365 days per year telehealth services through a 
		partnership with TimelyCare (medical, counseling, health coaching, self-care resources/peer community and urgent 
		care). To access services, go to www.timelycare.com/lewisu, use your Lewis University email to log in or 
		download the TimelyCare app. TalkNow and Medical Now on-demand services are available any time of day, either by 
		phone or video. TimelyCare staff are trained to work with any level of concern and will connect students with 
		the Student Wellness Center for additional assistance and follow-up as appropriate.</p>

		<p><em>If a student is at imminent risk or there is a serious safety concern, please call 911 or Lewis 
		University Police Department 815-836-5911. </em>Lewis community members are encouraged to complete the 
		Assessment and Care Team Person of Concern Form and the Dean of Students Office will ensure follow-up support 
		as well as other campus resources if helpful and needed.</p>
	</div> )
}

const renderAdditionalPolicyAndResources = () => {
	return ( <div>
		<p>{externalLink('University Student Complaint Policy', 
		'https://www.lewisu.edu/welcome/studentcomplaints.htm')}: The University Student Complaint Policy can be found 
		at lewisu.edu/studentcomplaints.</p>
		<p>{externalLink('University Grade Appeal Policy', 'https://www.lewisu.edu/welcome/studentcomplaints.htm')}: The 
		University Grade Appeal Policy can be found at lewisuedu/studentcomplaints.</p>
		<p>{externalLink('University Copyright and Intellectual Property Guidelines', 
		'https://www.lewisu.edu/osp/pdf/Intellectual%20Property%20Rights%20Policy.pdf')}: 
		The University Copyright and Intellectual Property Guidelines can be found at 
		https://www.lewisu.edu/osp/pdf/Intellectual%20Property%20Rights%20Policy.pd</p>
	</div> )
}
*/