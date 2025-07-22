# Personal Dashboard Web App

A responsive personal dashboard web application built with **React**, displaying real-time data such as weather updates, latest news, and GitHub activity. Designed for simplicity and usability with theme support and persistent settings using local storage.

## Features

-  Real-time weather data from OpenWeatherMap API
-  Latest news headlines via NewsAPI (UK-focused)
-  GitHub activity feed and updated repositories
-  Dark mode toggle with localStorage persistence
-  Fast performance with Vite and Axios
-  Responsive design using Tailwind CSS
-  Deployed on Netlify

## Tech Stack

- **Frontend:** React + Vite
- **Styling:** Tailwind CSS
- **HTTP Requests:** Axios
- **Icons:** React Icons
- **State & Effects:** React Hooks
- **Deployment:** Netlify
- **Environment Management:** `.env` + Vite (`VITE_` prefix)

## Live Demo

🔗 [View Live on Netlify](https://personal-dashboard-project-test.netlify.app)  

NOTE: The news section doesn't return result and thus isn't working due to the limitation of the free NewsAPI plan. The API will return results to only specific addresses (local hosting) while on the free plan.
