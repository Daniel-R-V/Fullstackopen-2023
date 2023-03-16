const CountryDetails = ({ country }) => {
    return (
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
    )
}

export default CountryDetails
