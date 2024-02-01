# trello-cypress-API

The project focuses on performing API requests related to board management in Trello. The tests cover creating a board, retrieving board information, and deleting boards. Each test validates the success of the request by checking the response status code and body. The project also includes environment variable handling to store important IDs for future use.

In addition to board management, the project includes a section for "Requisitions on Card." This section showcases API requests for creating, retrieving, and deleting cards within a specific board. Similar to the "Requisitions on Board" tests, the card-related tests validate the responses and store relevant information, such as the card ID, for subsequent actions.

The project is accompanied by essential configuration settings for Cypress, such as the base URL for API requests and options for capturing screenshots on test failures and recording test videos. Overall, this GitHub project serves as a valuable resource for developers looking to automate Trello board and card operations using Cypress, enabling efficient testing and integration with Trello's API.

# POST create board:

Name: "Board created by Cypress"
Sends an API request to create a board with the given name.
Expects a successful response with a status code of 200 and a non-empty body.
Sets the board ID in the environment variables.

# GET this board:

Retrieves the previously created board using the board ID.
Expects a successful response with a status code of 200 and a non-empty body.

# DELETE this board:

Deletes the previously created board using the board ID.
Expects a successful response with a status code of 200.
Requisitions on card

# POST create card:

Name: "Card created by Cypress"
Sends an API request to create a card in a specific list on the board.
Expects a successful response with a status code of 200 and a non-empty body.
Sets the card ID in the environment variables.

# GET a card:

Retrieves the previously created card using the card ID.
Expects a successful response with a status code of 200 and a non-empty body.

# DELETE a card:

Deletes the previously created card using the card ID.
Expects a successful response with a status code of 200.

# Additional Configuration:

Uses Cypress for end-to-end testing.
Base URL for API requests: https://api.trello.com/1
Takes screenshots on test failure and stores them in the "cypress/reports/screenshots" folder.
Records videos of test runs and saves them in the "cypress/reports/videos" folder.
