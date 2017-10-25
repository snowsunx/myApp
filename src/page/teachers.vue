<template>
	<div class="teacher">
		<img src="../assets/teachers/teacher.png" width="100%"/>
		<ul class="teacher_ul">
			<li v-for='item in teac'>
				<img :src="item.logo"/>
				<div class="text">
					<h3>{{item.title}}</h3>
					<p>{{item.text}}</p>
				</div>
			</li>
		</ul>
		<div style="height: 50px;"></div>
	</div>
</template><img src=""/>

<script>
	export default{
		data(){
			return{
				teac:[
					{title:'push老师/ JavaEE金牌讲师',logo:require('../assets/teachers/teacher_01.png'),text:'金牌讲师、系统架构师、技术专家。毕业于武汉工程大学，多年软件项目开发、教学培训经验。曾就职于唐黄科技，国内知名IT教育机构等。'},
					{title:'薛老师/ UI视觉设计金牌讲师',logo:require('../assets/teachers/teacher_02.jpg'),text:'精通移动端app、网站、电商、平面视觉设计领域，拥有丰富的实战经验，熟悉淘宝运营、前端开发、百度推广、seo领域知识、交互设计等领域；精通Photoshop、lllustrator、fireworks、axure等设计软件。'},
					{title:'李老师/ WEB资深讲师',logo:require('../assets/teachers/teacher_03.jpg'),text:'WEB/H5前端开发、Android、java 讲师五年开发经验，三年教学经验。'}
				]
			}
		}
	}
</script>

<style>
	
</style>