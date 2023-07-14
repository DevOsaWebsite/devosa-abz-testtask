import { getPositions } from '@/lib/users';
import { RadioGroup } from './fields/RadioGroup';

export const RadioButtons = async () => {
  const data = await getPositions();
  const { positions } = await data;
  console.log(positions);

  return <RadioGroup buttons={positions} label={'Select your position'} />;
};
