import type { Server as HttpServer } from 'http';
import type { Server as IOServer } from 'socket.io';
import type { Socket as NetSocket } from 'net';
import { NextApiResponse } from 'next';

export interface SocketServer extends HttpServer {
  io?: IOServer;
}

export interface SocketServerWithIO extends NetSocket {
  server: SocketServer;
}

export interface ResponseWithSocket extends NextApiResponse {
  socket: SocketServerWithIO;
}
