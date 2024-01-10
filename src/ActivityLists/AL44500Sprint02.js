import React from 'react'

import { externalLink } from '../DataAndAPIs/Links'

export const al44500Sprint02 = () => {
	const galadrielAndChange = () => { return externalLink('Galadriel declared in LOTR', 'https://www.youtube.com/watch?v=BjJvOm94W5U')}
	return ( <div><p>Is it possible that software development techniques are not as clear cut as we have made them out to be? 
		Could it be that the world has changed as {galadrielAndChange()}? That new agile development lifecycles and 
		multithreaded programming opportunities have given rise to new techniques including functional programming and
		new programming languages? Should we embrace or resist? Could it be that Scrum development techniques, iterative 
		product releases, new web development technologies, and the ever increasing power of multithreaded programming have 
		elevated testing and concurrency to a level that makes new software development languages justifiable?</p>
		</div> )
}