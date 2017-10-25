<template>
	<div class="bottom">
		<ul class="bottom_ul">
			<li>
				<router-link :to="{path:'/Apply'}">
					<div class="bottom_nav">
						<img src="../assets/bottom/tab_iocn_62.png"/>
					</div>
					<p>申请试听</p>
				</router-link>				
			</li>
			<li @click="tel">
				<div class="bottom_nav">
					<img src="../assets/bottom/tab_iocn_64.png"/>
				</div>
				<p>电话咨询</p>
			</li>
			<li>
				<div class="bottom_nav">
					<img src="../assets/bottom/tab_iocn_66.png"/>
				</div>
				<p>在线咨询</p>
			</li>
		</ul>
	</div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			tel(){
				MessageBox({
					title:'',
					message:'0123-12345678',
					confirmButtonText:'立即拨号',
				}).then(action => {
				  	window.location.href='tel//18702747667'
				});
			}
		}
	}
</script>

<style>
	/*.mint-msgbox{
		width: 301px;
		height: 216px;
		border-radius: 8px;
	}
	.mint-msgbox-message{
		font-size: 32px;
		color: #333333;
		padding-top: 50px;
	}
	.mint-msgbox-content{
		border-bottom: none;
	}
	.mint-msgbox-btns{
		width: 226px;
		height: 50px;
		line-height: 50px;
		background-color: #C11920;
		margin: 28px auto;
		
	}
	.mint-msgbox-confirm{
		font-size: 16px;
		color: #FFFFFF;
	}
	.mint-msgbox-btn{
		background-color: #C11920;
		border-radius: 8px;
	}*/
</style>