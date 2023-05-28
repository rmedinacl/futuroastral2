import preline from "preline";

export const Test = ()=>{
    return (
        <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="text-center">
                <div>
                    <a className="flex-none text-xl font-semibold text-black dark:text-white" href="#" aria-label="Brand">Futuro Astral</a>
                </div>
                <div className="mt-3">
                    <p className="text-gray-500">We're part of the <a className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400" href="#">Mountain Creative</a> family.</p>
                    <p className="text-gray-500">Futuro Astral 2023. All rights reserved.</p>
                </div>
                <div className="mt-3 space-x-2">
                    {/* Use the updated SVGs below */}
                </div>
            </div>
        </footer>
    );
    };