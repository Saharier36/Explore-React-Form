import React from 'react';
import Spacial from './Spacial';

const Cousin = ({name, asset}) => {
    return (
      <div>
        <h3>{name}</h3>
        {name === "David" && <Spacial asset={asset}></Spacial>}
      </div>
    );
};

export default Cousin;