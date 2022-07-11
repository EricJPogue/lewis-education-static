
const baseLink = () => {
	return 'https://lewiseducation.blob.core.windows.net/'
}

export const daleLectureSlidesURL = (chapter) => {
	const baseDaleLink = () => { return baseLink()+'dale/' 	}

	const daleLectureSlidesFileName = (chapter) => {
		switch(chapter) {
			case  '1': return 'chapter-01-lecture.pptx'
			case  '2': return 'chapter-02-lecture.pptx'
			case  '3': return 'chapter-03-lecture.pptx'
			case  '4': return 'chapter-04-lecture.pptx'
			case  '5': return 'chapter-05-lecture.pptx'
			case  '6': return 'chapter-06-lecture.pptx'
			case '11': return 'chapter-11-lecture.pdf'
			case '13': return 'chapter-13-lecture.pdf'
			case '15': return 'chapter-15-lecture.pdf'
			case '16': return 'chapter-16-lecture.pdf'
			case '17': return 'chapter-17-lecture.pdf'
		
			default:
				console.log('Error: Dale slides URL not found (chapter='+chapter+')') 
				return ''
		}
	}
	
	const url = baseDaleLink()+daleLectureSlidesFileName(chapter) 
	return url
}

