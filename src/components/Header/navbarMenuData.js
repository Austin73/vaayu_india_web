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
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Air Handling Units",
        path: "/airhandlingunits",
        newTab: false,
      },
      {
        id: 32,
        title: "Industrial Air Coolers",
        path: "/industrialaircoolers",
        newTab: false,
      },
      {
        id: 33,
        title: "Vibranium Cooling",
        path: "/vibraniumcooling",
        newTab: false,
      },
    ],
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
    id: 7,
    title: "Blog",
    path: "/blog",
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
