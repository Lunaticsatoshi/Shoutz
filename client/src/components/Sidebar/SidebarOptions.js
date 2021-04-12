import './SidebarOptions.css'

function SidebarOptions({Icon, text, active}) {
    return (
        <div className={`sidebar__options ${active && "sidebar__options--active"}`}>
            <Icon />

            <h2> {text} </h2>
            
        </div>
    )
}

export default SidebarOptions
