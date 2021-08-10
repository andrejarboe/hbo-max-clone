const SideNav = (props) => {
    return (
        <div className="side-nav">
            <div className="side-nav__close-btn">
                <i className="fas fa-times" />
                <ul className="side-nav__main">
                    <li>
                        <a href="/" className="active">Home</a>
                    </li>
                    <li>
                        <a href="/">Movies</a>
                    </li>
                    <li>
                        <a href="/">Series</a>
                    </li>
                    <li>
                        <a href="/">Originals</a>
                    </li>
                    <li>
                        <a href="/">Just Added</a>
                    </li>
                    <li>
                        <a href="/">Coming Soon</a>
                    </li>
                    <li>
                        <a href="/">Trending NOw</a>
                    </li>
                </ul>
                <div className="side-nav__divider">
                    <ul className="side-nav__main">
                        <li>
                            <a href="/">Action</a>
                        </li>
                        <li>
                            <a href="/">Classic</a>
                        </li>
                        <li>
                            <a href="/">Comedy</a>
                        </li>
                        <li>
                            <a href="/">Crime</a>
                        </li>
                        <li>
                            <a href="/">Documentaries</a>
                        </li>
                        <li>
                            <a href="/">Dramas</a>
                        </li>
                        <li>
                            <a href="/">Fantasy / Sci-fi</a>
                        </li>
                        <li>
                            <a href="/">Featured Movies</a>
                        </li>
                        <li>
                            <a href="/">Holiday</a>
                        </li>
                        <li>
                            <a href="/">Horror</a>
                        </li>
                        <li>
                            <a href="/">International</a>
                        </li>
                        <li>
                            <a href="/">Kids and Family</a>
                        </li>
                        <li>
                            <a href="/">Music</a>
                        </li>
                        <li>
                            <a href="/">Latino</a>
                        </li>
                        <li>
                            <a href="/">Originals</a>
                        </li>
                        <li>
                            <a href="/">Romance</a>
                        </li>
                        <li>
                            <a href="/">Sports</a>
                        </li>
                        <li>
                            <a href="/">Suspense</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideNav;