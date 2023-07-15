// import { useFonts } from "expo-font";
import { Slot, SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
// import { useEffect } from "react";
// import { Text, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { ThemeProvider } from "rn-css";

import { ParamsProvider } from "@context/params";
import mainTheme from "@theme";

SplashScreen.preventAutoHideAsync();

const HomeLayout: React.FC = () => {
	// const colorScheme = useColorScheme();
	// Load custom fonts
	// const [fontsLoaded, fontsError] = useFonts({});

	// useEffect(() => {
	//     if (fontsError) {
	//         throw fontsError;
	//     } else if (fontsLoaded) {
	SplashScreen.hideAsync();
	//     }
	// }, [fontsError, fontsLoaded]);

	// if (fontsError) {
	//     return (
	//         <>
	//             <Text>Fonts</Text>
	//             <Text>{fontsError?.name}</Text>
	//             <Text>{fontsError?.message}</Text>
	//         </>
	//     );
	// } else if (!fontsLoaded) {
	//     return null;
	// }

	return (
		<ParamsProvider>
			{/* <ThemeProvider theme={mainTheme}> */}
			<SafeAreaView>
				<StatusBar backgroundColor={mainTheme.colors.background} style="dark" />
				<Slot />
			</SafeAreaView>
			{/* </ThemeProvider> */}
		</ParamsProvider>
	);
};

export default HomeLayout;
