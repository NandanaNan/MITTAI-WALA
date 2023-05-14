import SidebarItem from "./sidebar-item";
const items = ["Items List", "Sweets", "Categories", "Contact us"]
const Sidebar = () => {
    return (
        <div className="sidebar">
            {
                items.map((item, i) => {
                    return (<SidebarItem label={item} isHome={i === 0}/>)
                })
            }
        </div>
    )
}

export default Sidebar;