import { useState, useEffect } from "react"
import axios from "axios"
import CountryDetails from "./CountryDetails"

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [name, setName] = useState("")
    const [showCountry, setShowCountry] = useState({})
    const [weather, setWeather] = useState({})

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then((response) => {
            setCountries(response.data)
        })
    }, [])

    useEffect(() => {
        axios.get(`http://api.weatherstack.com/current?access_key=d6a898fc7a0930e6539a3415bcc026a7&query=${name}`).then((response) => {
            setWeather(response.data)
        })
    }, [name])

    const filteredCountries = countries.filter((country) => country.name.common.toLowerCase().includes(name))

    const handleChange = (event) => {
        setName(event.target.value)
        setShowCountry({})
    }

    const handleShow = (countryName) => {
        setShowCountry(filteredCountries.filter((country) => country.name.common.includes(countryName)).find(Boolean))
    }

    console.log(showCountry)

    return (
        <>
            Find countries
            <input value={name} onChange={handleChange} />
            {filteredCountries.length > 10 && <p>Too many matches, specify another filter</p>}
            {filteredCountries.length > 1 &&
                filteredCountries.length < 10 &&
                filteredCountries.map((country) => (
                    <>
                        <div>
                            {country.name.common} <button onClick={() => handleShow(country.name.common)}>show</button>
                        </div>
                    </>
                ))}
            {filteredCountries.length === 1 && <CountryDetails country={filteredCountries.find(Boolean)} />}
            {showCountry.name && <CountryDetails country={showCountry} />}
        </>
    )
}

export default Countries
