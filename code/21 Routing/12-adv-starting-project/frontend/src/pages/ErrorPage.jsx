import PageContent from "../components/PageContent";
import {useRouteError} from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function ErrorPage() {

  const error = useRouteError();

  const title = error.status === 404 ? 'Page not found' : JSON.parse(error.data).message;
  const message = error.status === 404 ? 'The page you are looking for does not exist.' : 'An error occurred while processing your request.';

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>{message}</PageContent>
    </>
  );
}