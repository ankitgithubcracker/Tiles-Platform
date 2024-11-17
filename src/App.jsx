import React from "react";
import { useSelector } from "react-redux";
import { Layout } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs";
import AuthForm from "./components/Auth/AuthForm";

const { Header, Content, Footer: AntFooter } = Layout;

const App = () => {
  const theme = useSelector((state) => state.theme.mode); // Access theme state

  return (
    <Router>
      <Layout className={theme}>
        <Header>
          <Navbar />
        </Header>
        <Content style={{ minHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<AuthForm />} />
          </Routes>
        </Content>
        <AntFooter>
          <Footer />
        </AntFooter>
      </Layout>
    </Router>
  );
};

export default App;
