const questions = [
    {
        type: "one",
        topic: "Выберите Ваше любимое число",
        options: ["Один", "Два", "Три", "Четыре"],
        time: 60
    },
    {
        type: "multiple",
        topic: "Выберите Ваше любимое животное",
        options: ["Кот", "Собака", "Попугай", "Хомяк"],
        isOptional: true
    },
    {
        type: "singleLine",
        topic: "Напишите Ваше имя",
    },
    {
        type: "multiline",
        topic: "Расскажите о себе",
        time: 120
    },
]

export default questions
