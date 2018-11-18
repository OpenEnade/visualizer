import { shallowMount } from '@vue/test-utils';
import PageHeader from '@/components/PageHeader.vue';

describe('PageHeader.vue', () => {
  it('renders props.description when passed', () => {
    const description = 'Plataforma aberta para consulta dos dados do Exame Nacional de Desempenho de Estudantes';
    const wrapper = shallowMount(PageHeader, {
      propsData: { description },
    });
    expect(wrapper.text()).toMatch(description);
  });
});