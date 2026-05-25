<script lang="ts">
	import { getBucketFiles } from "$lib/files";

	const files = getBucketFiles("bucket3");
	const paths = Object.keys(files ?? {});
</script>

<section>
	<h1>Route /c</h1>
	<p>{paths.length} files</p>
</section>
