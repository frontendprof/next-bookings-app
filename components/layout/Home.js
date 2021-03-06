import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { clearErrors } from '../../redux/actions/roomActions';

import SingleRoom from '../rooms/SingleRoom';

const Home = () => {
  const dispatch = useDispatch();
  const { rooms, error } = useSelector((state) => state.allRooms);
  // console.log(rooms);
  useEffect(() => {
    toast.error(error);
    dispatch(clearErrors());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="rooms" className="container mt-5">
      <h2 className="mb-3 ml-2 stays-heading">Stays in New York</h2>

      <a href="#" className="ml-2 back-to-search">
        {' '}
        <i className="fa fa-arrow-left"></i> Back to Search
      </a>
      <div className="row">
        {rooms && rooms.length === 0 ? (
          <div className="alert alert-danger">
            <b>No Room Found</b>
          </div>
        ) : (
          rooms.map((room) => <SingleRoom key={room._id} room={room} />)
        )}
      </div>
    </section>
  );
};

export default Home;
