export interface StatItem {
  readonly id: string;
  readonly value: string;
  readonly label: string;
}

export const statsData: StatItem[] = [
  { id: 'github-stars', value: '31.0K', label: 'Github Stars' },
  { id: 'weekly-installs', value: '1.96M', label: 'Weekly Installs' },
  { id: 'license', value: 'MIT', label: 'License' }
] as const;
