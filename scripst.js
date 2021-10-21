const button = document.getElementsByTagName("button")[0]
const select = document.getElementById("currencySelect")

const convertValue = async () => {
    const input = document.getElementById("Input-Real").value
    const realvaluetext = document.getElementById("realValue")
    const value = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
    const dolar = value.USDBRL.high
    const euro = value.EURBRL.high
    const bitcoin = value.BTCBRL.high




    realvaluetext.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",

    }).format(input)

    const dolarValueText = document.getElementById("dolarValue")

    if (select.value === "US$ Dólar Americano") {
        dolarValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",

        }).format(input / dolar)
    }

    if (select.value === "€ Euro") {
        dolarValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",

        }).format(input / euro)
    }

    if (select.value === "BitCoin") {
        dolarValueText.innerHTML = (input / bitcoin).toFixed(5)
    }


}

const changeCurrency = () => {
    const currency = document.getElementById("currencyName")
    const flag = document.getElementById("flags")

    if (select.value === "US$ Dólar Americano") {
        currency.innerHTML = "Dólar Americano"
        flag.src = "./img/estados-unidos (1) 1.svg"
    }


    if (select.value === "€ Euro") {
        currency.innerHTML = "Euro"
        flag.src = "./img/Design sem nome 1.svg"
    }

    if (select.value === "BitCoin") {
        currency.innerHTML = "BitCoin"
        flag.src = "./img/bitcoin.png"
    }

    convertValue()
}

















button.addEventListener("click", convertValue)

select.addEventListener("change", changeCurrency)

































