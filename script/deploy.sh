#!/bin/sh
ssh ec2-user@3.17.66.184 <<EOF
    cd ~/NodeJSDeployment
    git pull origin master
    curl -o-   https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh    | bash
    . ~/.nvm/nvm.sh
    nvm install v12.18.1
    npm install
    npm install -g nodemon pm2
    pm2 restart ecosystem.config.js
    exitpm
