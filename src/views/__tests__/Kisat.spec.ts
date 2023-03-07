import { describe, expect, test } from 'vitest';
import { flushPromises, mount } from '@vue/test-utils';
import Kisat from '@/views/Kisat.vue';
import Kisa from '@/components/Kisa.vue';

describe('Kisat.vue', () => {
  test('should display every race name in a title', async () => {
    const wrapper = mount(Kisat);
    await flushPromises();

    const kisaKomponentit = wrapper.findAllComponents(Kisa);
    // You should have a `Kisa` component per race in your template
    expect(kisaKomponentit).toHaveLength(2);
  });
});
