import React from 'react'

export default function MycartRow({row,index}) {
  return (
    <>
     <tr>
        <td>
           {index + 1}
        </td>
        <td>
       
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={row.image} />
              </div>
            </div>
           
         
        </td>
        <td>
        <div>
              <div className="font-bold">{row.name}</div>
               
            </div>
        </td>
        <td>${row.price}</td>
        <td>
          <button className="btn btn-ghost bg-red-600 text-white btn-xs">x</button>
        </td>
      </tr>
    </>
  )
}
