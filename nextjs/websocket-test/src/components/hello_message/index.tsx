import { memo, useMemo } from 'react';
import HelloMessageComponent from './hello_message';

const HelloMessage = memo(HelloMessageComponent);
export default HelloMessage;
