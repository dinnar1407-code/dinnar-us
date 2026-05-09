import type { LucideIcon } from 'lucide-react';
import { Brain, Cpu, Database, Eye, Gauge, Workflow } from 'lucide-react';

export type Capability = { key: string; icon: LucideIcon; accent: string };

export const capabilities: Capability[] = [
  { key: 'vision', icon: Eye, accent: 'from-accent-400 to-accent-600' },
  { key: 'ai', icon: Brain, accent: 'from-signal-400 to-accent-500' },
  { key: 'motion', icon: Workflow, accent: 'from-accent-300 to-signal-500' },
  { key: 'metrology', icon: Gauge, accent: 'from-accent-500 to-accent-300' },
  { key: 'data', icon: Database, accent: 'from-signal-500 to-accent-400' },
  { key: 'ops', icon: Cpu, accent: 'from-accent-400 to-signal-400' },
];
