import React from 'react';
import { relatedProjectsData } from '../../data/relatedProjectsData';

export function RelatedProjectsSection() {
  return (
    <div className="box-border grid grid-cols-[repeat(1,minmax(0px,1fr))] border-gray-100 mt-16 border-t border-solid md:grid-cols-[repeat(2,minmax(0px,1fr))] md:mt-24">
      {relatedProjectsData.map((project) => (
        <a key={project.id} href={project.href} className={project.className}>
          <h2 className="text-2xl font-bold items-center box-border flex tracking-[-0.32px] leading-8 md:text-3xl md:leading-9">
            <div className={project.iconClassName}>
              <img src={project.icon} alt="Icon" className="text-2xl box-border h-full leading-8 w-full md:text-3xl md:leading-9" />
            </div>
            {project.title}
          </h2>
          <p className="text-neutral-500 box-border leading-[26px] mt-2 mb-4">{project.description}</p>
          <span className="text-orange-600 items-center box-border flex">
            Visit Website
            <img src={project.arrowIcon} alt="Icon" className="box-border h-4 w-4 ml-1" />
          </span>
        </a>
      ))}
    </div>
  );
}
