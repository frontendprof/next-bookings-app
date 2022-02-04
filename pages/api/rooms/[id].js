import nc from 'next-connect';
import dbConnect from '../../../config/dbConnect';
import { deleteRoom, roomDetails, updateRoom } from '../../../controllers/roomControllers';
import { onError } from '../../../middlewares/errors';

const handler = nc(onError);
dbConnect();

handler.get(roomDetails);
handler.put(updateRoom);
handler.delete(deleteRoom);

export default handler;
