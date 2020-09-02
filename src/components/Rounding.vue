<template>
  <div class="applet__wrapper">
    <div class="applet__content">
      <h3>Округление</h3>
      <p>
        Округлить до <b>{{ getRank }}</b> число <b>{{ task.number }}</b>
      </p>

      <input class="applet__input" v-model="answer" />
      <small>Дробь следует писать через точку, пример: 6.43</small>

      <template v-if="isCorrect === null">
        <button class="applet__btn" @click="checkAnswer">Проверить</button>
      </template>
      <template v-else-if="isCorrect">
        <p class="applet__success">Отлично!</p>
        <button class="applet__btn" @click="generateNewTask">Ещё</button>
      </template>
      <template v-else>
        <p class="applet__error">Неверно</p>
        <button class="applet__btn" @click="resetAnswer">
          Попробовать снова
        </button>
      </template>
    </div>
    <div class="applet__icon">
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M20.5,11H19V7C19,5.89 18.1,5 17,5H13V3.5A2.5,2.5 0 0,0 10.5,1A2.5,2.5 0 0,0 8,3.5V5H4A2,2 0 0,0 2,7V10.8H3.5C5,10.8 6.2,12 6.2,13.5C6.2,15 5,16.2 3.5,16.2H2V20A2,2 0 0,0 4,22H7.8V20.5C7.8,19 9,17.8 10.5,17.8C12,17.8 13.2,19 13.2,20.5V22H17A2,2 0 0,0 19,20V16H20.5A2.5,2.5 0 0,0 23,13.5A2.5,2.5 0 0,0 20.5,11Z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import { InteractiveModule } from "./mixins";
import { getRandomInt } from "./utility";

const getRandomNumber = () => {
  let randomNumber = "";

  // the integer part of number

  randomNumber += getRandomInt(1, 10);
  for (let i = 0; i < getRandomInt(1, 4); i++)
    randomNumber += getRandomInt(0, 10);

  // the fractional part of number
  randomNumber += ".";
  for (let i = 0; i < getRandomInt(5, 7); i++)
    randomNumber += getRandomInt(0, 10);

  return Number.parseFloat(randomNumber);
};

const ranks = ["десятых", "сотых", "тысячных", "десятитысячных"];

export default {
  name: "Rounding",
  mixins: [InteractiveModule],
  created() {
    this.generateNewTask();
  },
  data() {
    return {
      name: "Округление",
      description: "Простой тренажёр на отработку навыка округления",
      task: {
        rank: 0,
        number: 10.4214
      },
      answer: "",
      isCorrect: null
    };
  },
  computed: {
    getRank: ({ task }) => {
      return ranks[task.rank];
    }
  },
  methods: {
    checkAnswer() {
      let answer = Number.parseFloat(this.answer);
      let rightAnswer = Number.parseFloat(
        this.task.number.toFixed(this.task.rank + 1)
      );
      this.isCorrect = answer === rightAnswer;
    },
    resetAnswer() {
      this.answer = "";
      this.isCorrect = null;
    },
    generateNewTask() {
      this.task.rank = getRandomInt(0, 4);
      this.task.number = getRandomNumber();
      this.resetAnswer();
    }
  }
};
</script>

<style scoped>
.applet__wrapper {
  padding: 0 15px 15px 15px;
  border-radius: 5px;
  background-color: whitesmoke;
  position: relative;
  box-shadow: 0 2px 4px darkgrey;
}
.applet__icon,
.applet__content {
  display: inline-block;
  vertical-align: top;
}
h3 {
  margin-top: 15px;
}
.applet__icon {
  position: absolute;
  right: 25px;
  bottom: 15px;
}
.applet__btn {
  display: block;
  padding: 10px;
  background-color: black;
  color: white;
  border-radius: 5px;
  margin-top: 20px;
}
.applet__input {
  display: block;
  background-color: white;
  border: 2px solid grey;
  border-radius: 5px;
  padding: 3px;
  min-width: 240px;
}

.applet__error,
.applet__success {
  font-weight: bold;
  margin-top: 10px;
}
.applet__error {
  color: darkred !important;
}
.applet__success {
  color: forestgreen !important;
}
</style>
