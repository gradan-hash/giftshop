import React, { useState } from "react";
import Navabar from "../../components/navbar/nav-main/main";
import Arts from "../../components/Arts/arts";
import Footer from "../../components/footer/footer";

function ArtsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  return (
    <>
      <Navabar onSearch={handleSearch} />
      <Arts searchTerm={searchTerm} />
      <Footer />
    </>
  );
}

export default ArtsPage;
