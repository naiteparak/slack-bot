# Birthday Reminder Slack Bot
The Birthday Reminder Slack Bot is a custom integration designed to help supervisors stay informed about their employees' birthdays. This bot automatically sends notifications to supervisors, ensuring that they can celebrate and acknowledge their team members' special days.

## Installation and Setup

To install and set up the Birthday Reminder Slack Bot, follow these steps:

1. Clone or download the bot's source code from the provided repository.

2. Install all dependencies with command 

```bash
 $ npm install
```
### Setting up environment variables

3. Before running the app, you need to create a .env file in the project root directory. Rename env.example file or use the following example as a template:

```dotenv
 PORT=80
 BOT_USER_OAUTH_TOKEN=PUT_HERE_YOUR_TOKEN
```

## Running the app

You can run the app using the following command:

```bash
 $ npm run start
```