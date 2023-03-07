import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '@/App.vue';
import Navbar from '@/components/Navbar.vue';
import Kisat from '@/views/Kisat.vue';

describe('App.vue', () => {
  test('renders a title', () => {
    const wrapper = mount(App);
    expect(wrapper.get('h1').text()).toBe('Poniralli');
  });
});
test('renders the navbar', () => {
  const wrapper = mount(App);
  const navbar = wrapper.findComponent(Navbar);
  // Maybe you forgot to add <Navbar/> in your App.vue component
  expect(navbar.exists()).toBe(true);
});

test('renders the kisat list', () => {
  const wrapper = mount(App);
  const kisat = wrapper.findComponent(Kisat);
  // Maybe you forgot to add <Kisat/> in your App.vue component
  expect(kisat.exists()).toBe(true);
});
