<template>
	<div class="jobs">
		<div @click="back" class="back">返回</div>
		<img :src="$route.params.work[$route.params.index].logo"/>
		<div class="text1">
			<h3>{{$route.params.work[$route.params.index].title}}</h3>
			<p>{{$route.params.work[$route.params.index].text}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style>
	
</style>