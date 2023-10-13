import * as React from 'react'
import Layout from '../components/layout';
import Seo from "../components/seo";

const DrumsPage : React.FC = () => (
	<Layout pageTitle="Drumming">
		<main>
			<h5>Jay Weinberg</h5>
			<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Xycn3j12T24?si=a_aCFFE7jITBGIZJ"
							title="YouTube video player" frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen></iframe>
		</main>
	</Layout>
)

// export const Head : React.FC = () => <Seo title="Drumming"/>


export default DrumsPage
