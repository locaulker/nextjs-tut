import React from "react"
import Link from "next/link"

const Index = () => {
	console.log("********Running Index Component**************")
	return (
		<div>
			<Link href="/about">
				<a>About Page</a>
			</Link>
			<h1>Our Index Page !!!</h1>
		</div>
	)
}

export default Index
