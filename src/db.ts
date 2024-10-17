const questions = [
    {
        id: "id0",
        type: "single",
        topic: "Выберите Ваше любимое число",
        options: ["Один", "Два", "Три", "Четыре"],
        time: 3
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
        default: "Я очень хороший человек.",
        time: 2
    },
]

export default questions
