<template>
	<div>
    <div style="height: 20vh"></div>
    THEY ARE {{quizTypeCode}} and {{level}}
    <div class="row" v-if="quizTypeCode&&level">
      <div class="col col-md-6 offset-md-3">
        <h4 class="text-center">
          {{quizTypeCode}} Level {{level}}
        </h4>
      </div>
  	</div>
  </div>
</template>

<script>

export default {
	props: {
		quizTypeCode: String,
		level: Number,
	},
	data: function() {
		return {
		}
	},
  methods: {
  },
  created: function() {
    if (this.$route && this.$route.query) {
      this.level = this.$route.query.level;
      this.quizTypeCode = this.$route.query.quizTypeCode;
    }

  }
}

</script>

<style scoped>
	
</style>