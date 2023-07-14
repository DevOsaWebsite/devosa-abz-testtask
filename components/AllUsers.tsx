import { CONTENT } from '@/lib/data';
import { CardsSection } from './Users/CardsSection';
import { SectionLayout } from './design';

const heading = CONTENT.usersGetSection.heading;

export const AllUsers = () => {
  return (
    <SectionLayout heading={heading}>
      <CardsSection />
    </SectionLayout>
  );
};
