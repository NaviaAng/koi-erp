# koi-erp

A. Client
1. Install Vue cli
    yarn global add @vue/cli                    npm install -g @vue/cli

2. Initiate Project
    vue init webpack client

3. Install
    yarn install                                npm install


upgrade vue cli
    yarn global upgrade --latest @vue/cli       npm update -g @vue/cli


B. SERVER
1. Create Server folder in root folder : mkdir server
2. cd server
3. create package cli                  : npm init -f
4. npm install --save nodemon eslint   : yarn add nodemon eslint     or
                                       : yarn add eslint --dev

5. Configure ESLint                    : node node_modules/eslint/bin/eslint.js --init

? How would you like to use ESLint? To check syntax and find problems
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? Vue.js
? Does your project use TypeScript? No
? Where does your code run? Browser
? What format do you want your config file to be in? JavaScript

6.Install depedencies                   : yarn add express body-parser cors morgan or
                                          npm install -g @vue/cli