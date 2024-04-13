'use client';

import { useEffectOnce } from '@/hooks/effect';
import { WebSocket } from '@/utilities/web_socket';
import { useEffect } from 'react';
import { io } from 'socket.io-client';

export default function WebSocketConnectorComponent() {
  useEffectOnce(async () => {
    await WebSocket.init('/api/ws');
    console.log('socket connected');
    return () => {
      WebSocket.close();
    };
  });

  return <h1>socket.io シンプルな接続例</h1>;
}
