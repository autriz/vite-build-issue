<script lang="ts">
	import { getBucketFiles } from "$lib/files";

	const files = getBucketFiles("bucket2");
	const paths = Object.keys(files ?? {});
</script>

<section>
	<h1>Route /b</h1>
	<p>{paths.length} files</p>
</section>
