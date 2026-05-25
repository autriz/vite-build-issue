<script lang="ts">
	import { gifAndWebm } from "$lib/files";

	const paths = Object.keys(gifAndWebm ?? {});
</script>

<section>
	<h1>Route /c</h1>
	<p>{paths.length} gifs or webms</p>
</section>
