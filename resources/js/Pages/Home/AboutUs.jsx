import Main from "@/Layouts/Home/Main";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Head } from "@inertiajs/react";

const AboutUs = (props) => {
    useEffect(() => {
        AOS.refresh();
    }, []);
    return (
        <>
            <Head title={props.title} />
            <div className="container mx-auto lg:my-0 my-4">
                <div className="mx-auto lg:py-12 lg:px-6 py-4 px-4">
                    <div className="flex flex-col lg:flex-row justify-between gap-8">
                        <div
                            className="w-full lg:w-5/12 flex flex-col text-justify justify-center"
                            data-aos="fade-down"
                            data-aos-duration="1000"
                            data-aos-delay=""
                        >
                            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
                                Tentang Kami
                            </h1>
                            <p className="font-semibold text-base leading-6 text-gray-800 ">
                                Samase lahir dari hasrat kami untuk memberikan
                                solusi holistik bagi kesehatan lambung dan usus.
                                Dengan dedikasi yang kuat pada riset ilmiah dan
                                inovasi, kami telah mengembangkan formula yang
                                efektif untuk mengatasi gangguan lambung, mual,
                                radang usus, dan masalah pencernaan lainnya.
                                Kami percaya bahwa setiap individu berhak
                                mendapatkan kualitas hidup yang optimal, dan
                                itulah yang mendorong kami untuk terus
                                berinovasi dalam menyediakan produk obat yang
                                berkualitas dan terpercaya.
                            </p>
                        </div>
                        <div className=" w-full self-end px-4 lg:w-1/2">
                            <div
                                className="relative mt-4 lg:right-0 lg:mt-9"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                data-aos-delay=""
                            >
                                <img
                                    src="https://res.cloudinary.com/db5crtdft/image/upload/v1716611055/samase/produk/Fillah_Samase_FOTO_2_kht6kt.jpg"
                                    alt="Fillah Samase"
                                    className="relative z-10 mx-auto md:max-w-md max-w-full"
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        className=" justify-start mb-4 pt-12"
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                    >
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
                            Cerita Singkat Kami
                        </h1>

                        <p className="font-semibold text-justify text-base leading-6 text-gray-800 ">
                            Samase lahir dari perjalanan pribadi salah satu
                            pendiri kami yang mengalami gangguan lambung dan
                            masalah pencernaan yang kronis. Setelah
                            bertahun-tahun mencari solusi tanpa hasil yang
                            memuaskan, ia memutuskan untuk melakukan riset
                            mendalam tentang bahan alami yang dapat membantu
                            meredakan gejala dan memperbaiki kesehatan lambung
                            dan usus. Dengan bimbingan para ahli dan tim ilmiah,
                            ia berhasil menciptakan formula unik yang menjadi
                            cikal bakal dari Samase. Dengan percaya diri dan
                            semangat untuk membantu orang lain yang mengalami
                            masalah serupa, kami memperkenalkan Samase kepada
                            masyarakat. Sejak itu, respon positif dari para
                            pengguna yang merasakan manfaat nyata telah menjadi
                            dorongan bagi kami untuk terus mengembangkan dan
                            menyempurnakan produk kami. Kami berkomitmen untuk
                            menyediakan solusi yang aman, efektif, dan
                            terpercaya bagi mereka yang membutuhkan, karena
                            kesehatan adalah hak bagi semua orang.
                        </p>
                    </div>
                    <div
                        className=" justify-start mb-4 pt-12"
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                    >
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
                            Komposisi dan Manfaat
                        </h1>
                        <div className="text-center flex justify-center items-center">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 md:mx-0">
                                <div>
                                    <p className="font-semibold lg:text-xl text-lg leading-6 text-gray-800 ">
                                        Komposisi Fillah Samase:
                                    </p>
                                    <br />
                                    <div className="font-semibold text-justify text-base leading-6 text-gray-800 ">
                                        <ul className="list-decimal mb-4 mx-4">
                                            <li className="md:text-base text-sm text-justify mb-3">
                                                Phoenix dactylifera fructus
                                                ekstrak 11.25 gr
                                            </li>
                                            <li className="md:text-base text-sm text-justify mb-3">
                                                Mel depuratum 2.10 gr
                                            </li>
                                            <li className="md:text-base text-sm text-justify mb-3">
                                                Curcuma domestica rhizoma
                                                ekstrak 450 mg
                                            </li>
                                            <li className="md:text-base text-sm text-justify mb-3">
                                                Zingiber officinale rhizoma
                                                ekstrak 300 mg
                                            </li>
                                            <li className="md:text-base text-sm text-justify mb-3">
                                                Kaempferia galanga rhizoma
                                                ekstrak 150 mg
                                            </li>
                                            <li className="md:text-base text-sm text-justify mb-3">
                                                Andrographis paniculata ekstrak
                                                300 mg
                                            </li>
                                            <li className="md:text-base text-sm text-justify mb-3">
                                                Cinnamomum burmannii cortex
                                                ekstrak 300 mg
                                            </li>
                                            <li className="md:text-base text-sm text-justify mb-3">
                                                Mentha arvensis folium ekstrak
                                                80 mg
                                            </li>
                                            <li className="md:text-base text-sm text-justify mb-3">
                                                Oleum Nigella sativa semen 80 mg
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-semibold lg:text-xl text-lg leading-6 text-gray-800 ">
                                        Manfaat Fillah Samase:
                                    </p>
                                    <br />
                                    <div className="font-semibold text-justify text-base leading-6 text-gray-800 ">
                                        <ul className="list-decimal mb-4 mx-4">
                                            <li className="md:text-base text-sm text-justify mb-3">
                                                Mengurangi gangguan lambung
                                            </li>
                                            <li className="md:text-base text-sm text-justify mb-3">
                                                Menenangkan perut kembung
                                            </li>
                                            <li className="md:text-base text-sm text-justify mb-3">
                                                Meringankan gejala mual
                                            </li>
                                            <li className="md:text-base text-sm text-justify mb-3">
                                                Mengatasi masalah radang usus
                                            </li>
                                            <li className="md:text-base text-sm text-justify mb-3">
                                                Mengobati liver & gerd
                                            </li>
                                            <li className="md:text-base text-sm text-justify mb-3">
                                                Membantu proses pencernaan
                                            </li>
                                            <li className="md:text-base text-sm text-justify mb-3">
                                                Mengobati radang usus
                                            </li>
                                            <li className="md:text-base text-sm text-justify mb-3">
                                                Meningkatkan asupan nutrisi
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <h1
                        className=" mb-4 text-center text-3xl font-bold tracking-tight leading-none text-gray-900 md:text-4xl "
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                    >
                        Media Sosial
                    </h1>
                </div>
                <div className="container px-4 md:my-0">
                    <div className="flex flex-row justify-center items-center mb-4">
                        <div
                            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-16 md:mx-0"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            data-aos-delay="400"
                        >
                            {props.sosialmedias.map((sosialmedia, index) => (
                                <div
                                    key={index}
                                    className="p-6 max-w-sm bg-slate-50 rounded-lg shadow-md  transform transition duration-300 hover:scale-105 hover:bg-slate-300"
                                >
                                    <div className="flex flex-col items-center">
                                        <div className="mb-2">
                                            <img
                                                src={sosialmedia.url_image}
                                                alt={sosialmedia.nama_gambar}
                                                className="w-40 h-40 object-contain"
                                            />
                                        </div>
                                        <h5 className="mb-2 text-center text-xl lg:text-2xl font-bold tracking-tight text-gray-900 ">
                                            {sosialmedia.nama_gambar}
                                        </h5>

                                        <div className="flex justify-center items-center">
                                            <a
                                                href={sosialmedia.link}
                                                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#614a93] rounded-lg hover:bg-[#3a2c58] focus:ring-4 focus:outline-none focus:ring-blue-300 "
                                                target="_blank"
                                            >
                                                {sosialmedia.tombol}
                                                <svg
                                                    aria-hidden="true"
                                                    className="ml-2 -mr-1 w-4 h-4"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
AboutUs.layout = (page) => <Main children={page} />;
export default AboutUs;
