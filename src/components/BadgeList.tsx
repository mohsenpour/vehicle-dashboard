import React from 'react';
import Badge from './Badge';
import { IBadgeProps } from './Badge';

interface IBadgeListProps {
  badges: IBadgeProps[];
}

export default function BadgeList({ badges }: IBadgeListProps) {
  return (
    <div className='badge-list'>
      {badges.map((badge) => {
        return (
          <Badge
            name={badge.name}
            value={badge.value}
            unit={badge.unit}
          ></Badge>
        );
      })}
    </div>
  );
}
