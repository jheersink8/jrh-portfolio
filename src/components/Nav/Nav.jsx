import { DarkModeIcon } from "./Icons/Dark-mode";
import { LightModeIcon } from "./Icons/Light-mode";
import { MuteIcon } from "./Icons/Mute";
import { UnmuteIcon } from "./Icons/Unmute";

export default function Nav() {
    return (
        <nav className="navbar sticky-top navbar-expand-lg">
            <div className="container-fluid">

                {/* Button to reload page */}
                <a className="navbar-brand ms-4" href="/">Jordan R. Heersink</a>

                {/* Hamburger button for smaller viewport */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation links */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-lg-0">

                        <li className="nav-item mx-4">
                            <a className="nav-link active" href="#about">About</a>
                        </li>

                        <li className="nav-item mx-4">
                            <a className="nav-link active" href="#projects">Projects</a>
                        </li>

                        <li className="nav-item mx-4">
                            <a className="nav-link active" href="#skills">Skills</a>
                        </li>

                        <li className="nav-item mx-4">
                            <a className="nav-link active" href="#resume">Resume</a>
                        </li>

                    </ul>

                    {/* Dark-mode/Light-mode */}
                    <div className="me-0">
                        <DarkModeIcon fill="#000000" width="24" height="24" />
                        <LightModeIcon fill="#000000" width="36" height="36" />
                    </div>
                    <div className="mx-3">|</div>
                    {/* Mute/Unmute */}
                    <div className="me-4">
                        <UnmuteIcon fill="#000000" width="36" height="36" />
                        <MuteIcon fill="#000000" width="38" height="38" />
                    </div>

                </div>
            </div>
        </nav>
    );
};