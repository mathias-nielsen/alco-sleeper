import styles from "./profile.module.css";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import useProfileData from "@/data-hooks/useProfileData";
import { AuthState, selectAuthInfo } from "@/store/slices/authSlice";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProfileCard from "@/components/molecules/ProfileCard";
import useAuthOrRedirect from "@/data-hooks/useAuthOrRedirect";

export default function Profile() {
  const authState: AuthState = useAuthOrRedirect();
  const user = useProfileData(authState.value);

  const formatGender = (gender: string) => {
    return (
      gender.slice(0, 1).toUpperCase() + gender.slice(1).toLocaleLowerCase()
    );
  };

  return (
    <DefaultLayout activePage={"/profile"}>
      <div className={styles.container}>
        {user && (
          <>
            <img
              src={user.avatar150}
              className={styles.avatar}
              alt="Profile avatar"
            />
            <ProfileCard text={user.displayName} />
            <ProfileCard text={formatGender(user.gender)} />
            <ProfileCard text={user.weight} />
          </>
        )}
      </div>
    </DefaultLayout>
  );
}
