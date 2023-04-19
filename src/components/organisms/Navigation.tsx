import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { SyntheticEvent } from "react";
import { useRouter } from "next/router";
import styles from "./Navigation.module.css";

interface ASNavigationProps {
  activePage: ActivePage;
}

export type ActivePage = "/" | "/stats" | "/profile";

/**
 *  For the different tabs: activePage = 0 | 1 | 2
 */
export default function Navigation({ activePage }: ASNavigationProps) {
  const router = useRouter();

  const handleNav = (_e: SyntheticEvent, value: ActivePage) => {
    if (activePage !== value) {
      router.push(value);
    }
  };

  return (
    <BottomNavigation
      className={styles.nav}
      showLabels
      value={activePage}
      onChange={handleNav}
    >
      <BottomNavigationAction
        value={"/"}
        label="Home"
        icon={<HomeOutlinedIcon />}
      />
      <BottomNavigationAction
        value={"/stats"}
        label="Statistics"
        icon={<QueryStatsIcon />}
      />
      <BottomNavigationAction
        value={"/profile"}
        label="Profile"
        icon={<PermIdentityIcon />}
      />
    </BottomNavigation>
  );
}
