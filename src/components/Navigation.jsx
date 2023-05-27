import { ButtonNavigation } from "./ButtonNavigation";
import styles from "../styleComponents/Navigation.module.css";
import { useState } from "react";

export const Navigation = () => {
  const buttonNames = [
    { name: "Главная", url: "/" },
    { name: "Профиль", url: "/profile" },
    { name: "Log in", url: "/login" },
    { name: "Регистрация", url: "/registration" },
  ];

  return (
    <div className={styles.main}>
      {buttonNames.map((b, index) => (
        <ButtonNavigation key={index} name={b.name} url={b.url} index={index} />
      ))}
    </div>
  );
};
