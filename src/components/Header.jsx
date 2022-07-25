import Search from './Search'

const Header = () => {
    return (
        <div className="header">
            <div className="header__top">
                <img
                    className="logo"
                    src="http://pakhmutov.ru/img/logo.png"
                    alt=""
                />
                <Search />
            </div>
        </div>
    )
}

export default Header
