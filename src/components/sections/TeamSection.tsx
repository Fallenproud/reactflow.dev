import React from 'react';
import { teamData } from '../../data/teamData';

export function TeamSection() {
  return (
    <div className="box-border my-16 md:my-24">
      <h2 className="text-2xl font-bold box-border tracking-[-0.32px] leading-8 text-center mb-2 md:text-3xl md:leading-9">A project by the xyflow team</h2>
      <p className="text-neutral-500 box-border leading-[26px] max-w-xl text-center mb-6 mx-auto">
        We are Christopher, Peter, Abbey and Moritz. We are the maintainers of React Flow, Svelte Flow, and the communities around them
      </p>
      <div className="box-border flex flex-wrap justify-center mb-16">
        {teamData.links.map((link, index) => (
          <a
            key={link.id}
            href={link.href}
            className={index === 0 ? "text-pink-600 text-sm items-center shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px] box-border flex h-9 justify-center leading-5 underline-offset-4 py-2 rounded-full" : "text-pink-600 text-sm items-center shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px] box-border flex h-9 justify-center leading-5 underline-offset-4 ml-8 py-2 rounded-full"}
          >
            {link.label}
            <img src="https://c.animaapp.com/meeyb686cF16we/assets/icon-34.svg" alt="Icon" className="box-border h-4 w-4 ml-1" />
          </a>
        ))}
      </div>
    </div>
  );
}
