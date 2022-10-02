import { xyz_n_1of6_agenda_list, xyz_n_1of6_prework_list, xyz_n_1of6 } from './SL00000Sprint00'

import { list20000Sprint03 } from '../ActivityLists/AL20000Sprint03'
import { list20000Sprint04 } from '../ActivityLists/AL20000Sprint04'

const sprint = 4

const activityList = () => { return list20000Sprint04(sprint) }
const activityListPrevious = () => { return list20000Sprint03(sprint-1) }

// Todo: ** Update calendar and everything else to reflect Discussion and Lab on Wednesdays and Demos and Reflections on Friday!
// Todo: Review https://stackoverflow.com/questions/1300242/passing-a-function-with-parameters-as-a-parameter

// Todo: Create xyz_n_1of6 version 2 that includes optional null (or default_announcements) announcements and makes prework_list 
// and agenda_list optionally null (or default_prework_list and default_agenda_list)

// BugBug: Consider adding “const ics_4_1of6_announcement_list = []”
export const ics_4_1of6_prework_list = xyz_n_1of6_prework_list(sprint)  
const ics_4_1of6_agenda_list = xyz_n_1of6_agenda_list(sprint)
export const ics_4_1of6 = () => { return xyz_n_1of6(sprint, ics_4_1of6_prework_list, activityListPrevious, ics_4_1of6_agenda_list, ics_4_2of6_prework_list, activityList) }

export const ics_4_2of6_prework_list = []