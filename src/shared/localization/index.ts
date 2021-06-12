import LocalizedStrings from "react-native-localization";

export const localStrings = new LocalizedStrings({
  fi: {
    noLocationService: "Lokasyon Servisi Kapalı",
    logout: "Kirjaudu ulos",
    yes: "Kyllä",
    no: "Ei",
    cancel: "Peruuta",
    areYouSure: "Oletko varma?",
    logoutDesc: "Haluatko kirjautua ulos?",
    noInternet: "Ei internet yhteyttä",
  },
  en: {
    noLocationService: "Location Service Not Available",
    logout: "Logout",
    yes: "Yes",
    no: "No",
    cancel: "Cancel",
    areYouSure: "Are you sure?",
    logoutDesc: "You are about to log out, confirm?",
    noInternet: "No Internet Connection",
  },
});
// ? Set the language manually
localStrings.setLanguage("fi");
