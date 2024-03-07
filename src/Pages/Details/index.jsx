import { Container, Links, Content } from "./styles";

// COMPONENTS
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequatur natus explicabo aspernatur temporibus veniam facilis molestiae porro, est magni non dolor, nostrum ea, quis exercitationem reiciendis quasi quidem quam.
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="note" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
