import Head from "next/head";
import styles from "./index.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import {
  AuthInfo,
  refreshAuthInfo,
  selectAuthInfo,
} from "@/store/slices/authSlice";
import ASNavigation from "@/components/organisms/ASNavigation";
import ASDefaultLayout from "@/components/layouts/ASDefaultLayout";

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
  const authState: AuthInfo = useSelector(selectAuthInfo);
  const router = useRouter();
  const dispatch = useDispatch<any>();

  useEffect(() => {
    if (!authState.access_token) {
      // router.push("/auth");
    }
    console.log(authState);
  }, []);

  return (
    <ASDefaultLayout activePage={"/"}>
      <h1>Home page</h1>
    </ASDefaultLayout>
  );
}
