import { orderedListSlide } from './SLSprint00'

export const tutorialRouter = (route) => {
	switch(route) {
		case MONGODB_ATLAS_MOVIE_CRUD_ROUTE: return MongoDBAtlasMovieCRUD()
		default: return null
	}
}

const MONGODB_ATLAS_MOVIE_CRUD_ROUTE = 'mongo-crud'
const MongoDBAtlasMovieCRUD = () => {
	const agenda = () => {
		return orderedListSlide(
			'MongoDB Atlas Movie CRUD', 
			'In this tutorial we will utilize MongoDB Atlas, Github, and JavaScript to implement a database of movies by:', [
			'Creating a GitHub repository that includes JavaScript Create, Read, Update, and Delete scripts',  
			'Creating a MongoDB Atlas Organization, Project, and Database Cluster', 
			'Creating a Database User & Password and granting network access to the Database Cluster',
			'Utilizing Node.js to install the ‘mongodb’ driver and to execute JavaScript command line scripts',
			'Utilizing Node.js and the JavaScript Create script to create a Database, Collection, and movie Document',
			'Utilizing Node.js and JavaScript to Read, Update, and Delete movies (CRUD)',
			'Cleaning up by deleting the MongoDB Atlas Database Cluster, Project, Organization, and the GitHub repository'])
	}

	return [ agenda ]
}