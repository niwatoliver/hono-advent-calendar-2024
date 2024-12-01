import { client } from "@/app/lib/client";

export const dynamic = "force-dynamic";

export default async function Home() {
  await client.hello
    .$get()
    .then(async (response) => console.log(await response.text()));
  const response = await client.user.sample.$get();
  return (
    <div>
      <h1>Hono Advent Calendar 2024 Day1 Sample</h1>
      <div>{JSON.stringify(await response.json())}</div>
    </div>
  );
}
