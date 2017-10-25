<template>
	<div class="course">
		<img src="../assets/course/course.png" width="100%"/>
		<ul class="course_ul">
			<router-link  v-for="(item,index) in course" :to="{name:'Courses',params:{course,index}}">
				<li>
					<img :src="item.logo"/>
					<div class="text">
						<h3>{{item.title}}</h3>
						<p>{{item.text}}</p>
					</div>
				</li>
			</router-link>
			
		</ul>
		<div style="height: 50px;"></div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				course:[
					{title:'Oracle JavaEE+云计算',logo:require('../assets/course/course_01.png'),text:'专业培养企业需求量大、就业率高的基于Weblogic和开源的Tomcat/JBoss中间...'},
					{title:'UI视觉设计师',logo:require('../assets/course/course_02.png'),text:'零基础、欲从事视觉设计师、移动端UI设计师、Web/UI设计师、电商视觉设计师、电...'},
					{title:'WEB/H5前端开发工程师',logo:require('../assets/course/course_03.png'),text:'学习HTML5、CSS3、JavaScript、JQuery、Ajax等这些核心的WEB前端技术，具备...'},
					{title:'4G程序工程师',logo:require('../assets/course/course_01.png'),text:'专业培养企业需求量大、就业率高的基于Weblogic和开源的Tomcat/JBoss中间...'},
					
				]
			}
		}
	}
</script>

<style>
	
</style>