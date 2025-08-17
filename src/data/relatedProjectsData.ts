export interface RelatedProject {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly icon: string;
  readonly arrowIcon: string;
  readonly className: string;
  readonly iconClassName: string;
}

export const relatedProjectsData: RelatedProject[] = [
  {
    id: 'svelte-flow',
    title: 'Svelte Flow',
    description: 'A customizable Svelte component for building node-based editors and interactive diagrams',
    href: "https://svelteflow.dev/",
    icon: "https://c.animaapp.com/meeyb686cF16we/assets/icon-35.svg",
    arrowIcon: "https://c.animaapp.com/meeyb686cF16we/assets/icon-36.svg",
    className: "box-border block border-gray-100 px-8 py-10 border-r-0 border-b border-solid md:py-16 md:border-r",
    iconClassName: "text-orange-600 text-2xl box-border h-8 leading-8 w-8 mr-2 md:text-3xl md:leading-9"
  },
  {
    id: 'xyflow',
    title: 'xyflow',
    description: 'The team behind React Flow and Svelte Flow. Read updates and blog posts from us and about how we approach open source development.',
    href: 'https://xyflow.com/',
    icon: "https://c.animaapp.com/meeyb686cF16we/assets/icon-37.svg",
    arrowIcon: "https://c.animaapp.com/meeyb686cF16we/assets/icon-38.svg",
    className: "box-border block border-gray-100 px-8 py-10 border-b border-solid md:py-16",
    iconClassName: "text-black text-2xl box-border h-8 leading-8 w-8 mr-2 md:text-3xl md:leading-9"
  }
] as const;
