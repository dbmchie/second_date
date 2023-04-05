let chris = {
  name: "Chris",
  gender: "male",
  occupation: "senior engineering manager",
  attributes: ["kind", "caring", "attentive"],
  skills: ["management", "javascript"],
  forgottenskills: ["fullstack development"],
};

let angel = {
  name: "Angeliki",
  gender: "female",
  occupation: "data scientist",
  attributes: ["independent", "strong-willed", "intelligent"],
  skills: ["python", "data analysis"],
  feelingWell: false,
};

let currentTime = new Date();
let deadline = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), 15, 0, 0);

let timeLeft = deadline - currentTime;
let hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60));
let minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
let secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

console.log(`Chris has proposed to care for Angeliki. She has until 3 pm to reject this proposal. Time left: ${hoursLeft} hours ${minutesLeft} minutes ${secondsLeft} seconds.`);

// Define the actions Bob can take

chris.bringChocolates = function(person) {
  console.log(`${this.name} brings ${person.name} some chocolates.`);
}

chris.hold = function(person) {
  console.log(`${this.name} holds ${person.name} in their arms.`);
  person.feelingWell = true;
}

chris.talk = function(person) {
  console.log(`${this.name} talks to ${person.name} about various topics.`);
}

chris.getToKnow = function(person) {
  console.log(`${this.name} asks ${person.name} questions to get to know them better.`);
}

setTimeout(function() {
  let userInput;

  do {
    userInput = prompt("Do you accept Chris's proposal? Type 'accept' to accept or 'another day' to reject.");
  } while (userInput !== "accept" && userInput !== "another day");

  if (userInput.toLowerCase() === "accept") {
    // console.log(`${angel.name} has accepted ${chris.name}'s proposal.`);

    // Bob cares for Ada
    chris.bringChocolates(angel);
    while (!angel.feelingWell) {
      chris.hold(angel);
      chris.talk(angel);
      chris.getToKnow(angel);
    }
    console.log(`${angel.name} is feeling better after lots of hugs and attention`);

    // Send email to chris with subject 'accepted' and body 'Hi Chris. I would love for you to come over this evening. What time?'
    let emailLink = document.createElement('a');
    emailLink.href = 'mailto:02-trace-awl@icloud.com?subject=accepted&body=Hi Chris. I would love for you to come over this evening. Here is my address...';
    emailLink.click();

  } else if (userInput.toLowerCase() === "another day") {
    console.log(`${angel.name} has rejected ${chris.name}'s proposal. Chris will be sad, but he'll get over it!`);

    // Send email to chris with subject 'another day' and body 'Hi Chris. Thanks for the proposal. Maybe another time.'
    let emailLink = document.createElement('a');
    emailLink.href = 'mailto:02-trace-awl@icloud.com?subject=another day&body=Hi Chris. Thanks for the proposal. Maybe another day. :-*'
    emailLink.click();

  } else {
    console.log(`Invalid input. Please type 'accept' or 'another day'.`);
  }
}, 3000);
