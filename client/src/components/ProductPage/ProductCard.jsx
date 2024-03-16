import prod2 from "@/assets/prod2.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function ProductCard() {
  return (
    <Card className="w-[300px] h-fit bg-transparent border-none">
      <CardHeader>
        <img src={prod2} alt="" className="w-[300px] h-fit" />
      </CardHeader>
      <CardContent>
        <p className="text-xs">Phulkari Embroidery (Punjab):</p>
      </CardContent>
      <CardFooter>
        <p className="font-bold">Rs. 25,000.00</p>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
