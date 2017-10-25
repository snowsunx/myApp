<template>
	<div class="apply">
		<mt-field label="" placeholder="姓名" v-model="username"></mt-field>
		<mt-field label="" placeholder="手机" type="tel" v-model="phone"></mt-field>
		<mt-field label="" placeholder="QQ" type="number" v-model="QQ"></mt-field>
		<mt-radio title="请选择试听课程" v-model="value" :options="['Oracle JavaEE+云计算', 'UI视觉设计师', 'WEB/H5前端开发工程师']">
		</mt-radio>
		<mt-button type="danger" @click='Sub'>申 请 试 听</mt-button>
	</div>

</template>

<script>
	import { Field } from 'mint-ui';
	import { Radio } from 'mint-ui';
	import { MessageBox } from 'mint-ui';
	export default {
		data() {
			return {
				username: '',
				phone: '',
				QQ: '',
				value: '',
				arry: [],
			}
		},
		methods: {
			Sub() {
				if(this.username && this.phone && this.QQ && this.value) {
					this.arry.unshift({
						username: this.username,
						phone: this.phone,
						QQ: this.QQ,
						value: this.value
					})
					MessageBox.alert('课程申请成功').then(action => {
						this.$router.push('/home')
					});
				}else{
					MessageBox.alert('请输入正确信息')
				}
			}
		}
	}
</script>

<style>
	

</style>