import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();

  const loadProjectHandler = () => {
    // load data...
    router.push("/clients/max/projecta");
  };

  return (
    <div>
      <h1>The Projects of a Given Page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
