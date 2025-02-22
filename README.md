Hello!!! everyone I am the creator of this project...
If you want to configure the Email Otp Service follow the instruction step by step...

run the command in cli(command line interface)
<!-- USED FOR INSTALLING ALL THE MODULES -->
>>> npm i

Create the config.json file in src/config
Copy paste the given configuration below in the config.json file ...

{
  "development": {
    "username": "root",
    "password": null,
    "database": "Authentication_PrintAvailable",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

After Copy paste, replace the username,password,database,host and remain the dialect same as per your sql database configuration


Run these commands in your cli/terminal

<!--  USE FOR CREATE THE DATABASE IN MySQL -->
>>>npx sequelize db:create

<!-- USE FOR THE CREATION OF THE TABLE IN THE DATABASE -->
>>>npx sequelize db:migrate


create a .env file in your root directory mean in Project directory
Example- In my the src file is in "RemainderService / src" then you have to create the file in RemainderService Directory

After which you have to set up some environment variables 
PORT : Port in which your otp email service will run give by you any random free port not used by any other service
PASSWORD : Make sure double authentication is on in your email, after this search "Google App Password" in browser and create the password by entering app as gmail and after this you get a 16 character  alphanumeric password and paste this password here
EMAIL : Enter the email used by the service through which user get the email, for example xxxx@gmail.com
OTP_AUTHENTICATOR_PASSWORD :Password use by the service to authenticate the other service 
SALT_ROUND : What should be the encryption level for the password like otp it is a integer value generally around 12-14 for deployment and 10-12 for development, more the value more the time for encrption and decryption and more the security.


After this you are good to go for a basic otp service ....

You can test this service using Postman:-

Create/Generate

<!--  CREATING THE OTP AND SEND TO THE USER  -->
Method : POST
Url : localhost:{PORT}/api/createOtp
body : {
  email : { receiver email },
  authenticatorPassword : { password used by the service to communicate }
}


<!-- VALIDATING THE OTP SUBMMIT BY THE RECEIVER  -->
Method : GET
Url : localhost:{PORT}/api/validateOtp
body : {
  email : { receiver email },
  otp : { OTP received by the receiver },
  authenticatorPassword : { password used by the service to communicate }
}
<!-- AFTER VALIDATION DELETE THE OTP FROM THE DATABASE  -->
Method : DELETE
Url : localhost:{PORT}/api/deleteOtp
body : {
  email : { receiver email },
  authenticatorPassword : { password used by the service to communicate }
}


You can change and handle response/errors according to your requirement and use it ❤️❤️❤️❤️

If you want to Understand the modules that is used and why it is used you can read further otherwise leave it......

<!-- EXPRESS MODULE -->
Express module - Used for creating server and handling routing and request/response cycle 
<!-- BCRYPT MODULE -->
Bcrypt module - Used for encrption of the otp before saving it to database and validation of the otp on geting validation request
<!-- DOTENV MODULE -->
Dotenv module - Used for the purpose of accessing and assinging the environment variables
<!-- BODY PARSER MODULE-->
Body-parser module - Used for the parsing of the body in request object to json
<!-- MYSQL2  MODULE-->
Mysql2 module - Used for the connection of mysql and sequelize ORM
<!-- NODECRON MODULE -->
Node-cron module - Used for the scheduling of the jobs like deleting expired otps from the database
<!-- NODEMAILER MODUKE -->
Nodemailer module - Used for the purpose of the sending email using SMTP protocol
<!-- NODEMON MODULE -->
Nodemon module - Nodemon is a development tool that watches your source files and restarts your Node.js server whenever it detects changes 
<!-- SEQUELIZE MODULE -->
Sequelize module - It is ORM (Object Relation Mapping ) used for the purpose of mapping the object to the RDBMS
<!-- SEQUELIZE-CLI MODULE  -->
Sequelize - cli module - It is a command line interface tool used for the purpose of handling models creation and operation of the 
sequeqlize using cli