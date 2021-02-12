# Meeting Summary UI Sample App

[![insights](https://img.shields.io/badge/symbl-insights-blueviolet)](https://docs.symbl.ai/docs/conversation-api/overview/introduction)
[![experience](https://img.shields.io/badge/symbl-experience--ui-blue)](https://docs.symbl.ai/docs/pre-built-ui/experience-api)


Symbl's APIs empower developers to enable: 
- **Real-time** analysis of free-flowing discussions to automatically surface highly relevant summary discussion topics, contextual insights, suggestive action items, follow-ups, decisions, and questions.
- **Voice APIs** that makes it easy to add AI-powered conversational intelligence to either [telephony][telephony] or [WebSocket][websocket] interfaces.
- **Conversation APIs** that provide a REST interface for managing and processing your conversation data.
- **Summary UI** with a fully customizable and editable reference experience that indexes a searchable transcript and shows generated actionable insights, topics, timecodes, and speaker information.

<hr />

This is a sample web application built with [React](https://reactjs.org). In this example, [Material-UI](https://material-ui.com) was used as the CSS library.
This app demonstrates an implementation of GET Request to our Conversation API endpoints to generate a meeting summary UI that fits your unique use cases. 

<hr />

 * [Setup](#setup)
 * [Integration](#integration) 
 * [Conclusion](#conclusion)
 * [Community](#community)
 
## Setup 
The first step to getting setup is to [sign up][signup]. 

1. Create a .env file in the root directory using the [.env.sample](./.env.sample) as an example.
2. Update the .env file with the following:
    * Your App Id that you can get from [Platform](https://platform.symbl.ai)
    * Your App Secret that you can get from [Platform](https://platform.symbl.ai)
    * A conversationId populated as a `REACT_APP_SYMBL_CONVERSATION_ID` value

The application will process and display insights for one conversationId, which can be generated through one of the Symbl's [Telephony][telephony], [Websocket][websocket], or [Async][async] APIs.  

### Deploy

1. Run `npm install`
2. Run `npm start`
3. Open a new browser tab to [http://localhost:3000](http://localhost:3000) to view.


## Integration 

On startup the application will open a new token server to provide an auth token for generating insights.  You may view token details by opening a tab to [http://localhost:8080/tokens](http://localhost:8080/tokens)

### Project Structure

Conversation data and Insights are generated from the `./src/components` directory.  Use the following for reference to each.
* `./src/components/meetingInfo`
    * Conversaton Info = `ConversationAPI.js`
    * Members Info = `MembersAPI.js`
    * Topics = `TopicsAPI.js`
* `./src/components/meetingInsights`
    * Action Items = `ActionsList.js`
    * Follow-ups = `FollowUpsList.js`
    * Insights = `InsightsAPI.js`
    * Questions = `QuestionsList.js`

## Conclusion 

When implemented this web application will display conversation and insight data for the given conversationId, and serves as an example for implementing Symbl's [Conversaton API's](https://docs.symbl.ai/docs/conversation-api/overview/introduction) using React and Material-UI.

### Screenshot

<img src="./images/meeting-summary-ui.png" width=750>

## Community 

If you have any questions, feel free to reach out to us at devrelations@symbl.ai, through our Community [Slack][slack], or [developer community][developer_community]

This guide is actively developed, and we love to hear from you! Please feel free to [create an issue][issues] or [open a pull request][pulls] with your questions, comments, suggestions and feedback.  If you liked our integration guide, please star our repo!

This library is released under the [MIT License][license]

[license]: LICENSE.txt
[telephony]: https://docs.symbl.ai/docs/telephony/overview/post-api
[websocket]: https://docs.symbl.ai/docs/streamingapi/overview/introduction
[async]: https://docs.symbl.ai/docs/async-api/overview/introduction
[developer_community]: https://community.symbl.ai/?_ga=2.134156042.526040298.1609788827-1505817196.1609788827
[signup]: https://platform.symbl.ai/?_ga=2.63499307.526040298.1609788827-1505817196.1609788827
[issues]: https://github.com/symblai/meeting-summary-ui-sample-app/issues
[pulls]: https://github.com/symblai/meeting-summary-ui-sample-app/pulls
[slack]: https://join.slack.com/t/symbldotai/shared_invite/zt-4sic2s11-D3x496pll8UHSJ89cm78CA