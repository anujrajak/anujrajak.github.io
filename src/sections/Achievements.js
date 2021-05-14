const Achievements = () => {
    const badges = [
        {
            alt: "Hacktoberfest 2020 badge",
            img: "https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/80/hacktoberfest2020-badge_2.png",
            title: 'Hacktober fest 2020',
            bodyText: 'I participated and successfully completed the required tasks at hacktoberfest.',
            link: 'https://hacktoberfest.digitalocean.com/',
            buttonText: 'Hacktoberfest 2020'
        },
        {
            alt: "Arctic Code Vault Contributor",
            img: "https://github.githubassets.com/images/modules/profile/badge--acv-64.png",
            title: 'Arctic Code Vault Contributor',
            bodyText: 'I contributed code to 3 repositories in the 2020 GitHub Archive Program.',
            link: 'https://archiveprogram.github.com/',
            buttonText: 'GitHub Archive Program'
        },
        {
            alt: "DEV Community",
            img: "https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg",
            title: 'DEV Community',
            bodyText: '',
            link: ' DEV Community badge',
            buttonText: ''
        },
    ];
    return (
        <section className="wrapper">
            <div className="columns">
                <div className="column col-2">
                    <img
                        id="list-icon"
                        src="https://img.icons8.com/fluent/344/prize.png"
                        alt="skills"
                    />
                </div>
                <div className="column col-10">
                    <h3>Achievements</h3>
                    {badges.map((badge) => {
                        return (
                            <div className="popover popover-top" key={badges.indexOf(badge)}>
                                <img
                                    alt={badge.alt}
                                    src={badge.img}
                                    className="tooltip list-item-icon"
                                />
                                <div className="popover-container">
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="card-title h6">
                                                {badge.title}
                                            </div>
                                        </div>
                                        {badge.bodyText && <div className="card-body">
                                            {badge.bodyText}
                                        </div>}
                                        {badge.buttonText && badge.link && <div className="card-footer">
                                            <a
                                                className="btn btn-primary btn-sm"
                                                href={badge.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {badge.buttonText}
                                            </a>
                                        </div>}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export { Achievements };
