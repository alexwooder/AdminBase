<template>
	<div class="css3-text-main">
		<div class="css3-text-row">
			
			<article id="up-low-text">
				<h1>控制大小写</h1>
				<div id="div1">
					小号大写：article，transform text
				</div>
				<div  id="div2">
					大号大写：article，transform text
				</div>
				<div  id="div3">
					首字母大写：article，transform text
				</div>
				<div  id="div4">
					小写：ARTICLE
				</div>
			</article>
			<article id="text-line">
				<h1>文本线条</h1>
				<h2>文本线条下划线</h2>
				<h2>文本线条删除线</h2>
				<h2>文本线条上划线</h2>
				<u>u标签去掉默认下划线</u>
				<a href="#">a标签去掉默认下划线</a>
			</article>
			<article id="text-shadow">
				<h1>文本阴影</h1>
					同时设置字母间距（letter-spacing）和单词间距（word-spacing）
					<div>Text-Shadow word spacing 文本阴影</div>
					<div>Text-Shadow 文本阴影</div>
				
			</article>
			<article id="text-overflow">
				<h1>text-overflow文本溢出</h1>
				<div>
					例如使列表中的第一项或者最后一项显示不同的样式、列表中的奇数或者偶数项显示不同的背景色等等。我们可以通过CSS来实现这样的效果，
					CSS给我们提供了几个样式参数：first-child、last-child、nth-child(n)。下面介绍它们的使用方法
				</div>
				<h1>text-indent 文本缩进</h1>
				<div>
					例如使列表中的第一项或者最后一项显示不同的样式、列表中的奇数或者偶数项显示不同的背景色等等。我们可以通过CSS来实现这样的效果，
					CSS给我们提供了几个样式参数：first-child、last-child、nth-child(n)。下面介绍它们的使用方法
				</div>
			</article>
		</div>
		<div class="css3-text-row">
			
			
			<article>
				<h1>盒子模型、边框、圆角、轮廓线</h1>
				<div>
					<div style="width: 200px;height: 200px; border: #6495ED 5px groove;text-align: center;">
						<span style="border-bottom: #F00 5px solid; border-radius: 50%; padding-bottom: 15px;margin: 0 auto;">文本笑脸修饰</span>
					</div>
					
					<div style="width: 200px;height: 200px;text-align: center;outline: #6495ED solid 5px;">
						轮廓线是不占用空间的
					</div>
					
				</div>
				
			</article>
			<article id="text-shadow">
				<h1>使用::after和::before伪类</h1>
				<section data-title="用户名称" class="form-input">
					<input  />
				</section>
				<div class="eyes"></div>
			</article>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	article#up-low-text div:nth-of-type(1){/*div:nth-of-type:选择父容器下的第一个div元素*/
		font-variant:all-small-caps;
	}
	article#up-low-text div:nth-child(3){/*选择父容器下的第2个元素，并且元素类型为div，本例表示：id="div2"的div元素，因为父容器下的第一个元素是H1*/
		text-transform:uppercase;
	}
	
	article#up-low-text div:nth-child(4){
		text-transform:capitalize;
	}
	
	article#up-low-text div:nth-child(5){
		text-transform:lowercase;
	}
	
	#text-line :nth-child(2){
		text-decoration: underline;
	}
	#text-line :nth-child(3){
		text-decoration: line-through;
	}
	
	#text-line :nth-child(4){
		text-decoration: overline;
	}
	#text-line>u{
		text-decoration: none;
	}
	#text-line>a{
		text-decoration: none;
	}
	
	#text-shadow :nth-child(2){
		text-shadow: #ccc 5px 5px 3px;/*阴影颜色 水平偏移 垂直偏移 扩散*/
		word-spacing: 12px;/*单词间距*/
	}
	#text-shadow :nth-child(3){
		letter-spacing: 10px;/*字母间距*/
		text-shadow: rgba(255,100,100,0.8) 5px 5px 3px;/*阴影颜色 水平偏移 垂直偏移 扩散*/
	}
	
	#text-overflow :nth-child(2){
		width: 450px;
		text-shadow: #ccc 5px 5px 3px;/*阴影颜色 水平偏移 垂直偏移 扩散*/
		white-space: nowrap;/*强制文本溢出的时候不换行*/
		overflow: hidden;
		text-overflow:ellipsis;/*文本溢出的时候显示省略号*/
	}
	
	#text-overflow :nth-child(4){
		width: 450px;
		font-size: 15px;
		text-indent: 2em;/*参考当前元素的字体大小设置缩进 1em 表示一个字的宽度*/
		line-height: 2em;/*参考当前元素的字体大小设置行高 1em 表示一个字的宽度*/
	}
	.eyes{
		border: 5px solid antiquewhite;
		height: 60px;
		width: 180px;
		border-radius: 50%;
	}
	.eyes::before{
		content: "";
		display: block;
		background-color: #555555;
		height: 50px;
		width: 50px;
		border-radius: 50%;
		position: relative;
		left: 62px;
	}
	
	.eyes::after{
		content: "";
		display: block;
		background-color: #fff;
		height: 20px;
		width: 20px;
		border-radius: 50%;
		position: relative;
		left: 67px;
		top: -25px;
		}
		.form-input{
			display: relative;
			width: 400px;
		}
		.form-input input{
			outline: none;
			border: none;
		}
		
		.form-input::after{
			content: "";
			display: block;
			width: 100%;
			height: 1px;
			background-color: #CCCCCC;
		}
		
		.form-input::before{
			content: attr(data-title)+":";
		}
</style>
