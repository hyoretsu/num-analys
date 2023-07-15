import { useLocalSearchParams } from "expo-router";
import { allMethods } from "numerical-methods";
import { Text } from "react-native";

import { useParams } from "@context/params";

import { Styling } from "./styles";

const Method: React.FC = () => {
	const { method } = useLocalSearchParams();
	const { params } = useParams();

	const { error, result } = allMethods[method](params);

	return (
		<Styling>
			<Text>
				A área da função {params.func} no intervalo {params.x[0]} a {params.x[1]} é: {result} com uma margem
				de erro de {error}
			</Text>
		</Styling>
	);
};

export default Method;
