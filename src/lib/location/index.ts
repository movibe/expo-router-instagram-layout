import { getLocales } from 'expo-localization'
import { I18n } from 'i18n-js'

import { en } from './languages/en'
import { pt } from './languages/pt'

const i18n = new I18n({
  en,
  pt
})

// Set the locale once at the beginning of your app.
i18n.locale = getLocales()[0].languageCode

export const translate = (key: keyof typeof en, options?: Record<string, any>) =>
  i18n.t(key, options)

export const setLocale = (locale: string) => {
  i18n.locale = locale
}

export const getLocale = () => i18n.locale

export const getLocalesList = () => i18n.translations

export const deviceLocale = getLocales()[0].languageCode
