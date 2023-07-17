import React, { useEffect, useState } from 'react';
import { getAccounts, getExpenses, getIncomeSavings, getWithdrawalStrategy, getSocialSecurity, getRetirementAccounts } from './api';
import { Typography, Button } from '@mui/material';
import Tables from './Tables';

function App() {
  const [accounts, setAccounts] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [withdrawalStrategy, setWithdrawalStrategy] = useState([]);
  const [SocialSecurity, setSocialSecurity] = useState([]);
  const [retirementAccounts, setRetirementAccounts] = useState([]);
  const [incomeSavings, setIncomeSavings] = useState([]);
  const [activeTable, setActiveTable] = useState('accounts');



  useEffect(() => {
    if (activeTable === 'accounts') {
      getAccounts()
        .then((response) => {
          setAccounts(response.data);
        })
        .catch((error) => console.error(error));
    } else if (activeTable === 'expenses') {
      getExpenses()
        .then((response) => {
          setExpenses(response.data);
        })
        .catch((error) => console.error(error));
    } else if (activeTable === 'incomeSavings') {
      getIncomeSavings()
        .then((response) => {
          setIncomeSavings(response.data);
        })
        .catch((error) => console.error(error));
    } else if (activeTable === 'withdrawalStrategy') {
      getWithdrawalStrategy()
        .then((response) => {
          setWithdrawalStrategy(response.data);
        })
        .catch((error) => console.error(error));
    } else if (activeTable === 'socialSecurity') {
      getSocialSecurity()
        .then((response) => {
          setSocialSecurity(response.data);
        })
        .catch((error) => console.error(error));
    } else if (activeTable === 'retirementAccounts') {
      getRetirementAccounts()
        .then((response) => {
          setRetirementAccounts(response.data);
        })
        .catch((error) => console.error(error));
    }
  }, [activeTable]);

  const handleTableChange = (tableName) => {
    setActiveTable(tableName);
  };

  return (
    <div className="App">
      <Typography variant="h4" textAlign="center" component="h1" gutterBottom>
        Retirement Planning App
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <Button variant={activeTable === 'accounts' ? 'contained' : 'outlined'} onClick={() => handleTableChange('users')}>
          Accounts
        </Button>
        <Button variant={activeTable === 'expenses' ? 'contained' : 'outlined'} onClick={() => handleTableChange('expenses')}>
          Expenses
        </Button>
        <Button variant={activeTable === 'incomeSavings' ? 'contained' : 'outlined'} onClick={() => handleTableChange('incomeSavings')}>
          Income Savings
        </Button>
        <Button variant={activeTable === 'withdrawalStrategy' ? 'contained' : 'outlined'} onClick={() => handleTableChange('withdrawalStrategy')}>
          Withdrawal Strategy
        </Button>
        <Button variant={activeTable === 'socialSecurity' ? 'contained' : 'outlined'} onClick={() => handleTableChange('socialSecurity')}>
          Social Security
        </Button>
        <Button variant={activeTable === 'retirementAccounts' ? 'contained' : 'outlined'} onClick={() => handleTableChange('retirementAccounts')}>
          Retirement Accounts
        </Button>
      </div>
      {activeTable === 'users' && <Tables data={accounts} />}
      {activeTable === 'expenses' && <Tables data={expenses} />}
      {activeTable === 'incomeSavings' && <Tables data={incomeSavings} />}
      {activeTable === 'withdrawalStrategy' && <Tables data={withdrawalStrategy} />}
      {activeTable === 'socialSecurity' && <Tables data={SocialSecurity} />}
      {activeTable === 'retirementAccounts' && <Tables data={retirementAccounts} />}
    </div>
  );
}

export default App;