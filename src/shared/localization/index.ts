import LocalizedStrings from "react-native-localization";

export const localStrings = new LocalizedStrings({
  fi: {
    settings: {
      title: "Asetukset",
      numberOfRows: "Rivien määrä",
      theme: "Teema",
      language: "Kieli",
      changeLanguage: "Change language to "
    },
    en: 'English',
    fi: 'Suomi',
    startPlaying: "Aloita pelaaminen",
    yes: "Kyllä",
    no: "Ei",
    cancel: "Peruuta",
    previous: "Edellinen",
    areYouSure: "Oletko varma?",
    logoutDesc: "Haluatko kirjautua ulos?",
    noInternet: "Ei internet yhteyttä",
    games: {
      selectGame: "Valitse peli",
      addition: "Yhteenlaskut",
      substraction: "Vähennyslaskut",
      multiply: "Kertolaskut",
      multiplyTables: "Kertotaulut",
      multiplyTable: "kertotaulu",
      division: "Jakolaskut",
      picturePuzzles: "Kuva arvoitukset",
      difficultyLevels: {
        easy: "Helpot",
        regular: "Tavalliset",
        hard: "Vaikeat",
        impossible: "Mahdottomat"
      }
    }
  },
  en: {
    settings: {
      title: "Settings",
      numberOfRows: "Amount of rows",
      theme: "Theme",
      language: "Language",
      changeLanguage: "Vaihda kieli "
    },
    en: 'English',
    fi: 'Suomi',
    startPlaying: "Start playing",
    yes: "Yes",
    no: "No",
    cancel: "Cancel",
    previous: "Previous",
    areYouSure: "Are you sure?",
    logoutDesc: "You are about to log out, confirm?",
    noInternet: "No Internet Connection",
    games: {
      selectGame: "Choose game",
      addition: "Addition",
      substraction: "Subtraction",
      multiply: "Multiply",
      multiplyTables: "Multiplication tables",
      multiplyTable: "multiplication table",
      division: "Division",
      picturePuzzles: "Picture puzzles",
      difficultyLevels: {
        easy: "Easy",
        regular: "Regular",
        hard: "Hard",
        impossible: "Impossible"
      }
    }
  },
});
// ? Set the language manually
localStrings.setLanguage("en");
