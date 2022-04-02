import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { fetchData } from '../redux/stock/company';
import Nav from './Nav';
import './styles/Companies.css';

const Company = () => {
  const param = useParams();
  const company = useSelector((state) => state.companyReducer[0]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData(param.companySymbol));
  }, []);

  return (
    <>
      {(company)
        ? <Nav title={company.companyName} /> : <Nav title="Stock Company Information" />}
      {(company)
        ? (
          <NavLink key={uuidv4()} to={`/${company.symbol}`}>
            <section className="logo">
              <img src={company.image} alt="company logo" />
              <p>{company.companyName}</p>
            </section>
            <section className="info">
              {Object.entries(company).filter(([key]) => (key !== 'companyName' && key !== 'image')).map(([key, value]) => (
                <div className="item" key={uuidv4()}>
                  <div className="key">
                    { key }
                  </div>
                  <div>
                    {value}
                  </div>
                </div>
              ))}
            </section>
          </NavLink>
        ) : <h1>Please wait while loading ...</h1>}
    </>
  );
};

export default Company;
