import Head from "next/head";
import styles from "./index.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import {
  AuthInfo,
  AuthState,
  refetchAccessToken,
  refetchToken,
  refreshAuthInfo,
  selectAuthInfo,
} from "@/store/slices/authSlice";
import Navigation from "@/components/organisms/Navigation";
import DefaultLayout from "@/components/pages/DefaultLayout";
import useAuthOrRedirect from "@/data-hooks/useAuthOrRedirect";
import SleepRater from "@/components/organisms/SleepRater";
import QualityCircle from "@/components/molecules/QualityCircle";

export const getStaticProps = () => {
  const client_id = process.env.CLIENT_ID;
  return {
    props: {
      client_id,
    },
  };
};

interface HomeProps {
  client_id: string;
}

export default function Home({ client_id }: HomeProps) {
  const authState: AuthState = useAuthOrRedirect();

  return (
    <DefaultLayout activePage={"/"}>
      <SleepRater />
      <QualityCircle />
    </DefaultLayout>
  );
}
