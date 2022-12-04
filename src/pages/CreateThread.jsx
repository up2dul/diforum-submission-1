import Button from '@/components/Button';
import Layout from '@/components/Layout';
import Input from '@/components/Input';

const CreateThread = () => (
  <Layout>
    <h2>✍️ Create a new thread</h2>

    <form className='mx-auto mt-8 flex max-w-sm flex-col items-center justify-center gap-y-6'>
      <Input title='Title' type='text' placeholder='e.g. Hello world!' id='titleInput' />

      <Input title='Category' type='text' placeholder='e.g. technology' id='categoryInput' />

      <Input
        title='Thread content'
        type='textarea'
        placeholder='Your thread content here...'
        id='threadContentInput'
      />

      <Button type='submit'>Create thread</Button>
    </form>
  </Layout>
);

export default CreateThread;
