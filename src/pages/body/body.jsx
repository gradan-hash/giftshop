import React, {useState} from "react";
import Navabar from "../../components/navbar/nav-main/main";
import Body from "../../components/body/body";
import Footer from '../../components/footer/footer'

function BodyPage() {

  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = term =>{
    setSearchTerm(term)
  }
  return (
    <>
      <Navabar onSearch={handleSearch} />
      <Body searchTerm = {searchTerm} />
      <Footer/>
    </>
  );
}

export default BodyPage;
