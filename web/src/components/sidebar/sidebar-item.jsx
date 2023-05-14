import {Link} from "react-router-dom"
const SidebarItem = (props) => {

    return (
        <Link to={props.isHome ? "home" : "login"}>
                <div className="sidebar_item" id="sidebar_item_1">{props.label}</div>

        </Link>
    )
}

export default SidebarItem;