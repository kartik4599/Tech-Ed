import Footer from "@/components/Footer";
import Header from "@/components/Header";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
