<template>
  <div>
    <div style="height: 20vh"></div>
    <div class="row" v-if="quizType&&level">
      <div class="col col-md-6 offset-md-3">
        <h4 class="text-center">
          {{quizType.name}}
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
