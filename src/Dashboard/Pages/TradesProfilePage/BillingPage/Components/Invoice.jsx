const invoices = [
    { id: "01", title: "Website Development", description: "Invoice for web development services." },
    { id: "02", title: "SEO Optimization", description: "Invoice for SEO and marketing services." },
    { id: "03", title: "Graphic Design", description: "Invoice for logo and branding services." },
    { id: "04", title: "Consultation Fee", description: "Invoice for business consultation services." },
    { id: "05", title: "Hosting & Domain", description: "Invoice for annual hosting and domain charges." },
];

const Invoice = () => {
    return (
        <div className="max-w-3xl mx-auto bg-white rounded-lg">
            <div className="mb-6">
                <h2 className="text-3xl font-semibold text-gray-800">Invoices</h2>
                <p className="text-gray-600 text-lg">
                    No invoices available. Invoices are generated at the beginning of each month.
                </p>
            </div>
            <hr className="my-6 border-gray-300" />
            <div className="space-y-4">
                {invoices.map((invoice) => (
                    <div key={invoice.id} className="flex items-center justify-between p-3 border rounded-lg hover:shadow-lg transition-all">
                        <div className="flex items-center">
                            {/* Invoice ID with border right */}
                            <div className="pr-4 border-r border-gray-300">
                                <span className="text-xl font-medium text-gray-800">
                                    {invoice.id}.
                                </span>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-xl font-medium text-gray-800">
                                    {invoice.title}
                                </h3>
                                <p className="text-sm text-gray-600">{invoice.description}</p>
                            </div>
                        </div>
                        <button className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition">
                            View
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Invoice;
