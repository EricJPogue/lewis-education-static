import { al49200Sprint01 } from './AL49200Sprint01'

export const al49200 = (sprint) => {
	switch(sprint) {
		case 1: return al49200Sprint01()
		case 2: return null
		case 3: return null
		case 4: return null
		case 5: return null
		case 6: return null
		case 7: return null
		case 8: return null

		default:
			console.log('Error: AL44000 sprint '+sprint+' content not found.') 
			return (null)
	}
}