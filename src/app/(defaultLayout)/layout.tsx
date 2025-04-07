import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Newsletter from "@/components/shared/Newsletter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description: "",
};

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Newsletter />
      <Footer />
    </>
  );
};

export default CommonLayout;
