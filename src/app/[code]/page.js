import { redirect } from "next/navigation";

export default function Page({ params }) {
	const { code } = params;


	// temporary stub
	redirect("https://espn.com");
}