import React from 'react'
import Card from './Card';

function Category({title}) {
  return (
    <div className='category'>
        <p>{title}</p>
        {/* <div>
            <img width={150}  src='https://www.pngmart.com/files/11/Blank-Package-PNG-Image.png' />
        </div>
        <div>

        </div> */}
    </div>
  )
}

export default Category;