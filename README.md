# Monitux API

This is a Debian / Ubuntu node.JS API to monitor the processes that runs on your machine. 

It delivers a list of processes and their status in JSON. You can select them for monitoring to have a smaller list of your preferred processes.

## Installation 

Create a database with the `database_creation_script.sql`

Install npm dependencies

    npm install
   
## Configuration

Create the `.env` file from `.env.example`

Configure your database credentials in the `.env` file

Generate your api key by running the following command in your monitux directory:
    
    monitux-api-cli generate-key
    
## TODO 

### Secure API

Implement a command to generate an API KEY

Store the key in the .env file 
