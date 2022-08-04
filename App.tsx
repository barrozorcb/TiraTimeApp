import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";

import { Routes } from "./src/routes";

export default class App extends React.Component {
  state = {
    appIsReady: false,
  };

  async componentDidMount() {
    // Prevent native splash screen from autohiding
    try {
      await SplashScreen.preventAutoHideAsync();
    } catch (e) {
      console.warn(e);
    }
    this.prepareResources();
  }

  prepareResources = async () => {
    await Font.loadAsync({
      Inter_400Regular,
      Inter_500Medium,
      Archivo_400Regular,
      Archivo_500Medium,
      Archivo_600SemiBold,
    });

    this.setState({ appIsReady: true }, async () => {
      await SplashScreen.hideAsync();
    });
  };

  render() {
    if (!this.state.appIsReady) {
      return null;
    }

    return (
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    );
  }

  /* const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Inter_400Regular,
          Inter_500Medium,
          Archivo_400Regular,
          Archivo_500Medium,
          Archivo_600SemiBold,
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setAppIsReady(true);
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  ); */
}