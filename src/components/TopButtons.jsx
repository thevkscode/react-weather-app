import React from "react";

function Topbuttons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Delhi",
    },
    {
      id: 2,
      title: "Lucknow",
    },
    {
      id: 3,
      title: "Pune",
    },
    {
      id: 4,
      title: "Hyderabad",
    },
    {
      id: 5,
      title: "Chennai",
    },
  ];
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white font-medium text-lg"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default Topbuttons;
