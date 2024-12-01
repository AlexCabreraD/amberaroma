import Menu from "@/app/components/menu";
import Navbar from "@/app/components/navbar";

function MenuPage() {
  return (
    <div>
      <Navbar />
      <Menu />
      {/* Disclaimer*/}
      <div className="w-full flex justify-center text-center text-gray-600 text-sm italic py-[32px]">
        <p>
          *Prices listed are for 12oz servings. Drinks are available in 8oz,
          12oz, or 16oz sizes.
        </p>
      </div>
    </div>
  );
}

export default MenuPage;
