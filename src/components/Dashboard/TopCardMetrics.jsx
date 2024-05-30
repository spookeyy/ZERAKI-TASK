import React from 'react'
import Card from '../shared/Card'
import { getCollectionsCount, getSignupsCount, getTotalRevenue, getBouncedChequesCount } from '../../utils/data'

const TopCardMetrics = () => {
    const collectionsCount = getCollectionsCount()
    const signupsCount = getSignupsCount()
    const totalRevenue = getTotalRevenue()
    const bouncedChequesCount = getBouncedChequesCount()
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 bg-gray-4 p-4 md:p-6 sm:p-8 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700">
            <Card title="Collections" value={collectionsCount} />
            <Card title="Sign-ups" value={signupsCount} />
            <Card title="Total Revenue" value={totalRevenue} />
            <Card title="Bounced Cheques" value={bouncedChequesCount} />
        </div>
    );
};

export default TopCardMetrics