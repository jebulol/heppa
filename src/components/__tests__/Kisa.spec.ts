import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import Kisa from '@/components/Kisa.vue';
import { KisaMalli } from '@/models/KisaMalli';

describe('Kisa.vue', () => {
  test('should display a race name and its ponies', () => {
    const kisaMalli = {
      id: 12,
      name: 'Vermo',
      ponit: [
        { id: 1, name: 'Gentle Pie', color: 'YELLOW' },
        { id: 2, name: 'Big Soda', color: 'ORANGE' },
        { id: 3, name: 'Gentle Bottle', color: 'PURPLE' },
        { id: 4, name: 'Superb Whiskey', color: 'GREEN' },
        { id: 5, name: 'Fast Rainbow', color: 'BLUE' }
      ],
      startInstant: '2024-02-18T08:02:00Z'
    } as KisaMalli;

    const wrapper = mount(Kisa, {
      props: {
        kisaMalli
      }
    });

    // You need an h2 element for the race name
    const raceName = wrapper.get('h2');
    // The h2 element should contain the race name
    expect(raceName.text()).toContain('Vermo');
    const ponit = wrapper.findAll('li');
    // You should have one li elements per pony
    expect(ponit).toHaveLength(5);
    expect(ponit[0].text()).toContain('Gentle Pie');
    expect(ponit[1].text()).toContain('Big Soda');
    expect(ponit[2].text()).toContain('Gentle Bottle');
    expect(ponit[3].text()).toContain('Superb Whiskey');
    expect(ponit[4].text()).toContain('Fast Rainbow');
  });
});
