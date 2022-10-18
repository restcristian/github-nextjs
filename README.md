# Github-Next

This is a small project that makes a request to the github API in order to display the issue from the ReactJS repository with some basic information.

This projects uses:
- ReactJS
- NextJS
- Apollo Client
- Graphql
- TypeScript
- Jest
- yarn 

## Getting Started

This Project was developed using Node ``v14.17.0``
First you will need to install the dependencies by running:

```bash
yarn install
```
Since this project fetches the github API, you will need to create a `.env.local` file on the root of the project. and saved the token as follows:

```
NEXT_PUBLIC_API_TOKEN=YOUR_TOKEN
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Get latest Types from Schema

if the Github's API schema changes in the future, on the ``package.json``we include a couple of commands to pull the schema, as well as to convert them into TypeScript interfaces and types. These are as follow:

```
schema:download
schema:generate
```
## Feature Improvements

[ ] Include Pagination using the offset parameter from the Github's API <br/>
[ ] Improve Design (Maybe use a UI Framework such as Materialize / ChakraUI) <br/>
[ ] Add e2e testing besides the already existing Unit Tests / Expand Coverage <br/>
