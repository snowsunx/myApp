<template>
  <div id="app">
  	<Top></Top>
    <transition :name='animate'><router-view class='content'></router-view></transition>
    <Bottom></Bottom>
  </div>
</template>

<script>
	import Top from "./components/Top" 
	import Bottom from "./components/Bottom" 
export default {
  components:{Top,Bottom}
  /*data(){
  	return{
  		animate:'animate'
  	} 	
  },
  watch{
  	if(this.$route == ){
  		
  	}
  }*/
}
</script>

<style>
	.content{
		position: absolute;
		top: 90px;
		bottom: 30px;
		transition: .3s;
		width: 100%;
	}
	.animate-enter{
		transform: translate(100%,0);
		opacity: 0;
	}
	.animate-leave-active{
		transform: translate(-100%,0);
		opacity: 0;
	}
	.animate1-enter{
		transform: translate(-100%,0);
		opacity: 0;
	}
	.animate1-leave-active{
		transform: translate(100%,0);
		opacity: 0;
	}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body,ul,h2,h3,p{
	margin: 0;
	padding: 0;
}
li{
	list-style: none;
}
</style>
