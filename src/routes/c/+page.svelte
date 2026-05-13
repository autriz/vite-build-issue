<script lang="ts">
	const files = import.meta.glob('$data/files/**/*', {
		eager: true,
		query: '?url',
		import: 'default'
	}) as Record<string, string>;

	const paths = Object.keys(files);
</script>

<section>
	<h1>Route /c</h1>
	<p>{paths.length} files</p>
</section>
