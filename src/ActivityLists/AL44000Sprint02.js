import React from 'react'
import { NavLink } from 'react-router-dom'

import { AssignmentPortfolioWebsite, start, complete } from './ProgrammingAssignments'
const programmingAssignment = AssignmentPortfolioWebsite

export const al44000Sprint02 = () => {
	return (

<div>
<h4>Software Engineering</h4>
<h5>Sprint 2: Node.js, JavaScript, Ruby on Rails, and Azure</h5>

<p><em>Welcome to sprint 2.</em> We covered a lot of material in sprint 1. However, we didn't get a chance to write 
much code. This sprint get your code editors out. We are going to start practicing some of the concepts we learned.</p>

<p>By the end of sprint 2 we will be able to:</p>
<ul style={{listStyleType:'square'}}>
	<li>Write simple HTML, CSS, Javascript, and Node.js applications and install them to Azure</li>
	<li>Understand simple Ruby programs using basic control structures and data structures</li>
	<li>Understand has Saas applications are developed in JavaScript using AJAX and JSON</li>
	<li>Comfortably be able to utilize single-developer workflow with Git and GitHub</li>
</ul>

<p>Below is the list of activities that we will need to complete this sprint. Once again you are welcome to
pursue the activities in any order. However, they are listed in the order I think will be the most
effective for you to work through the topics. The time commitment for each line item is generally 20 to 40
minutes unless otherwise noted.</p>
<ol>
	<li>Stay focused on the due dates by reviewing our course calendar <NavLink to='/calendar/2'>[link]</NavLink></li>
	<li><em>Review sprint 2 assignments including Lab 2, Quiz 2, Discussion 2, Reflection 2, and Lab Demo</em></li>
	<li>Study and understand our “Coding Standards” <NavLink to='/activity/coding-standards'>[link]</NavLink></li>
	<li>{start(programmingAssignment)}</li>
	{/* The above items should be consistent across classes. */ }

	<li>Read “Engineering Software as a Service” chapter 6 and review our class lecture on chapter 6 <NavLink to='/activity/fox-chapter-06'>[video]</NavLink></li>
	<li>Complete “Azure Website” <NavLink to='/activity/azure-website'>[link]</NavLink><sup> ~2 hours </sup></li>
	<li>Review our class sample code by executing “git clone https://github.com/EricJPogue/cpsc-example-code.git”</li>
	<li>Study and understand our “Coding Standards” <NavLink to='/activity/coding-standards'>[link]</NavLink></li>
	<li>Scan “Engineering Software as a Service” chapters 3 through 5 and review the associated class lecture <NavLink to='/activity/fox-chapter-03'>[video]</NavLink></li>
	<li>Read “Engineering Software as a Service” sections A.6 and A.7</li>
	<li>Complete the 'HTML5 Tutorial' from W3C <a href='https://www.w3schools.com/html/' target='_blank' rel='noopener noreferrer'>[link]</a> 
		while elegantly formatting the key sections of our course syllabus into HTML 5</li>
	<li><em>Make your initial Discussion 2 post by the middle of the sprint</em></li>
	<li>Complete the 'CSS Tutorial' from W3C <a href='https://www.w3schools.com/css/' target='_blank' rel='noopener noreferrer'>[link]</a> 
		while enhancing our formatted course syllabus using both HTML and CSS</li>
	<li>Review the “JavaScript Tutorial” from W3C <a href='https://www.w3schools.com/js/' target='_blank' rel='noopener noreferrer'>[link]</a>
		including how to utilize Regular Expressions <a href='https://www.w3schools.com/jsref/jsref_obj_regexp.asp' target='_blank' rel='noopener noreferrer'>[link]</a></li>
	<li>Read the article “What is JSON? JavaScript Object Notation explained” <a href='https://www.infoworld.com/article/3222851/javascript/what-is-json-javascript-object-notation-explained.html' target='_blank' rel='noopener noreferrer'>[link]</a> 
		and complete “JSON Introduction” from W3C <a href='https://www.w3schools.com/js/js_json_intro.asp' target='_blank' rel='noopener noreferrer'>[link]</a></li> 
	<li>Review the following videos on 
			HTML <a href='https://www.youtube.com/watch?v=wy6O5hAjKAo' target='_blank' rel='noopener noreferrer'>[video]</a>,
			CSS <a href='https://www.youtube.com/watch?v=AfBK2Masemk' target='_blank' rel='noopener noreferrer'>[video]</a>,
			Cookies <a href='https://www.youtube.com/watch?v=Xlt7xeqVfO4' target='_blank' rel='noopener noreferrer'>[video]</a>,
			Attributes <a href='https://www.youtube.com/watch?v=X5ArSbUea_o' target='_blank' rel='noopener noreferrer'>[video]</a>,
			and Ruby MVC <a href='https://www.youtube.com/watch?v=XXrYmVzjTKQ' target='_blank' rel='noopener noreferrer'>[video]</a></li>

	{/* The items below should be consistent across classes. */ }
	<li>{complete(programmingAssignment)}</li>
	<li><em>Complete Discussion 2 by responding to at least two of your classmates’ posts</em></li>
	<li><em>Submit Lab 2, Quiz 2, and Reflection 2</em></li>
</ol>
<p>If you are struggling, remember to reach out to your Scrum teammates early and often for help. Also, be sure to 
periodically check for new programming together tutorials <NavLink to='/activity/programming-together'>[link]</NavLink>.</p>
{/* Programming Together: “Deploying Node.js on Microsoft Azure” */}
{extras()}

</div>
	)
}

// Todo: Update lab 2 question 6 so that it says to just deploy it to Azure instead of referencing specific sites.

const extras = () => {
	return (
<div>
<p>Additional suggested activities:</p>
		<ul style={{listStyleType:'square'}}>
			<li>Review “Azure Website” <NavLink to='/activity/azure-website'>[link]</NavLink></li>
		</ul>
</div>
)
}

// Todo: Where should mediaatoz/software-engineering/* videos go? Are they already included?
// Todo: Change estimated to actual capacity metric to actual over estimated so that it comes out to less than one generally. 