import { Link } from "@inertiajs/react";

const isProduks = (produks) => {
    return produks.map((produk, index) => {
        return (
            <div
                key={index}
                className="w-36 lg:w-80 rounded-lg shadow-md transform transition duration-300 hover:scale-105"
            >
                <div className="relative ">
                    <Link href={route("details.show", produk.id)}>
                        <div className="relative hover:opacity-100 bg-opacity-90 duration-300">
                            <span className="absolute inset-0 z-10 bg-black text-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100">
                                <h1 className="text-xs lg:text-xl tracking-wider font-bold">
                                    {produk.judul}
                                </h1>
                            </span>
                            <div className="w-full flex flex-wrap content-center">
                                <img
                                    src={produk.url_image}
                                    className="mx-auto"
                                    alt={produk.judul}
                                />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        );
    });
};

const noProduks = () => {
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

const ProdukLists = ({ produks }) => {
    return !produks ? noProduks() : isProduks(produks);
};
export default ProdukLists;
