import React, { useState } from "react";
import Navabar from "../../components/navbar/nav-main/main";
import Gift from "../../components/Gift-hampers/gift";
import Footer from "../../components/footer/footer";

function GiftPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  return (
    <>
      <Navabar onSearch={handleSearch} />
      <Gift searchTerm={searchTerm} />
      <Footer />
    </>
  );
}

export default GiftPage;
