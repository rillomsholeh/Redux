import { Container } from "react-bootstrap";
import { useNavigate } from "react-router";

function About() {
    const navigate = useNavigate();

    const handletoLinkHome = () => {
        navigate('../Home')
    }

    const handletoLinkProfile = () => {
        navigate('../Profile')
    }

  return (
    <Container className="text-center">
      <p className="h1">About Us</p>
      <p>
        Maecenas bibendum vel tortor non congue. Maecenas at sodales turpis, id
        maximus odio. Donec aliquet elementum mauris, vel semper tortor ultrices
        a. Cras pulvinar tristique diam, vel lobortis lacus cursus quis. Morbi
        ante nibh, laoreet tincidunt fringilla non, fringilla ac ligula. Duis
        libero orci, rhoncus quis ultricies et, euismod sit amet purus. In
        mollis lectus nunc, vel tempus lorem lobortis id. Nullam maximus elit
        quis nibh gravida, ut hendrerit felis fringilla. Proin at aliquam
        tortor.
      </p>

      <button onClick={handletoLinkHome}>Home</button>
      <button onClick={handletoLinkProfile}>Profile</button>
          

    </Container>
  );
}

export default About;