import { useState } from 'react';
import { List } from './List';
import { ResAttacker } from '@/api/interface/attacker-tracking';
import { Detail } from './Detail';

const AttackerTracking = () => {
  const [attackerData, setAttackerData] = useState<ResAttacker>();
  return (
    <div className="page-wrapper py-4 h-full">
      <div className="grid grid-cols-[2fr_3fr] gap-4 h-full">
        <List attackerData={attackerData} setAttackerData={setAttackerData} />
        <Detail data={attackerData} />
      </div>
    </div>
  );
};

export default AttackerTracking;
