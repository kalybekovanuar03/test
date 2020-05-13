let money = 200000;

console.log("Ваш бюджет на месяц?: ");

let  time;

console.log("Введите дату в формате YYYY-MM-DD:");

let appData = {
    budjet: money,
    timeData: time,
    expenses: {
        "продукты, одежды и т.д" : "100000"
    },
    optionalExpenses: "",
    income: "",
    savings: false

};

prompt("Ваш бюджет на месяц?: ", appData.budjet);