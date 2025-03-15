import React, { useState } from 'react'
import './Search.css'

export function Search({ setCity }) {
    const [cityName, setCityName] = useState('');
    const handleSearch = () => {
        if (cityName.trim() !== "") {
            setCity(cityName);
            setCityName("");
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <>
            <section className="search-section">
                <div className="container">
                    <div className="search">
                        <input id="searchBar" value={cityName} onChange={(e) => setCityName(e.target.value)} onKeyDown={handleKeyPress} type="text" placeholder="Find your location..." className="form-control" />
                        <input type="button" onClick={handleSearch} defaultValue="Find" />
                    </div>
                </div>
            </section>
        </>
    )
}
