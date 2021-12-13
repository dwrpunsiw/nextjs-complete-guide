import { useEffect, useState } from "react";
import useSWR from "swr";

function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales);
  //   const [isLoading, setIsLoading] = useState(false);

  const { data, error } = useSWR(
    "https://nextjs-course-d8a3d-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json",
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      const transformedSales = [];
      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transformedSales);
    }
  }, [data]);

  //   useEffect(() => {
  //     setIsLoading(true);

  //   }, []);

  if (error) {
    return <p>Failed to load.</p>;
  }

  if (!data || !sales) {
    return <p>Loading ....</p>;
  }

  return (
    <ul>
      {!error &&
        sales &&
        sales.map((sale) => (
          <li key={sale.id}>
            {sale.username} - ${sale.volume}
          </li>
        ))}
    </ul>
  );
}

export async function getStaticProps() {
  fetch(
    "https://nextjs-course-d8a3d-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json"
  )
    .then((res) => res.json())
    .then((data) => {
      const transformedSales = [];
      console.log(transformedSales);

      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }

      return {
        props: {
          sales: transformedSales,
        },
        revalidate: 10,
      };
    });
}

export default LastSalesPage;
