import React, { useState } from 'react';
import { showcaseData } from '../../data/showcaseData';

export function ShowcaseSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="text-white bg-black box-border flex border border-gray-700 p-2 rounded-3xl border-solid">
      <div className="relative bg-[linear-gradient(to_right_bottom,rgb(0,0,0)_15%,rgb(49,28,51)_65%,rgb(28,24,38))] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] box-border grow border border-gray-700 overflow-hidden rounded-[22px] border-solid">
        <div className="box-border p-4 md:p-14">
          <div className="box-border gap-x-[normal] grid grid-cols-none gap-y-[normal] md:gap-x-40 md:grid-cols-[repeat(2,minmax(0px,1fr))] md:gap-y-40">
            <div className="box-border">
              <p className="text-pink-600 font-bold box-border tracking-[0.4px] leading-[26px] mb-2">Project Showcase</p>
              <h2 className="text-5xl font-black box-border leading-[48px] mb-4 md:text-6xl md:leading-[60px]">Used by thousands of people</h2>
            </div>
            <div className="box-border">
              <p className="box-border leading-[26px] my-4">
                From solo open-source developers, to companies like Stripe and
                Typeform. We've seen the library used for data processing tools,
                chatbot builders, machine learning, musical synthesizers, and
                more.
              </p>
              <a href="/showcase" className="text-pink-600 text-sm font-bold items-center bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] box-border inline-flex h-9 justify-center leading-5 border border-gray-100 px-6 py-2 rounded-full border-solid">See all projects</a>
            </div>
          </div>
          
          <div className="box-border mt-8">
            <div className="relative box-border">
              <div className="relative aspect-video box-border h-auto mx-auto md:aspect-auto md:h-[400px]">
                {showcaseData.map((project, index) => (
                  <div
                    key={project.id}
                    role="tabpanel"
                    className="absolute box-border h-full w-full"
                    style={{ display: activeTab === index ? 'block' : 'none' }}
                  >
                    {project.image && (
                      <div className="relative box-border h-full opacity-0 md:opacity-100">
                        <img
                          alt={project.name}
                          sizes="100vw"
                          src={project.image}
                          className="absolute text-transparent box-border h-full max-w-full object-cover w-full rounded-xl inset-0"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div role="tablist" className="box-border gap-x-8 flex justify-around gap-y-8 mt-8 mb-4">
                {showcaseData.map((project, index) => (
                  <button
                    key={project.id}
                    type="button"
                    role="tab"
                    className={project.tabClassName}
                    onClick={() => setActiveTab(index)}
                  >
                    <div className={project.indicatorClassName}></div>
                    <div className={project.contentClassName}>
                      <p className="box-border leading-[26px] my-2">{project.name}</p>
                      <p className="box-border leading-[22px] opacity-80">{project.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
