const NavBar = () => {
  const data = [
    {
      title: "github",
      icon: "https://img.icons8.com/fluency/344/github.png",
      link: "https://github.com/anujrajak",
    },
    {
      title: "instagram",
      icon: "https://img.icons8.com/color/344/instagram-new.png",
      link: "https://www.instagram.com/anuj__rajak/",
    },
    {
      title: "gmail",
      icon: "https://img.icons8.com/color/344/gmail.png",
      link: "mailto:mr.anujrajak@gmail.com",
    },
    {
      title: "linkedin",
      icon: "https://img.icons8.com/color/344/linkedin.png",
      link: "https://www.linkedin.com/in/anuj-rajak/",
    },
  ];

  return (
    <header className="navbar">
      <section className="navbar-section">
        {data.map((item) => (
          <IconItem key={item.title} props={item} />
        ))}
      </section>
    </header>
  );
};

const IconItem = ({ props }) => {
  const { icon, title, link } = props;
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img className="nav-icon" src={icon} alt={title} />
    </a>
  );
};

export { NavBar };
