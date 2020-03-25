<template>
	<div>
		<div style="height: 20vh">
		</div>
		<div class="row">
			<div class="col col-md-6 offset-md-3">
				<div class="w-100">
					<ul class="list-group">
						<li class="list-group-item">
							<h4 class="text-center">Whatcha doin?</h4>
						</li>
						<li class="list-group-item">
							<router-link to="/maths">
								Maths
							</router-link>
			            </li>
	        		</ul>        
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Home',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
