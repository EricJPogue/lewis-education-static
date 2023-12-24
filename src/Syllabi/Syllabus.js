import { getClassIDfromURL } from '../DataAndAPIs/Classes'
import { getClassSectionByID } from '../DataAndAPIs/ClassSections'
import { syllabus } from './SyllabiShared'

export const Syllabus = () => {
	const classSectionIDfromURL = getClassIDfromURL()
	const classSectionByID = getClassSectionByID( classSectionIDfromURL )
	return syllabus( classSectionByID ) 
}