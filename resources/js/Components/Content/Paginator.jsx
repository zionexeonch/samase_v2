import { Link } from "@inertiajs/react";

const Paginator = ({ meta }) => {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;
    return (
        <>
            <nav aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px text-sm mt-4">
                    {prev && (
                        <li>
                            <Link
                                href={prev}
                                className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-white bg-blue-700 border border-[#f3f3ff] rounded-l-lg hover:bg-blue-600 hover:text-white"
                            >
                                Previous
                            </Link>
                        </li>
                    )}
                    <li>
                        <Link className="flex items-center justify-center px-3 h-8 leading-tight text-white bg-blue-700 border border-[#f3f3ff]  hover:text-white">
                            {current}
                        </Link>
                    </li>
                    {next && (
                        <li>
                            <Link
                                href={next}
                                className="flex items-center justify-center px-3 h-8 leading-tight text-white bg-blue-700 border border-[#f3f3ff] rounded-r-lg hover:bg-blue-600 hover:text-white"
                            >
                                Next
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </>
    );
};
export default Paginator;
