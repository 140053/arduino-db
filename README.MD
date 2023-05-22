# Server Setup
**Requirements (Windows & Linux) setup**
 1. [nodejs v18 up](https://nodejs.org/en) 
 2. [mysql-server](https://dev.mysql.com/downloads/mysql/)
 
 **Installation**
 create a folder(any name) then open a command prompt or terminal in a folder then execute command bellow
   Clone a git Repository

    git clone https://github.com/140053/arduino-db.git

then cd to the clone repo:

        cd arduino-db
then type in 

    npm i 

# Usage:

the server will accept a get request in /api and make a console log of the data sent. to start the server type in a command:

    npm run test

   server url:   http://ip-address/api  server port : 80
   note * change the "ip-address" with the ip of the computer or server
   
**Sample data received:**
![screen shoot of console log](https://github.com/140053/arduino-db/blob/main/docs/img1.png)
