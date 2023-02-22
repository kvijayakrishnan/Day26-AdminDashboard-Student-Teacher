import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <>
      {" "}
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/dashboard"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            Student Teacher Admin <sup></sup>
          </div>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <Link to="/dashboard" className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/students" className="nav-link">
            <i class="fas fa-fw fa-cog"></i>
            <span>Student</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/teachers" className="nav-link">
            <i class="fas fa-fw fa-wrench"></i>
            <span>Teacher</span>
          </Link>
        </li>
      </ul>
    </>
  );
}
