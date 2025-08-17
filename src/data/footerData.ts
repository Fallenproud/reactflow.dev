export interface FooterSection {
  readonly id: string;
  readonly title: string;
  readonly links: readonly {
    readonly id: string;
    readonly label: string;
    readonly href: string;
  }[];
}

export interface FooterData {
  readonly sections: readonly FooterSection[];
}

export const footerData: FooterData = {
  sections: [
    {
      id: 'docs',
      title: 'Docs',
      links: [
        { id: 'getting-started', label: 'Getting Started', href: '/learn' },
        { id: 'api-reference', label: 'API Reference', href: '/api-reference' },
        { id: 'examples', label: 'Examples', href: '/examples' },
        { id: 'components', label: 'Components', href: '/components' },
        { id: 'showcase', label: 'Showcase', href: '/showcase' },
        { id: 'playground', label: 'Playground', href: "https://play.reactflow.dev/" }
      ]
    },
    {
      id: 'social',
      title: 'Social',
      links: [
        { id: 'discord', label: 'Discord', href: "https://discord.gg/RVmnytFmGW" },
        { id: 'github', label: 'Github', href: "https://github.com/xyflow" },
        { id: 'twitter', label: 'X / Twitter', href: "https://x.com/xyflowdev" },
        { id: 'bluesky', label: 'Bluesky', href: "https://bsky.app/profile/xyflow.com" }
      ]
    },
    {
      id: 'xyflow',
      title: 'xyflow',
      links: [
        { id: 'blog', label: 'Blog', href: "https://xyflow.com/blog" },
        { id: 'open-source', label: 'Open Source', href: "https://xyflow.com/open-source" },
        { id: 'about', label: 'About', href: "https://xyflow.com/about" },
        { id: 'contact', label: 'Contact', href: "https://xyflow.com/contact" },
        { id: 'careers', label: 'Careers', href: "https://xyflow.com/careers" }
      ]
    },
    {
      id: 'legal',
      title: 'Legal',
      links: [
        { id: 'license', label: 'MIT License', href: "https://github.com/xyflow/xyflow/blob/main/LICENSE" },
        { id: 'code-of-conduct', label: 'Code of Conduct', href: "https://github.com/xyflow/xyflow/blob/main/CODE_OF_CONDUCT.md" },
        { id: 'imprint', label: 'Imprint', href: "https://xyflow.com/imprint" }
      ]
    }
  ]
} as const;
