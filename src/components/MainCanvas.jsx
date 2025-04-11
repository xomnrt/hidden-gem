function Card() {
    return (
        <div className="flex flex-col items-center gap-3 rounded-xl border border-oat bg-white p-4 shadow-sm transition hover:shadow-md">
            <img
                className="h-24 w-24 object-contain"
                src="/books-svgrepo-com.svg"
                alt="Book icon"
            />
            <div className="text-center space-y-1">
                <p className="text-base font-semibold text-gray-800">Title</p>
                <p className="text-sm font-medium text-olive">Author</p>
            </div>
            <button
                type="button"
                className="rounded-xl border border-cherry px-3 py-1.5 text-sm text-cherry transition hover:border-transparent hover:bg-cherry hover:text-white active:bg-cherry"
            >
                Add to list
            </button>
        </div>
    );
}

function CardsContainer() {
    return (
        <div className="col-span-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

        </div>
    )
}

export function Pagination() {
    return (
        <>
            <div className="grid col-span-full bg-olive text-oat grid-cols-12 items-center">
                <button
                    className="btn btn-outline col-start-5 col-end-7 hover:bg-oat hover:text-olive px-3 py-2 rounded-md text-m font-medium">
                    Previous page
                </button>
                <button
                    className="btn btn-outline col-start-7 col-end-9 hover:bg-oat hover:text-olive px-3 py-2 rounded-md text-m font-medium">
                    Next page
                </button>
            </div>
        </>
    )

}

function MainCanvas() {
    return (
        <div className="grid col-span-full grid-cols-12">
            <CardsContainer />
        </div>
    )
}

export default MainCanvas
