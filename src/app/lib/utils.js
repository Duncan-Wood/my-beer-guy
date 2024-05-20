const servicesArray = [
  {
    id: 0,
    title: "Beer and Wine Line Cleaning",
    pathname: "/service/beer-and-wine-cleaning",
    img: "/services/beer-and-wine-cleaning.jpeg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam exercitationem deleniti fuga, autem possimus suscipit quod, obcaecati veniam natus commodi quo, deserunt nobis et nam vitae delectus culpa. Illum, praesentium."
  },
  {
    id: 1,
    title: "Emergency Service and Repair",
    pathname: "/service/emergency-service-and-repair",
    img: "/services/emergency-service-and-repair.jpeg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam exercitationem deleniti fuga, autem possimus suscipit quod, obcaecati veniam natus commodi quo, deserunt nobis et nam vitae delectus culpa. Illum, praesentium."
  },
  {
    id: 2,
    title: "Draft Beer System Audits",
    pathname: "/service/draft-beer-system-audits",
    img: "/services/draft-beer-system-audits.webp",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam exercitationem deleniti fuga, autem possimus suscipit quod, obcaecati veniam natus commodi quo, deserunt nobis et nam vitae delectus culpa. Illum, praesentium."
  },
  {
    id: 3,
    title: "Draft System Installation",
    pathname: "/service/draft-system-installation",
    img: "/services/draft-system-installation.jpeg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam exercitationem deleniti fuga, autem possimus suscipit quod, obcaecati veniam natus commodi quo, deserunt nobis et nam vitae delectus culpa. Illum, praesentium."
  },
  {
    id: 4,
    title: "Glycol System Service",
    pathname: "/service/glycol-system-service",
    img: "/services/glycol-system-service.jpeg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam exercitationem deleniti fuga, autem possimus suscipit quod, obcaecati veniam natus commodi quo, deserunt nobis et nam vitae delectus culpa. Illum, praesentium."
  },
  {
    id: 5,
    title: "Bar Supplies",
    pathname: "/service/bar-supplies",
    img: "/services/bar-supplies.webp",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam exercitationem deleniti fuga, autem possimus suscipit quod, obcaecati veniam natus commodi quo, deserunt nobis et nam vitae delectus culpa. Illum, praesentium."
  },
  {
    id: 6,
    title: "Fruit Fly Control",
    pathname: "/service/fruit-fly-control",
    img: "/services/fruit-fly-control.webp",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam exercitationem deleniti fuga, autem possimus suscipit quod, obcaecati veniam natus commodi quo, deserunt nobis et nam vitae delectus culpa. Illum, praesentium."
  },
];

const clientsArray = [
  {
    name: "4 Brands",
    pathname: "/clients/4-brands-horizontal.png",
    alt: "4 Brands Logo",
  },
  {
    name: "Five Star Distributing",
    pathname: "/clients/Five-Star-Distributing.png",
    alt: "Five-Star-Distributing",
  },
  {
    name: "WC Thunderbolts",
    pathname: "/clients/W-C-Thunderbolts.png",
    alt: "WC Thunderbolts Logo",
  },
  {
    name: "Buffalo Wild Wings",
    pathname: "/clients/bww-full-horizontal.png",
    alt: "Buffalo Wild Wings Logo",
  },
  {
    name: "Outback Steakhouse",
    pathname: "/clients/outback-black.png",
    alt: "Outback Steakhouse Logo",
  }
]

function findNextPrevious(index, arrayLength) {
  let prevIndex = null;
  let nextIndex = null;

  if (index >= arrayLength - 1) {
    prevIndex = arrayLength - 2;
    nextIndex = 0;
  } else if (index == 0) {
    prevIndex = arrayLength - 1;
    nextIndex = 1;
  } else {
    prevIndex--;
    nextIndex++;
  }

  return { prevIndex, nextIndex };
}

export { servicesArray, clientsArray, findNextPrevious };
