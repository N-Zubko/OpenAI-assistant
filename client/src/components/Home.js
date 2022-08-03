import logo from "../pictures/robot_logo.png";

function Home() {
  return (
    <>
      <section className="mx">
        <h1 className="title d-flex justify-content-center">Ask OpenAI app</h1>
        <h3 className="d-flex justify-content-center">
          your artificial intelligence-powered JavaScript programming assistant
        </h3>
        <p className="mt-3 ">
          Ask your coding question in the{" "}
          <a className="white-link" href="/question">
            Question
          </a>{" "}
          page or read previous answers in the{" "}
          <a className="white-link" href="/allResponses">
            All Responses
          </a>{" "}
          page.
        </p>
        <img src={logo} alt="robot_logotype" className="mt-2 logo" />
      </section>
    </>
  );
}

export default Home;
