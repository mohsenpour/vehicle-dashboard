import React from 'react';

export interface IBadgeProps {
  _badge: {
    name: string;
    unit: string;
    value: string;
  };
}

export default function Badge({ _badge }: IBadgeProps) {
  const { name, unit, value } = _badge;
  return (
    <div className='badge'>
      <div className='badge__name'>{name}</div>
      <div className='badge__value-unit'>
        {value} <span className='badge__unit'>{unit}</span>
      </div>
    </div>
  );
}
