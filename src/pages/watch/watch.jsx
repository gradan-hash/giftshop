import React, { useState } from "react";
import Navabar from "../../components/navbar/nav-main/main";
import Watches from "../../components/watches/watch";
import Footer from "../../components/footer/footer";

function WatchPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  return (
    <>
      <Navabar onSearch={handleSearch} />
      <Watches searchTerm={searchTerm} />
      <Footer />
    </>
  );
}

export default WatchPage;
