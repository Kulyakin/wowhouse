import Book from './Book'

const BookList = () => {
    const books = [
        {
            title: 'Отечественная бонистика',
            cover: 'http://pakhmutov.ru/img/p/248-550-large.jpg'
        },
        {
            title: 'Позитивные изменения №2-2022',
            cover: 'http://pakhmutov.ru/img/p/243-540-large.jpg'
        },
        {
            title: 'Вестник ЮНЕСКО №48',
            cover: 'http://pakhmutov.ru/img/p/245-544-large.jpg'
        },
        {
            title: 'Аукцион №32 «Коллекционные монеты и медали»',
            cover: 'http://pakhmutov.ru/img/p/250-554-large.jpg'
        },
        {
            title: 'Позитивные изменения №1-2022',
            cover: 'http://pakhmutov.ru/img/p/242-538-large.jpg'
        },
        {
            title: 'Бумажные деньги России',
            cover: 'http://pakhmutov.ru/img/p/247-548-large.jpg'
        },
        {
            title: 'Аукцион №31 «Коллекционные монеты и медали»',
            cover: 'http://pakhmutov.ru/img/p/249-552-large.jpg'
        },
        {
            title: 'Воздушный таран',
            cover: 'http://pakhmutov.ru/img/p/246-546-large.jpg'
        },
        {
            title: 'Почтовые марки Российской Федерации 1992-2021',
            cover: 'http://pakhmutov.ru/img/p/241-536-large.jpg'
        },
        {
            title: 'Вестник ЮНЕСКО №47',
            cover: 'http://pakhmutov.ru/img/p/239-533-large.jpg'
        },
        {
            title: 'Аукцион №30 «Коллекционные монеты и медали»',
            cover: 'http://pakhmutov.ru/img/p/240-532-large.jpg'
        },
        {
            title: 'Позитивные изменения №1-2021',
            cover: 'http://pakhmutov.ru/img/p/238-529-large.jpg'
        },
        {
            title: 'Отечественная бонистика',
            cover: 'http://pakhmutov.ru/img/p/248-550-large.jpg'
        },
        {
            title: 'Отечественная бонистика',
            cover: 'http://pakhmutov.ru/img/p/248-550-large.jpg'
        },
        {
            title: 'Отечественная бонистика',
            cover: 'http://pakhmutov.ru/img/p/248-550-large.jpg'
        },
        {
            title: 'Отечественная бонистика',
            cover: 'http://pakhmutov.ru/img/p/248-550-large.jpg'
        },
        {
            title: 'Отечественная бонистика',
            cover: 'http://pakhmutov.ru/img/p/248-550-large.jpg'
        },
        {
            title: 'Отечественная бонистика',
            cover: 'http://pakhmutov.ru/img/p/248-550-large.jpg'
        },
        {
            title: 'Отечественная бонистика',
            cover: 'http://pakhmutov.ru/img/p/248-550-large.jpg'
        },
        {
            title: 'Отечественная бонистика',
            cover: 'http://pakhmutov.ru/img/p/248-550-large.jpg'
        },
        {
            title: 'Отечественная бонистика',
            cover: 'http://pakhmutov.ru/img/p/248-550-large.jpg'
        },
        {
            title: 'Отечественная бонистика',
            cover: 'http://pakhmutov.ru/img/p/248-550-large.jpg'
        },
        {
            title: 'Отечественная бонистика',
            cover: 'http://pakhmutov.ru/img/p/248-550-large.jpg'
        },
        {
            title: 'Отечественная бонистика',
            cover: 'http://pakhmutov.ru/img/p/248-550-large.jpg'
        }
    ]

    return (
        <div className="list-wrapper">
            {books.map((book) => (
                <Book title={book.title} cover={book.cover} />
            ))}
        </div>
    )
}

export default BookList
