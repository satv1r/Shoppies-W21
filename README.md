## Hey! Welcome to my application: The Shoppies

## Notable Features

### Retaining a user's nominations

This was accomplished with the use of the browsers LocalStorage API. Upon every change in nominations (addition or removal of movies) a new array is stringified and added to local storage. When the user visit's the app, the app will always look for existing nominations data in LocalStorage, if it doesn't exist, it'll create a new entry.

### Shareable Links

In order to implement this feature, I first create a specific route called '/view', then what I did was concatenate the id's of the movies at the end of this url, using the '&' symbol as a seperator. When the user visits the '/view' route, the app will read the URL, extract the ID's into an array and query the API to get the title of each of the movies.

### Debouncing

Since I wanted the app to be as quick as possible, I decided that it would be ideal for movie info to be retrieved as the user types into the input. This however leads to potential issues with making too many unnecessary API calls, so I implemented debouncing, this ensures the app only makes an API call once the user has stopped typing for a complete second.

### Pagination

I implemented pagination to view the results as there are often many results per search term.

## Setup

Create a .env file in the directory and assign the following to variables

1. REACT_APP_KEY: Supply your own OMDB api key here
2. REACT_APP_LINK: Supply the url of the app + '/view/' (example: 127.0.0.1:3000/view/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

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
