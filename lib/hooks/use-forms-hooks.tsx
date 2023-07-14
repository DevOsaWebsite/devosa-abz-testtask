import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { postUserRools } from '@/app/api/(utils)/rools';

const defaultValues: UserPostInit = {
  name: '',
  phone: '',
  email: '',
  position_id: '',
  photo: '',
};

export const usePostUserForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isLoading, isValid, isSubmitSuccessful },
  } = useForm<UserPostInit>({
    mode: 'onSubmit',
    defaultValues,
    resolver: yupResolver(postUserRools),
  });

  const onSubmit: SubmitHandler<UserPostInit> = data => {};
  const onReset = () => reset(defaultValues);
  return {
    control,
    handleSubmit,
    onSubmit,
    onReset,
    errors,
    isDirty,
    isLoading,
    isValid,
    isSubmitSuccessful,
  };
};
