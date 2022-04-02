import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import djones from '../assets/djones.jpeg';
import Nav from './Nav';
import './styles/Home.css';

const Home = () => {
  const home = useSelector((state) => state.homeReducer);
  const [companyInfo, setCompanyInfo] = useState('');
  const [selected, setSelected] = useState('');
  const [search, setSearch] = useState('');

  const select = (e) => {
    setCompanyInfo(e.target.value);
    const symbol = e.target.value.slice(0, 8);
    setSelected(symbol);
  };

  const filteredData = home.filter((company) => {
    const data = Object.keys(company).some((key) => {
      const res = company[key].toLowerCase().includes(selected.toLowerCase())
      && company[key].toLowerCase().includes(search.toLowerCase());
      return res;
    });
    return data;
  });
  return (
    <>
      <Nav />
      <section className="homeTopSection">
        <ul className="dowjones">
          <li>Dow Jones Industrial Average</li>
          <li><img src={djones} alt="Dow Jones" /></li>
        </ul>
      </section>
      <section className="search-bar">
        <input type="search" placeholder="Search By Name or Symbol" value={search} onChange={(e) => setSearch(e.target.value)} />
        <select id="company" name="company" value={companyInfo} onChange={select}>
          <option value="">Select Company</option>
          {Object.entries(home).map(([key, value]) => (
            <option key={key} value={`${value.name} (${value.symbol})`}>
              {`${value.name} (${value.symbol})`}
            </option>
          ))}
        </select>
      </section>

      <section className="cards">
        {filteredData === '' ? Object.entries(home).map(([key, value]) => (
          <Link key={key} to={`/${value.symbol}`}>
            <ul>
              <li className="companyName">
                {value.name}
                <span style={{ fontWeight: 300 }}>{`   (${value.symbol})`}</span>
              </li>
              <li>
                {value.exchange}
              </li>
            </ul>
          </Link>
        )) : Object.entries(filteredData).map(([key, value]) => (
          <Link key={key} to={`/${value.symbol}`}>
            <ul>
              <li className="companyName">
                {value.name}
                <span style={{ fontWeight: 300 }}>{`   (${value.symbol})`}</span>
              </li>
              <li>
                {value.exchange}
              </li>
            </ul>
          </Link>
        ))}
      </section>
    </>
  );
};

export default Home;
