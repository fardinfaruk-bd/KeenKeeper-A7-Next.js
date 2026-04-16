import Spinner from '@/components/ui/loadingSpinner';
import { div } from 'framer-motion/client';
import React from 'react';

const loading = () => {
    return (
        <div className='min-h-screen'>
            <Spinner size={40} />
        </div>
    );
};

export default loading;