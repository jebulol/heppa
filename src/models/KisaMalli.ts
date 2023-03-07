import { PoniMalli } from './PoniMalli';

export interface KisaMalli {
  id: number;
  name: string;
  ponit: Array<PoniMalli>;
  startInstant: string;
}
