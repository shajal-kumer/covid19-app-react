import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api/index';

import styles from './CountryPicker.module.css';

function CountryPicker({ handleCountryChange }) {
	const [fetchedCountries, setFetchedCountries] = useState([]);

	useEffect(() => {
		const fetchAPI = async () => {
			setFetchedCountries(await fetchCountries());
		};

		fetchAPI();
	}, []);

	return (
		<FormControl className={styles.formControl}>
			<NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
				<option value=''>Global</option>
				{fetchedCountries.map((country, i) => (
					<option value={country} key={i}>
						{country}
					</option>
				))}
			</NativeSelect>
		</FormControl>
	);
}

export default CountryPicker;
