export const rawBucketFiles = import.meta.glob("$data/**/*", {
	eager: true,
	query: "?url",
	import: "default",
});

export const bucketFiles = Object.entries(rawBucketFiles).map(([key, data]) => {
	const newKey = key.replace("/src/data/", "");

	return [newKey, data];
}) as [key: string, data: unknown][];

export const { buckets } = bucketFiles.reduce(
	({ buckets }, [key, data]) => {
		const [bucketId] = key.split("/", 1);

		if (!buckets[bucketId]) {
			buckets[bucketId] = [data];
		} else {
			buckets[bucketId].push(data);
		}

		return { buckets };
	},
	{ buckets: {} as Record<string, unknown[]> },
);

export function getBucketFiles(id: string) {
	return id in buckets ? buckets[id] : undefined;
}
