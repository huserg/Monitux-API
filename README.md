# Monitux API

This is a Debian / Ubuntu node.JS API to monitor the processes that runs on your machine. 

It delivers a list of processes and their status in JSON. You can select them for monitoring to have a smaller list of your preferred processes.

## Configuration

Create a database with the `database_creation_script.sql`

Install npm dependencies

    npm install

Create the `.env` file from `.env.example`

Configure your database credentials in the `.env` file

Generate your api key by running the following command in your monitux directory:
    
    monitux-api-cli generate-key
    
## Installation

Run the following command to create the `.deb` package

    node-deb -- monitux-api.js monitux-api-cli.js .env Routes/ App/ Database/ LICENSE

Install the app with 

    sudo dpkg -i monitux-api_1.0.0_all.deb

## TODO 

- Make the monitux-api-cli working when deployed with `.deb` package
- Ask for ENV values when installing the .deb