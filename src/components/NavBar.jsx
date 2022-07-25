const NavBar = () => {
    return (
        <div className="nav-bar">
            <a
                className="navs"
                href="http://pakhmutov.ru/category.php?id_category=10"
            >
                АУКЦИОННЫЕ КАТАЛОГИ
            </a>
            <p className="separator">|</p>
            <a
                className="navs"
                href="http://pakhmutov.ru/category.php?id_category=9"
            >
                КОЛЛЕКЦИОНИРОВАНИЕ
            </a>
            <p className="separator">|</p>
            <a
                className="navs"
                href="http://pakhmutov.ru/category.php?id_category=13"
            >
                КОЛОBOOK
            </a>
            <p className="separator">|</p>
            <a
                className="navs"
                href="http://pakhmutov.ru/category.php?id_category=3"
            >
                РАЗНОЕ
            </a>
            <p className="separator">|</p>
            <a className="navs" href="http://pakhmutov.ru/manufacturer.php">
                АВТОРЫ
            </a>
            <p className="separator">|</p>
            <a className="navs" href="http://pakhmutov.ru/cms.php?id_cms=4">
                КОНТАКТЫ
            </a>
        </div>
    )
}

export default NavBar
