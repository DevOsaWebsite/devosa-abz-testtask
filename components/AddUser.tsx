import { SectionLayout } from './design';

import { CONTENT } from '@/lib/data';
import { RadioButtons } from './forms/RadioButtons';
const heading = CONTENT.addUsersSection.heading;

export const AddUser = () => {
  return (
    <SectionLayout heading={heading}>
      {/* @ts-expect-error */}
      <RadioButtons />
    </SectionLayout>
  );
};
