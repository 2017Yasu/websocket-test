'use client';

import { useEffectOnce } from '@/hooks/effect';
import { useEffect } from 'react';
import { io } from 'socket.io-client';

export default function WebSocketConnectorComponent() {
  useEffectOnce(async () => {
    await fetch('/api/ws', { method: 'POST' });
    const socket = io({ autoConnect: false });
    if (!socket.connected) {
      socket.connect();
      socket.on('connect', () => {
        console.log('connected!', socket.id);
      });
      socket.on('msg', (msg) => {
        console.log(msg);
      });
      socket.on('disconnect', () => {
        console.log('socket is disconnected', socket.id);
      });
    }
    console.log('socket connected');
    return () => {
      socket.close();
      socket.off('connect');
      socket.off('msg');
      socket.off('disconnect');
    };
  });

  useEffectOnce(async () => {
    console.log('another effect once');
  });

  return <h1>socket.io シンプルな接続例</h1>;
}
