import React from 'react'

const StockTable = ({date, open, close, volume}) => {
  return (<>
    <tr>
        <th>{date}</th>
        <td>{open}</td>
        <td>{close}</td>
        <td>{volume}</td>
    </tr>
</>)    
}

export default StockTable