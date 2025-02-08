

export function ResponsiveTest() {
    const navReponse = document.getElementById("navBurger");

    function handleClick() {
        navReponse.classList.toggle("hidden");
    }
  return (
    <>
        <nav className="flex justify-between text-white rounded-xl bg-stone-900 outline-white outline outline-2 my-2 p-5">
            <div className="flex flex-row gap-5 items-center">
                    <img src="bmw.png" alt="logo" className="max-w-8 max-h-8" />
                    <h1 className="text-2xl">Garazas</h1>
            </div>
            <div className="hidden sm:flex justify-between items-center gap-8">
                    <span>Home</span>
                    <span>About</span>
                    <span>Contact</span>
            </div>
            <button className="flex justify-end sm:hidden" onClick={handleClick}>
                <img src="icons/HamburgerMenu.svg" alt="burger" className="max-w-8 max-h-8" />
                
            </button>
        </nav>
        <div id="navBurger" className="flex flex-row justify-end m-3 p-3 bg-gray-900">
                <ul className="grid grid-cols-1 gap-2 justify-items-center">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
        </div>
    </>
  );
}
