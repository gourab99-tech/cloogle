import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Results } from './Results';

export const Routing = () => {
    return (
        <div className='p-4 dark:text-white'>
            <Routes>
                <Route path='/' element={<Navigate to="/search" />} />
                <Route exact path="/search" element={<Results />} />
                <Route path="/images" element={<Results />} />
                <Route path="/news" element={<Results />} />
                <Route path="/videos" element={<Results />} />
            </Routes>
        </div>
    );
}

