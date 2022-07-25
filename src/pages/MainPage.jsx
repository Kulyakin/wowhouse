import BookList from '../components/BookList'
import Header from '../components/Header'
import NavBar from '../components/NavBar'

const MainPage = () => {
    return (
        <>
            <Header />
            <div className="sticky">
                <NavBar />
                <div className="devider"></div>
            </div>
            <BookList />
        </>
    )
}

export default MainPage
