/* eslint-disable no-console */
import * as Analytics from 'expo-firebase-analytics'

import { AnalyticsEvent } from './type'
export type AnalyticsData = {
  screen: string
  [key in AnalyticsEvent]: Record<string, any>
}

export const logEvent = (event: AnalyticsEvent, data?: AnalyticsData) => {
  console.log(`logEvent: ${event}`, data)
  return Analytics.logEvent(event, data)
}

export const setUserProperties = (data: Record<string, any>) => Analytics.setUserProperties(data)

export const setUserId = (id: string) => Analytics.setUserId(id)

// export const setCurrentScreen = (screenName: string, screenClassOverride?: string) => Analytics.setCurrentScreen(screenName, screenClassOverride);
