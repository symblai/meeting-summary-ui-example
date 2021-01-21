# Meeting Summary UI Sample App
  
##  Introduction 

This is a sample web application built with [React](https://reactjs.org). In this example, [Material-UI](https://material-ui.com) was used as the CSS library.

This app demonstrates an implementation of GET Request to our Conversation API endpoints to generate a meeting summary UI that fits your unique use cases.

## Pre-requisites

To get started, you’ll need your account credentials and Node.js installed (> v8.x) on your machine.Your credentials include your appId and appSecret. You can find them on the homepage of the Symbl.ai platform.

![App ID](https://docs.symbl.ai/images/credentials-faf6f434.png)



### Environment variables

Generate an access token using the APP_ID and APP_SECRET that you see when you create an account on Symbl Platform .You can use tools like postman for this :

![](https://symbltestdata.s3.us-east-2.amazonaws.com/NeerajTest/Nextjs-Symbl-demo+Images/Generate+OAuth+Token.png)

Update the `auth.json` file in `./src/components/services/auth.json`  with access token that you just generated. 

    
## Deploying

### Install Dependencies 

Run `yarn install` or `npm install` on terminal to install the dependencies required

### Run

Run `yarn start` or `npm start` on terminal to run the apps in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser


<img src="/images/meeting-summary-ui.png" width=1000>


## Conclusion

This app shows the ease with which you can use Symblai to generate a UI and analytics corresponding to your conversations .Please free to fork any of the projects here to use on your own . 

### Community

If you liked our integration guide, please star our repo!

If you have any questions, feel free to reach out to us at devrelations@symbl.ai or through our Community Slack at [https://developer.symbl.ai/community/slack](https://developer.symbl.ai/community/slack)

This library is released under the [MIT License][license]

[Signup for free](https://platform.symbl.ai)




