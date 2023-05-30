export default function Home() {
  return (
    <main>
      <h1 className="text-bold text-3xl">GraphQL React Query examples</h1>

      <ul>
        <li>
          Server - utilizes React Server Components to handle the fetching of
          the data via the fetchQuery function found in lib/api
        </li>
        <li>
          Client - utilizes react-query to fetch the data in a client side
          fashion
        </li>
      </ul>
    </main>
  );
}
