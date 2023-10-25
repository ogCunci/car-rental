import { CustomFilter, HeroSection, SearchBar } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <div className="mt-12 padding-x padding-y width-max">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalog</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
      </div>
    </main>
  );
}
