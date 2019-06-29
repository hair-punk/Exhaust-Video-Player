# Exhaust Computer Entertainment Sales Platform

> This repository contains the video player component of the exhaust sales platform.
![cropped video player screenshot](https://user-images.githubusercontent.com/1322821/60388296-2504f600-9a64-11e9-8d98-97cea548811b.png)

## Related Projects
  - https://github.com/hair-punk/fec3-tvo-service
  - https://github.com/hair-punk/fec3-amkw-service
  - https://github.com/hair-punk/fec3-azu-service

## Usage
Install the dependencies with
npm install
install mongodb in the package manager of your choice

then seed the database by running
npm run seed-db

to start the express server run
npm run express-server

to start the front end run

npm run front-end

now the server is operational, and should be accessable from localhost:3008

The videoplayer will not work without an s3 bucket integration.  

