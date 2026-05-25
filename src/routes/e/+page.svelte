<script lang="ts">
	import { getBucketFiles } from "$lib/files";

	const files = getBucketFiles("bucket5");
	const paths = Object.keys(files ?? {});
</script>

<section>
	<h1>Route /e</h1>
	<p>{paths.length} files</p>
</section>
