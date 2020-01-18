import React, { useState} from 'react';

export const RowContext = React.createContext();

const PaymentMethodTable = ({ children }) => {
  const [selected, setSelected] = useState(null);
  
  return (
    <RowContext.Provider value={{
      row: selected,
      handleClick: id => setSelected(id),
    }}>
      {children}
    </RowContext.Provider>
  );
};

export default PaymentMethodTable;