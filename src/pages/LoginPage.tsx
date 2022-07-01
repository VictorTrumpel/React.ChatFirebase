import { LogInBtn } from "../components/LogInBtn/LogInBtn";
import { PageContainer } from "../layouts/BaseLayout";

export const LoginPage = () => {
  return (
    <PageContainer sx={{ justifyContent: "center", alignItems: "center" }}>
      <LogInBtn />
    </PageContainer>
  );
};
