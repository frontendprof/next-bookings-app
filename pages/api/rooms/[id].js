import nc from 'next-connect';
import dbConnect from '../../../config/dbConnect';
import { deleteRoom, roomDetails, updateRoom } from '../../../controllers/roomControllers';

const handler = nc();
dbConnect();

handler.get(roomDetails);
handler.put(updateRoom);
handler.delete(deleteRoom);

export default handler;
