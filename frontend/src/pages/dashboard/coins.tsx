import { useEffect, useState } from "react";
import { getAllCoins } from "@/services/apiCoins";
import { useToast } from "@/components/ui/use-toast";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function coins() {
  const toast = useToast();
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    (async () => {
      const { data, error } = await getAllCoins();

      if (data) {
        setCoins([...coins, ...data]);
      } else {
        toast({
          title: error.status,
          description: error.message,
          variant: "destructive",
        });
      }
    })();
  }, []);

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Image</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {coins.map((coin) => (
          <TableRow key={coin.id}>
            <TableCell className="font-medium">{coin.name}</TableCell>
            <TableCell>
              {coin.symbol} {coin.price}
            </TableCell>
            <TableCell className="text-center">
              <img src={coin.img} className="h-[50px]i w-[50px]" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
