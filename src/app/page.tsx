import {Container, Filters, Title, TopBar} from "../components/shared/lib";

export default function Home() {
  return (
    <>
      <Container className="mt-5">
        <Title text="All Clothes" size="lg" className="font-extrabold"/>
        
      </Container>

      <TopBar/>

      <Container className="pb-14">
        <div className="flex gap-[60px]">
          {/* Filtration */}
          <div className="w-[250px]">
            <Filters/>
          </div>

          {/*List of products */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              List of products
              {/* <ProductGroupList title="zxc" items={[1,2,3,4,5]} />
              <ProductGroupList title="qwe" items={[1,2,3,4,5]} /> */}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
