import { xyz_n_nof6_lists, xyz_n_1of6_lists, xyz_n_1of6, xyz_n_2of6 } from './SL00000Sprint00'

import { xyz_n_nof6UnderConstruction } from './SL00000Sprint00'

import { list20000Sprint06 } from '../ActivityLists/AL20000Sprint06'
import { list20000Sprint07 } from '../ActivityLists/AL20000Sprint07'

// Introduction to Computer Science (ICS) sprint 6 global values.
const sprint = 7
const activityListPrevious = () => { return list20000Sprint06(sprint-1) }
const activityList = () => { return list20000Sprint07(sprint) }

// Sprint 7 session 1 of 6: Monday
export const ics_7_1of6_lists = xyz_n_1of6_lists(sprint)
export const ics_7_1of6 = () => { return xyz_n_1of6(sprint, ics_7_1of6_lists.prework, activityListPrevious, ics_7_1of6_lists.agenda, ics_7_2of6_lists.prework, activityList) }

// Sprint 7 session 2 of 6: Wednesday
const ics_7_2of6_lists = xyz_n_nof6_lists(sprint)
export const ics_7_2of6 = () => { return xyz_n_2of6(sprint, ics_7_2of6_lists, ics_7_3of6_lists.prework, activityList) }

// Sprint 7 session 3 of 6: Friday
const ics_7_3of6_lists = xyz_n_nof6_lists(sprint)
export const ics_7_3of6 = () => { return [ xyz_n_nof6UnderConstruction ] }

// Sprint 7 session 4 of 6: Monday
export const ics_7_4of6 = () => { return [ xyz_n_nof6UnderConstruction ] }

// Sprint 7 session 5 of 6: Wednesday
export const ics_7_5of6 = () => { return [ xyz_n_nof6UnderConstruction ] }

// Sprint 7 session 6 of 6: Friday
export const ics_7_6of6 = () => { return [ xyz_n_nof6UnderConstruction ] }
