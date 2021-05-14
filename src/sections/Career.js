const Career = () => {
    const listData = [
      <>
        Currently working as a frontend developer in&nbsp;
        <span className="highlight">
          <a
            href="https://www.northgateps.com/software-solutions/police-software-systems/connect-police-record-management-system/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CONNECT
          </a>
          .
        </span>
      </>,
      <>
        Previously worked with &nbsp;
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
    ];

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
            <ul>
                {listData.map(list => {
                    return <li key={listData.indexOf(list)}>{list}</li>;
                })}
            </ul>
          </div>
        </div>
      </section>
    );
  };
  
  export { Career };
  