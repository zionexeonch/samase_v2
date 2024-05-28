import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { Link, usePage } from "@inertiajs/react";

const isProduks = (props) => {
    const { produks } = usePage().props;

    return (
        <div className="flex flex-wrap items-start lg:items-center bg-white rounded-lg border shadow-md lg:flex-row lg:max-w-xl ">
            <img
                className="object-cover w-full lg:h-96 rounded-t-lg h-auto  lg:rounded-none lg:rounded-t-lg"
                src={produks.url_image}
                alt={produks.judul}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">
                    Deskripsi :{" "}
                </p>
                <span className="mb-3 font-normal text-gray-700 dark:text-gray-300">
                    {produks.deskripsi}
                </span>
                <div className="md:mb-5 mb-3 font-normal text-gray-700 dark:text-gray-300">
                    <Link
                        href="/kontak-kami"
                        type="button"
                        className="px-4 py-3 bg-blue-600 hover:bg-blue-800 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform flex"
                    >
                        <span>Pesan Segera</span>
                    </Link>
                </div>
                <span>
                    <Link
                        href={route("produks.show")}
                        className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                    >
                        <ArrowLeftIcon className="h-6" />
                        &nbsp; Kembali
                    </Link>
                </span>
            </div>
        </div>
    );
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

const ProdukDetails = ({ produks }) => {
    return !produks ? noProduks() : isProduks(produks);
};
export default ProdukDetails;
