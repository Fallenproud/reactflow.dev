import React from 'react';
import { navigationData } from '../../data/navigationData';

export function Header() {
  return (
    <header className="sticky box-border w-full z-30 top-0">
      <div className="absolute backdrop-blur-md bg-[oklab(0.985059_0.0000448823_0.0000197291_/_0.7)] box-border h-full w-full z-[-1] border-[lab(91.6229_-0.159115_-2.26791)] border-b border-solid"></div>
      <nav className="items-center box-border gap-x-4 flex h-16 justify-end max-w-[1440px] gap-y-4 mx-auto px-6">
        <div className="items-center box-border flex mr-auto md:mr-0">
          <a href="/" className="items-center box-border flex">
            <div className="text-pink-600 box-border shrink-0 h-7 w-7 md:h-8 md:w-8">
              <img src="https://c.animaapp.com/meeyb686cF16we/assets/icon-1.svg" alt="Icon" className="box-border h-full w-full" />
            </div>
            <p className="text-lg font-black box-border shrink-0 leading-7 ml-2 md:text-xl md:leading-5">React Flow</p>
          </a>
        </div>
        
        <div className="box-border gap-x-4 hidden min-h-0 min-w-0 gap-y-4 overflow-auto mr-auto py-1.5 md:flex md:min-h-[auto] md:min-w-[auto]">
          {navigationData.mainNav.map((item) => (
            <a key={item.id} href={item.href} className="text-[lab(35.6337_-1.58697_-10.8425)] text-sm box-border inline leading-5 min-h-0 min-w-0 text-nowrap md:block md:min-h-[auto] md:min-w-[auto]">
              {item.label}
            </a>
          ))}
          <button type="button" className="text-[lab(35.6337_-1.58697_-10.8425)] text-sm items-center bg-transparent gap-x-1.5 flex leading-5 min-h-0 min-w-0 gap-y-1.5 text-center text-nowrap p-0 md:min-h-[auto] md:min-w-[auto]">
            More
            <img src="https://c.animaapp.com/meeyb686cF16we/assets/icon-2.svg" alt="Icon" className="box-border h-3.5 text-nowrap" />
          </button>
        </div>

        <button type="button" aria-label="Search (Ctrl+K)" className="text-gray-400 font-medium items-center bg-gray-100 flex h-9 justify-between text-center ml-4 px-2 py-0 rounded-[40px]">
          <span className="items-center box-border flex">
            <img src="https://c.animaapp.com/meeyb686cF16we/assets/icon-3.svg" alt="Icon" className="text-zinc-900 box-border h-4 w-4" />
            <span className="text-sm box-border hidden leading-[21px] min-h-0 min-w-0 pl-1.5 pr-3 md:block md:min-h-[auto] md:min-w-[auto]">Search</span>
          </span>
          <span className="text-sm box-border hidden leading-[21px] min-h-0 ml-2.5 mr-[5px] md:flex md:min-h-[auto]">
            <kbd className="relative items-center box-border flex justify-center min-h-0 min-w-0 bg-[position:0px_0px] ml-1 rounded-[3px] top-0 font-ui_monospace md:min-h-[auto] md:min-w-[auto]">
              <img src="https://c.animaapp.com/meeyb686cF16we/assets/icon-4.svg" alt="Icon" className="box-border h-[15px] w-[15px]" />
            </kbd>
            <kbd className="relative items-center box-border flex justify-center min-h-0 min-w-0 bg-[position:0px_0px] ml-1 rounded-[3px] top-0 font-ui_monospace md:min-h-[auto] md:min-w-[auto]">K</kbd>
          </span>
        </button>

        <a href="https://github.com/xyflow/xyflow" className="text-[lab(35.6337_-1.58697_-10.8425)] box-border hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
          <img src="https://c.animaapp.com/meeyb686cF16we/assets/icon-5.svg" alt="Icon" className="box-border w-5" />
        </a>
        
        <a href="https://discord.gg/RVmnytFmGW" className="text-[lab(35.6337_-1.58697_-10.8425)] box-border hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
          <img src="https://c.animaapp.com/meeyb686cF16we/assets/icon-6.svg" alt="Icon" className="box-border w-[23px]" />
        </a>
        
        <a href="/pro" className="text-slate-50 text-sm font-bold items-center bg-pink-600 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] box-border gap-x-1 flex h-9 justify-center leading-5 gap-y-1 px-4 py-2 rounded-full">
          <img src="https://c.animaapp.com/meeyb686cF16we/assets/icon-7.svg" alt="Icon" className="box-border h-4" />
          <span className="box-border hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">React Flow</span>
          Pro
        </a>
        
        <button aria-label="Menu" type="button" className="bg-transparent block min-h-[auto] min-w-[auto] text-center p-0 md:hidden md:min-h-0 md:min-w-0">
          <img src="https://c.animaapp.com/meeyb686cF16we/assets/icon-8.svg" alt="Icon" className="box-border h-6" />
        </button>
      </nav>
    </header>
  );
}
