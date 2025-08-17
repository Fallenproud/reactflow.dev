import React from 'react';
import { statsData } from '../../data/statsData';

export function StatsSection() {
  return (
    <div className="box-border mt-6 mb-16 px-0 md:mt-10 md:mb-24 md:px-10">
      <div className="box-border gap-x-[normal] block grid-cols-none gap-y-[normal] md:gap-x-20 md:grid md:grid-cols-[repeat(7,minmax(0px,1fr))] md:gap-y-20">
        <div className="content-between box-border flex grow col-end-auto col-start-auto justify-between min-h-0 min-w-0 md:col-end-[span_4] md:col-start-[span_4] md:min-h-[auto] md:min-w-[auto]">
          {statsData.map((stat, index) => (
            <div key={stat.id} className={index === 0 ? "box-border text-center" : "box-border text-center ml-0 md:ml-24"}>
              <h2 className="text-pink-600 text-4xl tabular-nums font-bold box-border tracking-[-0.32px] leading-10 text-nowrap md:text-5xl md:leading-[48px]">{stat.value}</h2>
              <p className="text-base box-border leading-6 text-nowrap mt-2 md:text-lg md:leading-7">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="box-border col-end-auto col-start-auto min-h-0 min-w-0 mt-8 md:col-end-[span_3] md:col-start-[span_3] md:min-h-[auto] md:min-w-[auto] md:mt-0">
          <p className="text-neutral-500 text-lg box-border leading-[22.5px]">
            React Flow is a MIT-licensed open source library. You can help us to ensure the further development and maintenance by subscribing to React Flow Pro.
          </p>
          <a href="/pro" className="relative text-pink-600 font-bold items-center shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] box-border inline-flex h-10 justify-center w-full mt-5 px-6 rounded-full md:w-auto before:accent-auto before:bg-[linear-gradient(258deg,rgb(255,0,115)_36.34%,rgb(255,255,255)_50.92%,rgb(240,240,240)_63.72%),linear-gradient(258deg,rgb(255,0,115)_2.22%,rgb(255,255,255)_18.5%,rgb(240,240,240)_32.77%)] before:bg-[position:0%_0%,0%_0%] before:bg-size-[auto,auto] before:box-border before:text-pink-600 before:block before:text-base before:not-italic before:normal-nums before:font-bold before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:z-[-2] before:rounded-full before:border-separate before:inset-0 before:font-ntdapperfont after:accent-auto after:bg-white after:box-border after:text-pink-600 after:block after:text-base after:not-italic after:normal-nums after:font-bold after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:z-[-1] after:rounded-full after:border-separate after:inset-px after:font-ntdapperfont">
            <img src="https://c.animaapp.com/meeyb686cF16we/assets/icon-12.svg" alt="Icon" className="box-border h-5 w-5 mr-1" />
            React Flow Pro
          </a>
        </div>
      </div>
    </div>
  );
}
