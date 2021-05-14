import avatar from "../avatar.jpg";

const Profile = () => {
    return (
        <section className="profile">
            <div className="profile-head">
            <img id="avatar-img" src={avatar} alt="profile" />
            <h1 id="ava-name">Anuj Rajak</h1>
            <h2>
                Software Engineer at{" "}
                <span className="highlight">
                <a
                    href="https://www.rave-tech.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Rave Technologies
                </a>
                </span>
            </h2>
            </div>
        </section>
    )
}

export { Profile };