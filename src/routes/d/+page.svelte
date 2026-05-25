<script lang="ts">
	import { jpgAndPng } from "$lib/files";

	const paths = Object.keys(jpgAndPng ?? {});
</script>

<section>
	<h1>Route /d</h1>
	<p>{paths.length} pngs or jpegs</p>
</section>
