const Skills = () => {
    const skillsList = [
        {
            alt: 'javascript',
            img: 'https://img.icons8.com/color/344/javascript.png'
        },
        {
            alt: 'react',
            img: 'https://img.icons8.com/color/344/react-native.png'
        },
        {
            alt: 'typescript',
            img: 'https://img.icons8.com/color/344/typescript.png'
        },
        {
            alt: 'angular',
            img: 'https://img.icons8.com/color/344/angularjs.png'
        },
        {
            alt: 'nodejs',
            img: 'https://img.icons8.com/color/344/nodejs.png'
        },
        {
            alt: 'ionic',
            img: 'https://ionicframework.com/img/meta/favicon-96x96.png'
        },
        {
            alt: 'jasmine',
            img: 'https://jasmine.github.io/images/jasmine_32x32.ico'
        },
        {
            alt: 'mongodb',
            img: 'https://img.icons8.com/color/344/mongodb.png'
        },
        {
            alt: 'mysql',
            img: 'https://img.icons8.com/color/344/mysql.png'
        },
        {
            alt: 'wordpress',
            img: 'https://img.icons8.com/color/344/wordpress.png'
        },
        {
            alt: 'php',
            img: 'https://img.icons8.com/color/344/php.png'
        },
        {
            alt: 'html',
            img: 'https://img.icons8.com/color/344/html-5.png'
        },
        {
            alt: 'css',
            img: 'https://img.icons8.com/color/344/css3.png'
        },
        {
            alt: 'bootstrap',
            img: 'https://img.icons8.com/color/344/bootstrap.png'
        },
        {
            alt: 'json',
            img: 'https://img.icons8.com/color/344/json--v1.png'
        },
        {
            alt: 'vscode',
            img: 'https://img.icons8.com/color/344/visual-studio-code-2019.png'
        },
        {
            alt: 'github',
            img: 'https://img.icons8.com/color/344/github--v1.png'
        },
        {
            alt: 'ubuntu',
            img: 'https://img.icons8.com/color/344/ubuntu--v1.png'
        },
        {
            alt: 'adobe-photoshop',
            img: 'https://img.icons8.com/color/344/adobe-photoshop.png'
        },
        {
            alt: 'aurdino',
            img: 'https://img.icons8.com/color/344/arduino.png'
        },
        {
            alt: 'raspberry-pi',
            img: 'https://img.icons8.com/color/344/raspberry-pi.png'
        }
    ];
    return (
        <section className="wrapper">
            <div className="columns">
                <div className="column col-2">
                    <img
                        id="list-icon"
                        src="https://img.icons8.com/color/344/source-code.png"
                        alt="skills"
                    />
                </div>
                <div className="column col-10">
                    <h3>Skills</h3>
                    {skillsList.map(skill => {
                        return <img
                            src={skill.img}
                            alt={skill.alt}
                            className='list-item-icon'
                            key={skillsList.indexOf(skill)} />
                    })}
                </div>
            </div>
        </section>
    );
};

export { Skills };
