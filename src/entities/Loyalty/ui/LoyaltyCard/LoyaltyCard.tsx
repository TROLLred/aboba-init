import { TypographyUI } from '@shared/ui';

export const LoyaltyCard = () => {
  return (
    <div>
      <div>
        <TypographyUI.Title1 weight='bold'>100</TypographyUI.Title1>
        <TypographyUI.Subheadline weight='regular'>
          бонусов
        </TypographyUI.Subheadline>
      </div>
      <div>
        <TypographyUI.Title1 weight='regular'>
          Почетный сосед
        </TypographyUI.Title1>
        <TypographyUI.Subheadline weight='regular'>
          уровень
        </TypographyUI.Subheadline>
      </div>
    </div>
  );
};
