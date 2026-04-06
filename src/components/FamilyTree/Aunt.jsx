import React from "react";
import Cousin from "./Cousin";
import { use } from "react";
import { MoneyContext } from "./FamilyTree";

const Aunt = ({ asset }) => {
  const [money, setMoney] = use(MoneyContext);

  const handleAddMoney = () => {
    setMoney(money + 5000);
  };

  return (
    <div>
      <h3>Aunt</h3>
      <section className="flex">
        <Cousin asset={asset} name="David"></Cousin>
        <Cousin name="Taylor"></Cousin>
      </section>
      <button onClick={handleAddMoney}>Add 5000 TK</button>
    </div>
  );
};

export default Aunt;
