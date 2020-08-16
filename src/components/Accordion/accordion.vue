<template>
	<p>
	  <span>{{ folder.name }}</span>
	  <tree-folder-contents :children="folder.children"/>
	</p>
</template>

<script>
	import Node from "./node";
</script>

<style>
</style>
