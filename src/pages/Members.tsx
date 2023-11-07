import React, { useState } from "react";
import MemberModal from "../components/Modals/MemberModal";

type AccessLevel = {
  value: "stationary" | "manager" | "viewer" | "Deactivate";
  label: string;
  details: string;
};

const accessLevels: AccessLevel[] = [
  {
    value: "stationary",
    label: "Stationary",
    details:
      "Has no right to sign transactions. Can change company settings and can invite new members.",
  },
  {
    value: "manager",
    label: "Manager",
    details:
      "Has the right to sign transactions. Can change company settings and can invite new members.",
  },
  {
    value: "viewer",
    label: "Viewer",
    details: "Has read-only access.",
  },
  {
    value: "Deactivate",
    label: "Deactivate",
    details: "",
  },
];

const Members = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const members = [
    { name: "Daniel Fleming", email: "danielfleming@spacex.com" },
    // Add more members as needed
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [accessLevel, setAccessLevel] = useState<AccessLevel>(accessLevels[0]);

  const handleAccessLevelChange = (newAccessLevel: AccessLevel): void => {
    setAccessLevel(newAccessLevel);
    setIsOpen(false);
  };
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-white p-8 rounded relative">
        <button className="bg-white text-gray-800 py-2 px-4 rounded absolute top-0 left-0 mt-4 ml-4 outline-none">
          {"< BACK"}
        </button>
        <h1 className="text-left text-2xl font-bold mt-4 ml-4">Members</h1>
        <div className="flex flex-col items-start">
          <button
            className="bg-blue-900 text-white py-2 px-4 rounded mt-4 ml-4 mb-4 outline-none"
            onClick={handleModalOpen}
          >
            {"Invite Member"}
          </button>
          <div className="relative ml-4">
            <select className="text-sm  text-gray-700 py-2 px-4 pr-8 rounded focus:outline-none focus:border-blue-500">
              <option disabled selected value="">
                Members
              </option>
              <option value="active">Active</option>
              <option value="deactivated">Deactivated</option>
            </select>
          </div>
          <div className="mt-4 ml-4 w-full">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="px-4 text-sm text-left font-normal text-gray-600 py-2 border-t border-b border-gray-400">
                    Name
                  </th>
                  <th className="px-4 text-sm text-right font-normal text-gray-600 py-2 border-t border-b border-gray-400">
                    Access Level
                  </th>
                </tr>
              </thead>
              <tbody>
                {members.map((member, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 border-b border-gray-400">
                      <div className="flex items-center">
                        <div className="h-8 w-8 bg-blue-900 text-white flex justify-center items-center rounded-full mr-3">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .substr(0, 2)}
                        </div>
                        <div>
                          <p className="font-bold text-left">{member.name}</p>
                          <p>{member.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-2 border-b border-gray-400 text-right">
                      <div className="relative w-full inline-block text-left">
                        <div>
                          <span className="rounded-md shadow-sm">
                            <button
                              type="button"
                              className="flex justify-end  w-full   p-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50   "
                              onClick={() => setIsOpen(!isOpen)}
                              id="options-menu"
                              aria-haspopup="true"
                              aria-expanded="true"
                            >
                              {accessLevel.label}
                              <svg
                                className="-mr-1 ml-2 h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path fillRule="evenodd" d="M6 8l4 4 4-4H6z" />
                              </svg>
                            </button>
                          </span>
                        </div>
                        {isOpen && (
                          <div
                            className="origin-top-right w-auto absolute right-0 mt-2  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
                            style={{ zIndex: 50 }}
                          >
                            <div
                              className="py-1 w-full"
                              role="menu"
                              aria-orientation="vertical"
                              aria-labelledby="options-menu"
                            >
                              {accessLevels.map((level) => (
                                <div
                                  key={level.value}
                                  onClick={() => handleAccessLevelChange(level)}
                                  className="flex flex-col px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                                  role="menuitem"
                                >
                                  <div className="mb-1">{level.label}</div>
                                  <div className="text-xs text-gray-500">
                                    {level.details}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {isModalOpen && <MemberModal onClose={handleModalClose} />}
    </div>
  );
};

export default Members;
