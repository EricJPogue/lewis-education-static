import React from 'react'
import LewisUniversityLogo from './LewisUniversityLogo.png'
import Table from 'react-bootstrap/Table'

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
	creditHours:3
}


// Todo: consider making table wider.
export const syllabus = () => {
	const syllabus24700 = () => {
		const header = (itemArray) => {
			return (<tr><td style={{width:'50px', textAlign:'left'}}>{itemArray[0]}</td><td style={{width:'200px', textAlign:'left'}}><b>{itemArray[1]}</b></td></tr>)
		} 
		const row = (item) => {
			return (<tr><td>{item[0]}</td><td style={{width:'200px', textAlign:'left'}}><i><b>{item[1]}</b></i></td><td>{item[2]}</td></tr>)
		}
		const courseName = (course) => {
			return course.name + ' ('+course.id+'-'+course.section+')'
		}


		return ( <div>
			{renderLogo()}<br />

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
					{row(['', 'Prerequisites:', 'none'])}
					{row(['', 'Course Meeting Times:', 'This course is online and asynchronous'])}
					{row(['', 'Course Meeting Dates:', 'This class starts [[date]] and ends [[date]]'])}
				</tbody>
			</Table><br />

{/*}
			<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
		*/}
		
			
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

