import "./header.css"

const Header = () => {
    return (
        <div className="custom_header">
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand">MITTAI WALA</a>
                <div className="collapse navbar-collapse pr-md-5 justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link admin_circle"><img src="https://thumbs.dreamstime.com/b/indian-sweets-13868613.jpg" /> Admin</a>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Header