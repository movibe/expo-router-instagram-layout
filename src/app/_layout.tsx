import "../styles/global.css";

import { Slot } from "expo-router";
import Head from "expo-router/head";

import { ResponsiveNavigator } from "@/components/navigator";
import { storybookEnabled } from "@/config";

export default function Layout() {
  if (storybookEnabled) return <Slot />;
  return (
    <>
      <Head>
        <title>Expogram</title>
        <meta
          content="Expo Router Instagram responsive layout demo using SCSS"
          name="description"
        />
      </Head>
      <ResponsiveNavigator />
    </>
  );
}
