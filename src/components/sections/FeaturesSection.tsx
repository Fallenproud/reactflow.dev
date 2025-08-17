import React from 'react';
import { featuresData } from '../../data/featuresData';

export function FeaturesSection() {
  return (
    <div className="box-border my-16 md:my-24">
      <div className="box-border">
        {featuresData.map((feature, index) => (
          <div key={feature.id} className={feature.layout === 'left' ? "relative box-border gap-x-[normal] block grid-cols-none gap-y-[normal] z-[3] mb-16 md:gap-x-8 md:grid md:grid-cols-[repeat(2,minmax(0px,1fr))] md:gap-y-8 md:mb-24" : feature.layout === 'right' ? "relative box-border gap-x-[normal] block grid-cols-none gap-y-[normal] z-[2] mb-16 md:gap-x-8 md:grid md:grid-cols-[repeat(2,minmax(0px,1fr))] md:gap-y-8 md:mb-24" : "relative box-border gap-x-[normal] block grid-cols-none gap-y-[normal] z-[1] md:gap-x-8 md:grid md:grid-cols-[repeat(2,minmax(0px,1fr))] md:gap-y-8"}>
            <div className={feature.layout === 'right' ? "box-border flex flex-col justify-center min-h-0 min-w-0 order-2 mb-4 md:min-h-[auto] md:min-w-[auto]" : "box-border flex flex-col justify-center min-h-0 min-w-0 order-1 mb-4 md:min-h-[auto] md:min-w-[auto]"}>
              <div className="box-border">
                <h2 className="text-4xl font-bold box-border tracking-[-0.32px] leading-10 mb-4 md:text-5xl md:leading-[48px]" dangerouslySetInnerHTML={{ __html: feature.title }}></h2>
                <p className="text-neutral-500 box-border leading-[26px] max-w-md mt-2 mb-8">{feature.description}</p>
                <a href={feature.ctaLink} className="text-slate-50 text-sm font-bold items-center bg-pink-600 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] box-border inline-flex h-9 justify-center leading-5 px-6 py-2 rounded-full">{feature.ctaText}</a>
              </div>
            </div>
            <div className={feature.layout === 'right' ? "box-border min-h-0 min-w-0 order-1 md:min-h-[auto] md:min-w-[auto]" : "box-border min-h-0 min-w-0 order-2 md:min-h-[auto] md:min-w-[auto]"}>
              <div className="relative bg-white box-border flex border border-gray-100 p-2 rounded-3xl border-solid">
                <div className="relative bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] box-border grow border border-gray-100 rounded-[22px] border-solid">
                  <div className="bg-[linear-gradient(to_right_bottom,rgb(255,255,255),rgb(249,250,251))] box-border h-[300px] overflow-hidden rounded-[18px] md:h-[400px]">
                    <div role="application" className={feature.layout === 'plugins' ? "relative box-border h-full w-full z-0 overflow-hidden" : "relative bg-neutral-900 box-border h-full w-full z-0 overflow-hidden"}>
                      <div className="absolute box-border h-full w-full z-[4] left-0 top-0">
                        <div className="absolute box-border h-full w-full z-[1] left-0 top-0">
                          {feature.id === 'ready-out-of-box' && (
                            <div className="absolute box-border h-full translate-x-12 translate-y-[143.067px] origin-[0px_0px] w-full z-[2] scale-[0.813333px] left-0 top-0">
                              <div className="absolute box-border">
                                <img src="https://c.animaapp.com/meeyb686cF16we/assets/icon-19.svg" alt="Icon" className="absolute box-border z-0" />
                              </div>
                              <div className="absolute box-border h-full w-full left-0 top-0"></div>
                              <div className="absolute box-border h-full origin-[0px_0px] w-full left-0 top-0">
                                <div role="group" className="absolute text-xs font-bold bg-white box-border leading-[18px] text-center origin-[0px_0px] w-[150px] z-0 border border-gray-900 p-2.5 rounded-[3px] border-solid">
                                  Hello
                                  <div className="absolute bg-gray-900 box-border h-1.5 min-h-[5px] min-w-[5px] translate-x-[-3px] translate-y-[3px] w-1.5 border rounded-[100%] border-solid border-white left-2/4 bottom-0"></div>
                                </div>
                                <div role="group" className="absolute text-xs font-bold bg-white box-border leading-[18px] text-center translate-x-[150px] translate-y-[100px] origin-[0px_0px] w-[150px] z-0 border border-gray-900 p-2.5 rounded-[3px] border-solid">
                                  <div className="absolute bg-gray-900 box-border h-1.5 min-h-[5px] min-w-[5px] translate-x-[-3px] translate-y-[-3px] w-1.5 border rounded-[100%] border-solid border-white left-2/4 top-0"></div>
                                  World
                                  <div className="absolute bg-gray-900 box-border h-1.5 min-h-[5px] min-w-[5px] translate-x-[-3px] translate-y-[3px] w-1.5 border rounded-[100%] border-solid border-white left-2/4 bottom-0"></div>
                                </div>
                              </div>
                              <div className="absolute box-border h-full w-full left-0 top-0"></div>
                            </div>
                          )}
                          
                          {feature.id === 'powered-by-us' && (
                            <div className="absolute box-border h-full translate-x-[171px] translate-y-[200px] origin-[0px_0px] w-full z-[2] scale-[1.02242px] left-0 top-0">
                              <div className="absolute box-border"></div>
                              <div className="absolute box-border h-full w-full left-0 top-0"></div>
                              <div className="absolute box-border h-full origin-[0px_0px] w-full left-0 top-0">
                                <div role="group" className="absolute box-border translate-x-[-111.5px] translate-y-[-118.5px] origin-[0px_0px] z-0">
                                  <div className="bg-stone-900 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] box-border border border-gray-600 rounded-lg border-solid">
                                    <div className="text-gray-200 text-xs box-border leading-4 border-gray-700 px-4 py-2 border-b border-solid">Node Creator</div>
                                    <div className="box-border p-4">
                                      <form className="box-border">
                                        <label className="text-gray-400 text-xs box-border block leading-4 mb-1">Name</label>
                                        <input type="text" name="name" className="text-gray-400 text-xs bg-zinc-800 box-border leading-4 w-full border border-gray-700 px-4 py-2 rounded-bl rounded-br rounded-tl rounded-tr border-solid" />
                                        <label className="text-gray-400 text-xs box-border block leading-4 mt-2 mb-1">Shape</label>
                                        <button type="button" role="combobox" className="text-gray-400 text-xs items-center bg-zinc-800 flex h-10 justify-between leading-4 text-center w-full border border-gray-700 px-3 py-2 rounded-bl rounded-br rounded-tl rounded-tr border-solid">
                                          <span className="box-border block">Rectangle</span>
                                          <img src="https://c.animaapp.com/meeyb686cF16we/assets/icon-25.svg" alt="Icon" className="box-border h-4 opacity-50 w-4" />
                                        </button>
                                        <button type="submit" className="text-white text-xs bg-pink-600 leading-4 text-center w-full mt-4 px-4 py-2 rounded-md">Add</button>
                                      </form>
                                      <div className="absolute bg-gray-500 box-border h-2.5 min-h-[5px] min-w-[5px] -translate-x-2.5 translate-y-[5px] w-5 rounded-bl rounded-br rounded-tl rounded-tr left-2/4 bottom-0"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute box-border h-full w-full left-0 top-0"></div>
                            </div>
                          )}
                          
                          {feature.id === 'all-right-plugins' && (
                            <div className="absolute box-border h-full translate-x-7 translate-y-[183.771px] origin-[0px_0px] w-full z-[2] scale-[0.811429px] left-0 top-0">
                              <div className="absolute box-border">
                                <img src="https://c.animaapp.com/meeyb686cF16we/assets/icon-27.svg" alt="Icon" className="absolute box-border z-0" />
                                <img src="https://c.animaapp.com/meeyb686cF16we/assets/icon-28.svg" alt="Icon" className="absolute box-border z-0" />
                                <img src="https://c.animaapp.com/meeyb686cF16we/assets/icon-29.svg" alt="Icon" className="absolute box-border z-0" />
                              </div>
                              <div className="absolute box-border h-full w-full left-0 top-0"></div>
                              <div className="absolute box-border h-full origin-[0px_0px] w-full left-0 top-0">
                                <div role="group" className="absolute text-white text-xs font-bold bg-blue-600 box-border leading-[18px] text-center uppercase origin-[0px_0px] w-[50px] z-0 border p-2.5 rounded-[3px] border-solid border-white">
                                  A
                                  <div className="absolute bg-gray-900 box-border h-1.5 min-h-[5px] min-w-[5px] translate-x-[3px] translate-y-[-3px] w-1.5 border rounded-[100%] border-solid border-white right-0 top-2/4"></div>
                                </div>
                                <div role="group" className="absolute text-white text-xs font-bold bg-purple-600 box-border leading-[18px] text-center uppercase translate-x-[150px] translate-y-[-50px] origin-[0px_0px] w-[50px] z-0 border p-2.5 rounded-[3px] border-solid border-white">
                                  <div className="absolute bg-gray-900 box-border h-1.5 min-h-[5px] min-w-[5px] translate-x-[-3px] translate-y-[-3px] w-1.5 border rounded-[100%] border-solid border-white left-0 top-2/4"></div>
                                  B
                                  <div className="absolute bg-gray-900 box-border h-1.5 min-h-[5px] min-w-[5px] translate-x-[3px] translate-y-[-3px] w-1.5 border rounded-[100%] border-solid border-white right-0 top-2/4"></div>
                                </div>
                                <div role="group" className="absolute text-white text-xs font-bold bg-purple-600 box-border leading-[18px] text-center uppercase translate-x-[150px] translate-y-[50px] origin-[0px_0px] w-[50px] z-0 border p-2.5 rounded-[3px] border-solid border-white">
                                  <div className="absolute bg-gray-900 box-border h-1.5 min-h-[5px] min-w-[5px] translate-x-[-3px] translate-y-[-3px] w-1.5 border rounded-[100%] border-solid border-white left-0 top-2/4"></div>
                                  C
                                  <div className="absolute bg-gray-900 box-border h-1.5 min-h-[5px] min-w-[5px] translate-x-[3px] translate-y-[-3px] w-1.5 border rounded-[100%] border-solid border-white right-0 top-2/4"></div>
                                </div>
                                <div role="group" className="absolute text-white text-xs font-bold bg-pink-500 box-border leading-[18px] text-center uppercase translate-x-[300px] origin-[0px_0px] w-[50px] z-0 border p-2.5 rounded-[3px] border-solid border-white">
                                  <div className="absolute bg-gray-900 box-border h-1.5 min-h-[5px] min-w-[5px] translate-x-[-3px] translate-y-[-3px] w-1.5 border rounded-[100%] border-solid border-white left-0 top-2/4"></div>
                                  D
                                  <div className="absolute bg-gray-900 box-border h-1.5 min-h-[5px] min-w-[5px] translate-x-[3px] translate-y-[-3px] w-1.5 border rounded-[100%] border-solid border-white right-0 top-2/4"></div>
                                </div>
                              </div>
                              <div className="absolute box-border h-full w-full left-0 top-0"></div>
                            </div>
                          )}
                        </div>
                      </div>
                      <img src={feature.backgroundImage} alt="Icon" className="absolute box-border h-full w-full z-[-1] left-0 top-0" />
                      <div className="box-border hidden">Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.</div>
                      <div className="box-border hidden">Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.</div>
                    </div>
                  </div>
                  {feature.overlayElements && (
                    <div className="absolute bottom-[-18px] box-border hidden h-[18px] w-[18px] left-auto right-10 md:block md:left-2/4 md:right-auto">
                      <div className="absolute bg-gray-50 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] box-border h-7 transform-none w-10 rounded-b-full left-2/4 top-0 md:translate-x-[-50.0%]"></div>
                      <div className="absolute bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] box-border h-[18px] w-[18px] z-20 border-pink-600 rounded-full border-2 border-solid"></div>
                      <img src={feature.overlayImage} alt="Icon" className="absolute box-border h-[100px] w-[632px] right-2 top-2" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
