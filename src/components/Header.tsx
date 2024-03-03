import { FC } from "react";

const Header: FC = () => {
  return (
    <header>
      <h3>react-analog-clock</h3>
      <a className="repo-stars" href="https://github.com/hoseinhamzei/react-clock">
        <img
          alt="GitHub Repo stars"
          src="https://img.shields.io/github/stars/hoseinhamzei/react-clock"
        />
      </a>
    </header>
  );
};

export default Header;
