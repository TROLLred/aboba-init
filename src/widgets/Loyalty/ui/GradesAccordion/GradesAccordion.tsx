import { TypographyUI } from '@shared/ui';
import { Accordion } from '@shared/ui/Accordion/Accordion';

interface GradesAccordionProps {}

export const GradesAccordion: React.FC<GradesAccordionProps> = () => {
  const grades = [
    {
      title: 'Новичок',
    },
    {
      title: 'Почетный сосед',
    },
    {
      title: 'Чемпион двора',
    },
    {
      title: 'Лидер района',
    },
    {
      title: 'Старейшина',
    },
  ];
  return (
    <Accordion>
      {grades.map((grade, i) => (
        <Accordion.Item
          index={i}
          key={i}
        >
          <Accordion.Head>
            <TypographyUI.Title4 weight='regular'>
              {grade.title}
            </TypographyUI.Title4>
          </Accordion.Head>
          <Accordion.Panel></Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};
