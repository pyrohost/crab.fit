import Content from "/src/components/Content/Content";
import CreateForm from "/src/components/CreateForm/CreateForm";
import Header from "/src/components/Header/Header";
import Recents from "/src/components/Recents/Recents";
import { useTranslation } from "/src/i18n/server";

const Page = async () => {
  return (
    <>
      <Recents />

      <Content>
        <CreateForm />
      </Content>
    </>
  );
};

export default Page;
