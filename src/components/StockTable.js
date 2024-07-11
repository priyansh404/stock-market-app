import React from 'react'

const StockTable = ({date, open, close}) => {
  return (<>
    <tr>
        <th>{date}</th>
        <td>{open}</td>
        <td>{close}</td>
    </tr>
</>)    
}

export default StockTable
