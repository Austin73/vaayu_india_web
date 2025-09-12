const navbarMenuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About Us",
    path: "/aboutus",
    newTab: false,
  },
  {
    id: 3,
    title: "Product",
    path: "/product",
    newTab: false,
  },
  {
    id: 4,
    title: "Media",
    newTab: false,
   submenu: [
      {
        id: 41,
        title: "Media Awards",
        path: "/media",
        newTab: false,
      },
      {
        id: 42,
        title: "Press Release",
        path: "/pressrelease",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Career",
    path: "/career",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact Us",
    path: "/contactus",
    newTab: false,
  },
];
export default navbarMenuData;
