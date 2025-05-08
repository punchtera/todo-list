## Getting Started

This project was build using the Next.js React Framework

All the components and the corresponding tests are located in the components folder.
The styling was implemented using tailwind.

### Description

This application is a classic Task Manager Application, that allows you to add task, list the all the tasks available in the memory of the application, delete the tasks from the list,
update the different tasks from the list and change the status of each task.

### Instructions to run the application locally

- install npm using the following link[https://docs.npmjs.com/downloading-and-installing-node-js-and-npm]
- install the dependencies using npm i from the terminal
- run `npm run dev` to start a local dev environment
- navigate to http://localhost:3000[http://localhost:3000]

### Assumptions

- Use create-next-app to generate the development environment for Next.js application using typescript
- Next.js offers a set of tools to quicky start development of React applications.
- I used jest and configure it to use typescript, as typescript was a requirement for the project

### Libraries

- Next.js
- React.js
- Jest
- Tailwind (used inside the Next.js ecosystem).
  - I used tailwind also because it allows me to apply styles directly within the component using classes, instead of start switching between files (css and tsx). This significantly speeds up the initial styling process and prototyping.
- uuid4 to generate new ids for Tasks, to avoid collision of keys.
