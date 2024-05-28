import { Link } from "@inertiajs/react";
import "aos/dist/aos.css";

const isProdukSliders = (produksliders) => {
    return produksliders.slice(0, 8).map((produksliders, i) => {
        return (
            <div key={i} className="snap-start snap-always shrink-0">
                <Link href={`/details/produks/${produksliders.judul}`}>
                    <div className=" rounded shadow-md">
                        <div className="relative">
                            <span className="absolute inset-0 z-10 bg-black text-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                                <h1 className="text-xs lg:text-xl tracking-wider font-bold">
                                    {produksliders.judul}
                                </h1>
                            </span>
                            <div className="w-full flex flex-wrap content-center">
                                <img
                                    className="bg-none object-cover"
                                    src={produksliders.url_image}
                                    alt={produksliders.judul}
                                />
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    });
};

const noProdukSliders = () => {
    return (
        <>
            <p
                className="mb-4 px-4 md:px-0 text-center md:text-xl text-sm font-bold tracking-tight leading-none text-gray-900 md:text-1xl dark:text-white"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="300"
            >
                Tidak ada produk saat ini
            </p>
        </>
    );
};

const ProdukSliders = ({ produksliders }) => {
    return !produksliders ? noProdukSliders() : isProdukSliders(produksliders);
};
export default ProdukSliders;
