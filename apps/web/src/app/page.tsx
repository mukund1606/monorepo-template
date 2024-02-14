import { add, subtract } from "@mukund1606/my-package";

export default function Home() {
  return (
    <main>
      <h1>Hello</h1>
      <p>Sum is {add(1, 2)}</p>
      <p>Difference is {subtract(1, 2)}</p>
    </main>
  );
}
