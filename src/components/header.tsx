import React from "react"
import Link from './link'
import {
	navLinks,
	navLinkItem,
	navLinkText,
	container,
	logo
} from './header.module.css'
import sentryLogo from '../images/sentry-logo.svg'
import Button, {PrimaryButton} from "./button";

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
							<Button silent>Product</Button>
						</li>
						<li className={navLinkItem}>
							<Button silent>Pricing</Button>
						</li>
						<li className={navLinkItem}>
							<Button silent>Docs</Button>
						</li>
						<li className={navLinkItem}>
							<Link to="/resources">
								<Button silent>Resources</Button>
							</Link>
						</li>
						<li className={navLinkItem}>
							<Link to="/blog">
								<Button silent>Blog</Button>
							</Link>
						</li>
						<li className={navLinkItem}>
							<Button silent>Sign In</Button>
						</li>
						<li className={navLinkItem}>
							<PrimaryButton>Get Started</PrimaryButton>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
