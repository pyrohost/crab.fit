import Content from "/src/components/Content/Content";
import Header from "/src/components/Header/Header";

const Layout = async ({ children }: { children: React.ReactNode }) => (
  <>
    <Content>
      <Header />
    </Content>

    {children}
  </>
);

export default Layout;
