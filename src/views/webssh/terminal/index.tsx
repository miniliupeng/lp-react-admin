import React from 'react';
import Terminal from '@/components/Terminal';

export default () => {
  const session_id = window?.location?.hash.match(/session_id=([^&]+)/)?.[1];
  // 10.1.100.140
  const socket = `${window.location.protocol.replace('http', 'ws')}//${window.location.host}/ndr/api/ndr/ssh/ws?h=16&w=150&session_id=${session_id}`;
  return <Terminal socket={socket} />;
};
