/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');
const animalSounds = require('./animal-sounds');

const skillName = 'Guess the animal sound';
const finishMessage = 'Thanks for playing. Goodbye!';
const soundQuestion = 'What animal makes this sound?';
const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {

    let next = getNextAnimal();
    let nextSound = next.sound;
    const nextAnimalQuestion = `${soundQuestion} ${nextSound}`;
    const attributesManager = handlerInput.attributesManager;
    const sessionAttributes = attributesManager.getSessionAttributes();

    sessionAttributes.lastAnimal = next.name;
    sessionAttributes.correctAnswers = 0;
    sessionAttributes.wrongAnswers = 0;

    const greeting = `Welcome to Guess the animal sound game. I will play a sound and you guess what animal made it.`;

    const fullResonse = `${greeting} <break time= "1s" />  ${nextAnimalQuestion}`;

    return handlerInput.responseBuilder
      .speak(fullResonse)
      .reprompt(nextAnimalQuestion)
      .withSimpleCard(skillName, greeting)
      .getResponse();
  },
};


const HelpIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const speechText = 'Guess the animal that makes the sounds I play. If you are not sure just pick any animal you can think of.';
    const speechRepeat = 'Say an animal.';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechRepeat)
      .withSimpleCard(skillName, speechText)
      .getResponse();
  },
};

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {

    return handlerInput.responseBuilder
      .speak(finishMessage)
      .withSimpleCard(skillName, finishMessage)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Sorry, something went wrong. The game is over. Try playing again.')
      .getResponse();
  },
};

const FinishIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'FinishIntent';
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(finishMessage)
      .withSimpleCard(skillName, finishMessage)
      .getResponse();
  },
};

const DontKnowIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'DontKnowIntent';
  },
  handle(handlerInput) {

    let next = getNextAnimal();
    let nextSound = next.sound;
    const nextAnimalQuestion = `${soundQuestion} ${nextSound}`;
    const attributesManager = handlerInput.attributesManager;
    const sessionAttributes = attributesManager.getSessionAttributes();

    let output = `That's ok. It was a ${sessionAttributes.lastAnimal}. ${nextAnimalQuestion}`;

    sessionAttributes.lastAnimal = next.name;

    return handlerInput.responseBuilder
      .speak(output)
      .reprompt(nextAnimalQuestion)
      .withSimpleCard(skillName, soundQuestion)
      .getResponse();
  },
};


const GuessIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'GuessIntent';
  },
  handle(handlerInput) {

    const slots = handlerInput.requestEnvelope.request.intent.slots;

    console.log('Slots', slots.animal.value);
    let next = getNextAnimal();
    let nextSound = next.sound;
    const nextAnimalQuestion = `${soundQuestion} ${nextSound}`;
    const attributesManager = handlerInput.attributesManager;
    const sessionAttributes = attributesManager.getSessionAttributes();

    let lastAnimal = sessionAttributes.lastAnimal;
    sessionAttributes.lastAnimal = next.name;

    let output;
    if (lastAnimal == slots.animal.value) {
      console.log("Correct");
      output = `Yes it was a ${slots.animal.value}. ${nextAnimalQuestion}`;
      sessionAttributes.correctAnswers++;
    } else {
      console.log(`Incorrect. It was a ${lastAnimal} and you said ${slots.animal.value}`);
      output = `No it was a ${lastAnimal}. Let's try another one. ${nextAnimalQuestion}`;
      sessionAttributes.wrongAnswers++;
    }

    //TODO: handle this correectly.

    // if(sessionAttributes.correctAnswers >= 5) {
    //   return handlerInput.responseBuilder
    //   .speak("You have gotten 5 right, do you want to keep playing?")
    //   .reprompt("do you want to keep playing?")
    //   .withSimpleCard(skillName, "do you want to keep playing?")
    //   .getResponse();
    // }

    // if(sessionAttributes.wrongAnswers >= 5) {
    //   return handlerInput.responseBuilder
    //   .speak("You have gotten 5 wrong, do you want to keep playing?")
    //   .reprompt("do you want to keep playing?")
    //   .withSimpleCard(skillName, "do you want to keep playing?")
    //   .getResponse();
    // }

    return handlerInput.responseBuilder
      .speak(output)
      .reprompt(nextAnimalQuestion)
      .withSimpleCard(skillName, soundQuestion)
      .getResponse();
  },
};

const YesIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.YesIntent';
  },
  handle(handlerInput) {
    //TODO: Handle correctly
    return handlerInput.responseBuilder
      .speak("great. what animal is next")
      .reprompt("what animal is next")
      .withSimpleCard(skillName, "what animal is next")
      .getResponse();
  },
};


const NoIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.NoIntent';
  },
  handle(handlerInput) {
    //TODO: Handle correctly
    return handlerInput.responseBuilder
      .speak('you did great. Thanks for playing')
      .withSimpleCard(skillName, finishMessage)
      .getResponse();
  },
};


const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler,
    FinishIntentHandler,
    GuessIntentHandler,
    YesIntentHandler,
    NoIntentHandler,
    DontKnowIntentHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();


function getNextAnimal() {
  const index = Math.floor(Math.random() * animalSounds.length);

  return animalSounds[index];

}