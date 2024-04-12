'use client'

import * as hello from '@/app/api/hello/route';
import { useEffect, useState } from 'react';

export default function HelloMessage() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    const loadMessage = async () => {
      const res = await hello.GET();
      if (!res.ok) {
        return
      }
      const {message} = await res.json()
      if (typeof message === 'string') {
        setMessage(message)
      }
    }
    loadMessage();
  }, [])
  return (
    <div>
      <p>Message: {message}</p>
    </div>
  )
}
