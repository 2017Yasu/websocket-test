import { Socket, io } from 'socket.io-client';

class WebSocketManagerClass {
  private socket: Socket | null;

  constructor() {
    console.log('creating websocket manager')
    this.socket = null;
  }

  async init(uri: string) {
    console.log('initializing')
    await fetch(uri, { method: 'POST' });
    if (!this.socket) {
      console.log('io')
      this.socket = io({ autoConnect: false });
    }
    this.connect();
  }

  private connect() {
    if (!this.socket) {
      return;
    }
    this.socket.connect();
    this.initEvent();
  }

  private initEvent() {
    if (!this.socket) {
      return;
    }
    this.socket.on('connect', () => {
      console.log('connected!', this.socket?.id);
    });
    this.socket.on('msg', (msg) => {
      console.log(msg);
    });
    this.socket.on('disconnect', () => {
      console.log('socket is disconnected');
    });
  }

  close() {
    if (!this.socket) {
      return;
    }
    this.socket.close();
    this.socket.off('connect');
    this.socket.off('msg');
    this.socket.off('disconnect');
  }
}

export const WebSocket = new WebSocketManagerClass();
