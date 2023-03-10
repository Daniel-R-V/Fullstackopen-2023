import { useState, useEffect } from "react"
import axios from "axios"

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [name, setName] = useState("")

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then((response) => {
            setCountries(response.data)
        })
    }, [])

    const filterCountries = (event) => {
        event.preventDefault()
        setName(event.target.value)
    }

    const filteredCountries = countries.filter((country) => country.name.common.toLowerCase().includes(name))

    return (
        <>
            Find countries
            <input onChange={filterCountries} />
            {filteredCountries.length > 10 ? <p>Too many matches, specify another filter</p> : filteredCountries.map((country) => <div>{country.name.common}</div>)}
            {filteredCountries.length === 1 &&
                filteredCountries.map((country) => (
                    <>
                        <div>
                            <h1>{country.name.common}</h1>

                            <p>Capital {country.capital}</p>
                            <p>Population {country.population}</p>
                            <h4>languages</h4>
                            <ul>
                                {Object.values(country.languages).map((language) => (
                                    <li key={language}>{language}</li>
                                ))}
                            </ul>

                            <img src={country.flags.png} alt={country.flags.alt} />
                        </div>
                    </>
                ))}
        </>
    )
}

export default Countries
