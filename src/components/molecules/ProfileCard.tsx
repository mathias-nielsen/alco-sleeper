import React from "react";
import { Card } from "@mui/material";
import styles from "./ProfileCard.module.css";

interface ProfileCardProps {
  icon?: string;
  text?: string;
}

export default function ProfileCard({ icon, text }: ProfileCardProps) {
  return <Card className={styles.card}>{text}</Card>;
}
