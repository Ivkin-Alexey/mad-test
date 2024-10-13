const questions = [
    {
        id: "id0",
        type: "one",
        topic: "Выберите Ваше любимое число",
        options: ["Один", "Два", "Три", "Четыре"],
        time: 60
    },
    {
        id: "id1",
        type: "multiple",
        topic: "Выберите Ваше любимое животное",
        options: ["Кот", "Собака", "Попугай", "Хомяк"],
        isOptional: true
    },
    {
        id: "id2",
        type: "singleLine",
        topic: "Напишите Ваше имя",
    },
    {
        id: "id3",
        type: "multiline",
        topic: "Расскажите о себе",
        time: 120
    },
]

export default questions
