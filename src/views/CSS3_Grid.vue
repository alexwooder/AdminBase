<template>
	<div class="css3-text-main">
		<div class="css3-text-row">
			<article>
				<h1>定义栅格</h1>
				<div class="css3-grid1">
					<img src="../resources/imgs/1.jpg" alt="">
					<img src="../resources/imgs/1.jpg" alt="">
					<img src="../resources/imgs/1.jpg" alt="">
					<img src="../resources/imgs/1.jpg" alt="">
				
				</div>
			</article>
			<article id="text-line">
				<h1>文本线条</h1>
				
			</article>
		</div>
		<div class="css3-text-row">
			<article>
				<h1>清除浮动对元素的影响</h1>
				
			</article>
			<article id="text-line">
				<h1>文本线条</h1>
				
			</article>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.css3-grid1{
		height: 100%;
		width: 100%;
		display: grid;
		grid-template-rows: 50% 50%;
		grid-template-columns: 20% 20% 20% 20% 20%;
	}
	.css3-grid1>img{
		width: 10px;
		height: 10px;
	}
</style>
