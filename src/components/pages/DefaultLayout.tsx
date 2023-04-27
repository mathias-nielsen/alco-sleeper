import Head from "next/head";
import Navigation, { ActivePage } from "../organisms/Navigation";
import styles from "./DefaultLayout.module.css";
import { useSelector } from "react-redux";
import { selectDateValue } from "@/store/slices/selectedDateSlice";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { Fab } from "@mui/material";

interface DefaultLayoutProps {
  children: React.ReactNode;
  headerChildren: React.ReactNode;
  activePage: ActivePage;
}

export default function DefaultLayout({
  children,
  headerChildren,
  activePage,
}: DefaultLayoutProps) {
  return (
    <>
      <Head>
        <title>AlcoSleeper</title>
        <meta
          name="description"
          content="Alcohol and Sleeper correlation tracking app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>{headerChildren}</header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <Navigation activePage={activePage} />
      </footer>
    </>
  );
}
