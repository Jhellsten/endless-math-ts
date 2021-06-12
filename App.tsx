import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import Navigation from "./src/services/navigation";
import { isAndroid } from "@freakycoder/react-native-helpers";
import AnimatedSplash from "react-native-animated-splash-screen";
// import ErrorHandler from 'shared/hocs/ErrorHandler';

const App = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    StatusBar.setBarStyle("dark-content");
    if (isAndroid) {
      StatusBar.setBackgroundColor("rgba(0,0,0,0)");
      StatusBar.setTranslucent(true);
    }
    setTimeout(() => {
      setIsLoaded(true);
    }, 1350);
  }, []);

  return (
    <>
      <AnimatedSplash
          logoWidth={300}
          logoHeight={300}
          logoImage={null}
          isLoaded={isLoaded}
          backgroundColor={null}
          imageBackgroundResizeMode="cover"
          imageBackgroundSource={require("@assets/splash/splash.png")}
        >
        {/* <ErrorHandler> */}
          
            <Navigation />
          
        {/* </ErrorHandler>r */}
      </AnimatedSplash>
    </>
  );
};

export default App;
