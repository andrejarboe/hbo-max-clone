import Account from "../Account/Account";

const Header = (props) => {
    return (
        <header className="top-header">
            <div className="top-header__left-side">
                <div className="top-header__menu-btn">
                    <i className="fas fa-bars" />
                </div>
                <div className="top-header__search-btn">
                    <i className="fas fa-search" />
                </div>
            </div>
            <div className="top-header__logo"></div>
            <div className="top-header__account">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=046c29138c1335ef8edee7daf521ba50" className="top-header__user-img" alt="" />
                <div className="top-header__user-name">Stephanie</div>
            </div>
            <Account />
        </header>
    )
}

export default Header;