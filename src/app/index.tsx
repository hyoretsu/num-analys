import i18n from "@i18n";
import { Link } from "expo-router";
import { categorizedMethods } from "numerical-methods";
import { useState } from "react";
import { Pressable, Text } from "react-native";

import { Categoria, Container, ListaMetodos } from "./styles";

const Home: React.FC = () => {
	const [selectedCategory, setSelectedCategory] = useState("");

	return (
		<Container>
			{Object.entries(categorizedMethods).map(([category, methods]) => {
				return (
					<>
						<Pressable
							key={category}
							onPress={() => setSelectedCategory(old => (old !== category ? category : ""))}
						>
							<Categoria>
								<Text>{i18n.t(category)}</Text>
							</Categoria>
						</Pressable>
						{selectedCategory === category &&
							Object.keys(methods).map(method => (
								<Link
									key={method}
									href={{
										pathname: "/parameters/[method]",
										params: { method: method },
									}}
								>
									<ListaMetodos>
										<Text>{i18n.t(method)}</Text>
									</ListaMetodos>
								</Link>
							))}
					</>
				);
			})}
		</Container>
	);
};

export default Home;
