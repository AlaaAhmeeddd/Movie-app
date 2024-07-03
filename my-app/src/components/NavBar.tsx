import NavBarItem from "./NavBarItem";

export default function NavBar() {
    return (
        <div className="flex justify-center py-4 gap-10 dark:bg-gray-600 bg-amber-100">
            <NavBarItem title="Trending" param="fetchTrending" />
            <NavBarItem title="Top Rated" param="fetchTop" />
        </div>
    )
}
