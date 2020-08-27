<template>
	<div class="css3-text-main">
		<div class="css3-text-row">
			
			<article>
				<h1>清除浮动对元素的影响</h1>
				<section>
					元素使用浮动后在文档流中就不会再占用空间，后续的元素会自动填回来，可以使用clear来消除浮动的影响
				</section>
				<div  class="float-fix-clear">
					<div >
						左浮动
					</div>
					<div >
						右浮动
					</div>
					<section class="fixclear">添加一个空元素，用于消除浮动的影响</section>
				</div>
				
				<div  class="float-fix-after">
					
					<div >
						左浮动
					</div>
					<div >
						右浮动
					</div>
					
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
			
		</div>
	
	</div>
</template>

<script>
</script>

<style scoped>
	.float-fix-clear{
		border: #6495ED 1px solid;
		padding: 5px;
		width: 50%;
	}
	
	.float-fix-clear div{
		width: 50px;
		height: 50px;
		border: #6495ED 1px solid;
	}
	
	
	.float-fix-clear div:nth-child(1){
		float: left;/*使用浮动后父元素的高度将变为0*/
	}
	
	
	.float-fix-clear div:nth-child(2){
		float: right;
	}
	
	.fixclear{
		clear: both;/*消除浮动*/
	}
	
	.float-fix-after{
		border: #6495ED 1px solid;
		padding: 5px;
		width: 50%;
	}
	
	.float-fix-after div{
		width: 50px;
		height: 50px;
		border: #6495ED 1px solid;
	}
	.float-fix-after::after{
		display: block;
		content: "";
		clear: both;
	}
	.float-fix-after div:nth-child(1){
		float: left;/*使用浮动后父元素的高度将变为0*/
	}
	
	
	.float-fix-after div:nth-child(2){
		float: right;
	}
	
	
</style>
