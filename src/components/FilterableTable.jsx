import React, { useState } from "react";

const reports = [
  {
    date: "April 2024",
    title: "YouthFutures 2024 Youth Manifesto Dialogues",
    type: "PDA Report / Concept Note",
    topic: "Youth Development",
  },
  {
    date: "March 2024",
    title: "Business Formalization in Ghana’s Construction Industry",
    type: "PDA Publication",
    topic: "Construction",
  },
  {
    date: "June 2024",
    title:
      "Unpacking locally led research and evaluation through the lens of collaborative autoethnography",
    type: "Opinion Paper",
    topic: "Research & Evaluation",
  },
  {
    date: "July 2024",
    title:
      "Evaluating How Root Capital’s Client Businesses Impact Smallholder Livelihoods: Oil Palm in Ghana",
    type: "Policy Brief",
    topic: "Agriculture",
  },
  {
    date: "June 2024",
    title:
      "Voices and Evidence from End-Users of the GLTV and GLRRP Remote Learning Programme in Ghana",
    type: "PDA Publication",
    topic: "Education",
  },
  {
    date: "July 2024",
    title:
      "Transitions From Primary To Lower Secondary School: A Focus On Equity",
    type: "Policy Brief",
    topic: "Education",
  },
];

const FilterableTable = () => {
  const [filters, setFilters] = useState({
    type: "",
    date: "",
    topic: "",
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const clearFilters = () => {
    setFilters({ type: "", date: "", topic: "" });
  };

  const filteredReports = reports.filter(
    (report) =>
      (filters.type === "" || report.type === filters.type) &&
      (filters.date === "" || report.date === filters.date) &&
      (filters.topic === "" || report.topic === filters.topic)
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Filter Controls */}
      <div className="flex flex-wrap gap-4 mb-4">
        <select
          name="type"
          value={filters.type}
          onChange={handleFilterChange}
          className="border border-gray-300 px-4 py-2 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange"
        >
          <option value="">REPORT TYPE</option>
          {[...new Set(reports.map((r) => r.type))].map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <select
          name="date"
          value={filters.date}
          onChange={handleFilterChange}
          className="border border-gray-300 px-4 py-2 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange"
        >
          <option value="">DATE</option>
          {[...new Set(reports.map((r) => r.date))].map((date) => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
        </select>

        <select
          name="topic"
          value={filters.topic}
          onChange={handleFilterChange}
          className="border border-gray-300 px-4 py-2 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange focus:active:bg-orange"
        >
          <option value="">TOPIC</option>
          {[...new Set(reports.map((r) => r.topic))].map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>

        <button
          onClick={clearFilters}
          className="bg-orange text-white px-4 py-2 rounded-md hover:bg-orange"
        >
          CLEAR FILTERS
        </button>
      </div>

      {/* Table */}
      <div className="border border-gray-200 rounded-lg">
        {filteredReports.map((report, index) => (
          <div
            key={index}
            className={`p-4 ${index % 2 ? "bg-gray-100" : "bg-white"}`}
          >
            <p className="text-gray-500 text-sm">{report.date}</p>
            <p className="font-semibold">{report.title}</p>
            <p className="text-gray-600 text-sm">{report.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterableTable;
