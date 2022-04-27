import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';


const SearchBar = () => {

    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])

    return (
        <div className="">
            SearchBar
        </div>
    )
}

export default SearchBar;