
## Azure static site local build 
yarn install
yarn add react-bootstrap bootstrap
yarn add react-router-dom
yarn add react-player
yarn start


## Test, build deploy
from lewis
npm start 
npm run build 
git add / commit / push

deploy lewis

from lewis-eduction
git add / commit / push


## Todo 
Review https://www.taniarascia.com/getting-started-with-react/ 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

And installed the React Router with the "npm i react-router-dom --save" command. 

This project also uses React Bootstrap

which is installed with "npm install react-bootstrap bootstrap"... now "yarn add react-bootstrap bootstrap"

Also uses react-bootstrap-table2
which is installed with "npm install react-bootstrap-table-next"

Also uses react-player
which is installed with "npm install react-player --save"

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

Error: 
sh: react-scripts: command not found
npm ERR! code ELIFECYCLE
...

Solution:
Execute "npm install react-scripts"

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## EJP Notes
npx create-react-app my-app
cd my-app
npm start

https://create-react-app.dev/docs/getting-started/

Press Command+Shift+Dot to view hidden files in MacOS Finder

Tables:
https://engineering.shopify.com/blogs/engineering/building-data-table-component-react
https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg

HTTPs with custom domain on Azure
https://docs.microsoft.com/en-us/azure/app-service/configure-ssl-certificate#create-a-free-certificate-preview

Todo: Move URL param functions to shared class.

Passing parameters through NavLink
Reference: https://www.youtube.com/watch?v=5pt_igBTCsI

# Notes from new build
Execute: git clone https://github.com/EricJPogueCourses/lewis.git

Execute: npm start 
Result: 
> lewis@0.1.0 start /Users/epogue/Repositories/lewis
> react-scripts start

sh: react-scripts: command not found
npm ERR! code ELIFECYCLE


npm install react-scripts --save

Wow - then it ran. Hmmm... I thought I would need to install more packages. Cool... and strange. 

Passing parameters reference: https://www.youtube.com/watch?v=nmbX2QL7ZJc

Backlog:
s014:

