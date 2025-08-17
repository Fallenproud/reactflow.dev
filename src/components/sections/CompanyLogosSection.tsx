import React from 'react';
import { companyLogosData } from '../../data/companyLogosData';

export function CompanyLogosSection() {
  return (
    <div className="box-border my-16 md:my-24">
      <div className="items-center box-border flex flex-col w-full">
        <p className="text-neutral-500 box-border leading-[26px] mb-8">Used By</p>
        <div className="items-center box-border gap-x-8 grid grid-cols-[repeat(2,minmax(0px,1fr))] justify-items-center gap-y-8 md:gap-x-12 md:grid-cols-[repeat(4,minmax(0px,1fr))] md:gap-y-12">
          {companyLogosData.map((company) => (
            <img
              key={company.id}
              alt={company.name}
              src={company.logo}
              className={company.className}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
