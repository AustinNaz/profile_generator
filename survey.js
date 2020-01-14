const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)", (name) => {
  // console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.question("What's an activity you like doing?", (activity) => {
    // console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.question('What do you listen to while doing that?', (listen) => {
      // console.log(`Thank you for your valuable feedback: ${answer}`);

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (mealTime) => {
        // console.log(`Thank you for your valuable feedback: ${answer}`);

        rl.question("What's your favourite thing to eat for that meal?", (meal) => {
          // console.log(`Thank you for your valuable feedback: ${answer}`);

          rl.question('Which sport is your absolute favourite?', (sport) => {
            // console.log(`Thank you for your valuable feedback: ${answer}`);

            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (superpower) => {
              // console.log(`Thank you for your valuable feedback: ${answer}`);

              console.log(`${name} likes doing ${activity} while listening to ${listen}, ${name}'s favourite meal time is ${mealTime} and favourite meal during that time is ${meal}, ${name}'s favourite sport is ${sport}, and ${name}'s superpower is ${superpower}`);

                rl.close();
            });
          });
        });
      });
    });
  });
});