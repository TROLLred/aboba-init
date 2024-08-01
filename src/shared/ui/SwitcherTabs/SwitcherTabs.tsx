import { Tabs } from '../Tabs';

import { Switcher } from './Switcher';

export const SwitcherTabs = () => (
  <div>
    <Tabs
      tabs={[
        {
          label: 'Все',
        },
        {
          label: 'А101',
        },
        {
          label: 'Партнеры',
        },
      ]}
      panels={[
        <Switcher
          key={0}
          title='Только А101 и избранные партнеры'
          description='Видны новости только от А101 и избранных партнеров'
          withSwitcher={true}
        />,
        <Switcher
          key={1}
          description='Видны новости только от А101'
        />,
        <Switcher
          key={2}
          title='Только избранные партнеры'
          description='Видны новости только от избранных партнеров'
          withSwitcher={true}
        />,
      ]}
    />
  </div>
);
