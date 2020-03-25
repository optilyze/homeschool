<template>
  <div>
    <div style="height: 20vh"></div>
    <div class="row" v-if="quizType&&level">
      <div class="col col-md-6 offset-md-3">
        <h4 class="text-center">
          {{quizType.name}} Level {{level}}
        </h4>
        <h4 class="mt-5 text-center">
          <div >
            <div v-if="secondsLeft == 3">Ready...</div> 
            <div v-if="secondsLeft == 2">Spaghetti...</div> 
            <div v-if="secondsLeft == 1">Go!</div>
          </div>
        </h4>
      </div>
    </div>
    <div class="row" v-if="!quizType">
      <div class="col col-md-6 offset-md-3">
        <ul class="list-group">
          <li class="list-group-item">
            <h4 class="text-center">
              Select a Quiz Type
            </h4>
          </li>
          <li
            v-for="qt in quizTypes"
            :key="qt.code" 
            class="list-group-item h-lightgrey"
            @click="setQuizType(qt)"
          >
            {{qt.name}}
          </li>
        </ul>
      </div>
    </div>
    <div class="row" v-if="quizType&&!level">
      <div class="col col-md-6 offset-md-3">
        <ul class="list-group">
          <li class="list-group-item">
            <h4 class="text-center">
              {{ quizType.name }} Level
            </h4>
          </li>
          <li
            v-for="l in levels"
            :key="l" 
            class="list-group-item h-lightgrey"
            @click="setLevel(l)"
          >
            Level {{l}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

// import router from "vue-router";

export default {
  name: 'Maths',
  props: {
  },
  data: function() {
    return {
      quizType: false,
      quizTypes: [
        {
          name: "Addition",
          code: "+"
        },
        {
          name: "Subtraction",
          code: "-"
        },
        {
          name: "Multiplication",
          code: "*"
        },
        {
          name: "Division",
          code: "/"
        },
        {
          name: "Mixed",
          code: "+-*/"
        }
      ],
      level: false,
      secondsLeft: false,
    }
  },
  computed: {
    levels: function() {
      return _.times(10, n => n+1)
    }
  },
  methods: {
    setQuizType: function(to) {
      this.quizType = to;
    },
    setLevel: function(to) {
      this.level = to;
      this.prepareTimer();
    },
    prepareTimer: function() {
      this.secondsLeft = 3;
      var vm = this;
      setTimeout(() => vm.secondsLeft = 2, 1000);
      setTimeout(() => vm.secondsLeft = 1, 2000);
      setTimeout(() => {
        vm.$router.push({path: "maths-quiz", query: {quizType: vm.quizType.code, level: vm.level}});
      }, 3000);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
