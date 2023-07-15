import { createContext, PropsWithChildren, useContext, useMemo, useState } from "react";

const ParamsContext = createContext({});

export const ParamsProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [params, setParams] = useState({
		func: "",
		pointN: 0,
		x: [0, 0],
	});

	const paramsData = useMemo(() => ({ params, setParams }), [params, setParams]);

	return <ParamsContext.Provider value={paramsData}>{children}</ParamsContext.Provider>;
};

export const useParams = () => {
	const context = useContext(ParamsContext);
	if (!context) {
		throw new Error("useParams must be used within an ParamsProvider");
	}

	return context;
};
