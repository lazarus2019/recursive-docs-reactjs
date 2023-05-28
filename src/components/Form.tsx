import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formDocsSchema = z.object({
  title: z.string().min(2, { message: 'Title is required' }),
});

type TFormDocsSchema = z.infer<typeof formDocsSchema>;

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
    },
    resolver: zodResolver(formDocsSchema),
  });

  const onSubmit = (data: TFormDocsSchema) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.title}>
        <FormLabel>Name</FormLabel>
        <Input {...register('title')} />
        {errors.title && (
          <FormErrorMessage>{errors.title.message}</FormErrorMessage>
        )}
      </FormControl>
      <Button type='submit'>Create</Button>
    </form>
  );
}

export default Form;
