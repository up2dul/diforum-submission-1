import Button from '@/components/Button';
import Layout from '@/components/Layout';

const Profile = () => (
  <Layout>
    <h1>🙂 Profile</h1>

    <div className='my-8 flex flex-col items-center gap-y-3'>
      <img
        src='https://ui-avatars.com/api/?name=Mark&background=random'
        alt='My ava'
        className='w-16 rounded-xl'
      />

      <h1>Mark zukiberh</h1>

      <h2 className='mb-8'>mark@facebook.com</h2>

      <Button>Log out</Button>
    </div>
  </Layout>
);

export default Profile;
