<template>
	<div id="warp">
		<mt-swipe :auto="4000">
		  <mt-swipe-item><img src="../assets/home/banner1.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="../assets/home/banner2.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="../assets/home/banner3.jpg"/></mt-swipe-item>
		</mt-swipe>
		<div id="icons">
			<ul>
				<router-link v-for="(n,index) in kc" :to="{name:'Homes',params:{kc,index}}">
					<li>
						<div class="icon"><img :src="n.img"/></div>
						<p>{{n.name}}</p>
					</li>
				</router-link>
			</ul>
			<ul>
				<li v-for="(n,index) in kc1">
					<div class="icon"><img :src="n.img"/></div>
					<p>{{n.name}}</p>
				</li>
			</ul>
		</div>
		<div id="tab">
			<mt-navbar v-model="selected">
			  <mt-tab-item id="1">{{newTitle}}</mt-tab-item>
			  <mt-tab-item id="2">{{newTitle2}}</mt-tab-item>
			</mt-navbar>
			<!-- tab-container -->
			<mt-tab-container v-model="selected">
			  <mt-tab-container-item id="1">
			    <mt-cell v-for="n in news" :title="n.text"></mt-cell>
			    <div class="more"><a href="#">[&nbsp;更&nbsp;多&nbsp;]</a></div>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="2">
			    <mt-cell v-for="n in news2" :title="n.text"></mt-cell>
			    <div class="more"><a href="#">[&nbsp;更&nbsp;多&nbsp;]</a></div>
			  </mt-tab-container-item>
			</mt-tab-container>
		</div>
		<div class="line"></div>
		<div class="guild">
			<div class="guild_left">
				<ul>
					<li>
						<img src="../assets/home/btn_46.png"/>
					</li>
					<li>
						<img src="../assets/home/btn_48.png"/>
					</li>
				</ul>
				<ul>
					<li>
						<img src="../assets/home/btn_54.png"/>
					</li>
					<li>
						<img src="../assets/home/btn_55.png"/>
					</li>
				</ul>
			</div>
			<div class="guild_right">
				<img src="../assets/home/info_50.png"/>
			</div>
		</div>
		<div class="copyright">
			<p>版权所有：沪江网校有限公司 浙ICP备11049466号</p>
		</div>
		<div style="height: 50px;"></div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				kc:[
					{name:'PHP开发工程师',text:'专业培养企业需求量大、就业率高的基于Weblogic和开源的Tomcat/JBoss中间...',img:require('../assets/home/icon_01.png')},
					{name:'JavaEE',text:'零基础、欲从事视觉设计师、移动端UI设计师、Web/UI设计师、电商视觉设计师、电...',img:require('../assets/home/icon_02.png')},
					{name:'UI设计师',text:'专业培养企业需求量大、就业率高的基于Weblogic和开源的Tomcat/JBoss中间...',img:require('../assets/home/icon_03.png')},
					{name:'H5全栈开发师',text:'学习HTML5、CSS3、JavaScript、JQuery、Ajax等这些核心的WEB前端技术，具备...',img:require('../assets/home/icon_04.png')},
					
				],
				kc1:[
					{name:'云计算Linux',img:require('../assets/home/icon_05.png')},
					{name:'大数据',img:require('../assets/home/icon_06.png')},
					{name:'4G开发工程师',img:require('../assets/home/icon_06.png')},
					{name:'UE交互设计师',img:require('../assets/home/icon_07.png')},
				],
				
				selected:'1',
				newTitle:'新闻动态',
				news:[
					{text:'来自java学员的一封信'},
					{text:'来自java学员的一封信'},
					{text:'来自java学员的一封信'},
				],
				newTitle2:'行业新闻',
				news2:[
					{text:'武汉软件工程职业学院'},
					{text:'武汉软件工程职业学院'},
					{text:'武汉软件工程职业学院'},
				],
			}
		}
	}
</script>

<style>
	
</style>