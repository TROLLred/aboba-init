/* eslint-disable @conarti/feature-sliced/public-api */
import croissant from '@images/croissant2.png';
import { CardWrapperUI, Tabs } from '@shared/ui';
import { BannerUI } from '@shared/ui/BannerUI/BannerUI';
import { NewsList } from '@shared/ui/NewsCard/NewsList';
import { NotificationsUI } from '@shared/ui/NotificationsUI/NotificationsUI';
import { Tags } from '@shared/ui/Tags';
import { TaskCards } from '@shared/ui/TaskCard/TaskCards';
import { TaskCardsStatuses } from '@shared/ui/TaskCard/TaskCardsStatuses';
import { LoyaltyPanel } from '@widgets/Loyalty';
import { Faq } from '@widgets/Loyalty/ui/Faq/Faq';
import { WidgetsSlider } from '@widgets/Loyalty/ui/WidgetsSlider/WidgetsSlider';
import { PageScroller } from '@widgets/PageScroller/PageScroller';
import { StoriesSlider } from '@widgets/Stories/ui/StoriesSlider/StoriesSlider';
import Icon from '@icons/blow.svg?react';
import { Accordion } from '@shared/ui/Accordion/Accordion';

export const MainPage = () => (
  <PageScroller head={<LoyaltyPanel />}>
    <div>
      <Accordion initialActiveIndex={0}>
        <Accordion.Item index={0}>
          <>
            <Accordion.Head>1</Accordion.Head>
            <Accordion.Panel>
              lorem ipsum dolor lorem ipsum dolorlorem ipsum dolorlorem ipsum
              dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem
              ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum
              dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem
              ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum
              dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem
              ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum
              dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem
              ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum
              dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolor
            </Accordion.Panel>
          </>
        </Accordion.Item>
        <Accordion.Item index={1}>
          <>
            <Accordion.Head>2</Accordion.Head>
            <Accordion.Panel>
              lorem ipsum dolor lorem ipsum dolorlorem ipsum dolorlorem ipsum
              dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem
              ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum
              dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem
              ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum
              dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem
              ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum
              dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem
              ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum
              dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolor
            </Accordion.Panel>
          </>
        </Accordion.Item>
      </Accordion>
      <WidgetsSlider />
      <BannerUI
        title={'Открытие новой пекарни в ЖК Скандинавия '}
        preview={{
          alt: 'Круассаныч на нямнямычах',
          src: croissant,
        }}
        button={{
          text: 'Подробнее',
          href: '#',
        }}
      />
      <StoriesSlider />
      <Tags
        tabs={[
          {
            label: 'Задания',
          },
          {
            label: 'Новости',
          },
          {
            label: 'Уведомления',
          },
        ]}
        panels={[
          <Tabs
            key={0}
            tabs={[
              {
                label: 'Все задания',
              },
              {
                label: 'Мои задания',
              },
            ]}
            panels={[<TaskCards key={0} />, <TaskCardsStatuses key={1} />]}
          />,
          <CardWrapperUI key={1}>
            <NewsList />
          </CardWrapperUI>,
          <NotificationsUI key={2} />,
        ]}
      />
    </div>
  </PageScroller>
);
