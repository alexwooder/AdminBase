<template>
	<div class="mall-index-list-main">
		<div class="mall-index-list-header">
			XXX玩具
		</div>

		<transition-group class="mall-index-list-img-roll" name="flip-list" tag='ul'>
			 <li v-for="(item,index) in imgList" v-bind:key="item.id" :style="getStyle(item,index)">
				<img :src=item.url :alt=item.desc style="width: 100%;height: 100%;"/>
			 </li>
			 <div key="toolbar">
				<ul class="mall-index-list-img-roll-btn">
					<li v-for="(item,index) in imgList" @click="onImgRollBtnClick(item,index)"></li>
				</ul>
			 </div>
		</transition-group>
		
		
		<div class="mall-index-list-goods-container">
			<article v-for="item in goodsList" class="mall-index-list-goods-detail-container">
				
					<img class="mall-index-list-goods-detail-img" :src="item.imgUrl" />
					<div class="mall-index-list-goods-detail-desc">{{item.desc}}</div>
					<div class="mall-index-list-goods-detail-price">￥{{item.price}}</div>
				
			</article>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				imgList:[
					{
						url:require("@/resources/imgs/img1.jpg"),
						desc:"金龙鱼",
						link:"",
						left:"0",
						id:'1'
					},
					{
						url:require("@/resources/imgs/img2.jpg"),
						desc:"老虎",
						link:"",
						left:"1",
						id:'2'
					},
					{
						url:require("@/resources/imgs/img3.jpg"),
						desc:"风景",
						link:"",
						left:"2",
						id:'3'
					},
					{
						url:require("@/resources/imgs/img4.jpg"),
						desc:"麦当劳",
						link:"",
						left:"3",
						id:'4'
					},
					{
						url:"",
						desc:"空",
						link:"",
						left:"4",
						id:'5'
					},
				],
				goodsList:[
					{
						imgUrl:require("@/resources/imgs/img3.jpg"),
						price:"65",
						desc:"测试测试测试测试测试测试测试测试测试测试测试测试测试测试"
					},
					{
						imgUrl:require("@/resources/imgs/img1.jpg"),
						price:"23",
						desc:"测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试"
					},{
						imgUrl:"",
						price:"546",
						desc:""
					},{
						imgUrl:require("@/resources/imgs/img2.jpg"),
						price:"23463",
						desc:""
					},{
						imgUrl:require("@/resources/imgs/img4.jpg"),
						price:"22342",
						desc:""
					},{
						imgUrl:require("@/resources/imgs/1.jpg"),
						price:"2134",
						desc:""
					},{
						imgUrl:require("@/resources/imgs/img3.jpg"),
						price:"13",
						desc:""
					},
				]
			}
		},
		mounted(){
			let i = 0;
			let len = this.imgList.length;
			let tempFunc = this.onImgRollBtnClick;
			setInterval(function(){
				if(i > len-1){
					i = 0;
				}
				tempFunc({},i);
				//console.log(i);
				i++;
			},2000);
		},
		methods:{
		 getStyle(item, index) {
				// 根据item或者index算出你要position的值
				let leftVal = 100 * item.left;
				return `left: ${leftVal}%;`;
			},
			onImgRollBtnClick(item, index){
				let len = this.imgList.length;
				for(let i = 0; i< len;i++){
					let leftVal = this.imgList[i]["left"];
					this.imgList[i]["left"] = i - index;
				}
			}
		}
	}
</script>

<style>
	.flip-list-move {
	  transition: transform 1s;
	}
</style>
