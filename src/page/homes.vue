<template>
	<div class="homes">
		<div @click="back" class="back">返回</div>
		<img :src="$route.params.kc[$route.params.index].img"/>
		<div class="text1">
			<h3>{{$route.params.kc[$route.params.index].name}}</h3>
			<p>{{$route.params.kc[$route.params.index].text}}</p>
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