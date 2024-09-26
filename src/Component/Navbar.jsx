function Navbar() {
  return (
    <div className="flex justify-center items-center mt-6 sticky top-5 z-10">
      <ul className="menu menu-horizontal bg-base-200 rounded-box">
        <li>
          <a className="tooltip" data-tip="Home" href="#home">
          <i class="fa-solid fa-house"></i>
          </a>
        </li>
        <li>
          <a className="tooltip" data-tip="About" href="#about">
          <i class="fa-solid fa-address-card"></i>
          </a>
        </li>
        <li>
          <a className="tooltip" data-tip="Experience" href="#exp">
          <i class="fa-solid fa-star"></i>
          </a>
        </li>
        <li>
          <a className="tooltip" data-tip="Project" href="#project">
          <i class="fa-solid fa-lightbulb"></i>
          </a>
        </li>
        <li>
          <a className="tooltip" data-tip="Skills" href="#skills">
          <i class="fa-solid fa-code"></i>
          </a>
        </li>
        <li>
          <a className="tooltip" data-tip="Contact" href="#contact">
          <i class="fa-solid fa-address-book"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
