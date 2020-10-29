import React from 'react';
const filterContext = React.createContext(true);
export const ItemExpenseProvider = filterContext.Provider;
export const ItemExpenseConsumer = filterContext.Consumer;

export default filterContext