import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import ProductCreateForm from "./components/product/ProductCreateForm";
import PageNotFound from "./components/common/PageNotFound";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/product/new" element={<Layout />}>
            <Route index element={<ProductCreateForm />} />
          </Route>
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
