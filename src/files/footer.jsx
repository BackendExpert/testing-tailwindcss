import React from "react";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
        <div className="container mx-auto py-14 px-6">
            <div className="grid md:grid-cols-12 grid-cols-1 gap-7">
                <div className="lgLcol-span-4 col-span-12">
                    <div className="lg:col-span-2 md:col-span-4 col-span-12">
                        <h5 className="tracking-wide text-gray-100 font-semibold">Company</h5>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;