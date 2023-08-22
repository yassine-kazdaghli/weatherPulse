import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate"; // Import AsyncPaginate component
import axios from "axios"; // Import Axios library
import { GEO_API_URL, geoApiOptions } from "../../api"; // Import your API configuration

// Search component that displays a dropdown with async paginated options
const Search = ({ onSearchChange }) => {
    // State to keep track of the selected option
    const [search, setSearch] = useState(null);

    // Create an Axios instance with  API configuration
    const axiosInstance = axios.create(geoApiOptions);

    // Load options from the API using Axios
    const loadOptions = async (inputValue, prevOptions, { page }) => {
        try {
            // Fetch data from the API using Axios
            const response = await axiosInstance.get(GEO_API_URL, {
                params: {
                    namePrefix: inputValue, // Input value from the user
                    page: page, // Current page number for pagination
                    limit: 10 // Number of items per page (adjust as needed)
                }
            });

            // Map the API response data to options format
            const options = response.data.data.map(city => ({
                value: city.id,
                label: city.name
            }));

            // Return options to be displayed in the dropdown
            return {
                options
            };
        } catch (error) {
            console.error("Error fetching data", error);
            // Return an empty array if there's an error
            return {
                options: []
            };
        }
    };

    // Handle selection change
    const handleOnChange = selectedOption => {
        // Update selected option in the state
        setSearch(selectedOption);
        // Pass the selected option to the parent component using the provided prop
        onSearchChange(selectedOption);
    };

    return (
        // Render the AsyncPaginate component
        <AsyncPaginate
            value={search} // Set the selected value for the dropdown
            loadOptions={loadOptions} // Provide the loadOptions function to AsyncPaginate
            onChange={handleOnChange} // Provide the change handler function
            placeholder="Search for city" // Placeholder text
            additional={{
                page: 1 // Initial page number for pagination
            }}
        />
    );
};

export default Search;
