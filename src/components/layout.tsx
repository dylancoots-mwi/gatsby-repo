import * as React from 'react'
import {graphql, Link, useStaticQuery} from 'gatsby'
import {
	container,
	heading
} from './layout.module.css'
import Header from "./header";
import Footer from "./footer";
import PreFooter from "./footer/prefooter";
const Layout : React.FC<{ pageTitle: string, children: React.ReactNode }> = ({ pageTitle, children }) =>
	(
		<div className={container}>
			<Header/>
			<main>
				<h1 className={heading}>{pageTitle}</h1>
				{children}
			</main>
			<PreFooter/>
			<Footer/>
		</div>
	)

export default Layout
