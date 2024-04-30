import React, { useState } from "react";
import Navabar from "../../components/navbar/nav-main/main";
import Flowers from "../../components/flowers/flowers";
import Footer from "../../components/footer/footer";

function FlowerPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  return (
    <>
      <Navabar onSearch={handleSearch} />
      <Flowers searchTerm={searchTerm} />
      <Footer />
    </>
  );
}

export default FlowerPage;
