import Head from "expo-router/head";
import { ResponsiveNavigator } from "@/components/navigator";
import "../styles/global.css";
import { storybookEnabled } from "@/config";
import { Slot } from "expo-router";

export default function Layout() {
  if(storybookEnabled) return <Slot/>
  return (
    <>
      <Head>
        <title>Expogram</title>
        <meta
          name="description"
          content="Expo Router Instagram responsive layout demo using SCSS"
        />
      </Head>
      <ResponsiveNavigator />
    </>
  );
}
