import { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react';



interface ParamsContext {
    : ;
}

const ParamsContext = createContext<ParamsContext>({} as ParamsContext);

export const ParamsProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [, set] = useState<>();



    const params: ParamsContext = useMemo(() => ({  }), []);

    return <ParamsContext.Provider value={params}>{children}</ParamsContext.Provider>;
};

export const useParams = (): ParamsContext => {
    const context = useContext(ParamsContext);
    if (!context) {
        throw new Error('useParams must be used within an ParamsProvider');
    }

    return context;
};
