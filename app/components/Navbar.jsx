"use client";
import React from "react";
import { Menu } from "antd";
import Link from "next/link";
import { LoginOutlined,UserAddOutlined,AppstoreAddOutlined } from '@ant-design/icons';

const { Item } = Menu;
const Navbar = () => {
  return (
    <Menu mode="horizontal">
      <Item icon={<AppstoreAddOutlined />}>
        <Link href="/">App</Link>
      </Item>
      <Item icon={< LoginOutlined/>}>
        <Link href="/login">Login</Link>
      </Item>
      <Item icon={<UserAddOutlined />}>
        <Link href="/register">Register</Link>
      </Item>
    </Menu>
  );
};

export default Navbar;
