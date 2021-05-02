import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import "./Header.css";
import bigLogo from "../../image/bigLogo2.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              <p>
                {menuCollapse ? (
                  "Kabir"
                ) : (
                  <div className="p-4 text-center">
                    <img
                      className="big-logo-image-style"
                      src={bigLogo}
                      alt=""
                    />
                  </div>
                )}
              </p>
            </div>
            
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square" className="text-center">
              
                <Link to="/"><MenuItem active={false}>Home</MenuItem></Link>
              
              <Link to="/about">
                <MenuItem>About Me</MenuItem>
              </Link>
              <Link to="/resume">
                <MenuItem>My Profile</MenuItem>
              </Link>
              <Link to="/blog">
                <MenuItem>My Blog</MenuItem>
              </Link>
              <Link to="/project">
                <MenuItem>My Projects</MenuItem>
              </Link>
              <Link to="/contact">
                <MenuItem>Contact Me</MenuItem>
              </Link>
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;
