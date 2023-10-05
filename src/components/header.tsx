import React from "react"
import { Link } from "gatsby"
import {
	navLinks,
	navLinkItem,
	navLinkText,
	container,
	logo
} from './header.module.css'
import sentryLogo from '../images/sentry-logo.svg'
import Button from "./button";

const Header = () => {
	return (
		<header>
			<div className={container}>
				<div className={logo}>
					<Link to="/">
						<img src={sentryLogo} alt="Logo" />
					</Link>
				</div>
				<nav>
					<ul className={navLinks}>
						<li className={navLinkItem}>
							<Button>Product</Button>
						</li>
						<li className={navLinkItem}>
							<Button>Pricing</Button>
						</li>
						<li className={navLinkItem}>
							<Button>Docs</Button>
						</li>
						<li className={navLinkItem}>
							<Button>Resources</Button>
						</li>
						<li className={navLinkItem}>
							<Button>Blog</Button>
						</li>
						<li className={navLinkItem}>
							<Button>Sign In</Button>
						</li>
						<li className={navLinkItem}>
							<Button primary>Get Started</Button>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
