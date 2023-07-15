import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";

import en from "./locales/en.json";
import pt from "./locales/pt.json";

const i18n = new I18n({
	en,
	pt,
});
i18n.locale = getLocales()[0].regionCode;

export default i18n;
