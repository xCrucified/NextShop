import { ProductCard } from "@/components/shared/product-card";
import { Container, Filters, Title, TopBar } from "../components/shared/lib";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import './globals.css';

export default function Home() {
  return (
    <>
      <Container className="mt-5">
        <Title text="All Clothes" size="lg" className="font-extrabold" />

      </Container>

      <TopBar />

      <Container className="pb-14 mt-4">
        <div className="flex gap-[60px]">
          {/* Filtration */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/*List of products */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList title={"Clothes"} items={[{
                id: 1,
                name: 'Bebra',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI0Oc9tGIzrpArxdS1fwqz1vI8jrVMefimow&s',
                price: 345,
                items: [{ price: 345 }],
              },
              {
                id: 2,
                name: 'Bebra',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI0Oc9tGIzrpArxdS1fwqz1vI8jrVMefimow&s',
                price: 345,
                items: [{ price: 345 }],
              },
              {
                id: 3,
                name: 'Bebra',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI0Oc9tGIzrpArxdS1fwqz1vI8jrVMefimow&s',
                price: 345,
                items: [{ price: 345 }],
              },
              {
                id: 4,
                name: 'Bebra',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI0Oc9tGIzrpArxdS1fwqz1vI8jrVMefimow&s',
                price: 345,
                items: [{ price: 345 }],
              },
              {
                id: 5,
                name: 'Bebra',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI0Oc9tGIzrpArxdS1fwqz1vI8jrVMefimow&s',
                price: 345,
                items: [{ price: 345 }],
              },
              {
                id: 6,
                name: 'Bebra',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI0Oc9tGIzrpArxdS1fwqz1vI8jrVMefimow&s',
                price: 345,
                items: [{ price: 345 }],
              },
              ]} categoryId={1} />
              <ProductsGroupList title={"Shoes"} categoryId={2} items={[{
                id: 1,
                name: 'Bebra',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI0Oc9tGIzrpArxdS1fwqz1vI8jrVMefimow&s',
                price: 345,
                items: [{ price: 345 }],
              },
              {
                id: 2,
                name: 'Bebra',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI0Oc9tGIzrpArxdS1fwqz1vI8jrVMefimow&s',
                price: 345,
                items: [{ price: 345 }],
              },
              {
                id: 9,
                name: 'Bebra',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI0Oc9tGIzrpArxdS1fwqz1vI8jrVMefimow&s',
                price: 345,
                items: [{ price: 345 }],
              },
              {
                id: 10,
                name: 'Bebra',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI0Oc9tGIzrpArxdS1fwqz1vI8jrVMefimow&s',
                price: 345,
                items: [{ price: 345 }],
              },
              {
                id: 11,
                name: 'Bebra',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI0Oc9tGIzrpArxdS1fwqz1vI8jrVMefimow&s',
                price: 345,
                items: [{ price: 345 }],
              },
              {
                id: 12,
                name: 'Bebra',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI0Oc9tGIzrpArxdS1fwqz1vI8jrVMefimow&s',
                price: 345,
                items: [{ price: 345 }],
              },
              ]} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
