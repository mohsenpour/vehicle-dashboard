import React from 'react';

export interface IBadgeProps {
  name: string;
  unit: string;
  value: string;
}

export default function Badge({ name, unit, value }: IBadgeProps) {
  return (
    <div className='badge'>
      <div className='badge__name'>{name}</div>
      <div className='badge__value-unit'>
        {value} {unit}
      </div>
    </div>
  );
}
