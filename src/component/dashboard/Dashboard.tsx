import { CheckSmall, Down} from "@icon-park/react";
import { useState } from "react";
const Dashboard = () => {
  const [open, setopen] = useState({ state: false, filter: "Recent" });
  const list = [
    { data: "New Created" },
    { data: "Recent" },
    { data: "Deleted" },
  ];
  const card = [
    { data: "New Created" },
    { data: "micro" },
    { data: "open" },
    { data: "New Created" },
    { data: "micro" },
    { data: "open" },
    { data: "New Created" },
    { data: "micro" },
    { data: "open" },
    { data: "New Created" },
    { data: "micro" },
    { data: "open" },
  ];
  return (
    <div className="dashboard">
      <div className="left">
        <div className="main-left">
          <div className="logo"></div>
          <div className="options"></div>
          <div className="pramotion"></div>
        </div>
      </div>
      <div className="right">
        <div className="navbar">navbar</div>
        <div className="Project-info">Project info</div>
        <div className="product-card">
          <div className="filter">
            <h3>Project</h3>
            <div className="dropdown">
              <span>
                Short :
                <a
                  onClick={() => {
                    setopen({ state: !open.state, filter: open.filter });
                  }}
                >
                  {open.filter} <Down />
                </a>
              </span>
              <div className={`opt-box ${!open.state ? "on" : "off"}`}>
                <ul>
                  {list.map((info) => {
                    return (
                      <li
                        onClick={() => {
                          setopen({
                            state: !open.state,
                            filter: info.data,
                          });
                        }}
                      >
                        <span
                          style={{
                            opacity: open.filter == info.data ? 1 : 0,
                          }}
                        >
                          <CheckSmall />
                        </span>
                        <a>{info.data}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="box">
              {card.map((Info) => {
                return <div className="main-card">{Info.data}</div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
