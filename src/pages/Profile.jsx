import Button from '@/components/Button';
import Layout from '@/components/Layout';

const Profile = () => (
  <Layout>
    <h2>🙂 Profile</h2>

    <div className='my-8 flex flex-col items-center'>
      <img
        src='https://ui-avatars.com/api/?name=Mark&background=random'
        alt='My avatar'
        className='mb-3 w-16 rounded-xl'
      />

      <h2>Mark zukiberh</h2>

      <h3 className='mb-8'>mark@facebook.com</h3>

      <Button>Log out</Button>
    </div>
  </Layout>
);

export default Profile;
