import React, { useState} from 'react';

export const RowContext = React.createContext();

const PaymentMethodTable = ({ children }) => {
  const [selected, setSelected] = useState(null);
  const handleClick = (id, onClick) => {
    setSelected(id);
    onClick && onClick();
  };
  
  return (
    <RowContext.Provider value={{
      row: selected,
      handleClick,
    }}>
      {children}
    </RowContext.Provider>
  );
};

export default PaymentMethodTable;