import { AuthState } from "@/store/slices/authSlice";
import DefaultLayout from "@/components/pages/DefaultLayout";
import useAuthOrRedirect from "@/data-hooks/useAuthOrRedirect";
import DrinksSections from "@/components/pages/DrinksSections";
import SleepSection from "@/components/pages/SleepSection";

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
      <SleepSection />
      <DrinksSections />
    </DefaultLayout>
  );
}
