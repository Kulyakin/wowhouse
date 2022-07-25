import Book from './Book'

const BookList = () => {
    const books = [
        {
            title: 'Отечественная бонистика',
            cover: '1.jpg'
        },
        {
            title: 'Позитивные изменения №2-2022',
            cover: '2.jpg'
        },
        {
            title: 'Вестник ЮНЕСКО №48',
            cover: '3.jpg'
        },
        {
            title: 'Аукцион №32 «Коллекционные монеты и медали»',
            cover: '4.jpg'
        },
        {
            title: 'Позитивные изменения №1-2022',
            cover: '5.jpg'
        },
        {
            title: 'Бумажные деньги России',
            cover: '6.jpg'
        },
        {
            title: 'Аукцион №31 «Коллекционные монеты и медали»',
            cover: '7.jpg'
        },
        {
            title: 'Воздушный таран',
            cover: '8.jpg'
        },
        {
            title: 'Почтовые марки Российской Федерации 1992-2021',
            cover: '9.jpg'
        },
        {
            title: 'Вестник ЮНЕСКО №47',
            cover: '10.jpg'
        },
        {
            title: 'Аукцион №30 «Коллекционные монеты и медали»',
            cover: '11.jpg'
        },
        {
            title: 'Позитивные изменения №1-2021',
            cover: '12.jpg'
        },
        {
            title: 'Отечественная бонистика',
            cover: '1.jpg'
        },
        {
            title: 'Отечественная бонистика',
            cover: '1.jpg'
        },
        {
            title: 'Отечественная бонистика',
            cover: '1.jpg'
        },
        {
            title: 'Отечественная бонистика',
            cover: '1.jpg'
        },
        {
            title: 'Отечественная бонистика',
            cover: '1.jpg'
        },
        {
            title: 'Отечественная бонистика',
            cover: '1.jpg'
        },
        {
            title: 'Отечественная бонистика',
            cover: '1.jpg'
        },
        {
            title: 'Отечественная бонистика',
            cover: '1.jpg'
        },
        {
            title: 'Отечественная бонистика',
            cover: '1.jpg'
        },
        {
            title: 'Отечественная бонистика',
            cover: '1.jpg'
        },
        {
            title: 'Отечественная бонистика',
            cover: '1.jpg'
        },
        {
            title: 'Отечественная бонистика',
            cover: '1.jpg'
        }
    ]

    return (
        <div className="list-wrapper">
            {books.map((book) => (
                <Book key={Math.random()} title={book.title} cover={book.cover} />
            ))}
        </div>
    )
}

export default BookList
