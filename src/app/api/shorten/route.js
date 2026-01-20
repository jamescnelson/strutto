export async function POST(req) {
	const body = await req.json();

	return new Response(
		JSON.stringify({
			short: "abc123",
			original: body.url
		}),
		{ status: 200}
	);
}