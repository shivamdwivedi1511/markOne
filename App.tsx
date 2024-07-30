import {JSX} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  useColorScheme,
  ScrollView,
} from 'react-native';
import Feeds from './components/Feeds';

const styles = StyleSheet.create({
  lightText: {
    color: 'white',
  },
  darkText: {
    color: 'black',
  },
  lightMode: {
    backgroundColor: 'white',
  },
  darkMode: {
    backgroundColor: 'black',
  },
  box: {
    height: 200,
    width: 200,
    marginRight: 8,
    borderRadius: 8,
    elevation: 4,
    shadowOffset: {
      width: 40,
      height: 40,
    },
    shadowColor: 'red',
  },
  greenBox: {
    backgroundColor: 'green',
  },
  blueBox: {
    backgroundColor: 'blue',
  },
});

const app = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  const textColor = isDarkMode ? styles.lightText : styles.darkText;
  return (
    <SafeAreaView style={isDarkMode ? styles.darkMode : styles.lightMode}>
      <ScrollView style={{paddingHorizontal: 16, margin: 'auto'}}>
        <View>
          <Text style={textColor}>sample text</Text>
          <Text style={textColor}>current light mode : {isDarkMode}</Text>
        </View>
        <ScrollView horizontal={true}>
          <View style={[styles.box, styles.greenBox]}></View>
          <View style={[styles.box, styles.greenBox]}></View>
          <View style={[styles.box, styles.greenBox]}></View>
          <View style={[styles.box, styles.blueBox]}></View>
          <View style={[styles.box, styles.blueBox]}></View>
          <View style={[styles.box, styles.blueBox]}></View>
        </ScrollView>
        <Feeds />
      </ScrollView>
    </SafeAreaView>
  );
};

export default app;

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.darker,
//   };
//   console.log('jakjsdjjadkjjk');
//   return (
//     <SafeAreaView style={{backgroundColor: 'black'}}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         {/* <Header /> */}

//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//               <View
//           style={{
//             height: 200,
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             backgroundColor: 'black',
//             borderBottomEndRadius:100,
//             borderBottomStartRadius:100
//           }}>
//           <Text
//             style={{
//               fontSize: 30,
//               fontWeight: 700,
//               color: 'white',
//               letterSpacing: 3,
//               textTransform: 'capitalize',
//             }}>
//             markOne 🚀
//           </Text>
//         </View>
//           <Section title="edit kar lo ji idhar">
//             Edit section <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
