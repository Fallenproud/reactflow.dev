import React from 'react';
import { navigationData } from '../../data/navigationData';

export function MobileMenu() {
  return (
    <aside className="fixed bg-zinc-50 box-border flex flex-col overscroll-x-contain overscroll-y-contain translate-y-[-100.0%] z-20 pt-16 inset-0 md:hidden md:transform-none">
      <ul className="[mask-image:linear-gradient(rgba(0,0,0,0),rgb(0,0,0)_20px,rgba(0,0,0,0)),linear-gradient(0deg,rgba(0,0,0,0),rgb(0,0,0)_20px,rgba(0,0,0,0))] box-border gap-x-1 grid list-none [mask-clip:border-box,border-box] [mask-composite:add,add] [mask-mode:match-source,match-source] [mask-origin:border-box,border-box] [mask-repeat:repeat,repeat] [mask-size:auto,auto] min-h-[auto] min-w-[auto] gap-y-1 overflow-auto [mask-position:0%,0%] p-4 md:min-h-0 md:min-w-0">
        {navigationData.mobileMenu.map((section) => (
          <li key={section.id} className="box-border min-h-[auto] min-w-[auto] text-left md:min-h-0 md:min-w-0">
            <button type="button" className="text-[lab(35.6337_-1.58697_-10.8425)] text-sm items-center bg-transparent gap-x-2 flex justify-between leading-5 gap-y-2 text-start w-full px-2 py-1.5 rounded-bl rounded-br rounded-tl rounded-tr">
              {section.label}
              <img src="https://c.animaapp.com/meeyb686cF16we/assets/icon-9.svg" alt="Icon" className="box-border shrink-0 h-[18px] p-0.5 rounded-bl rounded-br rounded-tl rounded-tr" />
            </button>
            <div className="box-border">
              <ul className="relative box-border gap-x-1 grid gap-y-1 ml-3 pl-3 pt-1 before:accent-auto before:bg-[lab(91.6229_-0.159115_-2.26791)] before:box-border before:text-slate-900 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:absolute before:text-left before:indent-[0px] before:normal-case before:visible before:w-px before:border-separate before:left-0 before:inset-y-1 before:font-ntdapperfont">
                {section.items.map((item) => (
                  <li key={item.id} className="box-border min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
                    {item.type === 'link' ? (
                      <a href={item.href} className="text-[lab(35.6337_-1.58697_-10.8425)] text-sm box-border flex leading-5 px-2 py-1.5 rounded-bl rounded-br rounded-tl rounded-tr">
                        {item.label}
                      </a>
                    ) : (
                      <>
                        <button type="button" className="text-[lab(35.6337_-1.58697_-10.8425)] text-sm items-center bg-transparent gap-x-2 flex justify-between leading-5 gap-y-2 text-start w-full px-2 py-1.5 rounded-bl rounded-br rounded-tl rounded-tr">
                          {item.label}
                          <img src="https://c.animaapp.com/meeyb686cF16we/assets/icon-9.svg" alt="Icon" className="box-border shrink-0 h-[18px] p-0.5 rounded-bl rounded-br rounded-tl rounded-tr" />
                        </button>
                        {item.items && (
                          <div className="box-border">
                            <ul className="relative box-border gap-x-1 grid gap-y-1 ml-3 pl-3 pt-1 before:accent-auto before:bg-[lab(91.6229_-0.159115_-2.26791)] before:box-border before:text-slate-900 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:absolute before:text-left before:indent-[0px] before:normal-case before:visible before:w-px before:border-separate before:left-0 before:inset-y-1 before:font-ntdapperfont">
                              {item.items.map((subItem) => (
                                <li key={subItem.id} className="box-border min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
                                  <a href={subItem.href} className="text-[lab(35.6337_-1.58697_-10.8425)] text-sm box-border flex leading-5 px-2 py-1.5 rounded-bl rounded-br rounded-tl rounded-tr">
                                    {subItem.component ? (
                                      <div className="box-border min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">{subItem.label}</div>
                                    ) : (
                                      subItem.label
                                    )}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
