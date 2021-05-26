
import React from 'react';
import { NavLink } from 'react-router-dom';

import BloodPressureImage from './HealthRiskCalculatorBloodPressure.png';
import BodyMassIndexImage from './HealthRiskCalculatorBodyMassIndex.png';

export const HealthRiskCalculatorPython = () => { return HealthRiskCalculator(HealthRiskCalculatorPythonProperties) }
export const HealthRiskCalculatorWeb = ()    => { return HealthRiskCalculator(HealthRiskCalculatorWebProperties) }
export const HealthRiskCalculatorJava = ()   => { return HealthRiskCalculator(HealthRiskCalculatorJavaProperties) }
export const HealthRiskCalculatorGo = ()     => { return HealthRiskCalculator(HealthRiskCalculatorGoProperties) }

const HealthRiskCalculatorPythonProperties = {
	'name': 'Health Insurance Risk Calculator with Python', 
	'language': 'Python',
	'prerequisites': 'Python (v3), VS Code, and Terminal',
	'type': 'command-line application written in the Python language',
	'requirement1_1': 'Is implemented in a single Python (.py) file named “RiskCalculator.py”',
	'requirement1_2': 'Successfully executes from the command line by typing “python3 RiskCalculator.py'
}

const HealthRiskCalculatorWebProperties = {
	'name': 'Health Insurance Risk Calculator for the Web', 
	'language': 'Web',
	'prerequisites': 'HTML, CSS, JavaScript, VS Code, and Terminal',
	'type': 'Web application using HTML, CSS, and JavaScript',
	'requirement1_1': 'Is implemented in a single file name “index.html”',
	'requirement1_2': 'Is hosted as a public website in Microsoft Azure'
}

const HealthRiskCalculatorJavaProperties = {
	'name': 'Health Insurance Risk Calculator with Java', 
	'language': 'Java',
	'prerequisites': 'Java, VS Code, and Terminal',
	'type': 'command-line application written in the Java language',
	'requirement1_1': 'Is implemented in multiple Java (.java) files with the main file named “RiskCalculator.java”',
	'requirement1_2': 'Successfully compiles from Terminal using “javac *.java” and executes by typing “java RiskCalculator'
}

const HealthRiskCalculatorGoProperties = {
	'name': 'Health Insurance Risk Calculator with Go', 
	'language': 'Go',
	'prerequisites': 'Go, VS Code, and Terminal',
	'type': 'command-line application written in the Go language',
	'requirement1_1': 'Is implemented multiple Go (.go) files with a main file named “RiskCalculator.go”',
	'requirement1_2': 'Successfully executes from the command line by typing “go RiskCalculator.py',
}	
	
const HealthRiskCalculator = (appProps) => {
	return (
	
<div>
<br />
<h4>{appProps.name}</h4>
<h5>Summary: Create a {appProps.language} application that will calculate the health risk of a new insurance company customer.
</h5>
<h5>Prerequisites: {appProps.prerequisites}</h5>

<p>In this assignment, you will create a tool a health insurance company could use to determine the risk associated with 
insuring a new customer. The amount of risk will be determined by the body-mass index, blood pressure, age, and family 
history of disease.</p>

<p>Blood pressure is measured using two numbers: systolic and diastolic. This table helps us categorize blood pressure 
using these two numbers.</p>
<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
<img src={BloodPressureImage} alt='Eric Pogue' width= '512'/>
</div>
<br />

<p>Body-Mass Index, which is equal to a person's weight in kg divided by the height in meters squared, is used to describe 
people as being normal weight, overweight, or obese, according to the following table.</p>
<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
<img src={BodyMassIndexImage} alt='Eric Pogue' width= '384'/>
</div>
<br />

<p>In this assignment, we will determine a person's coverage risk by assigning penalties for various conditions related to 
age, bmi, blood pressure, and family history. These penalties will be expressed in points. Here is how the point values should 
be calculated.</p>

<pre>{`
Age:
	< 30		- 0 points
	< 45		- 10 points
	< 60		- 20 points
	else		- 30 points

BMI:
	normal		- 0 points
	overweight	- 30 points
	else		- 75 points

Blood Pressure:
	normal		- 0 points
	elevated	- 15 points
	stage 1		- 30 points
	stage 2 	- 75 points
	crisis		- 100 points

Family Disease:
	diabetes	- 10 points
	cancer		- 10 points
	Alzheimer’s	- 10 points
`}</pre>
<p>We will ask the insurance agent a variety of questions about the person's health so that they can determine their 
risk category. Based on these answers, we'll calculate their risk scores associated with their age, bmi, blood pressure, 
and family history. From that, we'll know their total risk score, and we can categorize them based on that total score as 
follows:</p>
<pre>{`
Total Score and Risk Category:
	<= 20		- low risk
	<= 50		- moderate risk
	<= 75		- high risk
	else		- uninsurable
`}</pre>

We will allow the agent to evaluate people's health risk until they indicate they are done.

<p>If you are looking for some examples of what this application might look, you can see it here <NavLink to='/activity/health-risk-calculator-examples'>[link]</NavLink>. 
You will need to design your own interface and verify that it meets the specific requirements below. I’m sure you can 
improve on his design in any event. 
</p>

<em>Requirement 1</em>
<p>Create a command line based application that:</p>
<ol>
	<li>{appProps.requirement1_1}</li>
	<li>{appProps.requirement1_2}</li>
</ol>

<em>Requirement 2</em>
<p>Be sure that application also:</p>
<ol>
	<li>Has a simple yet an aesthetically pleasing user interface</li>
	<li>Provides excellent end user instructions when the application starts</li>
	<li>Asks all necessary questions required to complete the above calculations</li>
	<li>Identifies the unit of each input with appropriate US/English units</li>
</ol>

<em>Requirement 3</em>
<p>Enhance the application so that it:</p>
<ol>
	<li>Validates user input for appropriate values, displays an meaningful error messages, and asks the question again 
		if the user enters a value that seems inappropriate (i.e. a height equal to 2 feet)</li>
	<li>Summarizes each of the values used in the final calculation including Age, BMI, Blood Pressure, and Family Disease(s)</li>
	<li>Calculates and displays the final Risk Category</li>
	<li>Continues to evaluate people’s health until the user indicates they are done</li>
</ol>

<em>Requirement 4</em>
<p>Finally test and refactor the application so that it implements all appropriate Coding Standards <NavLink to='/activity/coding-standards'>[link]</NavLink></p>
</div> )

}

export const HealthRiskCalculatorExamples = () => {
	return (
	
<div>
<br />
<h4>Health Insurance Risk Calculator</h4>
<h5>Summary: Below are some examples of how the Health Insurance Risk Calculator user interface might look.</h5>
<br />	
<h5>Below is an example of what an implementation of the Health Insurance Risk Calculator might look like.</h5>
<pre>{`
**************************************************
HEALTH RISK CALCULATOR              
**************************************************

This program helps you classify health insurance
based on their risk level. That is determined
by their health. Their health is judged in terms
of their body-mass index, blood pressure, age,
and family history of disease.

Enter the person's age in years: 21
Enter the person's height in inches: 72
Enter the person's weight in pounds: 160
Enter the person's systolic blood pressure: 120
Enter the person's diastolic blood pressure: 70
Does the person have a family history of ...
Diabetes? n
Cancer? n
Alzheimers? n
Risk scores
Age:              0
Body-Mass:        0 (index = 21.70)
Blood Pressure:  15 (elevated)
Family History:   0

Based on these scores, the person is low-risk.

Do you have another patient? y

--------------------------------------------------

Enter the person's age in years: 31
Enter the person's height in inches: 72
Enter the person's weight in pounds: 205
Enter the person's systolic blood pressure: 115
Enter the person's diastolic blood pressure: 70
Does the person have a family history of ...
Diabetes? y
Cancer? n
Alzheimers? n
Risk scores
Age:             10
Body-Mass:       30 (index = 27.80)
Blood Pressure:   0 (normal)
Family History:  10

Based on these scores, the person is moderate-risk.

Do you have another patient? y

--------------------------------------------------

Enter the person's age in years: 47
Enter the person's height in inches: 65
Enter the person's weight in pounds: 140
Enter the person's systolic blood pressure: 125
Enter the person's diastolic blood pressure: 75
Does the person have a family history of ...
Diabetes? y
Cancer? y
Alzheimers? n
Risk scores
Age:             20
Body-Mass:        0 (index = 23.29)
Blood Pressure:  15 (elevated)

`}</pre>
</div> )

}