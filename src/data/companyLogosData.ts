export interface CompanyLogo {
  readonly id: string;
  readonly name: string;
  readonly logo: string;
  readonly className: string;
}

export const companyLogosData: CompanyLogo[] = [
  { id: 'zapier', name: 'zapier', logo: "https://c.animaapp.com/meeyb686cF16we/assets/zapier.b5b0dc13.svg", className: "text-transparent aspect-[auto_105_/_28] box-border h-7 max-w-full" },
  { id: 'stripe', name: 'stripe', logo: "https://c.animaapp.com/meeyb686cF16we/assets/stripe.af951a3e.svg", className: "text-transparent aspect-[auto_54_/_23] box-border h-7 max-w-full" },
  { id: 'carto', name: 'carto workflows', logo: "https://c.animaapp.com/meeyb686cF16we/assets/carto.d497813c.svg", className: "text-transparent aspect-[auto_78_/_30] box-border h-9 max-w-full" },
  { id: 'close', name: 'close', logo: "https://c.animaapp.com/meeyb686cF16we/assets/close.d4b07d68.svg", className: "text-transparent aspect-[auto_237_/_64] box-border h-7 max-w-full" },
  { id: 'railway', name: 'railway', logo: "https://c.animaapp.com/meeyb686cF16we/assets/railway.ab3a3093.svg", className: "text-transparent aspect-[auto_3733_/_1024] box-border h-9 max-w-full" },
  { id: 'retool', name: 'retool', logo: "https://c.animaapp.com/meeyb686cF16we/assets/retool.0d8c5632.svg", className: "text-transparent aspect-[auto_112_/_24] box-border h-6 max-w-full" },
  { id: 'doubleloop', name: 'doubleloop', logo: "https://c.animaapp.com/meeyb686cF16we/assets/doubleloop.30d66616.svg", className: "text-transparent aspect-[auto_128_/_24] box-border h-7 max-w-full" },
  { id: 'onesignal', name: 'onesignal', logo: "https://c.animaapp.com/meeyb686cF16we/assets/onesignal.ce83a95c.svg", className: "text-transparent aspect-[auto_172_/_40] box-border h-7 max-w-full" }
] as const;
