import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import { Button } from '../components/Button';
import { Info } from '../components/Info';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { clearDetails, loadCountry } from '../store/details/details-actions';
import { selectAllDetails } from '../store/details/details-selectors';

export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();


  const { currentCountry, status, error } = useSelector(selectAllDetails);

  useEffect(() => {
    dispatch(loadCountry(name));

    return () => {
      dispatch(clearDetails);
    };
  }, [name, dispatch])


  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>Fetch is failed</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};
