let goalsArr = [];

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    const fortunes = [
      "A golden egg of opportunity falls into your lap this month.",
      "A faithful friend is a strong defense.",
      "All your hard work will soon pay off.",
      "Believe in yourself and others will too.",
      "Success is a journey, not a destination.",
    ];

    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
  },

  addGoals: (req, res) => {
    // console.log(req.params, req.body, req.query);
    // console.log(req.body.goal); // am i targeting the correct value inside object? UNDEFINED
    goalsArr.push(req.body.goal);
    // console.log(goalsArr);
    res.status(200).send(goalsArr); // this is sending back the array w object..
  },
  updateGoal: (req, res) => {
    // console.log(req.body);
    const { original, changed } = req.body;
    goalsArr = goalsArr.map((el) => {
      if (el === original) {
        return (el = changed);
      } else {
        return el;
      }
    });
    // console.log(goalsArr);
    res.status(200).send(goalsArr);
  },
};

// holy! the capitol letter on main.js line 34 wasn't allowing me to access the value. finally got it fixed!
