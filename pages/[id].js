import Layout from '../components/layout/Layout';
import { getRoomDetails } from '../redux/actions/roomActions';
import { wrapper } from '../redux/store';
import RoomDetails from '../components/rooms/RoomDetails';

export default function RoomDetailsPage() {
  return (
    <Layout>
      <RoomDetails title="Room Details" />
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ req, params, store }) => {
  await store.dispatch(getRoomDetails(req, params.id));
});
