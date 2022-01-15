const Career = () => {
  return (
    <section className="wrapper">
      <div className="columns">
        <div className="column col-2">
          <img
            id="list-icon"
            src="https://img.icons8.com/color/344/project-management.png"
            alt="icon"
          />
        </div>
        <div className="column col-10">
          <h3>Career summary</h3>

          <div className="timeline">
            <div className="timeline-item" id="timeline-example-1">
              <div className="timeline-left">
                <span className="timeline-icon"></span>
              </div>
              <div className="timeline-content">
                <>
                  <span className="text-primary">Jan 2022 - Now</span>
                  <br />
                  Currently working as a Software Engineer in&nbsp;
                  <span className="highlight">
                    <a
                      href="https://www.redhat.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Red Hat
                    </a>
                  </span>
                </>
              </div>
            </div>
            <div className="timeline-item" id="timeline-example-2">
              <div className="timeline-left">
                <span className="timeline-icon icon-lg">
                  <i className="icon icon-check"></i>
                </span>
              </div>
              <div className="timeline-content">
                <>
                  <span className="text-primary">July 2019 - Dec 2021</span>
                  <br />
                  Previously worked as a frontend developer in&nbsp;
                  <span className="highlight">
                    <a
                      href="https://www.northgateps.com/software-solutions/police-software-systems/connect-police-record-management-system/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CONNECT
                    </a>
                  </span>
                  &nbsp;project of&nbsp;
                  <span className="highlight">
                    <a
                      href="https://www.necsws.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      NEC software solutions (India)
                    </a>
                  </span>
                </>
              </div>
            </div>
            <div className="timeline-item" id="timeline-example-1">
              <div className="timeline-left">
                <span className="timeline-icon icon-lg">
                  <i className="icon icon-check"></i>
                </span>
              </div>
              <div className="timeline-content">
                <>
                <span className="text-primary">Jan 2018 - Oct 2018</span>
                  <br />
                  Worked with &nbsp;
                  <span className="highlight">
                    <a
                      href="http://techglobalsolution.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Tech Global Solution
                    </a>
                  </span>
                  &nbsp;as a Web developer.
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Career };
