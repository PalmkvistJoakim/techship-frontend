import styled from "styled-components";
function ProfilePage() {
  return (
    <>
      <Container>
        <PageHeader>
          <img src={require("../img/profilbild.jpg")} />
          <div>
            <h1>Nazih Hazime (22år)</h1>
            <p>hej</p>
          </div>
          <p>
            Har fått jobb, kan inte delta. Vill vara med nästa år istället.
            Detta är en kommentar!
          </p>
        </PageHeader>
        <MainPage>
          <Description>
            <h3>Beskrivning</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
              <br />
              <br />
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </p>
          </Description>
        </MainPage>
        <Main>
          <ContactDetails>
            <h4>E-post</h4>
            <p>nazih1700@gmail.com</p>
            <h4>Telefonnummer</h4>
            <p>071 234 54 67</p>
            <h4>Videoask-länk</h4>
            <p>videoask.com</p>
          </ContactDetails>
        </Main>
      </Container>
    </>
  );
}

const Container = styled.div`
  margin: 10%;
  margin-right: 0%;
  margin-left: 25%;
  margin-top: 3%;
  display: grid;
  grid-template-columns: 3fr 1.2fr;
  grid-template-rows: 0.5fr 1fr;
  grid-template-areas:
    "head   headRight"
    "main   right";
  height: 100vh;
`;

const PageHeader = styled.div`
  grid-area: head;
  position: relative;
  /* display: flex;
  flex-direction: column; */
  @media (max-width: 667px) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 20px;
    }

    img {
      display: none;
    }
  }
  img {
    position: absolute;
    background-color: blue;
    height: 90px;
    top: 20%;
    margin-right: 10px;
    justify-content: right;
  }

  h1 {
    text-align: left;
    margin-left: 16%;
    margin-top: 25px;
  }

  p {
    text-align: left;
    margin-left: 16%;
    margin-right: 35%;
    margin-top: 2%;
    margin-bottom: 2%;
    border: 2px solid #40daae;
    padding: 8px;
    justify-content: right;
  }
`;

//Kolla med Aladin varför det kommer en ny flex varje gång man lägger till något nytt
const Stage = styled.p``;

const MainPage = styled.div`
  grid-area: main;
  background-color: black;

  p {
    color: white;
  }
`;

const Description = styled.div`
  margin: 70px;

  h3 {
    margin-bottom: 10px;
  }
`;

const Main = styled.div`
  grid-area: right;

  h4 {
    margin-top: 10%;
    margin-bottom: 5px;
  }

  p {
    margin-bottom: 20%;
  }
`;

const ContactDetails = styled.div`
  margin: 20%;
  margin-top: 38%;
`;
export default ProfilePage;
