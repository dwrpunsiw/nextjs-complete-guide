import fs from "fs/promises";
import path from "path";

import Link from "next/link";

function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export async function getStaticProps(context) {
  console.log("(Re-)Generating....");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json"); // process.cwd will return root project directory by next.js
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
    // redirect: {
    //   destination: "/no-data"
    // }
    // notFound: true,
  };
}

export default HomePage;
