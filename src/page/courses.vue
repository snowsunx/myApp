<template>
	<div class="courses">
		<div @click="back" class="back">返回</div>
		<img :src="$route.params.course[$route.params.index].logo"/>
		<div class="text2">
			<h3>{{$route.params.course[$route.params.index].title}}</h3>
			<p>{{$route.params.course[$route.params.index].text}}</p>
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
				this.$route.go(-1)
			}
		}
	}
</script>

<style>
	
</style>