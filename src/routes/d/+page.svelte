<script lang="ts">
	import { getBucketFiles } from "$lib/files";

	const files = getBucketFiles("bucket4");
	const paths = Object.keys(files ?? {});
</script>

<section>
	<h1>Route /d</h1>
	<p>{paths.length} files</p>
</section>
