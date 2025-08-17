export interface NavigationItem {
  readonly id: string;
  readonly label: string;
  readonly href?: string;
  readonly type?: 'link' | 'button';
  readonly items?: NavigationItem[];
  readonly component?: boolean;
}

export const navigationData = {
  mainNav: [
    { id: 'learn', label: 'Learn', href: '/learn' },
    { id: 'reference', label: 'Reference', href: '/api-reference' },
    { id: 'examples', label: 'Examples', href: '/examples' },
    { id: 'ui', label: 'UI', href: '/ui' },
    { id: 'showcase', label: 'Showcase', href: '/showcase' }
  ] as const,

  mobileMenu: [
    {
      id: 'learn',
      label: 'Learn',
      type: 'button' as const,
      items: [
        { id: 'quick-start', label: 'Quick Start', href: '/learn', type: 'link' as const },
        {
          id: 'core-concepts',
          label: 'Core Concepts',
          type: 'button' as const,
          items: [
            { id: 'overview', label: 'Overview', href: '/learn/concepts/terms-and-definitions' },
            { id: 'building-flow', label: 'Building a Flow', href: '/learn/concepts/building-a-flow' },
            { id: 'adding-interactivity', label: 'Adding Interactivity', href: '/learn/concepts/adding-interactivity' },
            { id: 'viewport', label: 'The Viewport', href: '/learn/concepts/the-viewport' },
            { id: 'built-in-components', label: 'Built-In Components', href: '/learn/concepts/built-in-components' }
          ]
        },
        {
          id: 'customization',
          label: 'Customization',
          type: 'button' as const,
          items: [
            { id: 'nodes', label: 'Nodes', href: '/learn/customization/custom-nodes' },
            { id: 'handles', label: 'Handles', href: '/learn/customization/handles' },
            { id: 'edges', label: 'Edges', href: '/learn/customization/custom-edges' },
            { id: 'edge-labels', label: 'Edge Labels', href: '/learn/customization/edge-labels' },
            { id: 'utility-classes', label: 'Utility Classes', href: '/learn/customization/utility-classes' },
            { id: 'theming', label: 'Theming', href: '/learn/customization/theming' }
          ]
        },
        {
          id: 'layouting',
          label: 'Layouting',
          type: 'button' as const,
          items: [
            { id: 'overview', label: 'Overview', href: '/learn/layouting/layouting' },
            { id: 'sub-flows', label: 'Sub Flows', href: '/learn/layouting/sub-flows' }
          ]
        },
        {
          id: 'advanced-use',
          label: 'Advanced Use',
          type: 'button' as const,
          items: [
            { id: 'hooks-providers', label: 'Hooks and Providers', href: '/learn/advanced-use/hooks-providers' },
            { id: 'accessibility', label: 'Accessibility', href: '/learn/advanced-use/accessibility' },
            { id: 'testing', label: 'Testing', href: '/learn/advanced-use/testing' },
            { id: 'typescript', label: 'TypeScript', href: '/learn/advanced-use/typescript' },
            { id: 'uncontrolled-flow', label: 'Uncontrolled Flow', href: '/learn/advanced-use/uncontrolled-flow' },
            { id: 'performance', label: 'Performance', href: '/learn/advanced-use/performance' },
            { id: 'state-management', label: 'State Management', href: '/learn/advanced-use/state-management' },
            { id: 'computing-flows', label: 'Computing Flows', href: '/learn/advanced-use/computing-flows' },
            { id: 'ssr-ssg', label: 'Server Side Rendering', href: '/learn/advanced-use/ssr-ssg-configuration' },
            { id: 'devtools', label: 'Devtools', href: '/learn/advanced-use/devtools-and-debugging' },
            { id: 'whiteboard', label: 'Whiteboard Features', href: '/learn/advanced-use/whiteboard' }
          ]
        },
        {
          id: 'tutorials',
          label: 'Tutorials',
          type: 'button' as const,
          items: [
            { id: 'slideshow', label: 'Slideshow App', href: '/learn/tutorials/slide-shows-with-react-flow' },
            { id: 'web-audio', label: 'Web Audio API', href: '/learn/tutorials/react-flow-and-the-web-audio-api' },
            { id: 'mind-map', label: 'Mind Map App', href: '/learn/tutorials/mind-map-app-with-react-flow' },
            { id: 'react-flow-ui', label: 'React Flow UI', href: '/learn/tutorials/getting-started-with-react-flow-components' }
          ]
        },
        {
          id: 'troubleshooting',
          label: 'Troubleshooting',
          type: 'button' as const,
          items: [
            { id: 'common-errors', label: 'Common Errors', href: '/learn/troubleshooting/common-errors' },
            { id: 'remove-attribution', label: 'Remove Attribution', href: '/learn/troubleshooting/remove-attribution' },
            { id: 'migrate-v12', label: 'Migrate to v12', href: '/learn/troubleshooting/migrate-to-v12' },
            { id: 'migrate-v11', label: 'Migrate to v11', href: '/learn/troubleshooting/migrate-to-v11' },
            { id: 'migrate-v10', label: 'Migrate to v10', href: '/learn/troubleshooting/migrate-to-v10' }
          ]
        },
        { id: 'api-reference', label: 'API Reference', href: '/api-reference', type: 'link' as const }
      ]
    }
  ] as const
} as const;
