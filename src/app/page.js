import React, { Suspense, lazy } from 'react';
import LoadingScreen from '../components/LoadingScreen';

// Usando React.lazy para carregar Home dinamicamente
const Home = lazy(() => new Promise(resolve =>
    setTimeout(() => resolve(import('@/components/home/Home')), 1000) // 1 segundo de atraso
));

export default function HomePage() {

    
    return (
        <Suspense fallback={<LoadingScreen />}>
            <Home />
        </Suspense>
    );
}
