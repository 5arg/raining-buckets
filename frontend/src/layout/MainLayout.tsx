import React from "react";
import Footer from "../features/footer/Footer";
import Header from "../features/header/Header";
import { Container } from "./mainLayout.styles";

type MainLayoutProps = {
  children: JSX.Element;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <Container>
        <>{children}</>
      </Container>
      <Footer />
    </>
  );
}
