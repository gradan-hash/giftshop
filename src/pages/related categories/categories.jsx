import React from "react";
import Navbar from "../../components/navbar/nav-main/main";
import RelatedProduct from "../../components/related categories/categories";
import Footer from "../../components/footer/footer";

function CategoriesPage() {
  return (
    <>
      <Navbar />
      <RelatedProduct />
      <Footer />
    </>
  );
}

export default CategoriesPage;
