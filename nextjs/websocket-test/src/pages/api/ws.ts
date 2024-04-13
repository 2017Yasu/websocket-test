import { ResponseWithSocket } from '@/types/socket';
import { NextApiRequest } from 'next';
import status from 'http-status'
import { Server, Socket } from 'socket.io';

export default function handler(req: NextApiRequest, res: ResponseWithSocket) {
  if (req.method !== 'POST') {
    res.status(status.METHOD_NOT_ALLOWED).end();
  }

  if (res.socket.server.io) {
    res.send('server is already running')
  }

  const io = new Server(res.socket.server, { addTrailingSlash: false });
  io.on('connection', (socket: Socket) => {
    socket.on('disconnect', () => console.log('disconnected'));
    socket.emit('msg', 'hello, from server!');
  });
  res.socket.server.io = io;

  res.end();
}
