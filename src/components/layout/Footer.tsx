import React from 'react';
import { footerData } from '../../data/footerData';

export function Footer() {
  return (
    <footer className="text-white bg-black box-border py-12">
      <div className="box-border block max-w-[1440px] mx-auto px-6 md:flex">
        <div className="box-border shrink-0 max-w-none min-h-0 min-w-0 mr-0 md:max-w-[300px] md:min-h-[auto] md:min-w-[auto] md:mr-24">
          <p className="text-neutral-500 box-border leading-[26px] mb-2">A project by the xyflow team</p>
          <div className="text-3xl font-black box-border tracking-[-0.75px] leading-[30px] mb-6 md:mb-10">
            We are building and maintaining open source software for node-based UIs since 2019.
          </div>
        </div>
        
        <div className="box-border grow min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          <div className="box-border flex flex-col grow h-full">
            <div className="box-border grid grid-cols-[repeat(2,minmax(0px,1fr))] md:grid-cols-[repeat(4,minmax(0px,1fr))]">
              {footerData.sections.map((section) => (
                <div key={section.id} className="box-border mt-4 md:mt-0">
                  <p className="text-neutral-500 box-border leading-[26px] mb-2">{section.title}</p>
                  {section.links.map((link) => (
                    <a key={link.id} href={link.href} className="box-border block">
                      {link.label}
                    </a>
                  ))}
                </div>
              ))}
            </div>
            
            <p className="text-neutral-500 text-sm box-border leading-5 mt-auto pt-6">
              <a href="mailto://info@xyflow.com" className="box-border">info@xyflow.com</a>
              — Copyright ©2025
              <a href="https://webkid.io/" className="box-border">webkid GmbH</a>
              . All rights reserved— website design by
              <a href="https://facumontanaro.com/" className="box-border">Facu Montanaro</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
