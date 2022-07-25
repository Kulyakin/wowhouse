import Search from './Search'

const Header = () => {
    return (
        <div className="header">
            <div className="header__top">
                <img
                    className="logo"
                    src={require('../assets/logo.png')}
                    alt=""
                />
                <Search />
            </div>
        </div>
    )
}

export default Header
