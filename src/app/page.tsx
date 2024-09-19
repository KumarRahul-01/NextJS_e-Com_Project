"use client";
import ProductList from "./products/page";
import "./globals.css";
import Contact from "@/app/contact/page";

const bannerWrapperStyle: React.CSSProperties = {
  position: "relative",
  width: "100%",
  height: "90vh",
  overflow: "hidden",
};

const Home: React.FC = () => {
  return (
    <>
      <div style={bannerWrapperStyle}>
        <img
          src="https://cdn.vectorstock.com/i/500p/57/56/template-banner-for-online-store-with-shopping-vector-42935756.jpg"
          alt="Banner"
          style={{ display: "block", width: "100%", height: "100%" }}
        />
      </div>
      <ProductList />
      <Contact />
    </>
  );
};

export default Home;
