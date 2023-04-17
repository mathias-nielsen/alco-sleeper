import React from "react";
import { Card } from "@mui/material";
import styles from "./ASProfileCard.module.css";

interface ASProfileCardProps {
  icon?: string;
  text?: string;
}

export default function ASProfileCard({ icon, text }: ASProfileCardProps) {
  return <Card className={styles.card}>{text}</Card>;
}
