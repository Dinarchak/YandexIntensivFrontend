const normalizedCategories = [
    {
        name: "Художественная литература",
        id: 0,
    },
    {
        name: "Нехудожественная литература",
        id: 1,
    },
    {
        name: "Книги для детей",
        id: 2,
    },
    {
        name: "Переодические издания",
        id: 3,
    },
    {
        name: "Религия",
        id: 4,
    },
    {
        name: "Учебная литература",
        id: 5,
    },
    {
        name: "Комиксы",
        id: 6,
    },
]

const normalizedUsers = [
  {
    id: 'a304959a-76c0-4b34-954a-b38dbf310360',
    name: 'Antony',
  },
  {
    id: '20bed9b5-9c7b-4771-8221-75b74ed1904a',
    name: 'Diana',
  },
  {
    id: 'c3d4abd4-c3ef-46e1-8719-eb17db1d6e99',
    name: 'Lolly',
  },
  {
    id: '52a63cc0-5a6f-41f3-9774-0161ea4c9b0c',
    name: 'Agata',
  },
  {
    id: '1547335a-ea18-4547-a73d-32bd6e9f651c',
    name: 'Rebeca',
  },
  {
    id: 'dfb982e9-b432-4b7d-aec6-7f6ff2e6af54',
    name: 'Sam',
  },
];

const normalizedReviews = [
  {
    id: 0,
    userId: 'a304959a-76c0-4b34-954a-b38dbf310360',
    username: 'Antony',
    text: 'Not bad',
    rating: 5,
  },
  {
    id: 1,
    userId: 'dfb982e9-b432-4b7d-aec6-7f6ff2e6af54',
    username: 'Sam',
    text: 'Грязно',
    rating: 3,
  },
  {
    id: 2,
    userId: '20bed9b5-9c7b-4771-8221-75b74ed1904a',
    username: 'Diana',
    text: 'Хороший попкорн',
    rating: 5,
  },
  {
    id: 3,
    userId: 'dfb982e9-b432-4b7d-aec6-7f6ff2e6af54',
    text: 'Жесткие стулья',
    username: 'Sam',
    rating: 4,
  },
  {
    id: 4,
    userId: 'c3d4abd4-c3ef-46e1-8719-eb17db1d6e99',
    username: 'Lolly',
    text: 'Отличный звук',
    rating: 5,
  },
  {
    id: 5,
    userId: '52a63cc0-5a6f-41f3-9774-0161ea4c9b0c',
    username: 'Agata',
    text: 'Удобное расположение',
    rating: 5,
  },
  {
    id: 6,
    userId: '52a63cc0-5a6f-41f3-9774-0161ea4c9b0c',
    username: 'Agata',
    text: 'Глубокий смылс',
    rating: 5,
  }
];

const normalizedGenres = [
    {
        name: "Фентези",
        id: 0
    },
    {
        name: "Детектив",
        id: 1
    },
    {
        name: "Любовный роман",
        id: 2
    },
    {
        name: "Мистика",
        id: 3
    },
    {
        name: "Боевик",
        id: 4
    }
]

const normalizedBooks = [
    {
        name: "Несносное проклятье некроманта",
        authors: ["Блинова Маргарита"],
        annotations: "А ещё непосредственные участники технического прогресса, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут указаны как претенденты на роль ключевых факторов. В рамках спецификации современных стандартов, явные признаки победы институционализации освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, объединены в целые кластеры себе подобных. А ещё некоторые особенности внутренней политики призывают нас к новым свершениям, которые, в свою очередь, должны быть подвергнуты целой серии независимых исследований.",
        genres: ["Фентези"],
        category: 0,
        price: 250,
        reviews: [0, 4],
        id: 0
    },
    {
        name: "Книга ночи",
        annotations: "Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: выбранный нами инновационный путь предоставляет широкие возможности для экономической целесообразности принимаемых решений. Противоположная точка зрения подразумевает, что активно развивающиеся страны третьего мира объективно рассмотрены соответствующими инстанциями.",        
        authors: ["Блэк Холли", "Фэнтези"],
        genres: ["Фентези", "Детектив"],
        category: 0,
        price: 250,
        reviews: ["Мистика", "Любовный роман"],
        id: 1
    },
    {
        name: "Благие знамения",
        annotations: "Но постоянное информационно-пропагандистское обеспечение нашей деятельности прекрасно подходит для реализации вывода текущих активов. И нет сомнений, что предприниматели в сети интернет обнародованы! Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки дальнейших направлений развития. Учитывая ключевые сценарии поведения, внедрение современных методик предопределяет высокую востребованность позиций, занимаемых участниками в отношении поставленных задач.",
        authors: ["Пратчетт"],
        genres: ["Мистика"],
        category: 1,
        price:250,
        reviews: [6, 1],
        id: 2
    },
    {
        name: "Целительница. Первое испытание",
        authors: ["Бульба Наталья Владимировна"],
        annotations: "Но сложившаяся структура организации создаёт предпосылки для стандартных подходов. В своём стремлении улучшить пользовательский опыт мы упускаем, что непосредственные участники технического прогресса могут быть своевременно верифицированы. Значимость этих проблем настолько очевидна, что семантический разбор внешних противодействий предопределяет высокую востребованность глубокомысленных рассуждений.",        
        genres: ["Любовный роман", "Боевик"],
        category: 1,
        price: 250,
        reviews: [1, 5],
        id: 3
    },
    {
        name: "Выбор. О свободе и внутренней силе человека",
        authors: ["Эдит Ева Эгер"],
        annotations: "Как принято считать, непосредственные участники технического прогресса будут ассоциативно распределены по отраслям. Безусловно, реализация намеченных плановых заданий способствует подготовке и реализации модели развития. Наше дело не так однозначно, как может показаться: укрепление и развитие внутренней структуры предопределяет высокую востребованность инновационных методов управления процессами. И нет сомнений, что многие известные личности функционально разнесены на независимые элементы. В рамках спецификации современных стандартов, независимые государства, инициированные исключительно синтетически, описаны максимально подробно.",
        genres: ["Фентези"],
        category: 2,
        price: 250,
        reviews: [1, 4],
        id: 4
    },
    {
        name: "Мобилизованная нация. Германия 1939–1945",
        authors: ["Николас Старгардт"],
        annotations: "А ещё непосредственные участники технического прогресса, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут указаны как претенденты на роль ключевых факторов. В рамках спецификации современных стандартов, явные признаки победы институционализации освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, объединены в целые кластеры себе подобных. А ещё некоторые особенности внутренней политики призывают нас к новым свершениям, которые, в свою очередь, должны быть подвергнуты целой серии независимых исследований.",
        genres: ["Детектив"],
        category: 2,
        price: 250,
        reviews: [0, 4, 2],
        id: 5
    },
    {
        name: "Мёртвое пианино",
        authors: ["Иван Любенко"],
        annotations: "Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: выбранный нами инновационный путь предоставляет широкие возможности для экономической целесообразности принимаемых решений. Противоположная точка зрения подразумевает, что активно развивающиеся страны третьего мира объективно рассмотрены соответствующими инстанциями.",        
        genres: ["Боевик"],
        category: 3,
        price: 250,
        reviews: [0, 1],
        id: 6
    },
    {
        name: "Владимир Сухинин",
        authors: ["Виктор Глухов"],
        annotations: "Но постоянное информационно-пропагандистское обеспечение нашей деятельности прекрасно подходит для реализации вывода текущих активов. И нет сомнений, что предприниматели в сети интернет обнародованы! Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки дальнейших направлений развития. Учитывая ключевые сценарии поведения, внедрение современных методик предопределяет высокую востребованность позиций, занимаемых участниками в отношении поставленных задач.",        
        genres: ["Фентези", "Мистика"],
        category: 4,
        price: 250,
        reviews: [3, 2],
        id: 7
    },
    {
        name: "Закончи то, что начал. Как доводить дела до конца",
        authors: ["Джон Эйкафф"],
        genres: ["Детектив", "Любовный роман", "Мистика"],
        category: 6,
        price: 250,
        annotations: "Но сложившаяся структура организации создаёт предпосылки для стандартных подходов. В своём стремлении улучшить пользовательский опыт мы упускаем, что непосредственные участники технического прогресса могут быть своевременно верифицированы. Значимость этих проблем настолько очевидна, что семантический разбор внешних противодействий предопределяет высокую востребованность глубокомысленных рассуждений.",        
        reviews: [2, 5, 4],
        id: 8
    },
    {
        name: "К себе нежно",
        authors: ["Ольга Примаченко"],
        annotations: "Как принято считать, непосредственные участники технического прогресса будут ассоциативно распределены по отраслям. Безусловно, реализация намеченных плановых заданий способствует подготовке и реализации модели развития. Наше дело не так однозначно, как может показаться: укрепление и развитие внутренней структуры предопределяет высокую востребованность инновационных методов управления процессами. И нет сомнений, что многие известные личности функционально разнесены на независимые элементы. В рамках спецификации современных стандартов, независимые государства, инициированные исключительно синтетически, описаны максимально подробно.",        
        genres: ["Любовный роман"],
        category: 5,
        price: 250,
        reviews: [0],
        id: 9
    }
]


module.exports = {
  books: normalizedBooks,
  genres: normalizedGenres,
  categories: normalizedCategories,
  reviews: normalizedReviews,
  users: normalizedUsers,
}