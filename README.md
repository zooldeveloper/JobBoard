# JobBoard

As its name suggests, it's a job board app that lists different job offers. They can be searched either by job title, city name or even zip code. They can also be filtered either by contract type, job industry or hourly rate. And of course, we can reset all the options to thier initial states.

The app was built using Ionic components, Vue js, Tailwind and Express server. 

## Installation ##
Once the app is cloned, navigate to the `client` folder and run `npm install` command to install the dependencies needed for the frontend. Then, navigate to the `server` folder and run the same command to install the dependencies needed for the backend.

## Usage ##

In the root of the `server` folder, run `npm run start` command, the server should run on the default port `3001` with a message printed to the console `Server is listening on port 3001`.
Now that our server is ready to accept requests, we can run the app by navigating to root of the `client` folder and running the `ionic serve` command. The app should run on `localhost` with the default port `8100`.
