import avatar from "../avatar.jpg";

const Profile = () => {
  return (
    <section className="profile">
      <div className="profile-head">
        <img id="avatar-img" src="https://avatars.githubusercontent.com/u/29977390?v=4" alt="profile" />
        <h1 id="ava-name">Anuj Rajak</h1>
        <div>
          <h2>
            Software Engineer at
            <span className="highlight">
              <a
                href="https://www.redhat.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                &nbsp;Red Hat
              </a>
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export { Profile };
