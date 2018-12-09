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

    const greeting = `Welcome to Guess the animal sound. I will play a sound and you guess what animal made it.`;

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
    return getEndGameHandler(handlerInput);
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request}`);

    return getEndGameHandler(handlerInput);
  },
};

const FinishIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'FinishIntent';
  },
  handle(handlerInput) {
    return getEndGameHandler(handlerInput);
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
      .withSimpleCard(skillName, "Sorry something is not working correctly.")
      .getResponse();
  },
};


function getEndGameHandler(handlerInput) {

  const attributesManager = handlerInput.attributesManager;
  const sessionAttributes = attributesManager.getSessionAttributes();

  let total = sessionAttributes.correctAnswers + sessionAttributes.wrongAnswers;

  const scoreMessage = `You got ${sessionAttributes.correctAnswers} correct out of ${total}. Try for higher next time.`
  const finalMessage = `${scoreMessage} ${finishMessage}`;
  return handlerInput.responseBuilder
    .speak(finalMessage)
    .withSimpleCard(skillName, finalMessage)
    .getResponse();
}

const DontKnowIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'DontKnowIntent';
  },
  handle(handlerInput) {
    return getNextStep(handlerInput, true);
  },
};


const GuessIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'GuessIntent';
  },
  handle(handlerInput) {
    return getNextStep(handlerInput, false);
  },
};

function getNextStep(handlerInput, dontKnow) {
  const slots = handlerInput.requestEnvelope.request.intent.slots;

  let next = getNextAnimal();
  let nextSound = next.sound;
  const nextAnimalQuestion = `${soundQuestion} ${nextSound}`;
  const attributesManager = handlerInput.attributesManager;
  const sessionAttributes = attributesManager.getSessionAttributes();

  let lastAnimal = sessionAttributes.lastAnimal;
  sessionAttributes.lastAnimal = next.name;

  let output;
  if (dontKnow) {
    output = `It was a ${sessionAttributes.lastAnimal}. `;
    sessionAttributes.wrongAnswers++;
  } else if (lastAnimal == slots.animal.value) {
    sessionAttributes.correctAnswers++;

    output = `Yes it was a ${slots.animal.value}. `;
  } else {
    console.log(`Incorrect. It was a ${lastAnimal} and you said ${slots.animal.value}`);
    sessionAttributes.wrongAnswers++;

    output = `You said ${slots.animal.value}? No it was a ${lastAnimal}. `;
  }

  let total = sessionAttributes.correctAnswers + sessionAttributes.wrongAnswers;

  let cardMessage = `You've gotten ${sessionAttributes.correctAnswers} correct out of ${total}.`

  let reprompt;
  if (total % 5 == 0) {
    const keepPlaying = "Do you want to keep playing?";
    output += `${cardMessage} ${keepPlaying}`;
    cardMessage += " Do you want to keep playing? Yes or No."
    reprompt = keepPlaying;
  } else {
    output += nextAnimalQuestion;
    reprompt = nextAnimalQuestion;
  }

  return handlerInput.responseBuilder
    .speak(output)
    .reprompt(reprompt)
    .withSimpleCard(skillName, cardMessage)
    .getResponse();
}

const YesIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.YesIntent';
  },
  handle(handlerInput) {

    let next = getNextAnimal();
    let nextSound = next.sound;
    const nextAnimalQuestion = `${soundQuestion} ${nextSound}`;
    const attributesManager = handlerInput.attributesManager;
    const sessionAttributes = attributesManager.getSessionAttributes();

    sessionAttributes.lastAnimal = next.name;

    return handlerInput.responseBuilder
      .speak(nextAnimalQuestion)
      .reprompt(nextAnimalQuestion)
      .withSimpleCard(skillName, soundQuestion)
      .getResponse();
  },
};


const NoIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.NoIntent';
  },
  handle(handlerInput) {
    return getEndGameHandler(handlerInput);
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