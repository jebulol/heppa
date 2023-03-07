import { PoniMalli } from './PoniMalli';

export interface KisaMalli {
  id: number;
  name: string;
  ponies: Array<PoniMalli>;
  startInstant: string;
}
