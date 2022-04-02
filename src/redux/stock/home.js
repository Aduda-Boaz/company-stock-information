const FETCH_COMPANIES_SUCCESS = 'company-profile/company/FETCH_COMPANIES_SUCCESS';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMPANIES_SUCCESS:
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;

export const fetchCompaniesSuccess = (payload) => ({
  type: FETCH_COMPANIES_SUCCESS,
  payload,
});

export const fetchComp = () => async (dispatch) => {
  const responseDowjones = await fetch('https://financialmodelingprep.com/api/v3/dowjones_constituent?apikey=c72f83b1dfc59f79c4cdee3c9b93c7f4');
  const dataDowjones = await responseDowjones.json();
  const infoDowjones = dataDowjones.map((item) => ({
    symbol: item.symbol,
    name: item.name,
    sectore: item.sector,
    exchange: 'New York Stock Exchange NYSE',
  }));
  const info = [...infoDowjones];
  dispatch(fetchCompaniesSuccess(info));
};

export const fetchCompanies = () => (dispatch) => {
  dispatch(fetchComp());
};
