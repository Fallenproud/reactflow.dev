export interface TeamData {
  readonly links: readonly {
    readonly id: string;
    readonly label: string;
    readonly href: string;
  }[];
}

export const teamData: TeamData = {
  links: [
    { id: 'blog', label: 'Blog', href: "https://xyflow.com/blog" },
    { id: 'about', label: 'About us', href: "https://xyflow.com/about" },
    { id: 'open-source', label: 'Open Source', href: "https://xyflow.com/open-source" },
    { id: 'contact', label: 'Contact Us', href: "https://xyflow.com/contact" }
  ]
} as const;
