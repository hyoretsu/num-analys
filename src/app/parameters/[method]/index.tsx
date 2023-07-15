import { Link, useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

import { useParams } from "@context/params";

import { Styling, InputText, InputTitle, InputView } from "./styles";

const Parameters: React.FC = () => {
	const { method } = useLocalSearchParams();
	const { params, setParams } = useParams();

	return (
		<Styling>
			<InputView>
				<InputTitle>Função</InputTitle>
				<InputText value={params.func} onChangeText={value => setParams(old => ({ ...old, func: value }))} />
			</InputView>
			<InputView>
				<InputTitle>Número de pontos</InputTitle>
				<InputText
					value={String(params.pointN)}
					onChangeText={value => setParams(old => ({ ...old, pointN: Number(value) }))}
				/>
			</InputView>
			<InputView>
				<InputTitle>A</InputTitle>
				<InputText
					value={String(params.x[0])}
					onChangeText={value =>
						setParams(old => ({
							...old,
							x: [Number(value) || 0, old.x[1]],
						}))
					}
				/>
			</InputView>
			<InputView>
				<InputTitle>B</InputTitle>
				<InputText
					value={String(params.x[1])}
					onChangeText={value =>
						setParams(old => ({
							...old,
							x: [old.x[0], Number(value) || 0],
						}))
					}
				/>
			</InputView>

			<Link
				href={{
					pathname: "/method/[method]/",
					params: {
						method: method,
					},
				}}
			>
				<Text>Calcular</Text>
			</Link>
		</Styling>
	);
};

export default Parameters;
