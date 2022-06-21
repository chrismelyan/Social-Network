import React, {ComponentType, Suspense} from 'react';
import Preloader from "../common/Preloader/Preloader";

function WithSuspense <T>(Component: ComponentType<T>) {
    return (props: any) => {
        return <Suspense fallback={<Preloader/>}>
            <Component{...props as T} />
        </Suspense>
    }
};

export default WithSuspense;