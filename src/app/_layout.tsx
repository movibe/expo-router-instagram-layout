import Head from "expo-router/head";
import { ResponsiveNavigator } from "@/components/navigator";
import "../styles/global.css";

export default function Layout() {
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
