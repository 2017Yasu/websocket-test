import WebSocketConnector from '@/components/web_socket_connector';
import Link from 'next/link';

export default function WsTest() {
  return (
    <div>
      <Link href={'/'} replace>
        {'< Back'}
      </Link>

      <WebSocketConnector />
    </div>
  );
}
