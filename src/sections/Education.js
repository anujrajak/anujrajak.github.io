const Education = () => {
    return (
        <section className="wrapper">
        <div className="columns">
          <div className="column col-2">
            <img
              id="list-icon"
              src="https://img.icons8.com/color/344/student-male--v1.png"
              alt="icon"
            />
          </div>
          <div className="column col-10">
            <h3>Education</h3>
            <p>
              I've completed schooling from Madhya Pradesh Board of Secondary
              Education and earned Bachelor of Engineering degree from&nbsp;
              <span className="highlight">
                <a
                  href="http://www.globalengineeringcollege.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Global Engineering College
                </a>
              </span>
              &nbsp;in Computer Science and engineering.
            </p>
          </div>
        </div>
      </section>
    )
}

export { Education };