import React from 'react'

// Test links are available at:
//     http://localhost:3000/#/test/me
//     http://www.lewis.education/#/test/me


export class Test extends React.Component {
	render() {
		return ( <div>
			<h4>Test Page</h4>

			<br />
			The "Parameter ID" below should be "me" or the test page was not called correct. 
			<p>Parameter ID: {this.props.match.params.id}</p>
		</div>	)
	}
}

/*
Checklists:

New Semester Class Setup:
Copy all course content from previous course plus:
1. Review Sprint 1 Lewis.education content including all calendar, course, and syllabus information 
2. Add MS Outlook course sessions including Final Exam
3. Add corresponding Blackboard Zoom sessions including Final Exam (see Zoom checklist below)
4. Set Instructor Information URL
5. Update **all** dates including assignment end dates and quiz answer** visibility

Zoom: 
Default meeting plus:
- Deselect: waiting room
- Select: Only authenticated users can join meetings: Sign in to Zoom
- Select: Record the meeting automatically In the cloud

*/


