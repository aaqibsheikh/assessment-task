import React, { useEffect, useRef, useState } from "react";
import Debt from "../components/Debt";
import Modal from "../components/Modals/DebtModal";
import axios, { AxiosResponse } from "axios";
import { Debts } from "../types/types";

const Home: React.FC = () => {
  const initialized = useRef(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [debts, setDebts] = useState<Debts[]>([]);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      fetchData();
    }
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:8000/debts/")
      .then((response: AxiosResponse<Debts[]>) => {
        setDebts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 max-h-screen">
        <button className="text-gray-800 hover:text-black focus:outline-none absolute top-0 left-0 mt-2 md:mt-3 ml-2 md:ml-3">
          {"<  Back"}
        </button>
        <div>
          <h2 className="text-lg md:text-xl font-bold">
            Does the company have debts to third parties?
          </h2>
          <div className="mt-3 md:mt-4 flex flex-col items-start">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-blue-500 h-4 w-4"
                name="debt"
                value="yes"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center mt-2">
              <input
                type="radio"
                className="form-radio text-blue-500 h-4 w-4"
                name="debt"
                value="no"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-700">
            Please provide a list of all unsettled and settled financial
            obligations.
          </p>
          <div className="mt-3 md:mt-4 pr-3 md:pr-6">
            <button
              onClick={handleModalOpen}
              className="bg-white text-blue-500 w-full  font-semibold py-2 px-2 md:px-4 border rounded-lg flex items-center"
            >
              <span className="text-blue-500 mr-1 md:mr-2">+</span>
              Add
            </button>
          </div>
          <div className="max-h-60 overflow-y-auto scrollbar-hide">
            <Debt debts={debts} />
          </div>
        </div>
        <div className="mt-3 md:mt-4 flex items-start">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 md:px-4 rounded mr-2 md:mr-4">
            Save Changes
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 md:px-4 rounded">
            Dismiss
          </button>
        </div>
      </div>
      {isModalOpen && <Modal onClose={handleModalClose} setDebts={setDebts} />}
    </div>
  );
};

export default Home;
