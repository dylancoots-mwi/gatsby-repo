import * as React from 'react'
import Layout from '../components/layout'
import {StaticImage} from "gatsby-plugin-image";
import Seo from "../components/seo";

const AboutPage : React.FC = () => {
	return (
		<Layout pageTitle="About Me">
			<main>
				<p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
				<ul>
					<li>I am a 26 year old software engineer</li>
					<li>I enjoy lifting weights and running</li>
					<li>I am learning how to play the drums</li>
					<li>My latest obsession is the game Starfield</li>
					<li>I have a cat named Kitty</li>
				</ul>
				<StaticImage
					src="../images/me.webp"
					alt="picture of Dylan"
				/>
			</main>
		</Layout>
	)
}

export const Head : React.FC = () => <Seo title="About Me"/>

export default AboutPage
