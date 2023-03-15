import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="bg-gradient-to-r gap-3 from-cyan-500 to-blue-800 flex items-stretch p-6 md:px-16 rounded-3xl text-white duration-500">
        <div className="flex-auto flex flex-col gap-x-5 justify-between md:flex-row md:justify-around md:items-center">
          <div>
            <p className="text-7xl md:text-9xl">23°</p>
            <p className="text-xl md:text-3xl capitalize">
              Paris, France
            </p>
          </div>

          <div className="text-lg md:text-5xl lg:text-6xl">
            <p>
              18°/20°
            </p>
            <div className="text-sm md:mt-9 md:text-xl lg:text-2xl">
              Feels like 19°
              <br />
              <p>18:31</p>
            </div>
          </div>
        </div>
        <div className="flex-auto flex flex-col justify-around items-center md:flex-row-reverse">
          <div className="flex flex-col items-center md:items-end">
            <p className="uppercase text-lg md:capitalize md:text-5xl lg:text-6xl">Weather</p>
            <p className="capitalize text-sm md:mt-6 md:text-xl lg:text-2xl">Clouds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;