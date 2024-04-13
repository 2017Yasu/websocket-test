'use client'

import { useEffect } from 'react';
import { io } from 'socket.io-client'

const socket = io({ autoConnect: false });

export default function WebSocketConnectorComponent() {
  useEffect(() => {
    const connect = async () => {
      const res = await fetch('/api/ws', { method: 'POST' });
      if (socket.connected) {
        console.log('web socket is already connected')
        return
      }
      socket.connect()
      socket.on('connect', () => { console.log('connected!', socket.id) })
      socket.on('msg', (msg) => { console.log(msg) });
      socket.on('disconnect', () => {
        console.log('socket is disconnected', socket.id);
      });
    }
    connect();

    return () => {
      socket.close()
      socket.off('connect')
      socket.off('msg')
      socket.off('disconnect')
    }
  }, [])

  return (
    <h1>socket.io シンプルな接続例</h1>
  )
}
