export interface NewsArticle {
  readonly id: string;
  readonly date: string;
  readonly title: string;
  readonly link: string;
  readonly authors: readonly {
    readonly name: string;
    readonly link: string;
    readonly role: string;
  }[];
  readonly description: string;
  readonly className: string;
  readonly footer?: {
    readonly text: string;
  };
}

export const newsData: NewsArticle[] = [
  {
    id: 'react-flow-12-8-3',
    date: '3 days ago',
    title: 'React Flow 12.8.3',
    link: '/whats-new/2025-08-14',
    authors: [
      { name: 'xyflow team', link: "https://twitter.com/xyflowdev", role: '✌️' }
    ],
    description: 'Changelog for React Flow version 12.8.3',
    className: "items-center box-border flex row-end-[span_2] row-start-[span_2] h-full text-left px-4 py-8",
    footer: { text: 'Check it out here' }
  },
  {
    id: 'rebrush-ui',
    date: '1 month ago',
    title: 'Rebrush React Flow UI',
    link: '/whats-new/2025-07-14',
    authors: [
      { name: 'Alessandro Cheli', link: 'https://cheli.dev/', role: 'Software Engineer' },
      { name: 'Moritz Klack', link: "https://twitter.com/moklick", role: 'Co-Founder' }
    ],
    description: 'We have improved React Flow UI components to enhance their functionality and usability.',
    className: "box-border text-left border-gray-100 px-4 py-8 border-b border-solid"
  },
  {
    id: 'learn-section-rework',
    date: '1 month ago',
    title: 'Learn section rework',
    link: '/whats-new/2025-07-09',
    authors: [
      { name: 'xyflow team', link: "https://twitter.com/xyflowdev", role: '✌️' }
    ],
    description: 'We improved and restructured the learn section and reworked the code preview.',
    className: "box-border text-left px-4 py-8"
  }
] as const;
