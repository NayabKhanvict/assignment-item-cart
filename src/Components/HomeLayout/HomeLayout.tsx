import { LayoutProvider } from "../../providers";
import Header from "../Header";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutProvider>
      <Header />
      <div style={{ marginTop: "30px" }}>{children}</div>
    </LayoutProvider>
  );
};

export default HomeLayout;
