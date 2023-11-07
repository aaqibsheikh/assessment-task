import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { Debts } from "../types/types";

interface props {
  debts: Debts[];
}
const Debt: React.FC<props> = ({ debts }) => {
  return (
    <div>
      {debts.map((debt: Debts) => (
        <div key={debt.id} className="mt-4 border rounded-lg p-2">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg text-left font-bold">{debt.typeOfDebt}</h2>
              <p className="text-gray-500 text-xs">
                {debt.startDate} - {debt.maturityDate}
              </p>
            </div>
            <button className="text-gray-800 hover:text-black focus:outline-none">
              . . .
            </button>
          </div>
          <div className="mt-2 flex items-start">
            <div>
              <p className="text-sm">
                {debt.currency} {debt.initialAmount}
              </p>
            </div>
            <div className="ml-6">
              <p className="text-xs">Interest rate</p>
              <p className="text-gray-500 text-xs">{debt.interestRate}%</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Debt;
