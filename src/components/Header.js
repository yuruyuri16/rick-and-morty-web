import React from "react"
import {Link} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"

const Header = () => (
    <header className="py-4 text-center">
        <Link to="/">
            <StaticImage src="../images/ram-logo.png" alt="Rick and Morty" height={80}/>
        </Link>
    </header>
)

export default Header