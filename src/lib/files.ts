export const files = import.meta.glob("$data/files/**/*", {
	eager: true,
	query: "?url",
	import: "default",
}) as Record<string, string>;

export const paths = Object.keys(files);
