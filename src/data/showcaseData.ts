export interface ShowcaseProject {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly image?: string;
  readonly tabClassName: string;
  readonly indicatorClassName: string;
  readonly contentClassName: string;
}

export const showcaseData: ShowcaseProject[] = [
  {
    id: 'stripe',
    name: 'Stripe Docs',
    description: 'Diagrams for process documentation with interactive nodes',
    tabClassName: "bg-transparent hidden flex-col min-h-0 min-w-0 text-center w-full mr-2 -mb-px px-2 py-0 md:flex md:min-h-[auto] md:min-w-[auto]",
    indicatorClassName: "bg-black/20 box-border h-1.5 min-h-0 min-w-0 w-full rounded-bl rounded-br rounded-tl rounded-tr md:min-h-[auto] md:min-w-[auto]",
    contentClassName: "text-slate-100 box-border min-h-0 min-w-0 opacity-40 px-2 md:min-h-[auto] md:min-w-[auto] md:px-4"
  },
  {
    id: 'doubleloop',
    name: 'DoubleLoop',
    description: 'Node-based dashboard builder to monitor business metrics',
    image: "https://c.animaapp.com/meeyb686cF16we/assets/22.png",
    tabClassName: "text-white bg-transparent hidden flex-col min-h-0 min-w-0 text-center w-full mr-2 -mb-px px-2 py-0 md:text-pink-600 md:flex md:min-h-[auto] md:min-w-[auto]",
    indicatorClassName: "text-white bg-black/20 box-border h-1.5 min-h-0 min-w-0 w-full rounded-bl rounded-br rounded-tl rounded-tr md:text-pink-600 md:min-h-[auto] md:min-w-[auto]",
    contentClassName: "text-slate-100 box-border min-h-0 min-w-0 opacity-40 px-2 md:min-h-[auto] md:min-w-[auto] md:opacity-100 md:px-4"
  },
  {
    id: 'typeform',
    name: 'TypeForm',
    description: 'Interactive tool to build and visualize complex survey logic',
    image: "https://c.animaapp.com/meeyb686cF16we/assets/21.png",
    tabClassName: "text-pink-600 bg-transparent flex flex-col text-center w-full mr-2 -mb-px px-2 py-0 md:text-white",
    indicatorClassName: "text-pink-600 bg-black/20 box-border h-1.5 w-full rounded-bl rounded-br rounded-tl rounded-tr md:text-white",
    contentClassName: "text-slate-100 box-border opacity-100 px-2 md:opacity-40 md:px-4"
  }
] as const;
