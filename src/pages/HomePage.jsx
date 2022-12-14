import { useNavigate } from 'react-router-dom';

import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';

import { useSelector, useDispatch } from 'react-redux';
import { selectAllisibleCoutries, selectCountriesInfo } from '../store/countries/countries-selectors';
import { useEffect } from 'react';
import { loadCounties } from '../store/countries/countries-actions';
import { selectControls } from '../store/controls/controls-selectors';

export const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const controls = useSelector(selectControls);
  const countries = useSelector((state) => selectAllisibleCoutries(state, controls.search, controls.region));
  const { status, error, qty } = useSelector(selectCountriesInfo);

  useEffect(() => {
    if (!qty) {
      dispatch(loadCounties())
    }
  }, [qty, dispatch])

  return (
    <>
      <Controls />

      {error && <h2>Can`t fetch data</h2>}
      {status === 'loading' && <h2>Loading...</h2>}
      {status === 'recived' && (
        <List>
          {countries.map((c) => {
            const countryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: 'Population',
                  description: c.population.toLocaleString(),
                },
                {
                  title: 'Region',
                  description: c.region,
                },
                {
                  title: 'Capital',
                  description: c.capital,
                },
              ],
            };

            return (
              <Card
                key={c.name}
                onClick={() => navigate(`/country/${c.name}`)}
                {...countryInfo}
              />
            );
          })}
        </List>
      )}


    </>
  );
};
