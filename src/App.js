import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BodyComponent from "./pages/body/body";
import AccountComponent from "./pages/account/account";
import SingleProductComponent from "./pages/Single Product/singleProduct";
import CartComponent from "./pages/cart/cart";
import CheckoutComponent from "./pages/checkout/checkout";
import RelatedcategoriesComponent from "./pages/related categories/categories";
import GiftHamperComponent from "./pages/Gift-hampers/gift";
import ArtsComponent from "./pages/Arts/arts";
import JewelryComponent from "./pages/Jewelry/jew";
import FlowersComponent from "./pages/flowers/flower";
import WatchesComponent from "./pages/watch/watch";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BodyComponent />} />

          <Route path="/account" element={<AccountComponent />} />
          <Route
            path="/arts/single-product/:id"
            element={<SingleProductComponent />}
          />

          <Route
            path="/gifts/single-product/:id"
            element={<SingleProductComponent />}
          />

          <Route
            path="/jewelry/single-product/:id"
            element={<SingleProductComponent />}
          />
          <Route
            path="/single-product/:id"
            element={<SingleProductComponent />}
          />
          <Route
            path="/single-product/:id/related-product/:id"
            element={<RelatedcategoriesComponent />}
          />
          <Route path="/cart" element={<CartComponent />} />
          <Route path="/checkout" element={<CheckoutComponent />} />
          <Route path="/gifts" element={<GiftHamperComponent />} />
          <Route path="/arts" element={<ArtsComponent />} />
          <Route path="/jewelry" element={<JewelryComponent />} />
          <Route path="/flowers" element={<FlowersComponent />} />
          <Route path="/watches" element={<WatchesComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
