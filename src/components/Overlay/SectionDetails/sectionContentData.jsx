// Components
import TeamCarousel from "../TeamCarousel";

// Sections content data
const sectionsContentData = [
  {
    key: "about",
    title: "About us",
    content: (
      <p>
        Welcome to Er Brothers It Services. we provide Web Services, Web
        Development, Android develpment,etc. our team have more than 4 year
        Experiance of web and Android Development, we succefully deploy varios
        Government And commercial Project During Our Collage 📱✨🎉
      </p>
    ),
  },
  { key: "team", title: "Our team", content: <TeamCarousel /> },
  {
    key: "credits",
    title: "Credits",
    content: (
      <ul className="credits">
        <li>
          <a href="https://www.chingu.io/">Mihir Patel</a>
        </li>
        <li>
          <a href="https://threejs-journey.com/">Jaimih Prajapati</a>
        </li>
        <li>
          <a href="https://poly.pizza">Rushil Bhatt</a>
        </li>
        <li>
          <a href="https://www.syntystudios.com">Swayam Modh</a>
        </li>

        <li>
          <a href="https://t.me/tech_overflow">Er Brothers</a>
        </li>
      </ul>
    ),
  },
];

export default sectionsContentData;
