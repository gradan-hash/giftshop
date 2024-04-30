import React, { useState } from "react";
import Navabar from "../../components/navbar/nav-main/main";
import Jewelry from "../../components/Jewelry/jew";
import Footer from "../../components/footer/footer";

function JewelryPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  return (
    <>
      <Navabar onSearch={handleSearch} />
      <Jewelry searchTerm={searchTerm} />
      <Footer />
    </>
  );
}

export default JewelryPage;
