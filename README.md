# Office Supplies CRM App

A Node.js/Express web application that integrates with the HubSpot CRM API 
to manage a custom "Office Supplies" object. Users can view all records and 
submit new entries through a form, which are created directly in HubSpot via 
the CRM API.

## Tech Stack

- Node.js
- Express
- Axios
- Pug (server-side templating)
- Jest (unit testing)
- GitHub Actions (CI/CD)

## Getting Started

1. Clone the repository
2. Run `npm install`
3. Create a `.env` file in the root directory with the following:
   PRIVATE_APP_ACCESS=your_hubspot_private_app_token

4. Run `node index.js`
5. Visit `http://localhost:3000`

## Running Tests

npm test


Runs 10 unit tests across 2 test suites covering input validation 
and data calculation logic.

## CI/CD

A GitHub Actions pipeline runs all tests automatically on every push to main.   
