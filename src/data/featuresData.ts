export interface FeatureItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly ctaText: string;
  readonly ctaLink: string;
  readonly layout: 'left' | 'right' | 'plugins';
  readonly backgroundImage: string;
  readonly demoContent?: string;
  readonly overlayElements?: boolean;
  readonly overlayImage?: string;
}

export const featuresData: FeatureItem[] = [
  {
    id: 'ready-out-of-box',
    title: 'Ready out-of-the-box',
    description: 'The things you need are already there: dragging nodes, zooming, panning, selecting multiple nodes, and adding/removing elements are all built-in.',
    ctaText: 'Get started',
    ctaLink: '/learn',
    layout: 'left',
    backgroundImage: "https://c.animaapp.com/meeyb686cF16we/assets/icon-20.svg",
    overlayElements: true,
    overlayImage: "https://c.animaapp.com/meeyb686cF16we/assets/icon-24.svg"
  },
  {
    id: 'powered-by-us',
    title: 'Powered by us.<br />Designed by you.',
    description: 'React Flow nodes are simply React components, ready for your interactive elements. We play nice with Tailwind and plain old CSS.',
    ctaText: 'Custom nodes guide',
    ctaLink: '/learn/customization/custom-nodes',
    layout: 'right',
    backgroundImage: "https://c.animaapp.com/meeyb686cF16we/assets/icon-26.svg",
    overlayElements: true,
    overlayImage: "https://c.animaapp.com/meeyb686cF16we/assets/icon-26.svg"
  },
  {
    id: 'all-right-plugins',
    title: 'All the right plugins',
    description: 'Make more advanced apps with the Background, Minimap, Controls, Panel, NodeToolbar, and NodeResizer components.',
    ctaText: 'Read more',
    ctaLink: '/learn/concepts/built-in-components',
    layout: 'plugins',
    backgroundImage: "https://c.animaapp.com/meeyb686cF16we/assets/icon-30.svg"
  }
] as const;
