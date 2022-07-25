const Book = ({ title, cover }) => {
    return (
        <div className="book-wrap">
            <img className="book-img" src={require(`../assets/${cover}`)} alt="" />
            <h5 className="book-title">{title}</h5>
        </div>
    )
}

export default Book
