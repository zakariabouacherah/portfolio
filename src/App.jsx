import "./App.css";
import Layout from "./layout/Layout";
import Hero from "./sections/Hero";

function App() {
  return (
    <>
      <Layout>
        <Hero />
        {/* <div className="text-black dark:text-neutral-300">Hello World</div> */}
      </Layout>
    </>
  );
}

export default App;
