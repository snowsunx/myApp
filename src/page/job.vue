<template>
	<div class="work">
		<img src="../assets/work/work.png" width="100%"/>
		<ul class="work_ul">
			<router-link v-for="(item,index) in work" :to="{name:'Jobs',params:{work,index}}">
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
	export default {
	  data(){
	  	return{
	  		work:[
	  			{title:'刘*龙/卓键科技',logo:require('../assets/work/work_01.png'),text:'杭州卓健信息科技有限公司（www.ucmed.cn）成立于2011年2月,专注...'},
	  			{title:'贺*勇/卓键科技',logo:require('../assets/work/work_02.png'),text:'杭州卓健信息科技有限公司（www.ucmed.cn）成立于2011年2月，专注...'},
	  			{title:'范*鑫/顺联动力杭州分公司',logo:require('../assets/work/work_03.png'),text:'浙江顺联网络科技有限公司创始于2004年，是浙江商务厅认定的电子商务服务企业...'},
	  			{title:'覃*清/杭州捷翔汽车用品有限',logo:require('../assets/work/work_04.png'),text:'专业培养企业需求量大、就业率高的基于Weblogic和开源的Tomcat/JBoss中间...'},
	  		]

	  	}
	  }
	}
</script>

<style>
	
</style>