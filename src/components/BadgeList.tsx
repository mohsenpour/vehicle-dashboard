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
        const { _badge } = badge;
        return <Badge _badge={_badge} key={_badge.name}></Badge>;
      })}
    </div>
  );
}
