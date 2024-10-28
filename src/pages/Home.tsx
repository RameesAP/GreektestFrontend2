import CardListing from "@/component/CardListing";
import Nav from "@/component/Nav";
import SecOptions from "@/component/Options";

const Home = () => {
  return (
    <>
      <div className="container mx-auto p-4 ">
        <Nav />
        <SecOptions />
        <CardListing />
      </div>
    </>
  );
};

export default Home;
