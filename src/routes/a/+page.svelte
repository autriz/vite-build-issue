<script lang="ts">
	import { getBucketFiles } from "$lib/files";

	const files = getBucketFiles("bucket1");
	const paths = Object.keys(files ?? {});
</script>

<section>
	<h1>Route /a</h1>
	<p>{paths.length} files</p>
</section>
