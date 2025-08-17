import React from 'react';

export function GettingStartedSection() {
  return (
    <div className="relative box-border ml-[-187.5px] mr-[-187.5px] max-w-[375px] w-screen inset-x-2/4 md:max-w-screen-xl md:w-full md:mx-0 md:inset-x-0">
      <div className="text-white bg-black box-border flex mt-16 p-0 rounded-none md:mt-24 md:p-1.5 md:rounded-3xl">
        <div className="relative bg-[linear-gradient(to_right_bottom,rgb(0,0,0)_15%,rgb(49,28,51)_65%,rgb(28,24,38))] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] box-border grow border-gray-700 overflow-hidden rounded-none border-0 border-none md:border md:rounded-[18px] md:border-solid">
          <div className="box-border pt-12 pb-4 px-4">
            <p className="text-pink-600 text-lg font-bold box-border leading-[22.5px] text-center mb-2">Getting Started with React Flow</p>
            <p className="box-border leading-[26px] max-w-lg text-center mb-6 mx-auto md:mb-8">
              Make sure you've installed npm, pnpm or yarn. Then you can install React Flow via:
            </p>
            <div className="bg-black/90 box-border max-w-screen-md border border-gray-700 mx-auto rounded-md border-solid">
              <div className="box-border flex p-4">
                <div className="bg-red-400 box-border h-3 w-3 mr-2 rounded-full"></div>
                <div className="bg-yellow-400 box-border h-3 w-3 mr-2 rounded-full"></div>
                <div className="bg-green-400 box-border h-3 w-3 mr-2 rounded-full"></div>
              </div>
              <div className="box-border pl-8 pr-4 pt-2 pb-6">
                <div className="box-border">
                  npm install <span className="text-pink-600 box-border">@xyflow/react</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black/90 box-border flex justify-center border-gray-700 mt-5 py-3 border-t border-solid">
            <a href="/learn" className="text-sm font-bold items-center shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px] box-border flex h-9 justify-center leading-5 underline-offset-4 py-2 rounded-full">
              See full Quickstart guide
              <img src="https://c.animaapp.com/meeyb686cF16we/assets/icon-18.svg" alt="Icon" className="box-border h-4 w-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
