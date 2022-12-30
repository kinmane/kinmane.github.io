const AboutPage = () => {
  return (
    <>
      <h3>Alguns Conhecimentos.</h3>
      <br />
      <br />
      <ul>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>HTML5</li>
        <li>CSS</li>
        <li>React</li>
        <li>React Native</li>
        <li>Angular</li>
        <li>Git</li>
        <li>Github</li>
        <li>Python</li>
        <li>CSharp</li>
      </ul>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
