<script lang="ts" module>
	const files = import.meta.glob("$data/files/**/*", {
		eager: true,
		query: "?url",
		import: "default",
	}) as Record<string, string>;
</script>

<script lang="ts">
	const paths = Object.keys(files);
</script>

<section>
	<h1>Route /e</h1>
	<p>{paths.length} files</p>
</section>
