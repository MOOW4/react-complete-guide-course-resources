import MainNavigation from "../components/MainNavigation";

export default function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>404 - Page not found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </main>
    </>
  );
}