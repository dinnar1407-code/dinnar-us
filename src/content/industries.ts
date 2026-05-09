// AUTO-GENERATED industries metadata.
import type { LucideIcon } from 'lucide-react';
import { Battery, Boxes, Cpu, Microscope, Monitor } from 'lucide-react';

export type Industry = {
  slug: 'electron' | 'energy' | 'semiconductor' | 'display' | 'other';
  i18nKey: string;
  icon: LucideIcon;
  image: string;
};

export const industries: Industry[] = [
  { slug: 'electron', i18nKey: 'electron', icon: Cpu, image: '/images/industry-electron.svg' },
  { slug: 'energy', i18nKey: 'energy', icon: Battery, image: '/images/industry-energy.svg' },
  { slug: 'semiconductor', i18nKey: 'semiconductor', icon: Microscope, image: '/images/industry-semiconductor.svg' },
  { slug: 'display', i18nKey: 'display', icon: Monitor, image: '/images/industry-display.svg' },
  { slug: 'other', i18nKey: 'other', icon: Boxes, image: '/images/industry-other.svg' },
];

export const industriesBySlug = new Map(industries.map((i) => [i.slug, i]));
