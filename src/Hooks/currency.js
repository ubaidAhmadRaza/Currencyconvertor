import {useEffect, useState} from "react"
function useCurrencyInfo(currency,key){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json?key=${key}`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency,key])
    console.log(data);
    return data
}


export default useCurrencyInfo



