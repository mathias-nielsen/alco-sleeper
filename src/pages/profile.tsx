import styles from "./profile.module.css";
import ASDefaultLayout from "@/components/layouts/ASDefaultLayout";
import useProfileData from "@/data-hooks/useProfileData";
import { AuthInfo, selectAuthInfo } from "@/store/slices/authSlice";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ASProfileCard from "@/components/molecules/ASProfileCard";

export default function Profile() {
  const authState: AuthInfo = useSelector(selectAuthInfo);
  const user = useProfileData(authState);

  const formatGender = (gender: string) => {
    return (
      gender.slice(0, 1).toUpperCase() + gender.slice(1).toLocaleLowerCase()
    );
  };

  return (
    <ASDefaultLayout activePage={"/profile"}>
      <div className={styles.container}>
        {user && (
          <>
            <img
              src={user.avatar150}
              className={styles.avatar}
              alt="Profile avatar"
            />
            <ASProfileCard text={user.displayName} />
            <ASProfileCard text={formatGender(user.gender)} />
            <ASProfileCard text={user.weight} />
          </>
        )}
      </div>
    </ASDefaultLayout>
  );
}
