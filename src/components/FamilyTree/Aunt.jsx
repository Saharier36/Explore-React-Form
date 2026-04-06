import React from 'react';
import Cousin from './Cousin';

const Aunt = ({asset}) => {
    return (
      <div>
        <h3>Aunt</h3>
        <section className="flex">
          <Cousin asset={asset} name="David"></Cousin>
          <Cousin name="Taylor"></Cousin>
        </section>
      </div>
    );
};

export default Aunt;