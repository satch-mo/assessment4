const complimentBtn = document.getElementById("complimentButton");

const fortuneButton = document.getElementById("fortuneButton");

const addGoalsForm = document.querySelector(".goals-collector");
const goalsFromForm = document.querySelector(".goals-input");

const goalsList = document.querySelector(".goals-list");

const clearGoals = () => {
  goalsList.innerHTML = "";
};

// console.log(goalsList);

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const addGoalsToPage = (evt) => {
  evt.preventDefault();
  clearGoals();
  let addedGoals = {
    goal: goalsFromForm.value,
  };

  axios
    .post("http://localhost:4000/api/goals", addedGoals)
    .then((response) => {
      console.log(response.data);
      let goalsArr = response.data;
      goalsArr.forEach((el) => {
        let listItem = document.createElement("li");
        listItem.textContent = el;
        goalsList.appendChild(listItem);
      });
    })
    .catch((err) => console.log(err));
};

complimentBtn.addEventListener("click", getCompliment);

fortuneButton.addEventListener("click", getFortune);

addGoalsForm.addEventListener("submit", addGoalsToPage);
