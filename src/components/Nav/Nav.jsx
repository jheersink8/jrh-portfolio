import { DarkModeIcon } from "./Icons/Dark-mode";
import { LightModeIcon } from "./Icons/Light-mode";
import { MuteIcon } from "./Icons/Mute";
// import { UnmuteIcon } from "./Icons/Unmute";

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">

                {/* Button to reload page */}
                <a class="navbar-brand" href="/">Jordan R. Heersink</a>

                {/* Hamburger button for smaller viewport */}
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                {/* Navigation links */}
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#resume">Resume</a>
                        </li>
                    </ul>

                    {/* Dark-mode/Light-mode */}
                    <div>  <DarkModeIcon fill="#000000" width="24" height="24" /></div>
                    <div>  <LightModeIcon fill="#000000" width="36" height="36" /></div>

                    {/* Mute/Unmute */}
                    <div>  <MuteIcon fill="#000000" width="36" height="36" /></div>


                </div>
            </div>
        </nav>
    );
};