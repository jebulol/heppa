import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import Kisat from '@/views/Kisat.vue';

describe('Kisat.vue', () => {
  test('should display every race name in a title', async () => {
    const wrapper = mount(Kisat);
    await nextTick();

    const raceNames = wrapper.findAll('h2');
    // You should have an `h2` element per race in your template
    expect(raceNames).toHaveLength(2);
    expect(raceNames[0].text()).toContain('Vermo');
    expect(raceNames[1].text()).toContain('Killeri');
  });
});